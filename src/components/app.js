import React from 'react';
import { Component } from 'react';
import NavBar from './navigation';

export default class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
     <div>
      <NavBar />
      {this.props.children}
     </div>
   );
  }
}
