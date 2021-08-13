import { Navbar as NavBootstrap, Container, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo';

const Navbar = () => {
  
  return (
    <NavBootstrap bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <NavLink to={'/'}> { /*activeClassName="selected" */}
          <Logo />
        </NavLink>
        <Form className="d-flex justify-content-between">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="ml-xxl-2" variant="outline-info">
            Search
          </Button>
        </Form>
        <NavLink to={'/login'}> { /*activeClassName="selected" */}
          <Button variant="success">Admin</Button>
        </NavLink>
      </Container>
    </NavBootstrap>
  );
};

export default Navbar;
