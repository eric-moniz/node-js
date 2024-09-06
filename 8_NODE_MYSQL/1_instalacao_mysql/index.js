const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '089110Eric',
    database: 'nodemysql1',
});

conn.connect(err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Connected to DB');
    app.listen(3000, () => console.log('Server running...'));
});
