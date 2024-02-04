const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/database');
const PORT = process.env.PORT;

// Middlewares
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Controllers
// const testController = require('./controllers/Test');

// Routes
const testRoute = require('./routes/Test');

app.use('/tests', testRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    db.connectToDatabase();
    db.createCollection('tests');
});