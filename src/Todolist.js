import React, { Component } from 'react';
import { render } from 'react-dom';


class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      listOfTodo: []

    };
  }
  handleChangeOfName = event => {
    console.log(this.state.name);
    this.setState({
      name: event.target.value,
    });
  };
  addToDo = event => {
    this.setState({
      listOfTodo: [...this.state.listOfTodo, this.state.name],
      name: ""
    })
  }
  delete = (value) =>{
    alert(value);
    let filtered = this.state.listOfTodo.filter((eachItem) => {
      return eachItem !== value
    }
    )
    this.setState({
      listOfTodo: filtered
    })
  }
  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
          <input
          type="text"
          onChange={event => this.handleChangeOfName(event)}
          value={this.state.name}
          placeholder="Enter name..."
        />
        <button onClick={this.addToDo}> Add </button>
                <h1>Value  {this.state.name}</h1>
{
  this.state.listOfTodo.map(eachElm => (
    <li>{eachElm} <button onClick={() => this.delete(eachElm)}>Delete</button></li>
  ))
}
      </div>
    );
  }
}

export default Todolist