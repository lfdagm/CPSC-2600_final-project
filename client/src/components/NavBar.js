import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

function NavBar(props) {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.replace("http://localhost:3000/");
  }
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home"><img
              src={require("./../img/logo_transparent.png")}
              width="100%"
              height="60"
              className="d-inline-block align-top"
              alt="VanComer Logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#documentation">Documentation</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {localStorage.getItem('user') != null?
          <>
            <Button 
          variant="outline-primary" 
          onClick={handleLogout}>
            Log out
          </Button>
          </>
          : 
          <>
          <Button 
          variant="outline-primary" 
          onClick={props.handleRoleShow}>
            Sign Up
          </Button>&nbsp;
          <Button 
          variant="outline-primary" 
          onClick={props.handleLogInShow}>
            Login
          </Button>
          </>
          }
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;