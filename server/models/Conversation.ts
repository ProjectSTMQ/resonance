import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    conversationId: {
        type: String,
        unique: true
    },
    participants: [String], // User IDs
    name: String,
    type: String, // indicate "pinned" or "custom"
    createdAt: Date
    // updatedAt: Date
});

const ConversationModel = mongoose.model('conversations', conversationSchema);

export default ConversationModel;
