var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


var Post = require('./Post');


router.post('/', function (req, res) {
    Post.create({
            mypost : req.body.mypost,
            name : req.body.name
        },
        function (err, post) {
            if (err) return res.status(500).send("There was a problem adding your new post.");
            res.status(200).send(post);
        });
});

router.get('/', function (req, res) {
    Post.find({}, function (err, posts) {
        if (err) return res.status(500).send("There was a problem loading posts.");
        res.status(200).send(posts);
    });
});



module.exports = router;
