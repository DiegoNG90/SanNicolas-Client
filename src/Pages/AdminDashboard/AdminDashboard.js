import Navbar from '../../Components/Layout/Navbar/Navbar';
import { useAuth } from '../../Hooks/useAuth';

const AdminDashboard = () => {
  const {getUserInformation} = useAuth();
  const {name:{name}} = getUserInformation();

  return (
    <>
      <Navbar />
      <h1>Dashboard</h1>
      <p>Bievenido {name}</p>;
    </>
  );
};

export default AdminDashboard;
