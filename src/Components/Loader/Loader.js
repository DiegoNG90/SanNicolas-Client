import BounceLoader from 'react-spinners/BounceLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'green',
};

const Loading = () => <BounceLoader color="green" css={override} size={250} />;

export default Loading;
