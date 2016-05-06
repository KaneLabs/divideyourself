import React from 'react';
import { Component } from 'react';
import NavBar from './navigation';
var Rebase = require('re-base');
var base = Rebase.createClass('https://divideyourself.firebaseio.com');
var authData = base.getAuth();


export default class App extends Component{
  constructor(props) {
    super(props);

  }

  render() {
  
    var isLoggedIn;

    if(authData){
      isLoggedIn = true
    }else{
      isLoggedIn = false;
    }
    return(
     <div>
      <NavBar loginStatus={isLoggedIn}/>
      {this.props.children}
     </div>
   );
  }
}
