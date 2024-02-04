const TestModel = require('../models/Test');

const getAll = async () => {
    return await TestModel.find();
};

module.exports = { getAll };