import { useContext } from 'react';
import { SearchContext } from '../context/Search';

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error('useSearch must be wrapped with SearchProvider');
  return context;
};
