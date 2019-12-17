import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Dummy from './pages/Dummy';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/dummy'>
          <Dummy />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
