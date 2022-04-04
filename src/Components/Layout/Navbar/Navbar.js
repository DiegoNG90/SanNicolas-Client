import { Navbar as NavBootstrap, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Hooks/useAuth';

import Logo from '../../Logo';
import SearchBar from './SearchBar';

const Navbar = ({ setCharacter }) => {
  const { state, logout } = useAuth();
  const { isLoggedIn } = state;

  return (
    <NavBootstrap bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container fluid className="d-flex justify-content-between">
        {!isLoggedIn ? (
          <Link to={'/'}>
            <Logo />
          </Link>
        ) : (
          <Link to={'/dashboard'}>
            <Logo />
          </Link>
        )}

        {!isLoggedIn && <SearchBar setCharacter={setCharacter} />}

        {!isLoggedIn ? (
          <Link to={'/login'}>
            <Button variant="success">Admin</Button>
          </Link>
        ) : (
          <Button variant="danger" onClick={logout}>
            {/* <Link to={'/'} style={{textDecoration: "none", color: "white"}}> */}
            Logout
            {/* </Link> */}
          </Button>
        )}
      </Container>
    </NavBootstrap>
  );
};

export default Navbar;
