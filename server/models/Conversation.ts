import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    // conversationId: mongoose.ObjectId,
    participants: [String], // User IDs
    type: String, // "direct" or "group"
    createdAt: Date
    // updatedAt: Date
});

const ConversationModel = mongoose.model('conversations', conversationSchema);

export default ConversationModel;
