const router = require("express").Router();

const users = require("./usersModel");

router.get("/", (req, res) => {
    users.find()
        .then(users => {
            res.status(200).json({ data: users, jwt: req.jwt });
        })
        .catch(err => res.send(err));
});

module.exports = router;