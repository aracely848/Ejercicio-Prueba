import React from 'react';
import { Jumbotron, Container} from 'react-bootstrap';
import './navbar.css';

function Navbar() {
  return (  
    <Jumbotron className="col-12 d-flex justify-content-center align-items-center my-header">
        <Container>
          <h1>Bienvenido</h1>
          <p>En está aplición vas a encontrar opciones interesantes para tu día a día.</p>
        </Container>
      </Jumbotron>
  
  );
}

export default Navbar;