const ConversationModel = require('../models/Conversation');

const createConversation = async (data) => {
    if(data.participants.length === 2){
        data.type = "direct";
    } else {
        data.type = "group";
    }
    data.createdAt = new Date();

    const conversation = await ConversationModel.create(data);
    return conversation;
};

const getConversationsByUsername = async (username) => {
    return await ConversationModel.find({ participants: username });
};

module.exports = {
    createConversation,
    getConversationsByUsername
};