const net = require('net');
let port = process.argv[2];


function insertZero(n){
    if (n<10) return '0'+n
    else return ''+n
    
}

function now() {
    let fecha = new Date();
    return fecha.getFullYear() + '-' +
        insertZero((fecha.getMonth() + 1) )+ '-' +
        insertZero(fecha.getDate()) + ' ' +
        insertZero(fecha.getHours() )+ ':' +
        insertZero(fecha.getMinutes())
}

const server = net.createServer((socket) => {
    socket.end(now()+'\n')
})

server.listen(Number(port),()=>{
    console.log(`Servidor conectado en el puerto ${port}`)
});




