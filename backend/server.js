const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('dotenv').config();

require('./connection');
const server = http.createServer(app);
const {Server} = require('socket.io');


const io = new Server(server, {
  cors: '*',
  methods:'*'
})


const formRoutes = require('./routes/Formroute');
app.use(cors());
app.use(express.json());
app.use('/form', formRoutes);

server.listen(4000, () => {
  console.log("server running at port", 4000);
});

app.set("socketio", io);