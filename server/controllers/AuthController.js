const UserModel = require('../models/User');
const bcrypt = require('bcrypt');

const createUser = async (data) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(data.password, salt);
    return await UserModel.create({ username: data.username, password: hashedPassword });
};

const loginUser = async (data) => {
    const user = await UserModel.findOne({ username: data.username });
    return await bcrypt.compare(data.password, user.password); // Check if password matches hashed password
};

module.exports = {
    createUser,
    loginUser
};