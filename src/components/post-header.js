import React from 'react';
import { Component } from 'react';

var style= {
  display: 'inline-block',
}

export default class Post extends Component {
constructor(props) {
  super(props);
}

  render(){
    return <button className="col-sm-4" style={style}>POST</button>
  }
}
