var React = require ('react');

module.exports = React.createClass({

  getInitialState(){
    return {'saved': []}
  },

  handleGrab(){
    var idArr = [this.props.id]
    var lsSaved = window.localStorage.getItem('saved')

    var newArr = idArr.concat(lsSaved)

    window.localStorage.setItem('saved', newArr)
  },

  render(){
    return <button
      onClick={this.handleGrab}
      style={{display: 'inline-block', width: '25%', height: '50px', float: 'right', backgroundColor: 'white', border: 'none'}}>
      <span className="glyphicon glyphicon-share"></span>
    </button>
  }

})
