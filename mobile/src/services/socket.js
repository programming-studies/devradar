import socketio from "socket.io-client";

const socket = socketio("http://192.168.15.13:3333", { autoConnect: false });

function connect() {
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.connect();
  }
}

export { connect, disconnect };
