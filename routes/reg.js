var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.post('/insert', (req, res) => {
    console.log(req.body);
    db.beginTransaction(function (err) {
        if (err) { throw err; }
        var post = req.body.post
        var sql = 'SELECT MAX(regNo) FROM tbl_main WHERE post=?;'
        db.query(sql,post, function (err, result) {
            if (err) {
                db.rollback(function () {
                    throw err;
                });
            }
            console.log(result[0]['MAX(regNo)']);
            //  var log = 'Post ' + result.insertId + ' added';
            var rgNo=result[0]['MAX(regNo)']+1
            var fmlno=req.body.code+rgNo
            var data = {
                name: req.body.fullName, address: req.body.address, job: req.body.job, phone: req.body.phone,
                whatsApp: req.body.whatsApp, email: req.body.email, blood: req.body.blood, localArea: req.body.area,
                post: req.body.post, panjayath: req.body.panjayath, district: req.body.district, state: req.body.state, regNo: rgNo, fmlNo: fmlno, fthFmlNo: 1
            }
            var sql = 'INSERT INTO tbl_main SET ?'
            db.query(sql, data, function (err, result) {
                if (err) {
                    db.rollback(function () {
                        throw err;
                    });
                }
                db.commit(function (err) {
                    if (err) {
                        db.rollback(function () {
                            throw err;
                        });
                    }
                    console.log('success!');
                    return res.send(result)

                });
            });
        });
    });
});
router.put('/update/:id', function(req, res) {
    console.log(req.body );
    var data = {
        name: req.body.fullName, address: req.body.address, job: req.body.job, phone: req.body.phone,
        whatsApp: req.body.whatsApp, email: req.body.email, blood: req.body.blood, localArea: req.body.area,
        post: req.body.post, panjayath: req.body.panjayath, district: req.body.district, state: req.body.state,
    }
    var id = req.params.id;
        var sql = 'UPDATE tbl_main SET ? WHERE id = ?'
    db.query(sql,[ data,id], function (err, result) {
        if (err) {
          throw err
        }
        return res.send(result)
    });
  }); 

module.exports = router;