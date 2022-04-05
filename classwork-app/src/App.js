import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Users from './components/pages/Users/Users';
import Detail from './components/pages/Detail/Detail';


export default function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/users" exact>
            <Users/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/detail">
            <Detail/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}