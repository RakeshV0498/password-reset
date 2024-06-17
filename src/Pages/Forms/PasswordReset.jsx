import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaLock } from "react-icons/fa";

function PasswordReset() {
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const [validationError, setValidationError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.password !== passwords.confirmPassword) {
      setValidationError("Passwords do not match");
    } else {
      // Passwords match, perform reset action here
      console.log("Password reset");
      // Reset form and validation
      setPasswords({
        password: "",
        confirmPassword: "",
      });
      setValidationError("");
    }
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FaLock />
            </span>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={passwords.password}
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FaLock />
            </span>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {validationError && <p className="text-danger">{validationError}</p>}
        </Form.Group>
        <Button variant="primary" type="submit">
          Reset
        </Button>
      </Form>
    </div>
  );
}

export default PasswordReset;
