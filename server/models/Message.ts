import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    messageId: { type: mongoose.Schema.Types.ObjectId },
    conversationId: { type: mongoose.Schema.Types.ObjectId }, // References the conversation collection
    sender: String, // User ID
    content: String,
    timestamp: Date
});

const MessageModel = mongoose.model('messages', messageSchema);

export default MessageModel;
