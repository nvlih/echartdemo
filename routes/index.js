var express = require('express');
var router = express.Router();
var fs = require("fs") ;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Echart Demo' });
});


router.get('/getjson', function(req, res, next) {
  fs.readFile("tree.json","utf8",function (error,data){
    res.send(data);
  }) ;
});

router.get('/mytree', function(req, res, next) {

   // res.send(data);

});
module.exports = router;
