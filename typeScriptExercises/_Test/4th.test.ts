import * as fs from 'fs'
import path from 'path'

const archivo=path.resolve(__dirname,'../../lluvia.txt');

let numberLines:number =0
describe('4_my-firstasync-io',()=>{
    it('Should work properly',()=>{
        fs.readFile(archivo, 'utf8',(err:any, data:string) => {
            if (err) throw err;
            numberLines=(data.toString().split('\n').length-1);
            expect(numberLines).toBe(3)
        });  
    })
})

