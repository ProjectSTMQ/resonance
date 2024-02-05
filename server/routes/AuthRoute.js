const router = require('express').Router();
const authController = require('../controllers/AuthController');
const sessionController = require('../controllers/SessionController');
const uuidv4 = require('uuid').v4;

router.post('/register', async (req, res) => {
    try {
        await authController.createUser(req.body);
        res.status(201).send();
    } catch (err) {
        console.log(err.message)
        res.status(400).send();
    }
});

router.post('/login', async (req, res) => {
    try {
        if (await authController.loginUser(req.body)) {
            // save session id in database and set it as a cookie
            const sessionId = uuidv4();
            await sessionController.createSession({ sessionId, username: req.body.username });

            res.cookie('sessionId', sessionId);
            res.status(200).send();
        } else {
            res.status(401).send();
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/logout', async (req, res) => {
    // still needs to be implemented
    // TODO: delete session id from database
});

module.exports = router;