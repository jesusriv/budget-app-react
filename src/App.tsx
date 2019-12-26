import React from 'react';

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { MuiThemeProvider } from '@material-ui/core'
import customTheme from './theme/CustomTheme/CustomTheme';

import './App.css';

import createHistory from "history/createBrowserHistory";


import {
  Router,
  Route,
  Switch
} from 'react-router-dom';

const history = createHistory();
const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={customTheme}>
      <Router history={history}>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login history={history} />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
