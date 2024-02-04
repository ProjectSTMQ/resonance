const router = require('express').Router();
const authController = require('../controllers/AuthController');

router.post('/register', async (req, res) => {
    try {
        await authController.createUser(req.body);
        res.status(201).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/login', async (req, res) => {
    try {
        if (await authController.loginUser(req.body)) {
            res.status(200).send();
        } else {
            res.status(401).send();
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;