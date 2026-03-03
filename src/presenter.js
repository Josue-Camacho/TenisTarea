import Tennis from "./tennis.js";

const tennis = new Tennis();

const scoreElement = document.querySelector("#score");
const player1Btn = document.querySelector("#player1-btn");
const player2Btn = document.querySelector("#player2-btn");

function updateScore() {
  scoreElement.innerText = tennis.score();
}

player1Btn.addEventListener("click", () => {
  tennis.player1Scores();
  updateScore();
});

player2Btn.addEventListener("click", () => {
  tennis.player2Scores();
  updateScore();
});