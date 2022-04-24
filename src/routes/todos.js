/**
 * Route: /api
 */

// Requires

const router = require("express").Router();
const { isAuth } = require("../helpers/auth");
const Register = require("../models/Register");

// Routes

/**
 * Ruta para obtener la data de la BBDD
 */

router.get("/todos", async(req, res) => {
    const authToken = JSON.stringify(req.headers.authorization);
    if (isAuth(authToken)) {
        const result = await Register.find();
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send({
                msg: "ERROR: Not found",
            });
        }
    } else {
        res.sendStatus(403);
    }
});

/**
 * Ruta para obtener un registro concreto de la BBDD
 */

router.get("/todos/:id", async(req, res) => {
    const authToken = JSON.stringify(req.headers.authorization);
    if (isAuth(authToken)) {
        const result = await Register.find({ user: req.params.id });
        if (result) {
            res.status(200).send({
                data: result,
            });
        } else {
            res.status(404).send({
                msg: "ERROR: Not found",
            });
        }
    } else {
        res.sendStatus(403);
    }
});

/**
 * Ruta para añadir un nuevo registro
 */

router.post("/todos/new", async(req, res) => {
    const authToken = JSON.stringify(req.headers.authorization);
    if (isAuth(authToken)) {
        const { user, title, completed } = req.body;
        const newRegister = new Register({ user, title, completed });
        await newRegister.save();
        res.send({
            status: 200,
            msg: "Successfull",
        });
    } else {
        res.send({
            status: 403,
            msg: "Forbiden access!",
        });
    }
});

/**
 * Ruta para modificar un registro
 */

router.put("/todos/modificar/:id", async(req, res) => {
    const authToken = JSON.stringify(req.headers.authorization);
    if (isAuth(authToken)) {
        await Register.findByIdAndUpdate(req.params.id, req.body);
        res.send({
            status: 200,
            msg: 'Successful'
        });
    } else {
        res.sendStatus(403);
    }
});

/**
 * Ruta para eliminar un registro
 */

router.delete("/todos/:id", async(req, res) => {
    const authToken = JSON.stringify(req.headers.authorization);
    if (isAuth(authToken)) {
        await Register.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
});

// Exports

module.exports = router;