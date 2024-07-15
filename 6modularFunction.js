const fs = require('fs');
const path = require('path')


module.exports= function filtrado(directori, extension,callback)
{
  let end ='.'+ extension.toString()
let list=[];
fs.readdir(directori, (err, contenido) =>{
    if (err) return callback(err);
   
       for(i=0; i<contenido.length ; i++) {
        if(path.extname(contenido[i])===end){
            list.push(contenido[i]);
        }
    }
       callback(null,list)
       
       }
      );
      
     };



