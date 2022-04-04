import { useParams } from 'react-router-dom';
import { useAxios } from '../../Hooks/useAxios';
import { Container } from 'react-bootstrap';

import Navbar from '../../Components/Layout/Navbar/Navbar';
import Loader from '../../Components/Loader';
import ErrorMessage from '../../Components/Layout/ErrorMessage';
import ProductDetail from './ProductDetail';
import Header from '../../Components/Layout/Header';

const ProductPage = () => {
  const { id } = useParams();
  console.log('id desde ProductPage :>', id);
  const { data, loading, error } = useAxios(`/products/${id}`);
  const { results, photosRelated } = data;
  console.log('results :>', results, 'photosRelated:', photosRelated);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message="en ProductPage" />;

  return (
    <>
      <Header title={`${results.nombre}`} />
      <Navbar />
      <Container fluid>
        <ProductDetail product={results} photos={photosRelated} />
      </Container>
    </>
  );
};

export default ProductPage;
