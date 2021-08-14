import { useEffect, useCallback, useReducer } from 'react';
import { API } from '../API';

import { axiosReducer, initialState } from '../reducers/axios';
import { ACTIONS } from '../actions/axios';

export const useAxios = (endpoint = '') => {
  const [state, dispatch] = useReducer(axiosReducer, initialState);

  const getData = useCallback(async () => {
    try {
      const {data} = await API.get(`${endpoint}`);
      console.log("Data from useAxios", data)
      dispatch({ type: ACTIONS.SET_DATA, payload: {data} });
    } catch (error) {
      console.error(error);
      dispatch({ type: ACTIONS.SET_ERROR });
    }

  }, [endpoint]);

  useEffect(() => {
    getData();
  }, [endpoint, getData]);

  return state;
};
