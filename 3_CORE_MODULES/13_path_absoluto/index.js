const path = require('path');

// path absoluto
console.log(path.resolve('teste.txt'));

// formar um path
const midFolder = 'relatorios';
const fileName = 'dados.txt';

const finalPath = path.join('/', 'arquivos', midFolder, fileName);
console.log(finalPath);
