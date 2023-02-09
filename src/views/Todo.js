import React, { Component,useState, useEffect } from 'react'
import ToDoItem from '../componets/ToDoItem'



 export default class Todo extends Component {
    
  render() {
    return (
      
    <div>
        <h1>Todo List</h1>

        <form onSubmit={this.props.handleToDoSubmit}>
          <input placeholder='Add to my list' name='input'/>
          <button type='submit'>Add</button>
        </form>
        

        <ToDoItem myList = {this.props.myList} deleteToDo={this.props.deleteToDo}/>

        


      </div>
    )
  }
}


