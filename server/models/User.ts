import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    isAdmin: Boolean
});

const UserModel = mongoose.model('users', userSchema);

export default UserModel;
