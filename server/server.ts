import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import db from './config/database';
import cookieParser from 'cookie-parser';
import path from 'path';
import http from 'http';

const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);
// const WebSocket = require('ws');
// const wss = new WebSocket.Server({ server });
const reactAppBuild = path.join(__dirname, '..', '..', 'client', 'dist'); // run `npm run build` in client folder to build

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.static(reactAppBuild));

// Api routes
import apiRoute from './routes/ApiRoute';
app.use('/api', apiRoute);

// Future (predefined) webpage routes?

// Routes for all other webpage get requests, react app handles with BrowserRouter
app.get('*', (req, res) => {
    res.sendFile(path.join(reactAppBuild, 'index.html'));
});

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