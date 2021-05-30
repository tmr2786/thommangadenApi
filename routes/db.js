var express = require('express');
var router = express.Router();
var db = require('../db')

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
router.get('/select/:id', (req, res) => {
  var sql
  var id = req.params.id;
  if (id > 0) {
    sql = "SELECT * FROM tbl_main WHERE id=?";
    db.query(sql, id, function (err, result) {
      if (err) throw err;
      res.send(result)
    })
  }
  else {
    sql = "SELECT tbl_main.id ,tbl_main.name ,tbl_main.address ,tbl_main.job ,tbl_main.phone,tbl_main.whatsApp ,tbl_main.localArea ,tbl_main.email, tbl_main.blood ,tbl_post.postName AS post ,tbl_panjayath.panjayathName AS panjayath ,tbl_district.districtName AS district ,tbl_state.stateName AS state ,tbl_main.fmlNo FROM tbl_main LEFT JOIN tbl_post ON tbl_main.post = tbl_post.id LEFT JOIN tbl_panjayath ON tbl_main.panjayath = tbl_panjayath.id LEFT JOIN tbl_district ON tbl_main.district = tbl_district.id LEFT JOIN tbl_state ON tbl_main.state = tbl_state.id ORDER BY tbl_main.id;";
    db.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result)
    })
  }
})


module.exports = router;
