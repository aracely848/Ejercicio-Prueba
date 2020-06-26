import React from 'react';
import { Form, Button} from 'react-bootstrap';


function Login() {
  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <Form >
      <h1 className="mb-5">Sign In</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label><h6>Correo electrónico</h6></Form.Label>
          <Form.Control
              type="email"
              placeholder="Correo electrónico"
              aria-describedby="inputGroupPrepend"
              required
            />
          <Form.Text className="text-muted">
            Coloca un correo válido.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label><h6>Contraseña</h6></Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>

        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Recordar clave" />
        </Form.Group>
      
        <Button className="col-12" variant="primary" type="submit">
          Ingresar
       </Button>       
        <a className="col-12 align-item-left" href="link">¿Olvido su clave?</a>
       
      </Form>
    </div>
  );
}

export default Login;
