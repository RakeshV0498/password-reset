import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../App.css";

function Product({ product }) {
  return (
    <Card className="mb-3">
      <Row>
        <Col>
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            width="300px"
            height="300px"
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Card.Text>Category: {product.category}</Card.Text>
            <Card.Text>
              Rating: {product.rating.rate} ({product.rating.count} reviews){" "}
              <FaStar />
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

// Add props validation

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Product;
