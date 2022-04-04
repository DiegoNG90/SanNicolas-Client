import {
  Col,
  Row,
  Badge,
  Button,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

import ItemSlider from '../../../Components/Product/ItemSlider';

const ProductDetail = ({ product, photos }) => {
  const selectColor = () => {
    switch (product.estado) {
      case 'borrador':
        return 'bg-info';
      case 'publicado':
        return 'bg-success';
      case 'eliminado':
        return 'bg-danger';
      default:
        break;
    }
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Coming soon!
    </Tooltip>
  );
  return (
    <>
      <Row>
        <h1>
          <Badge className={selectColor()} bg="success">
            {product.estado.toUpperCase()}
          </Badge>
        </h1>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <ItemSlider photos={photos} height="450px" />
        </Col>
        <Col
          sm={12}
          md={6}
          className="d-flex border border-secondary border-end-0 flex-column justify-content-center align-items-center"
        >
          <Col sm={6} className="">
            <h2 className="font-monospace text-decoration-underline mb-4">
              {product.nombre}
            </h2>
            <p>
              <em> {product.descripcion} </em>
            </p>
            <p>Precio: ${product.decimales}</p>
            <p>Fecha de publicacion: {product.fecha_de_alta} </p>
            <p>Categoria: {product.categoria} </p>
            <p>Estado del producto: {product.es_nuevo ? 'Nuevo' : 'Usado'}</p>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Button variant="warning">Comprar</Button>
            </OverlayTrigger>
          </Col>
        </Col>
      </Row>
    </>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetail;
