import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { AuthProvider } from '../context/Auth'

import Home from '../Pages/Home'
import Login from '../Pages/Login'
import AdminDashboard from '../Pages/AdminDashboard'

const Routes = () => {
    return (
      <Router>
        <Switch>
          <AuthProvider>
            <Route path="/" exact>
              <Home />
            </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/dashboard">
                <AdminDashboard />
              </Route>
            <Redirect to="/" />
          </AuthProvider>
        </Switch>
      </Router>
    );
}

export default Routes;