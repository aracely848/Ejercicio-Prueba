import React, { Component } from 'react';
import { Card, Button, Form, CardColumns, Modal } from 'react-bootstrap';
import Api from "../../service/api-consumer";
import firebase from "../../config/firebase";
import './todo.css';

export class ToDo extends Component {

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('task');
    this.unsubscribe = null;
    this.state = {
      tasks: [],
      show: false,
      newTask: {
        title: "",
        description: "",
        location: {
          latitude: 0,
          longitude: 0
        },
        done: 0
      }
    }
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  onCollectionUpdate = (querySnapshot) => {
    const tasks = [];
    querySnapshot.forEach((doc) => {
      const { title, description, location, done } = doc.data();
      tasks.push({
        id: doc.id,
        title,
        description,
        location,
        done
      });
    });
    this.setState({
      tasks
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (<div className="col-12 col-sm-8">
      {this.state.tasks.map((task) => {
        return <CardColumns className="row mt-5 mb-5">
          <div className="col-3 d-flex justify-content-center align-items-center" >
            <Form.Check
              checked={task.done}
              className="measure"
              type="checkbox" onChange={() => {
                task.done = task.done ? 0 : 1;
                Api.UpdateTask(task)
              }}
            />
          </div>
          <div className="col-6 align-self-center text-center">
            <Card.Title>
              {task.title}
            </Card.Title>
            <Card.Text>
              {task.description}
            </Card.Text>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center">
            <Button variant="danger" onClick={() => { Api.DeleteTask(task.id) }}>
              <i className="fa fa-times-circle fa-lg" ></i>
            </Button>
          </div>
        </CardColumns>
      })
      }

      <CardColumns
        onClick={() => { this.setState({ show: true }) }}
        className="row bg-primary text-white m-2">
        <div className="col-3 d-flex justify-content-center align-items-center offset-1">
          <Button onClick={() => { this.setState({ show: true }) }}>
            <i className="fa fa-plus fa-lg" ></i>
          </Button>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <strong>Nueva tarea</strong>
        </div>
      </CardColumns>

      <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Nombre de tarea</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe el nombre de la tarea"
                onChange={(event) => { this.state.newTask.title = event.target.value }}
              />
            </Form.Group>
            <Form.Group controlId="formGroupDescription">
              <Form.Label>Descripción de la tarea</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                onChange={(event) => { this.state.newTask.description = event.target.value }}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group className="col-12 col-sm-6" controlId="formGridLatitude">
                <Form.Label>Latitud</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Escribe la latitud"
                  onChange={(event) => { this.state.newTask.location.latitude = Number(event.target.value) }}
                />
              </Form.Group>
              <Form.Group className="col-12 col-sm-6" controlId="formGridLongitude">
                <Form.Label>Longitud</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Escribe la longitud"
                  onChange={(event) => { this.state.newTask.location.longitude = Number(event.target.value) }}
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={async () => {
            await Api.CreateTask(this.state.newTask);
            this.handleClose();
          }}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }
}

export default ToDo;