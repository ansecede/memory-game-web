const board = document.querySelector(".game-board");
const cardContainer = document.querySelector(".card-container");

async function createCards() {
  for (let i = 0; i < 35; i++) {
    const newCard = cardContainer.cloneNode(true, cardContainer);
    const [input2, front] = newCard.children;
    console.log(newCard.children);
    input2.setAttribute("id", `card${i}`);
    front.children[0].setAttribute("for", `card${i}`);
    newCard.addEventListener("click", (e) => {
      e.target.trans;
      // input.checked = true;
      e.target.style.pointerEvents = "none";
      // if (!flip) flipCardSound.play();
      // flip = true;
    });
    await addCardToBoardDelay(200);
    console.log("despues");
    board.appendChild(newCard);
  }
}
function addCardToBoardDelay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// createCards();
