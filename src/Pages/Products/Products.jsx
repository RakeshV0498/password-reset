import { useState, useEffect } from "react";
import Product from "./Product";
import { fetchProducts } from "../../Apis/productFetch";
import { Col, Container, Row } from "react-bootstrap";

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
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
        {products.map((product) => (
          <Col key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
