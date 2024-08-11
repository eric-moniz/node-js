const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome'];
const profissao = args['profissao'];

console.log('O nome digitado no argumento é:', nome);
console.log(`A profissão de(a) ${nome} é: ${profissao}`);
