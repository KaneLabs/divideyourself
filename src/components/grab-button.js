var React = require ('react');
var Rebase = require('re-base');
var base = Rebase.createClass('https://divideyourself.firebaseio.com');
var authData = base.getAuth();

module.exports = React.createClass({

  getInitialState(){
    return {'saved': []}
  },

  handleGrab(){
    var uid = this.props.id
    console.log(uid);
    if(localStorage.saved){
      var a = JSON.parse(localStorage.getItem('saved'));
      a.push(uid);
      localStorage.setItem('saved',JSON.stringify(a));
    }else{
    var a = [uid];
    localStorage.setItem('saved',JSON.stringify(a));
  }
  },

  render(){
    return <button
      onClick={this.handleGrab}
      style={{display: 'inline-block', width: '25%', height: '50px', float: 'right', backgroundColor: 'white', border: 'none'}}>
      <span className="glyphicon glyphicon-share"></span>
    </button>
  }

})
