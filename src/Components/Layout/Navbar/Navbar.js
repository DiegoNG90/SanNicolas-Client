import { Navbar as NavBootstrap, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../Hooks/useAuth';

import Logo from '../../Logo';
import SearchBar from './SearchBar'

const Navbar = () => {
  const { state, logout } = useAuth();
  const {isLoggedIn} = state

  console.log("isLoggedIn desde Navbar", isLoggedIn)

  return (
    <NavBootstrap bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <NavLink to={'/'}>
          <Logo />
        </NavLink>

        <SearchBar />

        {!isLoggedIn ?
        <NavLink to={'/login'}>
          <Button variant="success">Admin</Button>
        </NavLink>
       :
        <Button
          variant="danger"
          onClick={logout}
        >
          Logout
        </Button>}

      </Container>
    </NavBootstrap>
  );
};

export default Navbar;
