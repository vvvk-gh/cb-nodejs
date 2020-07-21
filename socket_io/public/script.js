//everytime you reload the socketid changes
let socket = io()

let boomBtn = document.getElementById('boom')

boomBtn.onclick = function() {
    //from the client to the server
    socket.emit('boom')
}

//from server to the client : check server.js first
socket.on('whizz' , ()=>{
    let div = document.createElement('div')
    div.innerText = 'Whizz'
    document.body.appendChild(div)
})