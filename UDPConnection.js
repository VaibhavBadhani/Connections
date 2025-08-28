const dgram = require("dgram")
const socket = dgram.createSocket('udp4')

socket.on('message',(msg,rinfo) => {
    console.log(`server got ${msg} from ${rinfo.address}:${rinfo.port}`)
})

socket.bind(8081)




// echo "hiii" | nc -w1 -u 127.0.0.1 8081
// 1. `echo "hiii"` creates the message and pipes it to `nc`
// 2. `nc -u 127.0.0.1 8081` sends it via UDP to port 8081 on localhost
// 3. `-w1` makes netcat wait 1 second before closing the connection