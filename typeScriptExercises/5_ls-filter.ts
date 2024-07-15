import * as fs from 'fs'
import { argv } from 'process';;
import * as path from 'path';

//

let directori =process.argv[2];
let end:string= process.argv[3] ;
let ext:string = '.'+ end.toString();

fs.readdir(directori, (err, contenido) =>{
    if (err) throw err;
   let i:number =0
       for(i; i<contenido.length ; i++) {
        if(path.extname(contenido[i])===ext){
            console.log(contenido[i])
        }
       }
    
       });
