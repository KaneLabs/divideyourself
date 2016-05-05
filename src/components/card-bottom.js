var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
      return {grabbed: false};
    },

    handleGrab(){
      console.log(this)
      this.setState({grabbed: true})
      console.log(this.props.title)
    },

    render: function(){

      return (

        <nav>

          <div style={{width:'50%', float: 'left', display: 'inline-block', paddingLeft:'2%', height: '40px'}}>
            {this.props.author} of {this.props.clan}
          </div>

          <div style={{display: 'inline-block', width: '25%', height: '40px'}}>
            <hr/>
          </div>

          <button
            onClick={this.handleGrab}
            style={{display: 'inline-block', width: '25%', height: '50px', float: 'right', backgroundColor: 'white', border: 'none'}}>
            <span className="glyphicon glyphicon-share"></span>
          </button>

        </nav>
      )
	}
});
