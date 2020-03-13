const socketio = require("socket.io");

exports.setupWebsocket = server => {
  const io = socketio(server);
  io.on("connect", (socket) => {
    console.log(`conectou => ${socket.id}`);
    console.log('dados => ', socket.handshake.query);
  });
};
