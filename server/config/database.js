const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING + process.env.DB_NAME);
        console.log('Connected to the database');
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
};

const disconnectFromDatabase = async () => {
    try {
        await mongoose.disconnect();
        console.log('Disconnected from the database');
    } catch (err) {
        console.error('Error disconnecting from the database:', err);
    }
};

module.exports = {
    connectToDatabase,
    disconnectFromDatabase
};