const fs = require('fs');
const { argv } = require('process');
const path = require('path')

//

let directori=process.argv[2];
let end= process.argv[3] 
let ext = '.'+ end.toString()
fs.readdir(directori, (err, contenido) =>{
    if (err) throw err;
   
       for(i=0; i<contenido.length ; i++) {
        if(path.extname(contenido[i])===ext){
            console.log(contenido[i])
        }
       }
    
       });


