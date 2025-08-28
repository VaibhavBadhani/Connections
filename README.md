# Connections (TCP & UDP Examples)

This repo contains simple examples of creating TCP and UDP servers in Node.js to understand how socket connections work.

Files

TCPConnection.js → Demonstrates a stateful TCP server.
UDPConnection.js → Demonstrates a connectionless UDP server.


Usage
Clone and run:
                                    node TCPConnection.js
                                    or
                                    node UDPConnection.js



UDP Example (UDPConnection.js)
                                    Server code (simplified):
                                    const dgram = require("dgram")
                                    const socket = dgram.createSocket('udp4')

socket.on('message',(msg,rinfo) => {
    console.log(`server got ${msg} from ${rinfo.address}:${rinfo.port}`)
})

socket.bind(8081)

Test with netcat:
echo "hiii" | nc -w1 -u 127.0.0.1 8081






TCP Example (TCPConnection.js)

Server code (simplified):
const net = require("net")

const server = net.createServer(socket => {
    socket.write("Hello")
    socket.on("data",data => {
        console.log(data.toString())
    })
})

server.listen(8080)

Test with telnet:
telnet 127.0.0.1 8080




Key Concepts:

UDP: Connectionless, lightweight, best-effort delivery.
TCP: Stateful, reliable, guarantees delivery but more overhead.
