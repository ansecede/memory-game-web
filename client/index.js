import Player from "./js/Player.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const socket = io();

const scoreEl = document.querySelector("#scoreEl");

const devicePixelRatio = window.devicePixelRatio || 1;

canvas.width = innerWidth * devicePixelRatio;
canvas.height = innerHeight * devicePixelRatio;

const x = canvas.width / 2;
const y = canvas.height / 2;

const clientPlayers = {};

socket.on("updatePlayers", (serverPlayers) => {
  for (const id in serverPlayers) {
    const serverPlayer = serverPlayers[id];

    if (!clientPlayers[id]) {
      clientPlayers[id] = new Player({
        x: serverPlayer.x,
        y: serverPlayer.y,
        color: serverPlayer.color,
      });
    }
  }

  for (const id in clientPlayers) {
    if (!serverPlayers[id]) {
      delete clientPlayers[id];
    }
  }

  console.log(clientPlayers);
});

const opponentPointer = document.getElementById("opponent-pointer");

document.addEventListener("mousemove", (ev) => {
  const xPos = ev.pageX;
  const yPos = ev.pageY;
  for (const id in clientPlayers) {
    clientPlayers[id].updatePosition(xPos, yPos);
  }

  setTimeout(() => {
    socket.emit("mouse_position", { mx: xPos, my: yPos });
  }, 100);
});

socket.on("mouse_activity", (data) => {
  opponentPointer.style.left = `${data.coords.mx}px`;
  opponentPointer.style.top = `${data.coords.my}px`;
});

let animationId;
function animate() {
  animationId = requestAnimationFrame(animate);
  c.fillStyle = "rgba(0, 0, 0, 0.1)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  for (const id in clientPlayers) {
    const clientPlayer = clientPlayers[id];
    clientPlayer.draw(c);
  }
}

animate();
