import ConversationModel from '../models/Conversation';

const createConversation = async (data: IConversation) => {
    return await ConversationModel.create(data);
};

const getAll = async () => {
    return await ConversationModel.find();
};

const getConversation = async (conversationId: string) => {
    return await ConversationModel.findOne({ conversationId: conversationId });
};

const joinConversation = async (conversationId: string, username: string) => {
    const conversation = await ConversationModel.findOne({ conversationId });
    if (conversation && !conversation.participants.includes(username)) { // Not a participant yet
        return await ConversationModel.updateOne({ conversationId }, { $push: { participants: username } });
    }
    return conversation;
};


const leaveConversation = async (conversationId: string, username: string) => {
    const conversation = await ConversationModel.findOne({ conversationId });
    if (conversation && conversation.participants.includes(username)) { // Is a participant
        return await ConversationModel.updateOne({ conversationId: conversationId }, { $pull: { participants: username } });
    }
    return conversation;
};

export default {
    createConversation,
    getAll,
    getConversation,
    joinConversation,
    leaveConversation
};