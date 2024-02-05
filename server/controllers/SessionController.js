const SessionModel = require('../models/Session');

const createSession = async (data) => {
    return await SessionModel.create(data);
};

const getUsernameBySessionId = async (sessionId) => {
    return await SessionModel.findOne({ sessionId });
};

module.exports = {
    createSession,
    getUsernameBySessionId
};