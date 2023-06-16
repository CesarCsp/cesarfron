import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBarMenu() {
  return (
    <Navbar className='navbar333' style={{ backgroundColor: 'rgb(12,77,81)' }} expand="lg">
      <Container>
        <Navbar.Brand style={{ color: 'rgb(255,255,255)' }} as={Link} to="/">Parqueo sdfasd FCyT </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: 'rgb(255,255,255)' }} as={Link} to="/MenuPrincipal/Convocatoria">Convocatoria</Nav.Link>
            {/* Resto de tus enlaces */}
          </Nav>
          <Navbar.Text>
            <Link style={{ color: 'rgb(255,255,255)' }} to="/RegistroCuenta">Registrarse</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link style={{ color: 'rgb(255,255,255)', marginLeft:"20px" }} to="/Login">Iniciar Sesion</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;