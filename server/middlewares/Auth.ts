import sessionController from '../controllers/SessionController';
import { Request, Response, NextFunction } from 'express';

const authUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sessionId = req.cookies.sessionId;
        if (!sessionId) {
            return res.status(401).send('Unauthorized');
        }

        // get username from database
        const userSession = await sessionController.getSession(sessionId);
        if (userSession && typeof userSession.username === 'string') {
            req.username = userSession.username;
        } else {
            return res.status(401).send('Unauthorized');
        }
        
        next();
    } catch (err: unknown) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
};

export { authUser };
