import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaEnvelope } from "react-icons/fa";
import Container from "react-bootstrap/Container";

function ForgotPassword() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Forgot Password</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
              <Form.Control type="email" placeholder="Enter your email" />
            </div>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default ForgotPassword;
