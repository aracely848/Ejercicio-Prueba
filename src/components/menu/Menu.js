import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import './menu.css';

function Menu() {
  return (    
    <div className="col-12 col-sm-4 menu">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Brand as={Link} to='/home'></Navbar.Brand>
        <Nav className="mr-auto flex-column">
          <Nav.Link as={NavLink} to='/home/gallery'>Gallery</Nav.Link>
          <Nav.Link as={NavLink} to='/home/todo'>Todo List</Nav.Link>
          <Nav.Link as={NavLink} to='/home/map'>Map</Nav.Link>
          <Nav.Link as={NavLink} to='/home/chat'>Chat</Nav.Link>         
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;