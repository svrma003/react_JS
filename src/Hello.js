import React from "react";
//import logo from "./logo.svg";
import "./App.css";
// import Box from "./Box.js";
import { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      listOfArrows: ['']
    };

  }
addArrow = () => {
  this.setState({
    listOfArrows: [...this.state.listOfArrows, '+-']
  })
}
resetArrow = () => {
  this.setState({
    listOfArrows: []
  })
}
  

  render() {
     return (
      <div>
    <button onClick={this.addArrow}>Push</button>
        <button onClick={this.resetArrow}>Reset</button>

        {this.state.listOfArrows.map(eachItem => (
          <h1 style={{display: 'inline'}}>{eachItem} </h1>
        ))} 
        <h1 style={{display: 'inline'}}>v </h1>
   </div>
    );
  
}
}


export default Hello