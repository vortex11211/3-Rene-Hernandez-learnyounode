import * as fs from 'fs'
const texto=fs.readFileSync(process.argv[2]);
const numeroLineas:Number=texto.toString().split('\n').length-1;
console.log(numeroLineas)