import { useContext } from 'react';
import { DataContext } from '../context/Data';

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be wrapped with SearchProvider');
  return context;
};
