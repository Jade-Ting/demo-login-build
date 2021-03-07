import React from 'react'
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
