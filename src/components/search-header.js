import React from 'react';
import { Component } from 'react';
var Rebase = require('re-base');
var base = Rebase.createClass('http://divideyourself.firebaseio.com/');
var authData = base.getAuth();


export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      inputText: '',
      addPostVisible: false
    };
  }

  handleInput = (e) => {
    this.setState({inputText: e.target.value})
  }

  handlePostClick = () => {
    this.setState({addPostVisible: !this.state.addPostVisible})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    window.localStorage.setItem('search for', 'Something')
    this.setState({inputText: ''})
  }

  render(){
    var postForm = this.state.addPostVisible ? <PostForm /> : null;

      return(
        <div>
        <div className="nav-post" style={{width: '100%', position: 'relative', height: '32px', margin: '0', backgroundColor: '#313131', padding: '0'}}>
          <button onClick={this.handlePostClick}
            className="btn btn-default" type="submit"
            style={{ position: 'absolute', backgroundColor: '#313131', border: 'none', color: 'white'}}><span className="glyphicon glyphicon-plus"></span></button>
          <form
            onSubmit={this.handleSubmit}
            name="search"
            style={{textAlign: 'center', position: 'absolute', width: '50%',left: '0', right: '0', margin: 'auto', border: 'none', color: 'white'}}
          >
          <input
            name="search"
            value={this.state.inputText}
            defaultValue='Kayaking in Colorado'
            onChange={this.handleInput}
            type="text"
            placeholder="Search for Adventure."
            style={{position: 'relative', textAlign: 'center', width: '100%', backgroundColor: '#313131', borderWidth: '0 0 1px 0', color: 'white', height: '28px'}}
          />
          </form>

        </div>
        {postForm}
        </div>
      )
    }
}

export class PostForm extends Component {
  constructor(props){
    super(props);
    this.state= {
      imageUrl: '',
      file:'',
      title: '',
      urlError: false,
      titleError: '',
      noImgSelectedError: ''
    }
    this.imageUrlValidator = this.imageUrlValidator.bind(this);
    this.formValidator = this.formValidator.bind(this);
    this.imageUploadValidator = this.imageUploadValidator.bind(this);
    this.titleValidator = this.titleValidator.bind(this);
    this.doesFileExist = this.doesFileExist.bind(this);
  }


  doesFileExist(urlToFile, callback){
    var img = new Image();
    img.onload = function(){callback(true)}
    img.onerror = function(){callback(false)}
    img.src = urlToFile;
  }

  formValidator(e){

    e.preventDefault()
    console.log('validaing');

  if(!this.state.file){
    this.doesFileExist(this.state.imageUrl,function(exists) {
      console.log('exists',exists);
      if(exists){
        this.setState({urlError: false})
      }else{
        this.setState({urlError: true});
      }
    }.bind(this));
  }


    if(this.state.file && this.state.imageUrl){
      this.setState({twoImgError: true})
    }else{
      this.setState({twoImgError: false})
    }



    if(!this.state.file && this.state.urlError){
      this.setState({noImgError: true})
    }else{
      this.setState({noImgError: false})
    }


    if(!this.state.title){
      this.setState({titleError: true})
    }else{
      this.setState({titleError: false})
    };
    //Checks everything is valid then push to database
    var hasImg = false;
    if(this.state.file || this.state.imageUrl){hasImg = true}
    if(!this.state.urlError && !this.state.twoImgError && this.state.title.length>1 && hasImg){
      var imgSource;
      if(this.state.file){
      }else{imgSource = this.state.imageUrl}
      var title =this.state.title
      base.push('posts', {
        data: {src: imgSource, title: title }
      });
    }

  }

  imageUrlValidator(e){
    this.setState({imageUrl: e.target.value})
  }

  imageUploadValidator(e){

    this.setState({file: e.target.files[0]})


  }

  titleValidator(e){
    this.setState({title: e.target.value})
  }


  render(){
    let urlError = this.state.urlError ? <div style={{backgroundColor:'red', marginTop: '2%'}}>url is not valid</div> : null
    let twoImgError = this.state.twoImgError ? <div style={{backgroundColor:'red', marginTop: '2%'}}>Only one image per post please</div> : null
    let titleError = this.state.titleError ? <div style={{backgroundColor:'red', marginTop: '2%'}}>Please fill out a descriptive title</div> : null
    let noImgSelectedError = this.state.titleError ? <div style={{backgroundColor:'red', marginTop: '2%'}}>Posts must include an image</div> : null

    return(
      <div>
      <div style={{position: 'fixed', height: '100%', width: '100%', zIndex:'20', opacity: '.9', backgroundColor:'white'}}>
      </div>
      <form name="post" onSubmit={this.formValidator} style={{position: 'fixed', zIndex: '30', padding: '0 4% 4% 4%', backgroundColor: '#313131'}} className="controller-post">
      <h3 style={{color: 'white', textAlign: 'center'}}>Post to The Board</h3>
        <input type="text" placeholder="image url" onChange={this.imageUrlValidator} value={this.state.imageUrl} className="form-control" style={{marginTop: '2%'}}/>
        <input type="file" accept="image/*" onChange={this.imageUploadValidator} className="form-control" style={{marginTop: '2%'}}/>
        <input type="text" placeholder="Title" maxLength="100" onChange={this.titleValidator} className="form-control" style={{marginTop: '2%'}}/>
        <button name="post" type="submit" style={{borderRadius: '4px', backgroundColor: 'white', marginTop: '2%'}} onSubmit={this.formValidator}>Submit</button>
        {urlError}
        {twoImgError}
        {titleError}
        {noImgSelectedError}
      </form>
      </div>

    )
  }
}
