import { Container, Row, Col, Image } from "react-bootstrap";
import { FaCheckCircle, FaStar } from "react-icons/fa";

const Home = () => {
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
        </Col>
        <Col md={6}>
          <Image src="https://via.placeholder.com/500" alt="Shopping" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
