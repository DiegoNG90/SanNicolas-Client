import { Col, Row } from 'react-bootstrap';

import ItemSlider from '../../../Components/Product/ItemSlider'

const ProductDetail = ({product, photos}) => {
    console.log("photos form Product Detail :>", photos)
    return (
      <>
        <Row>
          <Col sm={12} md={6}>
            <ItemSlider photos={photos} height="450px"/>
          </Col>
          <Col sm={12} md={6}>
              Aca toda la data del producto, quizás un COUNTER y un CHECKOUT DISABLED (coming soon...) o algo asi
          </Col>
        </Row>
      </>
    );
}

export default ProductDetail;
