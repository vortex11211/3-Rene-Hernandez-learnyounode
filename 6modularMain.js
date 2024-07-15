const filtrado = require('./6modularFunction')
let directori=process.argv[2];
let end= process.argv[3] 



filtrado(directori,end,(err,list)=>{
    if (err) return console.error('Ha habido un error',err);
   list.forEach(element => {
    console.log(element)
    
   });
       
    })
;

