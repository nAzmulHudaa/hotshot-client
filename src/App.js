import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext } from 'react';

import Customers from './Components/Customers';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import SignleCustomer from './Components/SingleCustomer';
import Orders from './Components/Orders';
import SingleOrder from './Components/SingleOrder';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import * as firebase from 'firebase/app';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  

  console.log(loggedInUser);


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
    </UserContext.Provider>
  );
}

export default App;
