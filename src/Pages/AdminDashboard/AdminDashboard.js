import { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import { useAuth } from '../../Hooks/useAuth';
import { useData } from '../../Hooks/useData';

import Navbar from '../../Components/Layout/Navbar/Navbar';
import UpdateDeleteTable from './UpdateDeleteTable';
import CreateTable from './CreateTable';
import ErrorMessage from '../../Components/Layout/ErrorMessage';
import Loader from '../../Components/Loader';

const AdminDashboard = () => {
  const { getUserInformation } = useAuth();
  const {
    name: { name },
  } = getUserInformation();
  // Fetch data
  const { data, loading, error } = useData();
  // Tab state
  const [key, setKey] = useState('home');

  if (error) return <ErrorMessage message="en la BDD al traer los productos" />;
  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <Container fluid>
        <h1>Dashboard</h1>
        <p>
          Bievenido <b>{name} </b>
        </p>
        <h2>Edicion de productos</h2>

        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Actualizar o eliminar productos">
            <UpdateDeleteTable data={data} />
          </Tab>

          <Tab eventKey="profile" title="Crear nuevo producto">
            <CreateTable />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default AdminDashboard;
