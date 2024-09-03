const express = require('express');
const app = express();
const path = require('path');
const port = 3000; // variavel ambiente

const basePath = path.join(__dirname, 'templates');

// ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`);
});

app.post('/users/save', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);

    res.sendFile(`${basePath}/userForm.html`);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    // leitura da tabela users do banco de dados, resgatar um usuario do banco
    console.log(`O id que veio como parametro é: ${id}`);

    res.sendFile(`${basePath}/users.html`);
});

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => console.log(`App running on port ${port}`));
