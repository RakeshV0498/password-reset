import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

function Product({ product }) {
  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Img variant="top" src={product.image} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Card.Text>Description: {product.description}</Card.Text>
        <Card.Text>Category: {product.category}</Card.Text>
        <Card.Text>
          Rating: {product.rating.rate} ({product.rating.count} reviews){" "}
          <FaStar />
        </Card.Text>
      </Card.Body>
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
