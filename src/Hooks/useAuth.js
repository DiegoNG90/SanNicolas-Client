import { useContext } from 'react';
import { AuthContext } from '../context/Auth.js';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be wrapped with AuthProvider');
  return context;
};
