import express from 'express';
import conversationController from '../../controllers/ConversationController';
import { authUser } from '../../middlewares/Auth';
import { validateParams, createPermissions } from '../../middlewares/Conversation';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
router.use(authUser); // All routes in this file require authentication

// create a new conversation
router.post('/', validateParams, createPermissions, async (req, res) => {
    try {
        
        const result = await conversationController.createConversation({
            conversationId: uuidv4(),
            participants: [req.username!],
            name: req.body.name,
            type: req.body.type,
            createdAt: new Date()
        });
        console.log(result)
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

// get all conversations (public listing)
router.get('/', async (req, res) => {
    try {
        const result = await conversationController.getAll();
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

// join a conversation
router.post('/join', async (req, res) => {
    try {
     
        const result = await conversationController.joinConversation(req.body.conversationId, req.username as string);

        if(!result){
   
            res.status(404).send('Join error - conversation not found');
        }
        else{
            res.json(result);
        }


        
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

// leave a conversation
router.post('/leave', async (req, res) => {
    try {
        const result = await conversationController.leaveConversation(req.body.conversationId, req.username as string);
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

export default router;
