import './App.css';
import Routes from './Routes/index';

import { DataProvider } from './context/Data';
import { AuthProvider } from './context/Auth';
function App() {

  return (
    <div className="App">
      <AuthProvider>
        <DataProvider>
          <Routes />
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
