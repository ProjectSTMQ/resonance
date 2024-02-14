import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import db from './config/database';
import cookieParser from 'cookie-parser';
import path from 'path';
import http from 'http';
import conversationController from './controllers/ConversationController';

const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { pingInterval: 2000, pingTimeout: 5000 });
const reactAppBuild = path.join(__dirname, '..', '..', 'client', 'dist'); // run `npm run build` in client folder to build

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.static(reactAppBuild));

// Api routes
import apiRoute from './routes/ApiRoute';
import { Socket } from 'socket.io';
app.use('/api', apiRoute);

// Future (predefined) webpage routes?

// Routes for all other webpage get requests, react app handles with BrowserRouter
app.get('*', (req, res) => {
    res.sendFile(path.join(reactAppBuild, 'index.html'));
});

io.on('connection', (socket : Socket) => {
    //let controller handle everything
    conversationController.conversationWebsocketController(socket , io);

});

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