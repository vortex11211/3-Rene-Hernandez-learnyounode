import * as http from 'http';
import * as fs from 'fs';
const portNumber:string= process.argv[2];
const archive:string= process.argv[3];

let server= http.createServer((req,res)=>{
    fs.createReadStream(archive).pipe(res)
});
server.listen(portNumber,()=>{console.log('Server listening on http://localhost:%s',portNumber)})