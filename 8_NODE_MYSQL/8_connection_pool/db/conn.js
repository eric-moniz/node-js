const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '089110Eric',
    database: 'nodemysql1',
});

module.exports = pool;
