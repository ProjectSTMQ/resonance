import express from 'express';
import conversationController from '../../controllers/ConversationController';
import { authUser } from '../../middlewares/Auth';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();


// create a new conversation
router.post('/', authUser, async (req, res) => {
    try {
        const result = await conversationController.createConversation({
            conversationId: uuidv4(),
            participants: req.body.participants,
            // type: req.body.participants.length === 2 ? "direct" : "group",
            createdAt: new Date()
        });
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

// get all conversations (public listing)
router.get('/', authUser, async (req, res) => {
    try {
        const result = await conversationController.getConversations();
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

// // get all conversations for a specific user
// router.get('/', authUser, async (req, res) => {
//     try {
//         const result = await conversationController.getConversationsByUsername(req.username as string);
//         res.json(result);
//     } catch (err: unknown) {
//         if(err instanceof Error){
//             res.status(500).send(err.message);
//         }
//     }
// });

// join a conversation
router.post('/:conversationId/join', authUser, async (req, res) => {
    try {
        const result = await conversationController.joinConversation(req.params.conversationId, req.username as string);
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

// leave a conversation
router.post('/:conversationId/leave', authUser, async (req, res) => {
    try {
        const result = await conversationController.leaveConversation(req.params.conversationId, req.username as string);
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

export default router;
