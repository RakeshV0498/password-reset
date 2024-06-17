import { Navbar, Nav, Button, Container } from "react-bootstrap";
import logoIcon from "../assets/studenticon.svg";

const HomeNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoIcon}
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
              Login
            </Button>
            <Button variant="primary">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
