const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const hbs = exphbs.create({
    partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// definindo local para os assets (css, img, etc)
app.use(express.static('public'));

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

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Lorem ipsum',
            comments: 2,
        },
        {
            title: 'Aprender Ciência de dados',
            category: 'Python',
            body: 'Lorem ipsum',
            comments: 5,
        },
        {
            title: 'Aprender React',
            category: 'JavaScript',
            body: 'Lorem ipsum',
            comments: 8,
        },
        {
            title: 'Aprender Angular',
            category: 'JavaScript',
            body: 'Lorem ipsum',
            comments: 1,
        },
        {
            title: 'Aprender BootStrap',
            category: 'JavaScript',
            body: 'Lorem ipsum',
            comments: 10,
        },
    ];

    res.render('blog', { posts });
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
