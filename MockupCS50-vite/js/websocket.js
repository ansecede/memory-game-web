import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:3333";
const opponentPointer = document.getElementById("opponent-pointer");

const socket = io(SERVER_URL);
let x, y;
document.addEventListener("mousemove", (ev) => {
  x = ev.pageX;
  y = ev.pageY;
  setTimeout(() => {
    socket.emit("mouse_position", { mx: x, my: y });
  }, 200);
});

socket.on("mouse_activity", (data) => {
  opponentPointer.style.left = `${data.coords.mx}px`;
  opponentPointer.style.top = `${data.coords.my}px`;
});
