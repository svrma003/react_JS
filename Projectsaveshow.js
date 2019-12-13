import React from "react";
import "./App.css";
import { Component } from "react";
class Projectsaveshow extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        number: null,
        listOfEntries: [],
        show: false,
        gender: '',
        saveStatus: ''
      };
    }
  
  setName = (event) => {
    this.setState({
      name: event.target.value
    })
    console.log(this.state.name)
  }
  setNumber = (event) => {
    this.setState({
      number: event.target.value
    })
      console.log(this.state.number)
  
  }
  showEntries = () => {
    if(this.state.showEntries) {
      this.setState({
        showEntries: false
      })
    } else {
        this.setState({
        showEntries: true
      })
    }
  }
  saveLocally = () => {
    let details = JSON.stringify(this.state.listOfEntries);
    localStorage.setItem('details' , details);
  }
   checkGender= async (name) => {
  
  const response = await fetch(`https://api.genderize.io/?name=${name}`);
  console.log(response); //returns response stream 
  const myJson = await response.json(); 
  console.log(myJson);
  return myJson.gender
  }
  saveDetails = async () => {
    this.setState({
      saveStatus: 'LOADING'
    })
        console.log(this.state.name)
        console.log(this.state.number)
  const gender = await this.checkGender(this.state.name)
  
    let entry = {
      name: this.state.name,
      number : this.state.number,
      gender: gender,
    }
    console.log(entry)
    this.setState({
      listOfEntries : [...this.state.listOfEntries, entry],
      name: '',
      number: '',
      saveStatus: 'SAVE_SUCCESS'
    })
  }
    render() {
      let entries = this.state.listOfEntries.map((eachEntry, index) => (
        <p> {index +1 } Name is: {eachEntry.name} [{eachEntry.gender}] and phone number is {eachEntry.number}</p>
      ))
      return (
        <div>
     <input onChange={this.setName} placeholder = "Enter name..." value={this.state.name} />
     <br/>
     <br/>
     <input type="number" onChange={this.setNumber} placeholder = "Enter number..." value={this.state.number} />
       <br/>
     <br/>
  <button onClick={this.saveDetails} >Save</button>
    <br/>
     <br/>
  <button onClick={this.showEntries}>Show All</button>
  <br/>
  <br/>
  <button onClick={this.saveLocally} >Save Locally</button>
  {this.state.saveStatus == 'LOADING' && <h3>Saving...</h3>}
  {this.state.saveStatus == 'SAVE_SUCCESS' && <h3>Saved Successfully</h3>}
  
  { this.state.showEntries && entries}
        </div>
      );
    }
  }
  
export default Projectsaveshow

