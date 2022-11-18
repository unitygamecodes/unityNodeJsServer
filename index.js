const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const hostnam = '0.0.0.0';
const portnum = process.env.PORT || 5000;

server.on('error', (err) => {

    console.log(`server error:\n${err.stack}`);
    server.close();

});


server.on('message', (msg, senderInfo) => {

    console.log('Messages received '+ msg)

    server.send(msg,senderInfo.port,senderInfo.address,()=>{
      
        console.log(`Message sent to ${senderInfo.address}:${senderInfo.port}`)
    
    })

});


server.on('listening', () => {

    const address = server.address();

    console.log(`Game server listening on:  ${address.address}:${address.port}`);

});


server.bind(portnum);
