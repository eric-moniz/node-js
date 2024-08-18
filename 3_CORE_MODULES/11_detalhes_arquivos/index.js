const fs = require('fs');

function stats(name) {
    fs.stat(name, (err, stats) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(`********** Detalhes de: "${name}" ***********`);
        console.log('É um arquivo?:', stats.isFile() ? 'sim' : 'não');
        console.log('É um diretório?:', stats.isDirectory() ? 'sim' : 'não');
        console.log('É um link?:', stats.isSymbolicLink() ? 'sim' : 'não');
        console.log('Data de criação:', stats.ctime);
        console.log('Tamanho do arquivo:', stats.size, 'bytes');
        console.log('*******************************************');
    });
}

stats('novoarquivo.txt');
stats('pasta');
