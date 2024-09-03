const express = require('express');
const app = express();
const path = require('path');

const port = 5000; // variavel ambiente

const carros = require('./carros');

const basePath = path.join(__dirname, 'templates');

// ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

// arquivos estáticos
app.use(express.static('public'));

// uso do router na rota carros
app.use('/carros', carros);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => console.log(`App running on port ${port}`));
