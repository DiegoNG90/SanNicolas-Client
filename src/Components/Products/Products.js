import {Container, Row} from 'react-bootstrap'
import PropTypes from 'prop-types'
import Product from '../Product'

const Products = ({data}) => {
    return (
        <Container fluid="md">
            <Row className="justify-content-between">
                {data?.map(product => {
                    return <Product key={product.id} {...product} />;
                })}
            </Row>
        </Container>

    );
}

Products.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Products;