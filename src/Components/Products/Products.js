import {Container, Row} from 'react-bootstrap'

import Product from '../Product'

const Products = () => {
    return (
        <Container fluid="md">
            <Row className="justify-content-center">
                <Product />
            </Row>
        </Container>

    );
}

export default Products
;