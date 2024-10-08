const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`);
});

router.post('/save', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);

    res.sendFile(`${basePath}/userForm.html`);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    // leitura da tabela users do banco de dados, resgatar um usuario do banco
    console.log(`O id que veio como parametro é: ${id}`);

    res.sendFile(`${basePath}.html`);
});

module.exports = router;
