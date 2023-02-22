import React, { Component, useState, useEffect } from 'react'
import Nav from "./componets/Nav"
import Home from "./views/Home"
import Todo from "./views/Todo"
import Signup from "./views/Signup"
import Login from "./views/Login"
import Products from "./views/Products"
import Cart from './views/Cart'
import SingleItem from './views/SingleItem'
import ToDoItem from './componets/ToDoItem'
import { Routes, Route, BrowserRouter } from 'react-router-dom'



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      myList: [],
      new_info: '',
      myCart: [],
      user: {}
    }
  }

  logMeIn = (user) => {
    this.setState({user: user})
  };
  logMeOut = () => {
    this.setState({user: {}})
  };
  getCart = async () => {
    console.log(this.state.user.token)
    const res = await fetch('http://localhost:5000/api/mycart', {
      method: "GET",
                  
      headers: {
        Authorization: `Bearer ${this.state.user.token}`
      }
  });
  const data = await res.json()
    if (data.status==='ok'){
      this.setState({myCart: data.my_cart})
    }
  };

addToDo = (e) => {
  e.preventDefault()
  const Todo = e.target.ToDoItem
  this.setState( this.state.myList= [...this.state.myList,  {Todo: Todo} ])
};
deleteToDo = () => {
  this.setState({ myList: [] })
}

showToDo = () => {
    return this.state.myList.map((c, i) => { return <ToDoItem key={i} itemInfo={c} /> })
};

render() {

  return (
    <BrowserRouter>
      <div>
        <Nav user={this.state.user} logMeOut={this.logMeOut} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Todo' element={<Todo myList={this.state.myList} showToDo={this.showToDo} addToDo={this.addToDo} deleteToDo={this.deleteToDo} />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login user={this.state.user} logMeIn={this.logMeIn}/>} />
          <Route path='/Products' element={<Products />} />
          <Route path='/cart' element={<Cart myCart={this.state.myCart} user={this.state.user} getCart= {this.getCart} />} />
          <Route path='/shop/:item_id' element={<SingleItem user={this.state.user}/>} />

        </Routes>



      </div>
    </BrowserRouter>
  )
}
}


