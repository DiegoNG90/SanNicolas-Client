import { createContext } from 'react';
import { useAxios } from '../Hooks/useAxios';


export const DataContext = createContext();
const { Provider } = DataContext;

export const DataProvider = ({ children }) => {
  const { data, loading, error } = useAxios('/products');

  return (
    <Provider value={{ data, loading, error }}>
      {children}
    </Provider>
  );
};

