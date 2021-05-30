const mysql = require('mysql')


var db = mysql.createConnection({
    host: "db4free.net",
    user: "tbl_thommangaden",
    password: "thommangaden",
    database: "db_thommangaden"
});

// var db = mysql.createConnection({
//     host: "localhost",
//     user: "tmr",
//     password: "12345",
//     database: "db_t"
//   });
  module.exports = db;
