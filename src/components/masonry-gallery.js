var React = require('react');
var Masonry = require('react-masonry-component');
var CardBottomNav = require('./card-bottom');

var masonryOptions = {
    transitionDuration: 0
};

var style = {
    width:'100%',
    margin:'0',
    padding:'0',
    position:'relative'
};

  module.exports = React.createClass({
    handleClick: function(){
      return console.log('clicked');
    },
    render: function () {
      for(var i = 0; i < this.props.elements.length; i++){
        this.props.elements[i].id = i;
      }
      var childElements = this.props.elements.map(function(element){
             return (
                <div key={element.id} className="col-sm-3" style={{margin: '0', padding: '0'}}>
                  <div className="card"  style={{backgroundColor:"white",borderRadius: "2px",overflow: 'hidden',margin: '.2em', padding: '0'}}>
                    <img src={element.src}  style={{width:'100%', height:'auto'}}></img>
                    <h1 style={{fontSize:"1em", fontWeight:"", margin:'.5em', marginBottom:'0' }}>{element.title}</h1>
                    <hr style={{width:'95%',margin:'auto',marginTop:'.25em',marginBottom:'0',border: 'none', height: '1px', color: '#c7c2c0', backgroundColor: '#c7c2c0'}}></hr>
                    <CardBottomNav author={element.author} rating={element.rating} style={{width:'100%',margin:'0',padding:'0',float:'left'}}/>
                  </div>
                </div>
          );
        });

          return (
              <Masonry
                  style={style}
                  className={'my-gallery-class'} // default ''
                  options={masonryOptions} // default {}
                  disableImagesLoaded={false} // default false
              >
                {childElements}
              </Masonry>
          );
      }
  });
