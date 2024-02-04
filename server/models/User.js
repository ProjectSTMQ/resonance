const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;