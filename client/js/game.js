const card = document.querySelector(".card-container");
const input = document.querySelector(".onclick-faker");
const opponentPointer = document.getElementById("opponent-pointer");
const flipCardSound = new Audio("./drums.mp3");
let flip = false;
const cards = ["", "", "", "", ""];

card.addEventListener("click", (e) => {
  input.checked = true;
  e.target.style.pointerEvents = "none";
  // if (!flip) flipCardSound.play();
  flip = true;
});
