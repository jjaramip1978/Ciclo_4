const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is already in use'],
        index: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters'],
        maxlength: [32, 'Password must be at most 32 characters'],
        //validate: [isPassword, 'Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character'],
    },
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User;