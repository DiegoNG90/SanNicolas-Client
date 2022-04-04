import { createContext, useReducer } from 'react';
import { SET_AUTH, LOGOUT } from '../actions/auth';
import { authReducer, initialState } from '../reducers/auth';
import jwt_decode from 'jwt-decode';
import { API } from '../API.js';

// 1) Creo/defino el contexto
export const AuthContext = createContext();
// 2) Destructuro Provider de AuthContext
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const setAuth = ({ jwt }) => {
    dispatch({ type: SET_AUTH, payload: { jwt } });
  };

  const getUserInformation = () => ({ name: jwt_decode(state.jwt) });

  const logout = () => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem('auth');
    window.location.href = '/login';
  };
  const login = async ({ username, password }) => {
    try {
      const { data: jwt } = await API.post('/auth', { username, password });

      if (jwt) {
        setAuth({ jwt });
        localStorage.setItem('auth', jwt);
        return jwt;
      } else {
        return null;
      }
    } catch (err) {
      console.error('[LOGIN ERROR] ->', err);
      return null;
    }
  };

  return (
    <Provider value={{ state, setAuth, logout, login, getUserInformation }}>
      {' '}
      {children}{' '}
    </Provider>
  );
};
