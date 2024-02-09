import ConversationModel from '../models/Conversation';

const createConversation = async (data: IConversation) => {
    return await ConversationModel.create(data);
};

const getConversations = async () => {
    return await ConversationModel.find();
};

// const getConversationsByUsername = async (username: string) => {
//     return await ConversationModel.find({ participants: username });
// };

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
    getConversations,
    // getConversationsByUsername,
    joinConversation,
    leaveConversation
};