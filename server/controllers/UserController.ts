import UserModel from '../models/User';

const getUser = async (username: string) => {
    return await UserModel.findOne({ username: username });
};

export default {
    getUser
};