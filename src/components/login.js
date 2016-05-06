import React from 'react';
import { Component } from 'react';
var Rebase = require('re-base');
var base = Rebase.createClass('https://divideyourself.firebaseio.com');

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    // this.handleEmail = this.handleEmail.bind(this)
    // this.handlePass = this.handlePass.bind(this)
  }


  // handleSubmit(){
  //   var emailVal = {this.state.email}
  //   var passVal = {this.state.password}
  //   base.createUser({
  //   email: emailVal,
  //   password: passVal
  // }, function(error, userData) {
  //   if (error) {
  //     switch (error.code) {
  //       case "EMAIL_TAKEN":
  //         console.log("The new user account cannot be created because the email is already in use.");
  //         break;
  //       case "INVALID_EMAIL":
  //         console.log("The specified email is not a valid email.");
  //         break;
  //       default:
  //         console.log("Error creating user:", error);
  //     }
  //   } else {
  //     console.log("Successfully created user account with uid:", userData.uid);
  //   }
  // });
  // }
  handleEmail = (e) => {
    this.setState({email: e.target.value});
  }
  handlePassword = (e) => {
    this.setState({password: e.target.value});
  }

  render(){
    return(
      <form
      onSubmit={this.handleSubmit}
      className="form-group col-md-4" style={{position: 'absolute', left: '0', right: '0', margin: '0 auto', marginTop: '80px', backgroundColor: '#f5f5f5', borderRadius: '5px', opacity: '.9'}}>
      <h3 style={{textAlign: 'center'}}>Login or Signup</h3>
      <div className="form-group">
        <label htmlFor="inputEmail">Email address</label>
        <input onChange={this.handleEmail} value={this.state.email}  type="email" className="form-control" id="inputEmail" placeholder="Email"/>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input onChange={this.handlePassword} value={this.state.password} minLength="8" type="password" className="form-control" id="inputPassword" placeholder="Password"/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>
      </form>
    )

  }


}
