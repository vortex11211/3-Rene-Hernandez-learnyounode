const http = require('http');
const bl = require('bl')
pages=[]
let i=0
let j=0
let count=0


function printResults(){
    for (i=0; i<3;i++){
        console.log(pages[i])
};
}
 
function getPage(index){
  http.get(process.argv[index+2], (response)=>{
    response.pipe(bl(function (err, data){
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





