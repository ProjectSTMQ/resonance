import ConversationModel from '../models/Conversation';

const createConversation = async (data: IConversation) => {
    if(data.participants.length === 2){
        data.type = "direct";
    } else {
        data.type = "group";
    }
    data.createdAt = new Date();

    const conversation = await ConversationModel.create(data);
    return conversation;
};

const getConversationsByUsername = async (username: string) => {
    return await ConversationModel.find({ participants: username });
};

const getConversationById = async (conversationId: string) => {
    return await ConversationModel.find({ conversationId: conversationId });
};

export default {
    createConversation,
    getConversationsByUsername,
    getConversationById
};