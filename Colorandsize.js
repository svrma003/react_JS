import React from "react";
import "./App.css";
import { Component } from "react";
class Colorandsize extends Component{
    constructor() {
        super();
        this.state = {
          name: 'React',
          fontColor:'red',
          fontSize:33
        };
    
    }
changeColor = (value) =>{
    this.setState({
        fontColor:value
    })
}
increaseFont =() =>{
    this.setState({
        fontSize:this.state.fontSize+1
    })
}
decreaseFont =() =>{
    this.setState({
        fontSize:this.state.fontSize-1
    })
}


 

render(){
return (
    <div>
        
        <p style = {{color: `${this.state.fontColor}`,fontSize:`${this.state.fontSize}px`}}>
            {this.props.name}   {this.props.lastname}
        </p>
        <button onClick ={() => this.changeColor('red')}>Red</button>
        <button onClick = {() => this.changeColor('blue')}>Blue</button>
        <button onClick = {() => this.changeColor('green')}>Green</button>
    <button onClick ={this.increaseFont}>Size++</button>
    <button onClick ={this.decreaseFont}>Size--</button>
    </div>
)}
}

export default Colorandsize

//at line 38- <p>click to see some magic happen on buttons</p>
