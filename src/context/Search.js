import { createContext, useState, useEffect} from 'react';
import { useAxios } from '../Hooks/useAxios';


export const SearchContext = createContext();
const { Provider } = SearchContext;

export const SearchProvider = ({ children }) => {
    const [endpoint, setEndpoint] = useState("nombre");

    useEffect(() => {
      const findProductBy = (productName) => {
        setEndpoint(`products?${endpoint}=${productName}`);
      };
    }, [endpoint])

    return <Provider value={{ endpoint, setEndpoint, findProductBy }}>{children}</Provider>;
}

