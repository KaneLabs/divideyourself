import React from 'react'
import { Component } from 'react'
import Masonry from 'react-masonry-component'
var Rebase = require('re-base');
var base = Rebase.createClass('https://myapp.firebaseio.com');

var masonryOptions = {
    transitionDuration: 750
};

var style = {
    width:'100%',
    margin: '0',
    paddingTop:'32px',
    position:'relative',
};

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      postsKeys: [],
      savedKeys: [],
      matchedKeys: []
    }
  }

  componentDidMount(){
      this.ref = base.listenTo('posts', {
      context: this,
      asArray: true,
      then(data){
        this.setState({posts: data})
      }
    });
  }
  
  componentWillUnmount(){
    base.removeBinding(this.ref)
  }


  render(){
    if(!this.state.posts[0]){
      return <div>loading...</div>
    }
    var savedKeys = JSON.parse(localStorage.getItem('saved'));
    var postsKeys = this.state.postsKeys

      for(var i = 0; i < this.state.posts.length; i++){
        this.state.postsKeys[i] = this.state.posts[i].key
      }
      console.log(savedKeys)
      console.log(postsKeys)
      var matchedKeys = [];
      for(var i = 0; i < savedKeys.length; i++ ){
        for(var j = 0; j < postsKeys.length; j++){
          if(savedKeys[i] === postsKeys[j]){
            matchedKeys.push(savedKeys[i]);
          }
        }
      }
      var posts = this.state.posts
      var matchingPosts = []
      for(var i = 0; i < matchedKeys.length; i++){
        for(var j = 0; j < posts.length; j++){
          if(posts[j].key === matchedKeys[i]){
            matchingPosts.push(posts[j]);
          }
        }
      }
      console.log(matchingPosts)

      var childElements = matchingPosts.map(function(element){
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

  }
