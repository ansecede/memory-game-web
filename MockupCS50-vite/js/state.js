export const CARD_QTY = 20;
export const CARD_IMGS = [
  {
    name: "airplane",
    alt: "Plane",
  },
  {
    name: "banana",
    alt: "Banana",
  },
  {
    name: "basketball",
    alt: "Basketball",
  },
  {
    name: "dog",
    alt: "Dog",
  },
  {
    name: "car",
    alt: "Car",
  },
  {
    name: "bird",
    alt: "Bird",
  },
  {
    name: "balloon",
    alt: "Balloon",
  },
  {
    name: "rocket",
    alt: "Rocket",
  },
  {
    name: "telescope",
    alt: "Telescope",
  },
  {
    name: "shoe",
    alt: "Shoe",
  },
  {
    name: "bike",
    alt: "Bike",
  },
  {
    name: "world",
    alt: "World",
  },
];

export const selectors = {
  boardContainer: document.querySelector(".board-container"),
  board: document.querySelector(".board"),
  moves: document.querySelector(".moves"),
  timer: document.querySelector(".timer"),
  start: document.querySelector("button"),
  win: document.querySelector(".win"),
};

export const state = {
  gameStarted: false,
  flippedCards: 0,
  totalFlips: 0,
  totalTime: 0,
  loop: null,
};

export function addDelay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function removeRandom(array) {
  while (array.length) {
    const random = Math.floor(Math.random() * array.length);
    const eliminated = array.splice(random, 1)[0];
    return eliminated;
  }
}

export function getImageName() {}
