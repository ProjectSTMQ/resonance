import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const TestModel = mongoose.model('tests', testSchema);

export default TestModel;
