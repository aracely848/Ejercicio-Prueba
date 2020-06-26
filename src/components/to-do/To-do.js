import React, {useState} from 'react';
import { Card, Button, Form, CardColumns, Modal} from 'react-bootstrap';
import './todo.css';

function ToDo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="col-12 col-sm-8">
      <CardColumns className="row mt-5 mb-5">
        <div className="col-3 d-flex justify-content-center align-items-center" ><Form.Check className="measure" type="checkbox" /></div>        
        <div className="col-6 align-self-center text-center"><Card.Title>Tarea 1</Card.Title>
          <Card.Text>
            Levantarse temprano.
          </Card.Text></div>        
        <div className="col-3 d-flex justify-content-center align-items-center"><Button variant="danger"><i className="fa fa-times-circle fa-lg" ></i></Button>
        </div>          
      </CardColumns>

      <CardColumns className="row mb-5">
        <div className="col-3 d-flex justify-content-center align-items-center"><Form.Check className="measure"  type="checkbox"/></div>        
        <div className="col-6 align-self-center text-center"><Card.Title>Tarea 2</Card.Title>
          <Card.Text>
            Preparar la comida.
          </Card.Text></div>        
        <div className="col-3 d-flex justify-content-center align-items-center"><Button variant="danger"><i className="fa fa-times-circle fa-lg" ></i></Button></div>          
      </CardColumns>
      
      <CardColumns className="row bg-primary text-white m-2">
        <div className="col-3 d-flex justify-content-center align-items-center offset-1"><Button onClick={handleShow}><i className="fa fa-plus fa-lg" ></i></Button></div>        
        <div className="col-6 d-flex justify-content-center align-items-center"><Card.Title>Nueva tarea</Card.Title>
          </div>         
      </CardColumns>      

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Nombre de tarea</Form.Label>
              <Form.Control type="text" placeholder="Escribe el nombre de la tarea" />
            </Form.Group>
            <Form.Group controlId="formGroupDescription">
              <Form.Label>Descripción de la tarea</Form.Label>
              <Form.Control as="textarea" rows="3"/>
            </Form.Group>
            <Form.Row>
              <Form.Group className="col-12 col-sm-6" controlId="formGridLatitude">
                <Form.Label>Latitud</Form.Label>
                <Form.Control type="number" placeholder="Escribe la latitud" />
              </Form.Group>
              <Form.Group className="col-12 col-sm-6"controlId="formGridLongitude">
                <Form.Label>Longitud</Form.Label>
                <Form.Control type="number" placeholder="Escribe la longitud" />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ToDo;