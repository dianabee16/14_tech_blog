const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

router.get("/", async (req, res) => {
    try{
        const generalPosts = await Post.findAll({
            include: [User]
        })
        const posts = generalPosts.map((post) => post.get({plain: true}))
        res.render("generalPosts", {posts})

    }catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router