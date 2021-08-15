import {Container, Row} from 'react-bootstrap'
import PropTypes from 'prop-types'
import Product from '../Product'

import { useEffect, useState } from 'react';

const Products = ({data, character}) => {
    const [filteredProducts, setFilteredProducts] = useState("")


    console.log(
      'Data from Product :>',
      data,
      'Character from Products :>',
      character,
      "FilteredProducts :>", filteredProducts
    );

    useEffect(() => {
      const productsFilteredByCategory = data.filter((product) =>
        product.categoria.includes(character.toLowerCase())
      );
      productsFilteredByCategory
        ? setFilteredProducts(productsFilteredByCategory)
        : setFilteredProducts(null);

    }, [character, data]);

    if (filteredProducts.length === 0)
      return <span>No se encontraron productos por esa palabra</span>;
    if(character !== ""){
        return (
          <Container fluid="md">
            <Row className="justify-content-between">
              {filteredProducts?.map((product) => {
                return <Product key={product.id} {...product} />;
              })}
            </Row>
          </Container>
        );
    }
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