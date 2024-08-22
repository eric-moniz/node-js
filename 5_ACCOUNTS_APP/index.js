// modulos externos
const inquirer = require('inquirer');
const chalk = require('chalk');

// modulos internos
const fs = require('fs');

operation();

function operation() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'O que você deseja fazer?',
                choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair'],
            },
        ])
        .then(answear => {
            const action = answear['action'];

            console.log(action);
        })
        .catch(err => console.log(chalk.bgRed.white.bold(err)));
}
