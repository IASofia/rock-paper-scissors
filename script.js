"use strict";

const resultDisplay = document.querySelector(".result");
const playerDisplay = document.querySelector(".player");
const computerDisplay = document.querySelector(".computer");

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
  let computerScore = 0;
  let gameOver = false;

  const buttons = document.querySelectorAll("button");
  buttons.forEach((b) =>
    b.addEventListener("click", (e) => {
      if (!gameOver) {
        const computerSelection = getComputerChoice();
        const playerSelection = e.target.classList.value;

        const result = playRound(playerSelection, computerSelection);
        if (result.winner === "player") playerScore++;
        else if (result.winner === "computer") computerScore++;

        resultDisplay.textContent = result.message;
        playerDisplay.textContent = playerScore;
        computerDisplay.textContent = computerScore;

        if (playerScore === 5) {
          resultDisplay.textContent = "You win the game";
          gameOver = true;
        }
        if (computerScore === 5) {
          resultDisplay.textContent = "You lost the game";
          gameOver = true;
        }
      }
    })
  );
}

game();
