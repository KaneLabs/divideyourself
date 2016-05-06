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
    var name;
    base.fetch(`users/${authData.uid}/firstname`, {
      context: this,
      asArray: false,
      then(data){
        name = data
      }
    });

    return(
     <div>
      <NavBar authData={authData}/>
      {this.props.children}
     </div>
   );
  }
}
