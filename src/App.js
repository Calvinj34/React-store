import React, { Component, useState, useEffect } from 'react'
import Nav from "./componets/Nav"
import Home from "./views/Home"
import Todo from "./views/Todo"
import Signup from "./views/Signup"
import Login from "./views/Login"
import Products from "./views/Products"
import Cart from './views/Cart'
import SingleItem from './views/SingleItem'
import { Routes, Route, BrowserRouter } from 'react-router-dom'



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      myList: [],
      user: {
        token: 'fddsajkldsajkl',
        username: 'fhdskjhfsjkhfsd'
      }
    }
  }

addToDo = (e) => {
  e.preventDefault();
  const text = e.target.myText.value
  this.setState({ myList: this.state.myList.concat([text]) })
};
deleteToDo = (indexToDelete) => {
  const copy = [...this.state.myList]
  copy.splice(indexToDelete, 1)
  this.setState({ myList: copy })
}

render() {

  return (
    <BrowserRouter>
      <div>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Todo' element={<Todo myList={this.state.myList} handleToDoSubmit={this.addToDo} deleteToDo={this.deleteToDo} />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/cart' element={<Cart myCart={Cart} />} />
          <Route path='/Products/:itemID' element={<SingleItem/>} />

        </Routes>



      </div>
    </BrowserRouter>
  )
}
}


