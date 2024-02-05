const sessionController = require('../controllers/SessionController');

const authUser = async (req, res, next) => {
    try {
        const sessionId = req.cookies.sessionId;
        if (!sessionId) {
            return res.status(401).send('Unauthorized');
        }

        // get username from database
        const userSession = await sessionController.getSession(sessionId);
        req.username = userSession.username;
        
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    authUser
};