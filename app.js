const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "RESULT_DRAW";
const RESULT_PLAYER_WIN = "RESULT_PLAYER_WIN";
const RESULT_COMPUTER_WIN = "RESULT_COMPUTER_WIN";

let isGameRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `Choose ${ROCK}, ${PAPER} or ${SCISSORS} for you! `,
    ""
  ).toUpperCase();
  if (selection != ROCK && selection != PAPER && selection != SCISSORS) {
    alert(`We have choosen ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};
const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN;

startGameBtn.addEventListener("click", () => {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  console.log("The computer choses " + computerChoice);
  console.log("The player chooses " + playerSelection);
  const winner = getWinner(computerChoice, playerSelection);
  console.log("Winner is " + winner);
});
