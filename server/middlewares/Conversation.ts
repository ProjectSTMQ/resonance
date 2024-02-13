import { Request, Response, NextFunction } from 'express';
import userController from '../controllers/UserController';

const validateParams = (req: Request, res: Response, next: NextFunction) => {
    try {
        const participants = req.body.participants;
        if (!Array.isArray(participants) || participants.some((participant) => typeof participant !== 'string')) {
            res.status(400).send('Invalid participants');
        } else if (typeof req.body.name !== 'string') {
            res.status(400).send('Invalid name');
        } else if (req.body.type !== 'pinned' && req.body.type !== 'custom') {
            res.status(400).send('Invalid type');
        } else {
            next();
        }
    } catch (err: unknown) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

// check if (already logged in) user has admin permission
const createPermissions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(req.body.type === 'pinned') {
            const user = await userController.getUser(req.username as string);
            if(user && user.isAdmin === true) {
                next();
            } else {
                res.status(403).send('Forbidden. No permission to create pinned conversation.');
            }
        }
        else {
            next();
        }
    } catch (err: unknown) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

export { 
    validateParams,
    createPermissions
};
