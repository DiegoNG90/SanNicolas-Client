import { Container, Form, Button } from 'react-bootstrap';
import { initialValues, validationSchema } from './schemas';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../Hooks/useAuth';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../Components/Layout/Header';

const Login = () => {
  const [wrongPassword, setWrongPassword] = useState(false);
  console.log('WrongPassword desde Login', wrongPassword);
  const { login } = useAuth();
  const history = useHistory();

  const handleLogin = async ({ username, password }) => {
    const jwt = await login({ username, password });
    console.log('jwt desde handleLogin LOGIN', jwt);
    if (!jwt) {
      return setWrongPassword(true);
    } else {
      setWrongPassword(false);
      return history.push('/dashboard');
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: ({ username, password }) => {
      handleLogin({ username, password });
    },
  });

  return (
    <>
      <Header title="Admin LOGIN" />
      <Button className="m-4" variant="info" onClick={() => history.push('/')}>
        ← A Home
      </Button>
      <Container className="w-50 pt-5">
        <h2>Admin Authentication</h2>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group
            className="mb-3 justify-content-start"
            controlId="formBasicEmail"
          >
            <Form.Label>Admin username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter admin username"
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
            {formik?.errors?.username && (
              <Form.Text className="text-danger">
                {formik.errors.username}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
            {formik?.errors?.password && (
              <Form.Text className="text-danger">
                {formik.errors.password}
              </Form.Text>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        {wrongPassword && (
          <span className="text-danger">
            <b> Admin user o contraseña incorrectas </b>
          </span>
        )}
      </Container>
    </>
  );
};

export default Login;
