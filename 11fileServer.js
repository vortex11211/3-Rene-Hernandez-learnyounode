const http = require('http')
const fs =require('fs');
const portNumber= process.argv[2];
const archive= process.argv[3];

     let server = http.createServer((req, res) =>{
       fs.createReadStream(archive).pipe(res)
     });
     server.listen(portNumber,()=>{console.log('Server listening on http://localhost:%s',portNumber)})

