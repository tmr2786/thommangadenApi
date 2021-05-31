var mysql = require('mysql2');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'example.org',
    user: 'bob',
    password: 'secret',
    database: 'my_db'
});
// var pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'example.org',
//     user: 'bob',
//     password: 'secret',
//     database: 'my_db'
// });

module.exports = pool;
