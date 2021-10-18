import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Customers from './Components/Customers';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import SignleCustomer from './Components/SingleCustomer';
import Orders from './Components/Orders';
import SingleOrder from './Components/SingleOrder';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {
  

  return (
 
      <Router>
        <Switch>
          <Route path='/dashboard/customers'>
            <Layout>
              <Customers />
            </Layout>
          </Route>
          <Route path='/dashboard/orders'>
            <Layout>
              <Orders />
            </Layout>
          </Route>
          <Route path='/orders/:id'>
            <Layout>
              <SingleOrder />
            </Layout>
          </Route>
          <Route path='/dashboard'>
            <Layout>
              <Dashboard />
            </Layout>
          </Route>
          <Route path='/customers/:id'>
            <Layout>
              <SignleCustomer />
            </Layout>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
   
  );
}

export default App;
