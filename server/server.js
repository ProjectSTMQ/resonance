const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/database');
const PORT = process.env.PORT;
// const path = require('path');

// Middlewares
app.use(express.json());
// app.use(express.static(path.join('../client', 'build'))); // Connect react app build

// Controllers
// const testController = require('./controllers/TestController');

// Routes
const testRoute = require('./routes/TestRoute');
const authRoute = require('./routes/AuthRoute');

app.use('/tests', testRoute);
app.use('/auth', authRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    db.connectToDatabase();
    db.createCollection('tests');
    db.createCollection('users');
});