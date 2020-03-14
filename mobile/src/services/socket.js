import socketio from "socket.io-client";

const socket = socketio("http://192.168.15.13:3333", { autoConnect: false });

function connect(latitude, longitude, techs) {
  socket.io.opts.query = { latitude, longitude, techs};
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.connect();
  }
}

function subscribeToNewDevelopers(subscribeFunction) {
  socket.on('new-developer', subscribeFunction);
}

export { connect, disconnect, subscribeToNewDevelopers };
