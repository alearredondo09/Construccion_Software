const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    // usuario que creaste, nunca tiene que llegar a producción
    user: 'root',
    database: 'database_name',
    // no debe de estar y nunca tiene que llegar a producción
    password: '',
});

// se crea una promesa para las conexiones
module.exports = pool.promise();