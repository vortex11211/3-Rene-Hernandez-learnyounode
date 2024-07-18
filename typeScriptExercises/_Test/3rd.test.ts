import * as fs from 'fs'
import path from 'path'

const myfirstio=(args:string[]):number=>{
const texto=fs.readFileSync(args[0],'utf-8');
const numeroLineas:number=texto.toString().split('\n').length-1;
return numeroLineas}

describe('my-first-io',()=>{
    it('Should return the number of lines correctly',()=>{
        const filePath =path.resolve(__dirname,'../../lluvia.txt');
        const args = [filePath]
        const result= myfirstio(args);
        expect(result).toBe(3);
    })
})