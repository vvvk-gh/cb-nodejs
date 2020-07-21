//everytime you reload the socketid changes
let socket = io()

let boomBtn = document.getElementById('boom')

boomBtn.onclick = function() {
    //emit event into a socket
    socket.emit('boom')
}