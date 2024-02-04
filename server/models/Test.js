const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const TestModel = mongoose.model('tests', testSchema);

module.exports = TestModel;