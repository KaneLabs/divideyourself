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
      emailTakenError: false,
      invalidEmailError: false,
      emailCreateError: false,
      emailCreateSuccess: false,
      uid: '',
      firstname: '',
      lastname: ''
    }
    // this.handleEmail = this.handleEmail.bind(this)
    // this.handlePass = this.handlePass.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.ref = base.createUser({
      email: this.state.email,
      password: this.state.password
    }, function(error, userData){
        if (error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
              console.log("The new user account cannot be created because the email is already in use.");
              this.setState({emailTakenError: true})
              break;
            case "INVALID_EMAIL":
              console.log("The specified email is not a valid email.");
              this.setState({invalidError: true})
              break;
              default:
              console.log("Error creating user:", error);
              this.setState({emailCreateError: true})
            }
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
          var uid = userData.uid;
          base.post(`users/${uid}`, {
            data: {firstname: this.state.firstname, lastname: this.state.lastname},
          });
          this.setState({emailCreateSuccess: true})
          browserHistory.push('/login');
        }
    }.bind(this));
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value});
  }
  handlePassword = (e) => {
    this.setState({password: e.target.value});
  }
  handleFirstName = (e) => {
    this.setState({firstname: e.target.value});
  }
  handleLastName = (e) => {
    this.setState({lastname: e.target.value});
  }

  render(){
    // base.removeUser({
    //   email: 'ryankane28@gmail.com',
    //   password: '2ka28ne8'
    // });
    var emailTakenError = this.state.emailTakenError ? <div className="has-error">This email is already in use</div> : null
    var invalidEmailError = this.state.invalidEmailError ? <div className="has-error">That email is invalid</div> : null
    var emailCreateError = this.state.emailCreateError ? <div className="has-error">This email is already in use</div> : null
    var emailCreateSuccess = this.state.emailCreateSuccess ? <div className="has-success">You have successfully created an account</div> : null

    return(
      <form
      onSubmit={this.handleSubmit}
      className="form-group col-md-4" style={{position: 'absolute', left: '0', right: '0', margin: '0 auto', marginTop: '80px', backgroundColor: '#f5f5f5', borderRadius: '5px', opacity: '.9'}}>
      <h3 style={{textAlign: 'center'}}>Sign Up</h3>
      <div className="form-group">
        <label htmlFor="inputEmail">Email address</label>
        <input onChange={this.handleEmail} value={this.state.email}  type="email" className="form-control" id="inputEmail" placeholder="Email"/>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input onChange={this.handlePassword} value={this.state.password} minLength="8" type="password" className="form-control" id="inputPassword" placeholder="Password"/>
      </div>
      <div className="form-group">
        <label htmlFor="inputFirstName">First Name</label>
        <input onChange={this.handleFirstName} value={this.state.firstname} type="text" className="form-control" id="inputFirstName" placeholder="First Name"/>
      </div>
      <div className="form-group">
        <label htmlFor="inputLastName">Last Name</label>
        <input onChange={this.handleLastName} value={this.state.lastname} type="text" className="form-control" id="inputLastName" placeholder="Last Name"/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>
      {emailTakenError}
      {invalidEmailError}
      {emailCreateError}
      {emailCreateSuccess}
      </form>
    )

  }


}
