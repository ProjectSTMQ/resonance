import express from 'express';
import messageController from '../../controllers/MessageController';
import { authUser, assertParticipant } from '../../middlewares/Auth';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
router.use(authUser); // All routes in this file require authentication
router.use('/:convoId', assertParticipant); 

// create a new message in a conversation
router.post( '/:convoId', async (req, res) => {
    try {
        const result = await messageController.createMessage({
            messageId: uuidv4(),
            conversationId: req.body.conversationId,
            sender: req.username as string,
            content: req.body.content,
            timestamp: new Date()
        });
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

// get all messages in a conversation
router.get('/:convoId', async (req, res) => {
    
    try {

        const result = await messageController.getMessagesByConversationId(req.params.convoId!);
        res.json(result);

    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

// edit a message by its id
// router.put('/:messageId', async (req, res) => {
//     // TODO, lower priority
// });

// delete a message by its id
// router.delete('/:messageId', async (req, res) => {
//     // TODO, lower priority
// });

export default router;
