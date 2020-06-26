import React, { Component } from 'react';
import './chat.css';
import { Form, Button } from 'react-bootstrap';

class Chat extends Component {
  constructor(){
    super();
    this.state = {
      messages: [
        {
          id: 1,
          author: "Aracely Marentes",
          message: "Hola!. ¿Cómo estas?",
          time: "11:00"
        },
        {
          id: 2,
          author: "Customer",
          message: "Hola!. Estoy bien, gracias por preguntar ¿Y tú",
          time: "11:01"
        },
        {
          id: 3,
          author: "Aracely Marentes",
          message: "Me alegra, ¿En qué te puedo ayudar",
          time: "11:02"
        },
        {
          id: 4,
          author: "Customer",
          message: "Gracias, quiero saber qué servicios presta la empresa",
          time: "11:03"
        }
    ]
    }
  }
  render(){

    return (
      <div className="col-12 col-sm-8 mt-3">
        <div className="containerChat" responsive="sm">
        <div className="row">
          <div className="containerChat col-sm-12">
            <p>Hello. How are you today?</p>
            <span className="time-right">11:00</span>
          </div>
          
          <div className="container darker col-sm-12">
            <p>Hey! I'm fine. Thanks for asking!</p>
            <span className="time-left">11:01</span>
          </div> 
          
          <div className="containerChat col-sm-12">
            <p>Sweet! So, what do you wanna do today?</p>
            <span className="time-right">11:02</span>
          </div> 
          
          <div className="container darker col-sm-12">
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
        </div>
       </div> 
       <div className="write">
         <Form.Group controlId="formBasicPassword">
           <Form.Control type="type" placeholder="Escribe tu mensaje" />
          </Form.Group>
          <Button variant="success" type="submit">Enviar</Button>
       </div>  
      </div>
      
    );
  }
}


export default Chat;