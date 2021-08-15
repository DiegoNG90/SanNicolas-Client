import BounceLoader from 'react-spinners/BounceLoader';
import {Container} from 'react-bootstrap';
import './style.css'

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  borderColor: 'green',
};

const Loading = () =>{
  return(
    <Container className="loader__size">
      <BounceLoader color="green" css={override} size={250} />;
    </Container>
  )
}

export default Loading;
