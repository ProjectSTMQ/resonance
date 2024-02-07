import express from 'express';
import conversationController from '../controllers/ConversationController';
import { authUser } from '../middlewares/Auth';

const router = express.Router();


// create a new conversation
router.post('/', authUser, async (req, res) => {
    try {
        const result = await conversationController.createConversation(req.body);
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

// get all conversation ids for a specific user
router.get('/', authUser, async (req, res) => {
    try {
        const result = await conversationController.getConversationsByUsername(req.username as string);
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

// get a specific conversation by its id
router.get('/:conversationId', async (req, res) => {
    // TODO
});

export default router;
