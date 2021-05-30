var express = require('express');
var router = express.Router();
var db = require('../db')


router.get('', function (req, res, next) {
    var sql = 'CREATE TABLE tbl_main (id int NOT NULL AUTO_INCREMENT,name varchar(30) , address varchar(20)  ,job varchar(20)  ,phone bigint  ,whatsApp bigint  ,email varchar(40)  ,blood tinyint  ,localArea varchar(20)  ,post smallint  ,panjayath smallint  ,district tinyint  ,state tinyint  ,regNo tinyint  ,fmlNo varchar(20)  ,fthFmlNo varchar(20)  ,PRIMARY KEY (id))';
    var sql1 = 'CREATE TABLE tbl_post (id int NOT NULL AUTO_INCREMENT,postName varchar(20) NOT NULL,code varchar(30) NOT NULL,PRIMARY KEY (id))';
    var sql2 = 'CREATE TABLE tbl_panjayath (id int NOT NULL AUTO_INCREMENT,panjayathName varchar(20) NOT NULL,PRIMARY KEY (id))'; 
    var sql3 = 'CREATE TABLE tbl_district (id int NOT NULL AUTO_INCREMENT,districtName varchar(20) NOT NULL,PRIMARY KEY (id))';
    var sql4 = 'CREATE TABLE tbl_state (id int NOT NULL AUTO_INCREMENT,stateName varchar(20) NOT NULL,PRIMARY KEY (id))';
      db.query(sql, function (err, result) {
        db.query(sql1, function (err, result) {
          db.query(sql2, function (err, result) {
            db.query(sql3, function (err, result) {
              db.query(sql4, function (err, result) {
                if (err) throw err;
              })
              if (err) throw err;
            })
            if (err) throw err;
          })
          if (err) throw err;
        })
        if (err) throw err;
         res.send(result)
      })
  });

  module.exports = router;