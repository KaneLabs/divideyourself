import React from 'react';
import { Component } from 'react';
var GrabButton = require('./grab-button');
import { Link } from 'react-router';
var Rebase = require ('re-base');
var base = Rebase.createClass('http://divideyourself.firebaseio.com/');
var authData = base.getAuth();

export default class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      firstname: '',
    }
  }
  componentDidMount(){

    base.fetch(`users/${authData.uid}`, {
      context: this,
      asArray: true,
      then(data){
        this.setState({firstname : data[0]})
      }
    })
  }


render(){

var username;
if(!authData){
  username = <div><Link to="/login">Login</Link> or <Link to="/signup">SignUp</Link></div>
}else{
  username = <div><Link to="/Profile">{this.state.firstname}</Link></div>
}
  return <aside>
            <h5>{username}</h5>
            <ul>
              <li>A Tool</li>
              <li>Another Tool</li>
              <li>Another Tool</li>
              <li>One more Tool</li>
              <li>Last Tool</li>
            </ul>
          </aside>

}

}
