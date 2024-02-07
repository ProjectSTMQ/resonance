import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        unique: true
    },
    username: String,
    lastAccessed: Date
});

const SessionModel = mongoose.model('sessions', sessionSchema);

export default SessionModel;
