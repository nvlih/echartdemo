var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Echart Demo' });
});


router.get('/getjson', function(req, res, next) {
  console.log('..respond with a resource');

  res.send('respond with a resource');
});

module.exports = router;
