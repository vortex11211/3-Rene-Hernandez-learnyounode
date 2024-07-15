const http = require('http')
const map = require('through2-map')

const server = http.createServer((inStream, outStream) => {
    if (inStream.method != 'POST')
        return outStream.end('Send a POST\n');

    inStream.pipe(map((chunk) => {
        return chunk.toString().toUpperCase()
    })).pipe(outStream)

})

server.listen(Number(process.argv[2]))