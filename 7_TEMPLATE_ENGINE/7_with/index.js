const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
    const items = ['item a', 'item b', 'item c'];

    res.render('dashboard', { items });
});

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js ...',
        comments: 4,
    };

    res.render('blogpost', { post });
});

app.get('/', (req, res) => {
    const user = {
        name: 'Pedro',
        surname: 'Vasquez',
    };

    const palavra = 'Teste';

    const auth = true;

    const approved = false;

    res.render('home', { user, palavra, auth, approved });
});

app.listen(3000, () => console.log('App funcionando!'));
