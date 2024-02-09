import express from 'express';
import authController from '../../controllers/AuthController';
import sessionController from '../../controllers/SessionController';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        await authController.createUser(req.body);
        res.status(201).send();
    } catch (err: unknown) {
        if(err instanceof Error){
            console.log(err.message)
        }
        res.status(400).send();
    }
});

router.post('/login', async (req, res) => {
    try {
        if (await authController.loginUser(req.body)) {
            // save session id in database and set it as a cookie
            const sessionId = uuidv4();
            await sessionController.createSession({ 
                sessionId: sessionId,
                username: req.body.username,
                lastAccessed: new Date()
            });

            res.cookie('sessionId', sessionId);
            res.status(200).send();
        } else {
            res.status(401).send();
        }
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

router.post('/logout', async (req, res) => {
    await sessionController.deleteSession(req.cookies.sessionId);
    res.clearCookie('sessionId');
    res.status(200).json({ message: 'You are logged out.' });
});

export default router;
