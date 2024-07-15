import * as http from 'http';
let web:string =process.argv[2];
let cadena:string='';

http.get(web,(response)=>{
response.on('data',(chunk:string)=>{
    cadena+=chunk
});
response.on('end',()=>{
    console.log(cadena.length);
    console.log(cadena)
})
} );