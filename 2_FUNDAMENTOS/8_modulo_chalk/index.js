const chalk = require('chalk');

const nota = 6;

if (nota >= 7) {
    console.log(chalk.green(' Parabéns! você está aprovado '));
} else {
    console.log(chalk.bgRed.white.bold(' Você precisa fazer a prova de recuperação! '));
}
