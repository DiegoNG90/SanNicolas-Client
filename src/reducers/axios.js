import { ACTIONS } from '../actions/axios';

export const initialState = {
  data: {},
  loading: true,
  error: false,
};

export const axiosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return {
        ...initialState,
        loading: false,
        data: action.payload.data,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...initialState,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
