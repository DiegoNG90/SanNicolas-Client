import { Col,Card, Button } from 'react-bootstrap';
import { useAxios } from '../../Hooks/useAxios';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

import ErrorMessage from '../../Components/Layout/ErrorMessage';
import ItemSlider from './ItemSlider';

const Product = ({...product}) => {
  // Traer los productos con las fotos por id
  const {
    data,
    loading,
    error,
  } = useAxios(`/products/${product.id}`);
  console.log('photosRelated from Product', data.photosRelated);

  if(loading) return "";
  if(error) return <ErrorMessage message="el server" />

  return (
    <Col className="mt-4">
      <Card style={{ width: '18rem' }}>
        <ItemSlider photos={data.photosRelated} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>{product.descripcion}</Card.Text>
          <Card.Text>Precio ${product.decimales}</Card.Text>
          <Button variant="primary">Ver producto</Button>
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
    precio: PropTypes.string.isRequired,
    decimales: PropTypes.string.isRequired,
    moneda: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    es_nuevo: PropTypes.bool.isRequired,
    fecha_de_alta: PropTypes.string.isRequired,
  }),
};

export default Product;