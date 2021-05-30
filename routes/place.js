var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.post('/post', function (req, res, next) {
  data = {
    postName: req.body.name, code: req.body.code
  }
  var sql = 'INSERT INTO tbl_post SET ?'
  db.query(sql, data, function (err, result) {
    if (err) throw err;
    return res.send(result)
  })
});
router.post('/panjayath', function (req, res, next) {
  data = {
    panjayathName: req.body.name
  }
  var sql = 'INSERT INTO tbl_panjayath SET ?'
  db.query(sql, data, function (err, result) {
    if (err) throw err;
    return res.send(result)
  })
});
router.post('/district', function (req, res, next) {
  data = {
    districtName: req.body.name
  }
  var sql = 'INSERT INTO tbl_district SET ?'
  db.query(sql, data, function (err, result) {
    if (err) throw err;
    return res.send(result)
  })
});
router.post('/state', function (req, res, next) {
  data = {
    stateName: req.body.name
  }
  var sql = 'INSERT INTO tbl_state SET ?'
  db.query(sql, data, function (err, result) {
    if (err) throw err;
    return res.send(result)
  })
});
router.get('/select/post/:id', (req, res) => {
  var sql
  var id = req.params.id;
  if (id > 0) {
    sql = "SELECT * FROM tbl_psot WHERE id=?";
    db.query(sql, id, function (err, result) {
      if (err) throw err;
     return res.send(result)
    })
  }
  else {
    sql = "SELECT * FROM tbl_post";
    db.query(sql, function (err, result) {
      if (err) throw err;
     return res.send(result)
    })
  }
})
router.get('/select/panjayath/:id', (req, res) => {
  var sql
  var id = req.params.id;
  if (id > 0) {
    sql = "SELECT * FROM tbl_panjayath WHERE id=?";
    db.query(sql, id, function (err, result) {
      if (err) throw err;
     return res.send(result)
    })
  }
  else {
    sql = "SELECT * FROM tbl_panjayath";
    db.query(sql, function (err, result) {
      if (err) throw err;
     return res.send(result)
    })
  }
})
router.get('/select/district/:id', (req, res) => {
  var sql
  var id = req.params.id;
  if (id > 0) {
    sql = "SELECT * FROM tbl_district WHERE id=?";
    db.query(sql, id, function (err, result) {
      if (err) throw err;
     return res.send(result)
    })
  }
  else {
    sql = "SELECT * FROM tbl_district";
    db.query(sql, function (err, result) {
      if (err) throw err;
     return res.send(result)
    })
  }
})
router.get('/select/state/:id', (req, res) => {
  var sql
  var id = req.params.id;
  if (id > 0) {
    sql = "SELECT * FROM tbl_state WHERE id=?";
    db.query(sql, id, function (err, result) {
      if (err) throw err;
     return res.send(result)
    })
  }
  else {
    sql = "SELECT * FROM tbl_state";
    db.query(sql, function (err, result) {
      if (err) throw err;
     return res.send(result)
    })
  }
})
module.exports = router;