import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  pingInterval: 2000,
  pingTimeout: 5000,
});

const CLIENT = "http://127.0.0.1:5500";
const PORT = 3333;

app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("client"));

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/main-menu", (_, res) => {
  res.render("menu", { foo: "bar" });
});
const players = {};

io.on("connection", (socket) => {
  console.log(`a user connected from ${socket.id}`);
  socket.on("mouse_position", (data) => {
    socket.broadcast.emit("mouse_activity", {
      session_id: socket.id,
      coords: data,
    });
  });

  players[socket.id] = {
    x: 500 * Math.random(),
    y: 500 * Math.random(),
    color: `hsl(${360 * Math.random()},100%,50%)`,
  };

  io.emit("updatePlayers", players);

  socket.on("disconnect", (reason) => {
    console.log(reason);
    delete players[socket.id];
    io.emit("updatePlayers", players);
  });

  console.log(players);
});

server.listen(PORT, () => {
  console.log(`Server started on:\n http://127.0.0.1:${PORT}`);
});
