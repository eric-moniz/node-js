const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const User = require('./models/User');

const app = express();

// pegar os dados do body
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/users/create', (req, res) => {
    res.render('adduser');
});

app.post('/users/create', async (req, res) => {
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if (newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    }

    await User.create({ name, occupation, newsletter });

    res.redirect('/');
});

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw: true, where: { id } });

    res.render('userview', { user });
});

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id;

    await User.destroy({ where: { id } });

    res.redirect('/');
});

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw: true, where: { id } });

    res.render('useredit', { user });
});

app.post('/users/update', async (req, res) => {
    const { id, name, occupation } = req.body;
    let newsletter = req.body.newsletter;

    if (newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    }

    const userData = {
        id,
        name,
        occupation,
        newsletter,
    };

    await User.update(userData, { where: { id } });

    res.redirect('/');
});

app.get('/', async (req, res) => {
    const users = await User.findAll({ raw: true });

    res.render('home', { users });
});

conn
    //.sync({force: true}) refaz a construção das tabelas, mas perde-se os dados cadastrados!!!
    .sync()
    .then(() => {
        app.listen(3000, () => console.log('Server running...'));
    })
    .catch(err => console.log(err));
