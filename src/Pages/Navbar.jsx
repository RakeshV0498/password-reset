import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import shopIcon from "../assets/store-shopper.svg";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={shopIcon}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt="Logo"
          />
          Flipzone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <Nav className="ml-auto gap-3">
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
}

export default MyNavbar;
