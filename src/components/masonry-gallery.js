var React = require('react');
var Masonry = require('react-masonry-component');
var CardBottomNav = require('./card-bottom');
var Rebase = require('re-base');
var base = Rebase.createClass('http://divideyourself.firebaseio.com/');

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
        loading: true
      }
    },

    componentDidMount(){
      base.syncState('posts', {
        context: this,
        state: 'posts',
        asArray: true,
        then(data){
          this.setState({loading: false});

        }
      })
    },


    // function generateUUID() {
    //     var d = new Date().getTime();
    //     var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    //         var r = (d + Math.random()*16)%16 | 0;
    //         d = Math.floor(d/16);
    //         return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    //     });
    //     return uuid;
    // };

    render: function () {
      if(this.state.loading){
        return <div>loading... </div>
      }



      var childElements = this.state.posts.map(function(element){
             return (
                <div key={element.title} className="col-sm-4 col-md-3" style={{margin: '0', padding: '10px'}}>
                  <div className="card"  style={{backgroundColor:"white", borderRadius: "4px", overflow: 'hidden', padding: '0'}}>
                    <img src={element.src}  style={{width:'100%', height:'auto'}}></img>
                    <h1 style={{fontSize:"1em", fontWeight:'normal', padding: '2%', margin: '0'}}>{element.title}</h1>
                    <hr style={{width:'96%',margin:' 0 auto',border: 'none', height: '1px', backgroundColor: '#BDBDBD'}}></hr>

                    <div style={{width:'50%', float: 'left', display: 'inline-block', paddingLeft:'2%', height: '40px'}}>
                      {element.author} of {element.clan}
                    </div>

                    <div style={{display: 'inline-block', width: '25%', height: '40px'}}>
                      <hr/>
                    </div>

                    <button
                      style={{display: 'inline-block', width: '25%', height: '50px', float: 'right', backgroundColor: 'white', border: 'none'}}>
                      <span className="glyphicon glyphicon-share"></span>
                    </button>

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
