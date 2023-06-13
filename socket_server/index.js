const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

app.use(cors());

app.use(bodyParser.json());

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.post("/server", (request, response) => {
  io.emit("receive_message", request.body);
  response.status(201).json({ status: "reached" });
});

io.on("connection", (socket) => {
  io.to(socket.id).emit("socket_id", socket.id);

  socket.on("send_message", (messageData) => {
    socket.broadcast.emit("receive_message", messageData);
  });
});

server.listen(8081, () => {
  console.log(`Server is running on port 8081`);
});
