"use strict";

const ROUNDS = 5;

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return { message: "It's a draw!", winner: "draw" };
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return { message: "You lose! Paper beats Rock", winner: "computer" };
    } else {
      return { message: "You win! Rock beats Scissors", winner: "player" };
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return { message: "You lose! Scissors beats Paper", winner: "computer" };
    } else {
      return { message: "You win! Paper beats Rock", winner: "player" };
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return { message: "You lose! Rock beats Scissors", winner: "computer" };
    } else {
      return { message: "You win! Scissors beats Paper", winner: "player" };
    }
  }
}

function game() {
  let playerScore = 0;

  for (let i = 0; i < ROUNDS; i++) {
    const playerSelection = prompt("Rock, paper or scissors? ");
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    result.winner === "player" && playerScore++;
    console.log(result.message);
  }
  if (playerScore >= 3) {
    console.log("You win the game!");
  } else {
    console.log("You lose the game!");
  }
}

game();
