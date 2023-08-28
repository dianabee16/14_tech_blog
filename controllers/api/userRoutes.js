const router = require('express').Router();
const {User} = require('../../models');

router.post("/", async(req, res) => {
    try{
        const createUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.userId = createUser.id;
            req.session.username = createUser.username;
            req.session.loggedIn = true;
            res.json(createUser)
        })

    }catch(err){
        res.status(500).json(err)
    }
})