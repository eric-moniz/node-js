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

            if (action === 'Criar Conta') {
                createAccount();
            } else if (action === 'Depositar') {
            } else if (action === 'Consultar Saldo') {
            } else if (action === 'Sacar') {
            } else if (action === 'Sair') {
                console.log(chalk.bgBlue.black.bold(' Obrigado por usar o Accounts! '));
                process.exit();
            }
        })
        .catch(err => console.log(chalk.bgRed.white.bold(err)));
}

// create an account
function createAccount() {
    console.log(chalk.bgGreen.black.bold('Parabéns por escolher nosso banco!'));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));

    buildAccount();
}

function buildAccount() {
    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Digite um nome para sua conta',
            },
        ])
        .then(answear => {
            const accountName = answear['accountName'];

            console.info(accountName);

            if (!fs.existsSync('accounts')) {
                fs.mkdirSync('accounts');
            }

            if (fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(chalk.bgRed.black.bold('Esta conta já existe, escolha outro nome!'));
                buildAccount();
                return;
            }

            fs.writeFileSync(`accounts/${accountName}.json`, '{ "balance": 0 }', function err() {
                console.log(chalk.bgRed.white.bold(err));
            });

            console.log(chalk.green('Parabéns, sua conta foi criada com sucesso!'));
            operation();
        })
        .catch(err => console.log(chalk.bgRed.white.bold(err)));
}
