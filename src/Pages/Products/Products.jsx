import { useState, useEffect } from "react";
import Product from "./Product";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchProducts } from "../../Apis/productFetch";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productData = await fetchProducts();
        setProducts(productData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container fluid>
      <h2 className="text-center mb-4">Products</h2>
      <Row>
        <Col>
          <CardDeck>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
