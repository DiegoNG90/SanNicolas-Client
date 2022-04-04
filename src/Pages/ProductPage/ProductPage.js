import { useParams } from 'react-router-dom';
import { useAxios } from '../../Hooks/useAxios';
import { Container } from 'react-bootstrap';

import Navbar from '../../Components/Layout/Navbar/Navbar';
import Loader from '../../Components/Loader';
import ErrorMessage from '../../Components/Layout/ErrorMessage';
import ProductDetail from './ProductDetail';

const ProductPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useAxios(`/products/${id}`);
  const { results, photosRelated } = data;

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message="en ProductPage" />;

  return (
    <>
      <Navbar />
      <Container fluid>
        <ProductDetail product={results} photos={photosRelated} />
      </Container>
    </>
  );
};

export default ProductPage;
