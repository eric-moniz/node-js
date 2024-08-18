const fs = require('fs');

fs.rename('arquivo.txt', 'novo_nome.txt', err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Arquivo renomeado com sucesso');
});
