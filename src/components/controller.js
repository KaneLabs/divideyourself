import React from 'react';
import { Component } from 'react';
var GrabButton = require('./grab-button');
import { Link } from 'react-router';

export default class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false
    }
  }

render(){
var username;
if(!this.props.loginStatus){
  username = <div><Link to="/login">Login</Link> or <Link to="/signup">SignUp</Link></div>
}
  return <aside>
            <h5>{username}</h5>
            <ul>
              <li>Profile Name</li>
              <li>Profile Pic</li>
              <li>Profile Name</li>
              <li>Profile Pic</li>
              <li>Profile Name</li>
              <li>Profile Pic</li>
            </ul>
          </aside>

}

}
