const http = require('http');
let web=process.argv[2];
let cadena='';

http.get(web,(response)=>{
response.on('data',(chunk)=>{
    cadena+=chunk
});
response.on('end',()=>{
    console.log(cadena.length);
    console.log(cadena)
})
} );
