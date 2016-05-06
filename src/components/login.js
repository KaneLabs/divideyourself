import React from 'react';
import { Component } from 'react';
var Rebase = require('re-base');
var base = Rebase.createClass('https://divideyourself.firebaseio.com');
import { browserHistory } from 'react-router';

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      loginFail: false,
      loginSuccess: false,
      uid: '',
    }
  }


  handleSubmit = (e) => {
    e.preventDefault()
    var emailVal = this.state.email
    var passVal = this.state.password
    base.authWithPassword({
      "email": emailVal,
      "password": passVal
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        this.setState({loginFail: true})
      } else {
        console.log("Authenticated successfully with payload:", authData);
        this.setState({loginSuccess: true})
        browserHistory.push('/');
      }
    }.bind(this));
  }


  handleEmail = (e) => {
    this.setState({email: e.target.value});
  }
  handlePassword = (e) => {
    this.setState({password: e.target.value});
  }

  render(){
    // base.removeUser({
    //   email: 'ryankane28@gmail.com',
    //   password: '2ka28ne8'
    // });
    var loginFail = this.state.loginFail ? <div className="has-error">The email or password didn't match anything in our records</div> : null
    var loginSuccess = this.state.loginSuccess ? <div className="has-success">You are now logged in</div> : null

    return(
      <form
      onSubmit={this.handleSubmit}
      className="form-group col-md-4" style={{position: 'absolute', left: '0', right: '0', margin: '0 auto', marginTop: '80px', backgroundColor: '#f5f5f5', borderRadius: '5px', opacity: '.9'}}>
      <h3 style={{textAlign: 'center'}}>Log In</h3>
      <div className="form-group">
        <label htmlFor="inputEmail">Email address</label>
        <input onChange={this.handleEmail} value={this.state.email}  type="email" className="form-control" id="inputEmail" placeholder="Email"/>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input onChange={this.handlePassword} value={this.state.password} type="password" className="form-control" id="inputPassword" placeholder="Password"/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>
      {loginFail}
      {loginSuccess}
      </form>
    )

  }


}
