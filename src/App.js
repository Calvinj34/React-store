import React, { Component,useState,useEffect } from 'react'
import Nav from "./componets/Nav"
import Home from "./views/Home"
import Todo from "./views/Todo"
import Signup from "./views/Signup"
import Login from "./views/Login"
import { Routes, Route, BrowserRouter } from 'react-router-dom'



export default function App() {
  const [test, setTest] = useState(0);
  const [age, setAge] = useState(9000);
  const [myList, setMyList] = useState([]);
  const [user, setUser] = useState({});

  const logMeIn = (user) => {
      setUser(user)
  };
  const logMeOut = () => {
      setUser({})
  };


  const addToDo = (e) => {
      e.preventDefault();
      const text = e.target.myText.value
      setMyList(myList.concat([text]))
  };
  const deleteToDo = (indexToDelete) => {
      const copy = [...myList]
      copy.splice(indexToDelete, 1)
      setMyList(copy) 
  };



    return (
      <BrowserRouter>
      <div>
        <Nav/>

        <Routes>
          <Route path ='/' element={ <Home/>}/>
          <Route path ='/Todo' element={<Todo myList={this.state.myList} handleToDoSubmit={this.addToDo} deleteToDo={this.deleteToDo}/>}/>
          <Route path ='/Signup' element={<Signup />}/>
          <Route path ='/Login' element={<Login logMeIn={logMeIn}/>}/>
       
      </Routes>



      </div>
      </BrowserRouter>
    )
  }


