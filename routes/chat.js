var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('chat', { title: 'Hey! You!!' });
});

router.post('/', function (req, res, next) {
    res.render('chat', {title:'hi'});
})

module.exports = router;
