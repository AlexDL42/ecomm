import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const MenPage = () => (
  <div>
    <h1>Men PAGE</h1>
  </div>
);

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
          <Route path='/men' component={MenPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
