const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_mvc', 'root', '089110Eric', {
    host: 'localhost',
    dialect: 'mysql',
});

try {
    sequelize.authenticate();
    console.log('Conectado ao MySQL!');
} catch (error) {
    console.log(`Não foi possível connectar: ${error}`);
}

exports.default = sequelize;
