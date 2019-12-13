import React from 'react';
import './App.css';
import { throwStatement } from '@babel/types';
import { Component } from "react";


class Comments extends Component
 {
  constructor()
   {
    super();
    this.state = {  name: 'React', comment:'', listOfComments: [], buttonValue: 'Like'};
   }

   CommentFun = event =>
   {
       this.setState({
          comment: event.target.value,
       });
  
         console.log(this.state.comment);
    };

      addComment = () =>
      {
        this.setState({
          listOfComments: [...this.state.listOfComments, this.state.comment],
          comment:""
        });
        console.log(this.state.listOfComments);
      }
       likeMe = () => {
        if(this.state.buttonValue == "Like"){
          this.setState({
            buttonValue:"Liked"
          })
        }
        else
        {
          this.setState({
            buttonValue:"Like"
          })
        }

       }
      delete = (eachElm) =>{
        console.log(eachElm);
        let filtered = this.state.listOfComments.filter(eachComment =>{
                  console.log(eachComment);

            return eachElm !=eachComment
          })
        this.setState({
          listOfComments: filtered
        })
      }
 
  
        
  render()
   {
    return (
      <div style={{backgroundColor: 'white', height: '50px', marginTop: '10%'}}>

           

               <input type="text" onChange = {event => this.CommentFun(event)}
                 value = {this.state.comment} placeholder = "Enter Your Comment here..." style={{marginTop: '2%',
                 marginLeft: '20%'}}/>
                   
                 <button onClick ={this.addComment} style={{marginLeft:'2%'}}>Comment</button>
                 <button onClick ={this.likeMe} style={{marginLeft:'2%'}} >{this.state.buttonValue}</button>

                 {
                    this.state.buttonValue 
                 }

                 {
                    this.state.listOfComments.map(eachElm => (
                    <p style={{border:'2px solid green', padding: '5px'}}>{eachElm} <br/><button onClick={() => this.delete(eachElm)}>Delete</button></p>

                    ))
                }
                 

      </div>
    );
  }
}
export default Comments;