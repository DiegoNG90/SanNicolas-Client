import { SET_AUTH, LOGOUT } from '../actions/auth';

export const initialState = {
  isLoggedIn: false,
  jwt: localStorage.getItem('auth'), // Chequea que el jwt esté en el LS
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      const { jwt } = action.payload;
      return {
        isLoggedIn: true,
        jwt,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};
