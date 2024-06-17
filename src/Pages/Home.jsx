import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaArrowRight, FaCheckCircle, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/FlipZone.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>Welcome to Our Product Website</h1>
          <p>
            Discover the best products at unbeatable prices. Our product range
            is carefully selected to ensure top quality and customer
            satisfaction.
          </p>
          <p>
            <FaCheckCircle /> High Quality Products
          </p>
          <p>
            <FaStar /> Customer Satisfaction Guaranteed
          </p>
          <Button
            variant="primary"
            size="lg"
            className="mt-3"
            onClick={() => {
              navigate("/products");
            }}
          >
            View Products <FaArrowRight className="ml-2" />
          </Button>
        </Col>
        <Col md={6}>
          <Image src={heroImg} alt="Shopping" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
