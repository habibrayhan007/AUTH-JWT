const router = require("express").Router();
const { publicPosts, privetPosts } = require("../db");
const checkAuth = require("../middleware/checkAuth");

router.get('/public', (req, res) => {
    res.json(publicPosts);
})
router.get('/privet', checkAuth, (req, res) => {
    res.json(privetPosts);
})


module.exports = router;