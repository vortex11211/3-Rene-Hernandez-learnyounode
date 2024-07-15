const fs = require('fs');
const { argv } = require('process');

let archivo=process.argv[2];


fs.readFile(archivo, (err, data) => {
    if (err) throw err;
    console.log(data.toString().split('\n').length-1);
  });
