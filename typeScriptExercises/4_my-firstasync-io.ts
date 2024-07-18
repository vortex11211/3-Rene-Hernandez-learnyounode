import * as fs from 'fs'
import { argv } from 'process';

const archivo: string =process.argv[2];


fs.readFile(archivo, 'utf8',(err:any, data:string) => {
    if (err) throw err;
    console.log(data.toString().split('\n').length-1);
  });
