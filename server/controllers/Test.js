const TestModel = require('../models/Test');

const create = async (data) => {
    return await TestModel.create(data);
};

const getAll = async () => {
    return await TestModel.find();
};

const update = async (id, data) => {
    return await TestModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id) => {
    return await TestModel.findByIdAndDelete(id);
};

module.exports = {
    getAll,
    create,
    update,
    remove
};