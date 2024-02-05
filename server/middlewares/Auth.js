const sessionController = require('../controllers/SessionController');

const authUser = async (req, res, next) => {
    const sessionId = req.cookies.sessionId;
    if (!sessionId) {
        return res.status(401).send('Unauthorized');
    }

    // get username from database
    const usernameSession = await sessionController.getUsernameBySessionId(sessionId);
    req.username = usernameSession.username;
    
    next();
};

module.exports = {
    authUser
};