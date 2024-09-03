const express = require('express');
const app = express();
const path = require('path');
const port = 3000; // variavel ambiente

const basePath = path.join(__dirname, 'templates');

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
