const fs = require('fs');

const texto = fs.readFileSync(process.argv[2]);
const numeroLineas= texto.toString().split('\n').length-1;

console.log(numeroLineas);

