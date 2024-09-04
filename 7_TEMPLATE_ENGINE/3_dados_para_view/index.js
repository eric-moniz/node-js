const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const user = {
        name: 'Pedro',
        surname: 'Vasquez',
    };

    const palavra = 'Teste';

    res.render('home', { user, palavra });
});

app.listen(3000, () => console.log('App funcionando!'));
