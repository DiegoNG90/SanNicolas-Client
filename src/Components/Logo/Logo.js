import logo from './ugames_navbar.png';
import './style.css';
import { memo } from 'react';

const Logo = () => {
  return <img className="logo" src={logo} alt="Ugames logo"></img>;
};

export default memo(Logo);
