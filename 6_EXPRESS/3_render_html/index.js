const express = require('express');
const app = express();
const path = require('path');
const port = 3000; // variavel ambiente

const basePath = path.join(__dirname, 'templates');

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => console.log(`App running on port ${port}`));
