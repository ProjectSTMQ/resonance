import express from 'express';
import testController from '../controllers/TestController';

const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        const result = await testController.create(req.body);
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

router.get('/getAll', async (req, res) => {
    try {
        const result = await testController.getAll();
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const result = await testController.update(req.params.id, req.body);
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const result = await testController.remove(req.params.id);
        res.json(result);
    } catch (err: unknown) {
        if(err instanceof Error){
            res.status(500).send(err.message);
        }
    }
});

export default router;
