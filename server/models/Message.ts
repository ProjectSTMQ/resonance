import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    messageId: {
        type: String,
        unique: true
    },
    conversationId: String, // Indicates what conversation does this message belong to
    sender: String, // User ID
    content: String,
    timestamp: Date
});

const MessageModel = mongoose.model('messages', messageSchema);

export default MessageModel;
