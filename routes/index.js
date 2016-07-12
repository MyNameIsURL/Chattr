var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var rooms = ['Javascript', 'Angular', 'React', 'NodeJs'];
  var users = ['Bill', 'Ted', 'Phil'];
  res.render('index', { title: 'Chat App', rooms: rooms, users: users });
});

module.exports = router;
