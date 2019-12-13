import React from 'react';

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { MuiThemeProvider } from '@material-ui/core'
import customTheme from './theme/CustomTheme/CustomTheme';

import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
  
const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={customTheme}>
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
