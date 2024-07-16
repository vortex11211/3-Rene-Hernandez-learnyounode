import * as http from 'http';
import through2_map = require('through2-map');

const server = http.createServer((inStream, outStream) => {
    if (inStream.method != 'POST')
        return outStream.end('Send a POST\n');

    inStream.pipe(through2_map((chunk:any) => {
        return chunk.toString().toUpperCase()
    })).pipe(outStream)

})

server.listen(Number(process.argv[2]))