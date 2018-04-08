import React, { Component } from 'react';
import { Router, withRouter, Route } from 'react-router';

class Login extends Component {
constructor(props){
  super(props);
  this.state = {
    email: '',
    password: '',
    isValid: false,
    message: 'Welcome ! Thanks for login.'
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleLogin = this.handleLogin.bind(this);
}

componentDidMount() {
  localStorage.setItem("email", "admin@mail.com");
  localStorage.setItem("password", "testpass");
}

  handleChange(e){
    let login = this.state;
    let name = e.target.name;
    login[name] = e.target.value;
    this.setState({
      login: login
    });
  }

  handleLogin(){
    let userEmail = this.state.email;
    let userPassword = this.state.password;
    let emailId =  localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if (userEmail === emailId && userPassword === password){
        this.setState({
          isValid: true,
          email: '',
          password: ''
        });
        localStorage.setItem("isLogin", "true");
        this.props.history.push("/welcome");
      } else{
      alert('PLease Check Your USERNAME and PASSWORD');
      this.setState({
        isValid: false,
        email: '',
        password: ''
      });
    }
  }

  render() {
    console.log('state', this.state)
    console.log(this.props, "this.props");
    return (
      <div className='container'>
        <div className='row'>
        <div className='col-sm-4'></div>
      <div className='col-sm-4 well'>
        <h2>Login</h2>
        
        {/* Line break  */}
        <br/>
          <div>
            <label> Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={this.state.email}
              placeholder="Enter email"
              name="email" onChange={(e)=>this.handleChange(e)} required></input>
          </div>
          {/* Line break  */}
          <br/>

          <div className="form-group">
            <label>Password:</label>
            <input type="password"
              value={this.state.password}
              className="form-control" id="pwd" placeholder="Enter password" name="password"
              onChange={(e)=>this.handleChange(e)} required></input>
          </div>
          <button type="submit" className="btn btn-info"
            onClick={()=>this.handleLogin()}>Login</button>
      </div>
      </div>
      </div>
    );
  }
}

export default withRouter(Login);
