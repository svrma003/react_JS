import React, { Component } from 'react';
import { render } from 'react-dom';


class Comment1 extends Component {
  constructor() {
    super();
    console.log("Hi, I am constructor");
    this.state = {
      comment: '',
      listOfComments: []

    };
  }
  handleChangeOfName = event => {
    console.log(this.state.comment);
    this.setState({
      comment: event.target.value,
    });
  };
  addComment = event => {
    this.setState({
      listOfComments: [...this.state.listOfComments, this.state.comment],
      comment: ""
    })
  }
  delete = (value) =>{
    let filtered = this.state.listOfComments.filter((eachItem) => {
      return eachItem != value
    }
    )
    this.setState({
      listOfComments: filtered
    })
  }
  componentDidMount(){
        console.log("Hi, I am ComponentDidMount");

  }
  render() {
        console.log("Hi, I am render");

    return (
      <div>
        <p>
Enter your comment here for post {this.props.number}
        </p>
        {
  this.state.listOfComments.map(eachElm => (
  <p style={{border: `2px solid ${this.props.color}`, padding: '5px'}}>{eachElm} <button onClick={() => this.delete(eachElm)}> Delete </button></p>
  ))
}
          <input
          type="text"
          onChange={event => this.handleChangeOfName(event)}
          value={this.state.comment}
          placeholder="Enter comment..."
        />
        <button onClick={this.addComment}> Comment </button>

      </div>
    );
  }
}

export default Comment1