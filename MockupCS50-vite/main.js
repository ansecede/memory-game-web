import createCards from "./js/createCards";
import { addDelay } from "./js/state";
import "./css/style.css";
import { addPointScore } from "./js/uiHandlers";
import { selectors, state } from "./js/state";

let choices = [];
let points = 0;
const score = document.getElementById("score");
//para pruebas
const div = document.createElement("div");
div.style.pointerEvents = "";

async function main() {
  await createCards();
  const cards = document.querySelectorAll(".card");
  const frontFaceCards = document.querySelectorAll(".front");

  frontFaceCards.forEach((frontFace, index) => {
    const actualCard = cards[index];
    const img = actualCard.children[1].children[0];
    frontFace.addEventListener("click", () => {
      actualCard.style.transform = "rotateY(180deg)";
      actualCard.style.pointerEvents = "none";
      const name = img.getAttribute("alt");
      choices.push({ index, name });
    });
  });

  // Main loop for the game
  setInterval(async () => {
    if (choices.length === 2) {
      if (choices[0].name === choices[1].name) {
        let currentScore = parseInt(score.innerText);
        currentScore++;
        score.innerText = currentScore;
      } //addPointScore();
      document.body.style.pointerEvents = "none";
      await addDelay(1600);
      choices.forEach((choice) => {
        cards[choice.index].style.transform = "";
        cards[choice.index].style.pointerEvents = "auto";
      });
      document.body.style.pointerEvents = "auto";
      choices = [];
    }
  }, 1000);
}

const startGame = () => {
  state.gameStarted = true;
  selectors.start.classList.add("disabled");

  state.loop = setInterval(() => {
    state.totalTime++;

    selectors.moves.innerText = `${state.totalFlips} moves`;
    selectors.timer.innerText = `time: ${state.totalTime} sec`;
  }, 1000);
};

main();
