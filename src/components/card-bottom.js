var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
      return {likeClicked:'false', CommentClick:'false', LikeClicked:'false', LikeClicked:'false'};
    },
    handleLikeClick: function(event){
      this.setState({likeClicked: !this.state.likeClicked});
    },

    render: function(){

      return (
        <div className="btn-group btn-group-justified" role="group" aria-label="...">

          <div className="btn-group" role="group" >
            <button type="button" className="btn btn-default btn-large" style={{borderRadius:'0px',border:'none'}}
              onClick={this.handleLikeClick}>
              <span className="glyphicon glyphicon-user" style={{paddingRight:'.5em'}}></span>
              {this.props.author}
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default btn-large"
             style={{borderRadius:'0px',border:'none'}}
             onClick={this.handleTreeClick}>
            <span className="glyphicon glyphicon-tree-deciduous" aria-hidden="true"></span>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default btn-large"
             style={{borderRadius:'0px',border:'none'}}
             onClick={this.handleTreeClick}>
            <span className="glyphicon glyphicon-tree-deciduous" aria-hidden="true"></span>
            </button>
          </div>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default btn-large" style={{borderRadius:'0px',border:'none'}}
            onClick={this.handleShareClick}>
            <span className="glyphicon glyphicon-share" aria-hidden="true"></span>
            </button>
          </div>

        </div>
      )
	}
});
