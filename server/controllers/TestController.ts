import TestModel from '../models/Test';

const create = async (data: any) => {
    return await TestModel.create(data);
};

const getAll = async () => {
    return await TestModel.find();
};

const update = async (id: String, data: any) => {
    return await TestModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: String) => {
    return await TestModel.findByIdAndDelete(id);
};

export default {
    getAll,
    create,
    update,
    remove
};