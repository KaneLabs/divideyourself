import React from 'react';
import {Component} from 'react';

export default class PostForm extends Component {
  constructor(props){
    super(props);
    this.state= {
      imageUrlValid: false,
      fileUploaded: false,
      fileSubmitted: false,
    }

  }

  formValidator(e){
  }
  imageUrlValidator(){}
  imageUploadValidator(){}
  titleValidator(){}


  render(){

    return(
      <div>
      <div style={{position: 'fixed', height: '100%', width: '100%', zIndex:'20', opacity: '.9', backgroundColor:'white'}}>
      </div>
      <form name="post" onSubmit={this.formValidator} style={{position: 'fixed', zIndex: '30', padding: '0 4% 4% 4%', backgroundColor: '#313131'}}>
        <h3 style={{color: 'white', textAlign: 'center'}}>Post to The Board</h3>
        <input type="url" placeholder="image url" onChange={this.imageUrlValidator} className="form-control" style={{marginTop: '2%'}}/>
        <input type="file" accept="image/*" onChange={this.imageUploadValidator} className="form-control" style={{marginTop: '2%'}}/>
        <input type="text" placeholder="Title" maxLength="100" onChange={this.titleValidator} className="form-control" style={{marginTop: '2%'}}/>
        <button name="post" type="submit" style={{borderRadius: '4px', backgroundColor: 'white', marginTop: '2%'}}>Submit</button>
      </form>
      </div>

    )
  }
}
