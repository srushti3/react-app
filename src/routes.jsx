import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './app';
import About from './components/About';
import WelcomePage from './components/Sample';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/welcome" component={WelcomePage}/>
    </div>
  </Router>
);

export default Routes;
