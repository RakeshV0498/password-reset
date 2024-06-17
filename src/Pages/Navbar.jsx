import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="path/to/your/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {" My Website"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant="outline-primary" className="mr-2">
              <FaSignInAlt className="mr-1" />
              Login
            </Button>
            <Button variant="primary">
              <FaUserPlus className="mr-1" />
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
