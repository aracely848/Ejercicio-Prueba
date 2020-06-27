import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import auth from '../../helpers/auth';
import './login.css';


const Login = () => {
  const history = useHistory();
  const userCredentials = {
    email: "",
    password: ""
  }

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("userInfo")) {
      history.push('/home')
    }
  });

  const handlerClick = async () => {
    try {
      const signin = await auth.SignIn(userCredentials.email, userCredentials.password);
      sessionStorage.setItem("userInfo", JSON.stringify(signin.user));
      history.push('/home')
    } catch (error) {
      console.error("Sign in failure", error);
      setErrorMsg("Usuario o contraseña invalida");
    }

  }
  return (<div className="col-12 d-flex justify-content-center align-items-center">
    <Form>
      <h1 className="mb-5">Sign In</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label><h6>Correo electrónico</h6></Form.Label>
        <Form.Control
          type="email"
          placeholder="Correo electrónico"
          aria-describedby="inputGroupPrepend"
          onChange={(event) => { userCredentials.email = event.target.value }}
          required
        />
        <Form.Text className="text-muted">
          Coloca un correo válido.
          </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label><h6>Contraseña</h6></Form.Label>
        <Form.Control type="password" placeholder="Contraseña" onChange={(event) => { userCredentials.password = event.target.value }} />
      </Form.Group>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Recordar clave" />
      </Form.Group>

      <Button className="col-12" variant="primary" type="button" onClick={handlerClick}>
        Ingresar
       </Button>
      <a className="col-12 align-item-left" href="link">¿Olvido su clave?</a>
      <div className="msg-container">
        <a className="col-12 align-item-left login-error-msg" href="link">{errorMsg}</a>
      </div>

    </Form>
  </div>
  );
}


export default Login;
