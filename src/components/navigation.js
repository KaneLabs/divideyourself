import React from 'react';
import { Component } from 'react';
import Controller from './controller';
import Search from './search-header';
import { Link } from 'react-router';



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
  }

  render() {


    var loginStatus = false;

    var controller;
    var search;

    if(this.state.toggled){
      controller = <Controller loginStatus={loginStatus}/>
      search = <Search />
    }else{
      controller = null;
      search = null;
    }

    return (
      <header style={{margin: '0', padding: '0', position: 'fixed', zIndex: '14'}}>
        <nav>
        <div className="btn-group btn-group-justified" role="group" aria-label="..."  >

          <div className="btn-group" role="group" >
            <button type="button" className="btn btn-default btn-large" style={{borderRadius:'0px',backgroundColor:'#292929', border:'0'}}>
              <Link to="/" className="glyphicon glyphicon-stop" aria-hidden="true" style={{color: '#FAFAFA'}}></Link>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default btn-large" style={{borderRadius:'0px',backgroundColor:'#292929', border:'0'}}>
            <Link to="/knowledge" className="glyphicon glyphicon-tree-deciduous" aria-hidden="true" style={{color: '#FAFAFA'}}></Link>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default btn-large" style={{borderRadius:'0px',backgroundColor:'#292929', border:'0'}}>
            <Link to="/adventure" className=" glyphicon glyphicon-road" aria-hidden="true" style={{color: '#FAFAFA'}}></Link>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default btn-large" style={{borderRadius:'0px',backgroundColor:'#292929', border:'0'}}>
            <Link to="/market" className= "glyphicon glyphicon-tent" aria-hidden="true" style={{color: '#FAFAFA'}}></Link>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" onClick={this.toggleController} className="btn btn-default btn-large white" style={{borderRadius:'0px',backgroundColor:'#292929', border:'0'}}>
              <span className="caret" style={{color: '#FAFAFA'}}></span>
            </button>
          </div>

        </div>

        </nav>
          {search}
          {controller}
      </header>
    )
  }

}
