const router = require('express').Router();
const testController = require('../controllers/Test');

router.get('/', async (req, res) => {
    try {
        const result = await testController.getAll();
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;