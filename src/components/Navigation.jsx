import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Router, withRouter, Route } from 'react-router';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

logout(){
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  localStorage.setItem("isLogin", "false");
  this.props.history.push("/");
}
  render() {
    var userEmail = localStorage.getItem('email');
    return (
      <div className='container-fluid'>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">WebSiteName</a>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to="/welcome">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/welcome"><span className="glyphicon glyphicon-user"></span> {userEmail}</Link></li>
          <button className='btn btn-danger navbar-btn' onClick={()=>this.logout()}>
            <span className="glyphicon glyphicon-log-in"></span> Logout</button>
        </ul>
      </div>
    </nav>
      </div>
    );
  }

}

export default withRouter(Navigation);
