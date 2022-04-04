// import {useAxios} from "../../Hooks/useAxios";
import { useState } from 'react';

import Navbar from '../../Components/Layout/Navbar/Navbar.js';
import Products from '../../Components/Products';
import Loader from '../../Components/Loader';
import ErrorMessage from '../../Components/Layout/ErrorMessage';
import Header from '../../Components/Layout/Header';

import { useData } from '../../Hooks/useData';

const Home = () => {
  const { data, loading, error } = useData();

  const [character, setCharacter] = useState('');

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={'la BDD'} />;
  return (
    <>
      <Header title="SN - Q-Comercce" />
      <Navbar setCharacter={setCharacter} />
      <Products data={data} character={character} />
    </>
  );
};

export default Home;
