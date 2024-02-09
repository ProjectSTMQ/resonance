import SessionModel from '../models/Session';

const createSession = async (data: ISession) => {
    return await SessionModel.create(data);
};

const deleteSession = async (sessionId: String) => {
    return await SessionModel.deleteOne({ sessionId: sessionId });
}

const getSession = async (sessionId: String) => {
    const session = await SessionModel.findOne({ sessionId: sessionId });
    _updateLastAccessed(sessionId);
    return session;
};

const _updateLastAccessed = async (sessionId: String) => {
    return await SessionModel.updateOne({ sessionId: sessionId }, { lastAccessed: new Date() });
};

export default {
    createSession,
    getSession,
    deleteSession
};