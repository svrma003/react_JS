import React from "react";
//import logo from "./logo.svg";
import "./App.css";
// import Box from "./Box.js";

import { Component } from "react";

class Likes extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      numberOfLikes:2,

    };

  }

 likeme = () =>{
   this.setState({
     numberOfLikes: this.state.numberOfLikes+1
   })
 } 
dislike =() =>{
  if(this.state.numberOfLikes>=1){
  this.setState({
    numberOfLikes: this.state.numberOfLikes-1
  })
}
}
  render() {
     return (
      <div> 
        <h1>Likes: {this.state.numberOfLikes}</h1>
        <button onClick={this.likeme}>Like</button>
          <button onClick={this.dislike}>Dislike</button>
   </div>
    );
  
}
}


export default Likes