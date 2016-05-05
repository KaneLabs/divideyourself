import React from 'react';
import { Component } from 'react';

export default class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false
    }
  }

render(){

  return <aside>
            <h5>Ryan Kane</h5>
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
