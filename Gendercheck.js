import React, { Component } from 'react';
import { render } from 'react-dom';

class Gendercheck extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      gender: ''
    };
  }

setName = (event) => {
  console.log(this.state.name)
  this.setState({
    name: event.target.value
  })
};
 checkGender= async () => {
   this.setState({
  gender: 'Loading...'
})
  console.log(this.state.name)
const response = await fetch(`https://api.genderize.io/?name=${this.state.name}`);
console.log(response); //returns response stream 
const myJson = await response.json();
console.log(myJson);
this.setState({
  gender: myJson.gender
})
}
  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
        <input onChange={this.setName} value= {this.state.name}/>
        <button onClick={this.checkGender}>What is the Gender</button>
        <h1 >{this.state.gender}</h1>
      </div>
    );
  }
}

export default Gendercheck