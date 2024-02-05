const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    messageId: mongoose.ObjectId,
    conversationId: mongoose.ObjectId, // References the conversation collection
    sender: String, // User ID
    content: String,
    timestamp: Date
});

const MessageModel = mongoose.model('messages', messageSchema);

module.exports = MessageModel;