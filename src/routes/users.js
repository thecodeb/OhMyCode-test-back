/**
 * Route: /api
 */

// Requires

const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Routes

/**
 * Ruta para validar el login de un usuario
 */

router.post("/usuarios/login", async(req, res) => {
    const { username, password } = req.body;
    const searchedUser = await User.findOne({ username: username });
    if (searchedUser) {
        let token = jwt.sign({ _id: searchedUser._id }, 'secretKey');
        searchedUser.password === password ?
            res.status(200).send({
                uid: searchedUser._id,
                jwt: token
            }) :
            res.sendStatus(401);
    } else if (searchedUser === null) {
        res.sendStatus(404);
    }
});

/**
 * Ruta para devolver la información de un usuario
 */

router.get('/usuarios/:id', async(req, res) => {
    const searchedUser = await User.findById(req.params.id);
    if (searchedUser) {
        res.status(200).send({
            user: searchedUser
        });
    } else {
        res.sendStatus(404);
    }

});

// Exports

module.exports = router;