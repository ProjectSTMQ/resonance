const router = require('express').Router();
const conversationController = require('../controllers/ConversationController');
const { authUser } = require('../middlewares/Auth');

// create a new conversation
router.post('/', authUser, async (req, res) => {
    try {
        const result = await conversationController.createConversation(req.body);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// get all conversation ids for a specific user
router.get('/', authUser, async (req, res) => {
    try {
        const result = await conversationController.getConversationsByUsername(req.username);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// get a specific conversation by its id
router.get('/:conversationId', async (req, res) => {
    // TODO
});

module.exports = router;