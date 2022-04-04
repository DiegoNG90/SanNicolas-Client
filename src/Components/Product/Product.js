import { Col, Card, Button } from 'react-bootstrap';
import { useAxios } from '../../Hooks/useAxios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ErrorMessage from '../../Components/Layout/ErrorMessage';
import ItemSlider from './ItemSlider';

const Product = ({ id, nombre, descripcion, decimales, moneda }) => {
  const { data, loading, error } = useAxios(`/products/${id}`);

  if (loading) return <span data-testid="loading"></span>;
  if (error) return <ErrorMessage data-testid="error" message="el server" />;

  return (
    <Col className="mt-4" data-testid="resolved">
      <Card style={{ width: '18rem', height: '100%', margin: '0 auto' }}>
        <ItemSlider photos={data.photosRelated} height="286px" />
        <Card.Body className="d-flex flex-column justify-content-end">
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>
            Precio ${decimales} {moneda}
          </Card.Text>
          <Link className="text-center m-2" to={`/product/${id}`}>
            <Button variant="primary">Ver producto</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    // precio: PropTypes.string.isRequired,
    decimales: PropTypes.string.isRequired,
    moneda: PropTypes.string.isRequired,
    // estado: PropTypes.string.isRequired,
    // es_nuevo: PropTypes.bool.isRequired,
    // fecha_de_alta: PropTypes.string.isRequired,
  }),
};

export default Product;
