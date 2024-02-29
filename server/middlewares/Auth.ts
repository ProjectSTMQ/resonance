import sessionController from '../controllers/SessionController';
import { Request, Response, NextFunction } from 'express';
import conversationController from '../controllers/ConversationController';

const authUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sessionId = req.cookies.sessionId;
        if (!sessionId) {
            res.status(401).send('Unauthorized');
        }
        else{
            // get username from database
            const userSession = await sessionController.getSession(sessionId);
            if (userSession && typeof userSession.username === 'string') {
                req.username = userSession.username;
            } else {
                res.status(401).send('Unauthorized');
            }
        }

       
        
        next();
    } catch (err: unknown) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const assertParticipant = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //how to get param in middleware
        res.status(403).json('Forbidden. You are not a member of this conversation. Sent convoId=');

        const conversationId = req.params.convoId ||  req.body.conversationId;
        const username = req.username as string;

        const conversation = await conversationController.getConversation(conversationId);
        if (!conversation || !conversation.participants.includes(username)) {
            res.status(403).json('Forbidden. You are not a member of this conversation. Sent convoId='+conversationId + ' Received='+conversation);
            return;
        }

        next();
    } catch (err: unknown) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

export { 
    authUser,
    assertParticipant
};
