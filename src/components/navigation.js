import React from 'react';
import { Component } from 'react';
import Controller from './controller';
import Search from './search-header';


export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    }
    this.toggleController = this.toggleController.bind(this);
  }

  toggleController(e){
      this.setState({toggled: !this.state.toggled});
      console.log(this.state.toggled)
    }


  render() {
    var conditionalComponent;
    var search;

    if(this.state.toggled){
      conditionalComponent = <Controller />
      search = <Search />
    }else{
      conditionalComponent = null;
      search = null;
    }

    return (
      <header>
        <nav>
        <div className="btn-group btn-group-justified" role="group" aria-label="..."  >

          <div className="btn-group" role="group" >
            <button type="button" className="btn btn-default btn-large" style={{borderRadius:'0px',backgroundColor:'#212121', border:'0'}}>
            <span className="glyphicon glyphicon-stop" aria-hidden="true" style={{color: '#fff'}}></span>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default btn-large" style={{borderRadius:'0px',backgroundColor:'#212121', border:'0'}}>
            <span className="glyphicon glyphicon-tree-deciduous" aria-hidden="true" style={{color: '#fff'}}></span>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default btn-large" style={{borderRadius:'0px',backgroundColor:'#212121', border:'0'}}>
            <span className=" glyphicon glyphicon-road" aria-hidden="true" style={{color: '#fff'}}></span>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default btn-large" style={{borderRadius:'0px',backgroundColor:'#212121', border:'0'}}>
            <span className= "glyphicon glyphicon-tent" aria-hidden="true" style={{color: '#fff'}}></span>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" onClick={this.toggleController} className="btn btn-default btn-large white" style={{borderRadius:'0px',backgroundColor:'#212121', border:'0'}}>
              <span className="caret" style={{color: '#fff'}}></span>
            </button>
          </div>

        </div>

        </nav>
          {search}
          {conditionalComponent}
      </header>
    )
  }

}
