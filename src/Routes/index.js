import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'


import Home from '../Pages/Home'
import Login from '../Pages/Login'
import AdminDashboard from '../Pages/AdminDashboard'
import ProductPage from '../Pages/ProductPage'

const Routes = () => {
    return (
      <Router>
        <Switch>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/product/:id" exact>
              <ProductPage />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/dashboard">
              <AdminDashboard />
            </Route>

            <Redirect to="/" />

        </Switch>
      </Router>
    );
}

export default Routes;