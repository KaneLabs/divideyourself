var React = require('react');
var Masonry = require('react-masonry-component');
var Rebase = require('re-base');
var base = Rebase.createClass('http://divideyourself.firebaseio.com/');
var GrabButton = require('./grab-button');

var masonryOptions = {
    transitionDuration: 750
};

var style = {
    width:'100%',
    margin: '0',
    paddingTop:'32px',
    position:'relative',
    // backgroundColor: '#BDBDBD'
};


  module.exports = React.createClass({

    getInitialState: function(){
      return {
        posts: [],
        toggleClick: false,
        loading: true,
        savedPosts: []
      }
    },



    componentDidMount: function(){
        this.ref = base.syncState('posts', {
        context: this,
        state: 'posts',
        asArray: true,
        then(data){
          this.setState({loading: false});
        }
      })
    },
    componentWillUnmount: function(){
      base.removeBinding(this.ref)
    },

    render: function () {
      if(this.state.loading){
        return <div>loading... </div>
      }


      var childElements = this.state.posts.map(function(element){
        var hasClan;

        if(element.author && element.clan){
            hasClan = 'of';
          }
             return (
                <div key={element.key} className="col-sm-4 col-md-3" style={{margin: '0', padding: '10px'}}>
                  <div className="card"  style={{backgroundColor:"white", borderRadius: "4px", overflow: 'hidden', padding: '0'}}>
                    <img src={element.src}  style={{width:'100%', height:'auto'}}></img>
                    <h1 style={{fontSize:"1em", fontWeight:'normal', padding: '2%', margin: '0'}}>{element.title}</h1>
                    <hr style={{width:'96%',margin:' 0 auto',border: 'none', height: '1px', backgroundColor: '#BDBDBD'}}></hr>

                    <div style={{width:'50%', float: 'left', display: 'inline-block', paddingLeft:'2%', height: '40px'}}>
                      {element.author} {hasClan} {element.clan}
                    </div>

                    <div style={{display: 'inline-block', width: '25%', height: '40px'}}>
                      <hr/>
                    </div>

                    <GrabButton id={element.key}/>

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
