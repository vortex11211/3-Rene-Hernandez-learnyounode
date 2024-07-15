import * as fs from 'fs';
import * as path from 'path';

export function filtrado(directori:string, extension:string, callback:any){
    let end:string ='.'+extension.toString();
    let list=[];
    fs.readdir(directori, (err, contenido)=>{
        if (err)return callback(err);
        let i:number=0
        for(i;i<contenido.length;i++){
            if(path.extname(contenido[i])===end){
                list.push(contenido[i]);
            }
        }
        callback(null,list)
    })
}