var express = require('express');
var router = express.Router();
// const mysql = require('mysql2/promise');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'test',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  return next
}); 
router.get('/abc',async function(req, res, next) {
  res.send('respond with a resource');
  return next
});                         
module.exports = router;
