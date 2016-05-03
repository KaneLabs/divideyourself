import React from 'react';
import { Component } from 'react';

export default class Search extends Component {
constructor(props) {
  super(props);
}
  render(){

      return(
        <div className="search-post" style={{width: '100%', position: 'relative', margin: '0'}}>
          <button className="btn btn-default" type="submit" style={{float:'left', display: 'inline-block'}}>Post To Board</button>
          <form className="input-group" style={{width: '60%', display: 'inline-block', marginLeft: '1em', textAlign: 'center'}}>
          <input
            className="form-control"
            style={{width: '100%', textAlign: 'center'}}
            type="text"
            placeholder="Search for Adventure."
          />
          </form>
        </div>
      )

  }

}
