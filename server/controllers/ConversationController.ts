import ConversationModel from '../models/Conversation';

const createConversation = async (data: any) => {
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

export default {
    createConversation,
    getConversationsByUsername
};