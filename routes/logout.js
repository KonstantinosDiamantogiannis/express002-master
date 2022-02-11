var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    connected = false;
    res.send(`You've logged out!`);
})

module.exports = router;