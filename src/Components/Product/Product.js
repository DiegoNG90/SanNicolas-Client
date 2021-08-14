import { Col,Card, Button } from 'react-bootstrap';
import { useAxios } from '../../Hooks/useAxios';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import ErrorMessage from '../../Components/Layout/ErrorMessage';
import ItemSlider from './ItemSlider';

const Product = ({id, nombre, descripcion, decimales, moneda}) => {
  // Traer los productos con las fotos por id
  const {
    data,
    loading,
    error,
  } = useAxios(`/products/${id}`);
  console.log('photosRelated from Product', data.photosRelated);

  if(loading) return "";
  if(error) return <ErrorMessage message="el server" />

  return (
    <Col className="mt-4">
      <Card style={{ width: '18rem', height: '100%' }}>
        <ItemSlider photos={data.photosRelated} />
        <Card.Body className="d-flex flex-column justify-content-end">
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>
            Precio ${decimales} {moneda}
          </Card.Text>
          <Link to={`/:${id}`}>
            <Button variant="primary">Ver producto</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

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