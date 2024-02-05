const router = require('express').Router();
const messageController = require('../controllers/MessageController');

// send a new message in a conversation
router.post('/:conversationId', async (req, res) => {
    // try {
    //     const result = await messageController.sendMessage(req.params.conversationId, req.body);
    //     res.json(result);
    // } catch (err) {
    //     res.status(500).send(err.message);
    // }
});

// get all messages in a conversation
router.get('/:conversationId', async (req, res) => {
    // TODO
});

// edit a message by its id
router.put('/:messageId', async (req, res) => {
    // TODO, lower priority
});

// delete a message by its id
router.delete('/:messageId', async (req, res) => {
    // TODO, lower priority
});

module.exports = router;