import React, { Component } from 'react'


export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Calvin',
            age: 34
        }


    }
    happybirthday= () =>{
        this.setState({age:this.state.age + 10})
    }

  render() {
    return (
      <div>
        Home
        <h2>This is  {this.state.name}'s' home page bio</h2>
        <p>{this.state.name} is {this.state.age} years old</p>
        <button type="button" class="btn btn-outline-secondary btn-lg" onClick={this.happybirthday}>click button to see age in ten years</button>
        

        


      </div>
    )
  }
}
