import { CARD_IMGS, CARD_QTY, addDelay, removeRandom } from "./state";

const board = document.querySelector(".game-board");
const cardContainer = document.querySelector(".card-container");

export default async function createCards() {
  const cardDeck = CARD_IMGS.flatMap((x) => [x, x]);
  for (let i = 0; i < CARD_QTY; i++) {
    // 35 para llenar el tablero
    const newCard = cardContainer.cloneNode(true, cardContainer);
    newCard.classList.remove("hidden");
    const img = document.createElement("img");
    const chosenImg = removeRandom(cardDeck);
    img.setAttribute("src", `${chosenImg.name}.svg`);
    img.setAttribute("alt", `${chosenImg.alt}`);
    // console.log(newCard.childNodes[1].childNodes[3].removeChild);
    newCard.childNodes[1].childNodes[3].appendChild(img);
    await addDelay(50);
    board.appendChild(newCard);
  }
}

// createCards();
