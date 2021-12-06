const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const validationResult = require('express-validator').validationResult;

const maxAge = 24 * 60 * 60 * 1000;

const createToken = (user) => {
    const payload = {
        user: {
            id: user.id
        }
    };
    return jwt.sign(payload, "config.get('jwtSecret')", { expiresIn: maxAge });
}


module.exports.signUp = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }
    const { email, password } = req.body;
    console.log(email, password);
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(422).json({
                errors: [{
                    msg: 'User already exists'
                }]
            });
        }
        user = await User.create({ email: email, password: password });
        token = createToken(user);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
        res.json({id: user.id, email: user.email});

    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
};

module.exports.Login = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }
    const { email, password } = req.body;
    console.log(email, password);
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(422).json({
                errors: [{
                    msg: 'Invalid credentials'
                }]
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(422).json({
                errors: [{
                    msg: 'Invalid credentials'
                }]
            });
        }
        
        token = createToken(user);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
}

module.exports.Logout = function(req, res) {
    res.cookie('jwt', '', { maxAge: 1 });
    res.send('Logged out');
}

module.exports.deleteUser = async (req, res, next) => {
    try {
        console.log(req.params.email);
        await User.deleteOne({ email: req.params.email});
        res.json({ msg: 'User deleted' });
    } catch (err) {
        console.log(req.params.email);
        console.error(err.message);
        res.status(500).send(err.message);
    }
}