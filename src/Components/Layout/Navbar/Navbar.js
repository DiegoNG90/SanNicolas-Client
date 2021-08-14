import { Navbar as NavBootstrap, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Logo from '../../Logo';
import SearchBar from './SearchBar'

const Navbar = () => {

  return (
    <NavBootstrap bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>

        <NavLink to={'/'}>
          <Logo />
        </NavLink>

        < SearchBar />

        <NavLink to={'/login'}>
          <Button variant="success">Admin</Button>
        </NavLink>

      </Container>
    </NavBootstrap>
  );
};

export default Navbar;
