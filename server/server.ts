import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import db from './config/database';
const PORT = process.env.PORT;
import cookieParser from 'cookie-parser';

import http from 'http';
const server = http.createServer(app);
// const WebSocket = require('ws');
// const wss = new WebSocket.Server({ server });
import path from 'path';

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join('../client', 'dist'))); // Connect react app build - run `npm run build` in client folder

// Routes
// const testRoute = require('./routes/TestRoute');
import authRoute from './routes/AuthRoute';
import conversationRoute from './routes/ConversationRoute';
import messageRoute from './routes/MessageRoute';
// app.use('/tests', testRoute);
app.use('/auth', authRoute);
app.use('/conversations', conversationRoute);
app.use('/messages', messageRoute);

// wss.on('connection', ws => {
//     ws.on('message', async message => {
//         // Parse the message as JSON
//         const data = JSON.parse(message);

//         // Use the MessageController to save the message to the database
//         const savedMessage = await MessageController.createMessage(data);

//         // Broadcast the saved message to all connected clients
//         wss.clients.forEach(client => {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(JSON.stringify(savedMessage));
//             }
//         });
//     });
// });

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    db.connectToDatabase();
    // db.createCollection('tests');
    db.createCollection('users');
    db.createCollection('conversations');
    db.createCollection('messages');
    db.createCollection('sessions');
    db.createTTLIndex('sessions', 'lastAccessed', 1800); // Expire after 30 minutes
});