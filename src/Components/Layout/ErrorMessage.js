import {Alert} from 'react-bootstrap';

const ErrorMessage = ({message}) => {
    return (
      <Alert key={new Date().getTime()} variant="danger">
        Ha ocurrido un error en {message}
      </Alert>
    );
}

export default ErrorMessage;
