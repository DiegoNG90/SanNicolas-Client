import sanNicolas_logo from './sannicolas_meli.png'
import './style.css';
import { memo } from 'react';

const Logo = () => {
  return <img className="logo" src={sanNicolas_logo} alt="Ugames logo"></img>;
};

export default memo(Logo);
