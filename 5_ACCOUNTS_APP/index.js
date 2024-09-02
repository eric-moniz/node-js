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
        .then(answer => {
            const action = answer['action'];

            if (action === 'Criar Conta') {
                createAccount();
            } else if (action === 'Depositar') {
                deposit();
            } else if (action === 'Consultar Saldo') {
                getAccountBalance();
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
        .then(answer => {
            const accountName = answer['accountName'];

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

// add an amount to user account
function deposit() {
    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?',
            },
        ])
        .then(answer => {
            const accountName = answer['accountName'];

            // verify if account exists
            if (!checkAccount(accountName)) {
                return deposit();
            }

            inquirer
                .prompt([
                    {
                        name: 'amount',
                        message: 'Quanto você deseja depositar?',
                    },
                ])
                .then(answer => {
                    const amount = answer['amount'];

                    // add an amount
                    addAmount(accountName, amount);
                    operation();
                })
                .catch(err => console.log(chalk.bgRed.white.bold(err)));
        })
        .catch(err => console.log(chalk.bgRed.white.bold(err)));
}

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black.bold('Esta conta não existe, escolha outro nome!'));
        return false;
    }

    return true;
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName);

    if (!amount) {
        console.log(chalk.red('Não foi inserido um valor, tente novamente!'));
        return deposit();
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), err =>
        console.log(chalk.bgRed.white.bold(err))
    );

    console.log(chalk.green(` Foi depositado o valor de R$${amount} na sua conta! `));
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf-8',
        flag: 'r',
    });

    return JSON.parse(accountJSON);
}

// show account balance
function getAccountBalance() {
    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?',
            },
        ])
        .then(answer => {
            const accountName = answer['accountName'];

            // verifu if account exists
            if (!checkAccount(accountName)) {
                return getAccountBalance();
            }

            const accountData = getAccount(accountName);

            console.log(
                chalk.bgBlue.black(` Olá, o saldo da sua conta é de R$${accountData.balance} `)
            );
            operation();
        })
        .catch(err => console.log(chalk.bgRed.white.bold(err)));
}
