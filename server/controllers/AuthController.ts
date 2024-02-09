import UserModel from '../models/User';
import bcrypt from 'bcrypt';

const createUser = async (data: IUser) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(data.password, salt);
    return await UserModel.create({ username: data.username, password: hashedPassword });
};

const loginUser = async (data: IUser) => {
    const user = await UserModel.findOne({ username: data.username });
    if (!user) return false;
    return await bcrypt.compare(data.password, user.password as string); // Check if password matches hashed password
};

export default {
    createUser,
    loginUser
};