import React, { Component } from 'react';
import Navigation from './Navigation';
import { Router, withRouter, Route } from 'react-router';

class WelcomePage extends Component {

  render() {
    return (
      <div className='container-fluid'>
      <Navigation/>
      <div className ="container">
        <h3>Welcome to dashboard</h3>
        <p><div className="alert alert-success col-sm-10">
          <strong>Successfuly Logged in !</strong>
        </div></p>
      </div>
      </div>
    );
  }

}

export default withRouter(WelcomePage);
