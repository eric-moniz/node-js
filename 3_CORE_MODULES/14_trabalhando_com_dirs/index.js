const fs = require('fs');

if (!fs.existsSync('./minhapasta')) {
    console.log('Não existe!');
    console.log('Criando a pasta');
    fs.mkdirSync('minhapasta');
} else if (fs.existsSync('./minhapasta')) {
    console.log('Existe!');
}
