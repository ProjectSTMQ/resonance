import MessageModel from '../models/Message';

const createMessage = async (data: IMessage) => {
    return await MessageModel.create(data);
};

const getMessagesByConversationId = async (conversationId: string) => {
    return await MessageModel.find({ conversationId: conversationId });
};

export default{
    createMessage,
    getMessagesByConversationId
};