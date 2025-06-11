import React, { Component } from "react";
import "./Game.css";

const actionMap = ["ROCK", "PAPER", "SCISSORS"];

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerVal: null,
      computerVal: null,
      playerScore: 0,
      compScore: 0,
    };
  }
  logic = (playerVal, computerVal) => {
    if (playerVal == computerVal) {
      return 0;
    } else if (
      (playerVal == "ROCK" && computerVal == "PAPER") ||
      (playerVal == "PAPER" && computerVal == "SCISSORS") ||
      (playerVal == "SCISSORS" && computerVal == "ROCK")
    ) {
      return 1;
    } else {
      return -1;
    }
  };
  decision = (playerChoice) => {
    const compChoice = actionMap[Math.floor(Math.random() * actionMap.length)];
    const val = this.logic(playerChoice, compChoice);
    if (val === 1) {
      this.setState({
        playerVal: playerChoice,
        computerVal: compChoice,
        compScore: this.state.compScore + 1,
      });
    }
    if (val === -1) {
      this.setState({
        playerVal: playerChoice,
        computerVal: compChoice,
        playerScore: this.state.playerScore + 1,
      });
    }
    if (val === 0) {
      this.setState({
        playerVal: playerChoice,
        computerVal: compChoice,
      });
    }
  };
  render() {
    const { playerVal, computerVal, playerScore, compScore } = this.state;
    return (
      <div className="flex flex-col items-center justify-center">
        <h1>Welcome to Rock, Paper & Scissors Game</h1>
        <div>
          <button
            onClick={() => this.decision("ROCK")}
            className={`fas fa-hand-rock`}
          >
            Rock
          </button>
          <button
            onClick={() => this.decision("PAPER")}
            className={`fas fa-hand-paper`}
          >
            Paper
          </button>
          <button
            onClick={() => this.decision("SCISSORS")}
            className={`fas fa-hand-scissors`}
          >
            Scissors
          </button>
        </div>
        <div className="content">
          <p>Your Choice: {playerVal}</p>
          <p>Computer Choice: {computerVal}</p>
          <h2>Your Score: {playerScore}</h2>
          <h2>Computer Score: {compScore}</h2>
        </div>
      </div>
    );
  }
}

export default Game;
