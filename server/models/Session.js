const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        unique: true
    },
    username: String,
    lastAccessed: Date
});

const SessionModel = mongoose.model('sessions', sessionSchema);

module.exports = SessionModel;