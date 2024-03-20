import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

const choice = {
  rock : {
    name : "Rock",
    img : "https://cdn-icons-png.flaticon.com/512/7218/7218790.png"
  },
  scissors : {
    name : "Scissors",
    img : "https://cdn-icons-png.flaticon.com/512/7218/7218708.png"
  },
  paper : {
    name : "Paper",
    img : "https://cdn-icons-png.flaticon.com/512/7218/7218720.png"
  }
}

export default class AppClass extends Component {
  constructor() {
    super()
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    }
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    })
  }

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  judgement = (user, computer) => {
    if ( user.name === computer.name ) {
      return "tie";
    } else if ( user.name === "Rock" ) 
      return computer.name === "Scissors"? "win" : "lose";
    else if (user.name === "Scissors" ) 
      return computer.name === "Paper"? "win" : "lose";
    else if (user.name === "Paper" )
    return computer.name === "Rock"? "win" : "lose";
  };

  render() {
    return (
      <div>
        <div className='title'>가위바위보 게임</div>
        <div className='main'>
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} /> 
        </div>
        <div className='button-area'>
          <button onClick={() => this.play("scissors")}><img src="https://cdn-icons-png.flaticon.com/512/7218/7218708.png" alt="" /></button>
          <button onClick={() => this.play("rock")}><img src="https://cdn-icons-png.flaticon.com/512/7218/7218790.png" alt="" /></button>
          <button onClick={() => this.play("paper")}><img src="https://cdn-icons-png.flaticon.com/512/7218/7218720.png" alt="" /></button>
        </div>
      </div>
    )
  }
}
