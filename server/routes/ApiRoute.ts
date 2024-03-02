import express from 'express';
import authRoute from './api/AuthRoute';
import conversationRoute from './api/ConversationRoute';
import messageRoute from './api/MessageRoute';
const router = express.Router();

router.use('/auth', authRoute);
router.use('/conversations', conversationRoute);
router.use('/messages/', messageRoute);

export default router;