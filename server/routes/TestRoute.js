const router = require('express').Router();
const testController = require('../controllers/TestController');

router.post('/create', async (req, res) => {
    try {
        const result = await testController.create(req.body);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/getAll', async (req, res) => {
    try {
        const result = await testController.getAll();
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const result = await testController.update(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const result = await testController.remove(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;