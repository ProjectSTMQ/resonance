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

const createCollection = async (collectionName) => {
    try {
        await mongoose.connection.createCollection(collectionName);
        console.log(`Collection '${collectionName}' created successfully`);
    } catch (err) {
        console.error(`Error creating collection '${collectionName}':`, err);
    }
};

// Create TTL index on collectionName.fieldName
const createTTLIndex = async (collectionName, fieldName, expireAfterSeconds) => {
    try {
        const db = mongoose.connection; // Get the database connection
        await db.collection(collectionName).createIndex(
            { [fieldName]: 1 },
            { expireAfterSeconds: expireAfterSeconds }
        );
        console.log(`TTL index created on '${collectionName}.${fieldName}' with expireAfterSeconds: ${expireAfterSeconds}`);
    } catch (err) {
        console.error(`Error creating TTL index on '${collectionName}.${fieldName}':`, err);
    }
};

module.exports = {
    connectToDatabase,
    disconnectFromDatabase,
    createCollection,
    createTTLIndex
};