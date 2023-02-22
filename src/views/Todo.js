import React, { Component, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import ToDoItem from '../componets/ToDoItem'



export default class Todo extends Component {
  constructor() {
    super();
    // this.state = {
    //     redirect:false
  }


  render() {
    // if (this.state.redirect === true) {
    //   return <Navigate to='/Todo' />


    return (
      <>

      <div>
        <h1>Todo List</h1>

        <form onSubmit={this.props.addToDo}>
          <input placeholder='Add to my list' name='input' />
          <button type='submit'>Add</button>
        </form>
      </div>
       

        <div className='container col-8'>
          <div className='row'>
            {this.props.myList.length === 0 ? <p className='text-center'>What to do?</p> : this.props.showToDo}
          </div>
          
          <div className='text-center my-2'>
            {this.props.myList.length === 0 ? <p></p> : <button onClick={this.props.removeFromList} className='btn btn-danger'>Remove All</button>}
          </div>


          <ToDoItem element ={ToDoItem}  myList={this.props.myList} addToDo={this.props.addToDo} deleteToDo={this.props.deleteToDo} />




        </div>
        
      </>
        )
  }
}


