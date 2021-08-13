import {Col,Card, Button} from 'react-bootstrap'
import { useAxios } from '../../Hooks/useAxios';

import ErrorMessage from '../../Components/Layout/ErrorMessage';
import ItemSlider from './ItemSlider'

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

export default Product;