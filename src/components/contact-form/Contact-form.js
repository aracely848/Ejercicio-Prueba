import React from 'react';
import { Form, InputGroup, Button} from 'react-bootstrap';
import './contact-form.css';

function ContactForm() {

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

 
  };

  return (
    <div className="col-12 col-sm-8 form">
      <h2 className="col-12 col-sm-6" >Formulario de Contacto</h2>
      <Form noValidate onSubmit={handleSubmit} className="col-sm-12">
      <Form.Row>
        <Form.Group className="col-12 col-sm-6" controlId="validationCustom01">
          <Form.Label>Nombres</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombres completos"
          />
        </Form.Group>

        <Form.Group  className="col-12 col-sm-6" controlId="validationCustom02">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellidos completos"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>  
        <Form.Group className="col-12 col-sm-6" controlId="validationCustomUsername">
          <Form.Label>Correo electrónico</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="email"
              placeholder="Correo"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Escribe un correo válido.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className="col-12 col-sm-6" controlId="validationCustom04">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="number" placeholder="Teléfono" required />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group className="col-12 col-sm-6" controlId="validationCustom03">
          <Form.Label>País</Form.Label>
          <Form.Control type="text" placeholder="País" required />
        </Form.Group>
        <Form.Group className="col-12 col-sm-6" controlId="validationCustom03">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Ciudad" required />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group className="col-12 col-sm-6" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comentarios</Form.Label>
          <Form.Control as="textarea" rows="3" />
          </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Check
          required
          label="Acepta términos y condiciones"
        />
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
    </div>
  );
}

export default ContactForm;