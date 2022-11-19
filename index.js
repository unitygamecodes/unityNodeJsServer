const express = require('express');
const dgram = require('dgram');

const PORT = process.env.PORT || 3000
// ...

const app = express();

// ... filter stack ...

const socket = dgram.createSocket('udp4');

socket.on('listening', () => {
  let addr = socket.address();
  console.log(`Listening for UDP packets at ${addr.address}:${addr.port}`);
});

socket.on('error', (err) => {
  console.error(`UDP error: ${err.stack}`);
});

socket.on('message', (msg, rinfo) => {
  console.log('Recieved UDP message');
});

app.set('port', PORT); // listen for TCP with Express
socket.bind(PORT);     // listen for UDP with dgram
