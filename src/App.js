import React from "react"; 
import "./App.css"; 
import Hello from './Hello';
import Likes from './Likes';
import Todolist from './Todolist';
import Colorandsize from './Colorandsize';
import Comments from './Comments';
import Comment1 from './Comment1';
import Gendercheck from './Gendercheck';
import Projectsaveshow from './Projectsaveshow';
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };

  }

  render() {
     return (
      <div>
       <Colorandsize name="first" lastname="lastName"/>
       <Projectsaveshow/>
   </div>
    );
  
}
}

//Link - https://stackblitz.com/edit/react-qztrdt
//Link - https://stackblitz.com/edit/react-3kc3aa
//Link - https://stackblitz.com/edit/react-rpwud1   
export default App