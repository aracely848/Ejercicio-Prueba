import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import firebase, { db } from "../../config/firebase";
import { animateScroll } from "react-scroll";
import './chat.css';

(function () {
  if (typeof Object.defineProperty === 'function') {
    try { Object.defineProperty(Array.prototype, 'sortBy', { value: sb }); } catch (e) { }
  }
  if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;

  function sb(f) {
    for (var i = this.length; i;) {
      var o = this[--i];
      this[i] = [].concat(f.call(o, o, i), o);
    }
    this.sort(function (a, b) {
      for (var i = 0, len = a.length; i < len; ++i) {
        if (a[i] != b[i]) return a[i] < b[i] ? -1 : 1;
      }
      return 0;
    });
    for (var i = this.length; i;) {
      this[--i] = this[i][this[i].length - 1];
    }
    return this;
  }
})();

class Chat extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('chats');
    this.unsubscribe = null;
    this.state = {
      messages: [],
      currentMsg: ""
    }
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      const { message, time, date } = doc.data();
      messages.push({
        message,
        time,
        date
      });
    });
    const sortedMessages = messages.sortBy(function (o) { return new Date(o.date) });
    this.setState({
      messages: sortedMessages
    });
  }

  sendMessage = async (msg) => {
    try {
      const currentDate = new Date();
      const formatTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
      await db.collection("chats").add({
        message: msg,
        time: formatTime,
        date: (new Date()).toGMTString()
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await this.sendMessage(`${event.target.value}`);
      this.setState({ currentMsg: "" })
    }
  }

  scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "chat-messages"
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="col-12 col-sm-8 mt-3">
        <div className="containerChat" responsive="sm">
          <div className="row messages-chat-container" id="chat-messages">
            {this.state.messages.map((item, index) =>
              <div className={`containerChat col-sm-12${index % 2 ? " darker" : ""}`}>
                <p>{item.message}</p>
                <span className="time-right">{item.time}</span>
              </div>
            )}
          </div>
        </div>
        <div className="write">
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="type"
              value={this.state.currentMsg}
              onChange={
                (event) => {
                  this.setState({ currentMsg: event.target.value })
                }
              }
              placeholder="Escribe tu mensaje"
              onKeyDown={this.handleKeyDown}
            />
          </Form.Group>
          <Button variant="success" type="button" onClick={() => { this.sendMessage() }}>Enviar</Button>
        </div>
      </div>

    );
  }
}


export default Chat;