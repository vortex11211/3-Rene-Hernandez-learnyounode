import {filtrado} from "./6_modularFunction"
const directori=process.argv[2];
const end=process.argv[3];

filtrado(directori, end, (err:any,list:string[])=>{
    if (err) return console.error('Ha habido un error', err);
    list.forEach(element => {
        console.log(element)
        
    });
})