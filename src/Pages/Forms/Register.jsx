import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userSignup } from "../../Apis/register";

function Register() {
  const initialData = {
    userName: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [userData, setUserData] = useState(initialData);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await userSignup(userData);
      if (response && response.msg) {
        setMessage(response.msg);
        setIsError(false);
        navigate("/login");
        setUserData({ ...initialData });
      } else {
        throw new Error("Unknown error occured");
      }
    } catch (error) {
      setMessage("Error registering user");
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Register</h2>
        {message && (
          <div
            className={`alert ${isError ? "alert-danger" : "alert-success"}`}
            role="alert"
          >
            {message}
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <FaUser />
              </span>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="userName"
                value={userData.userName}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <FaLock />
              </span>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Register;
