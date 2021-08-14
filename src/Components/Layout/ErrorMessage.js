import {Alert} from 'react-bootstrap';
import PropTypes from 'prop-types'

const ErrorMessage = ({message}) => {
    return (
      <Alert key={new Date().getTime()} variant="danger">
        Ha ocurrido un error en {message}
      </Alert>
    );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorMessage;
