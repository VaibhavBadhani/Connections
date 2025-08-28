
const net = require("net")

const server = net.createServer(socket => {
    socket.write("Hello")
    socket.on("data",data => {
        console.log(data.toString())
    })
})

server.listen(8080)




// In command Line 
// ➜  ~ telnet 127.0.0.1 8080    
// Trying 127.0.0.1...
// Connected to localhost.
// Escape character is '^]'.
// Hello
// hii


// When I stop the service, the connection is terminated by the foreign host.  // Connection closed by foreign host.
// This illustrates statefulness: once the connection is closed, all the data  
// maintained during that session is lost.


// TCP is stateful: while the connection is alive, it keeps track of session data (buffers, sequence numbers, etc.).

// Once the connection is closed, that state is lost — unless you (the developer) explicitly save it somewhere else (e.g., in a file, database, or memory cache).