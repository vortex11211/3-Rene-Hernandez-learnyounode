import * as http from 'http'
import {BufferListStream}  from 'bl'

let pages:string[]=[]
let i: number =0
let j:number =0
let count:number =0


function printResults(){
    for (i=0; i<3;i++){
        console.log(pages[i])
};
}
 
function getPage(index:number){
  http.get(process.argv[index+2], (response)=>{
    response.pipe(BufferListStream(function(err, data){
        if(err)
            return console.error(err)
        pages[index]=data.toString()
        count++
        if (count===3)
            printResults()
    }))
  })
}

for (j=0; j<3;j++)
    getPage(j)

