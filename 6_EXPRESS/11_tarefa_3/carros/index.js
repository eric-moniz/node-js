const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../templates');

router.get('/lista', (req, res) => {
    res.sendFile(`${basePath}/carros.html`);
});

module.exports = router;
