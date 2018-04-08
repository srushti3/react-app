import React from 'react';
import banner from '../images/1.jpg';
import { withRouter } from 'react-router';
import Navigation from './Navigation';

const About = () => (
  <div className='container'>
    <Navigation/>
    <div>
      <img src={banner} className='col-sm-12'/>
    </div>
  </div>
);

export default withRouter(About);
