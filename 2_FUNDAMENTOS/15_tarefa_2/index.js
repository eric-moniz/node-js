const chalk = require('chalk');
const inquirer = require('inquirer');

console.clear();
inquirer
    .prompt([
        {
            name: 'p1',
            message: 'Digite o nome de usuário:',
        },
        {
            name: 'p2',
            message: 'Digite sua idade:',
        },
    ])
    .then(answears => {
        if (!answears.p1) {
            throw 'O nome de usuário não pode estar vazio!';
        }

        const idade = parseInt(answears.p2);
        if (isNaN(idade)) {
            throw ' A idade inserida é inválida! ';
        } else if (idade < 18) {
            throw ' A idade precisa ser maior de 18 anos! ';
        }

        console.log(
            chalk.bgYellow.black(
                ` Seu nome de usuário é ${answears.p1}, esua idade é ${idade} anos. `
            )
        );
    })
    .catch(err => console.log(chalk.bgRed(err)));
