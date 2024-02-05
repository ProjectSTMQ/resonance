const SessionModel = require('../models/Session');

const createSession = async (data) => {
    return await SessionModel.create(data);
};

const deleteSession = async (sessionId) => {
    return await SessionModel.deleteOne({ sessionId });
}

const getSession = async (sessionId) => {
    const session = await SessionModel.findOne({ sessionId });
    _updateLastAccessed(sessionId);
    return session;
};

const _updateLastAccessed = async (sessionId) => {
    return await SessionModel.updateOne({ sessionId }, { lastAccessed: new Date() });
};

module.exports = {
    createSession,
    getSession,
    deleteSession
};