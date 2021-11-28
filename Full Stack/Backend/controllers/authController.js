const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const validationResult = require('express-validator').validationResult;


module.exports.signUp = async (req, res, next) => {
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
        user = await User.create({ email, password });
        res.json({id: user.id, email: user.email});
        // const payload = {
        //     user: {
        //         id: user.id
        //     }
        // };
        // jwt.sign(
        //     payload,
        //     config.get('jwtSecret'),
        //     { expiresIn: 360000 },
        //     (err, token) => {
        //         if (err) throw err;
        //         res.json({ token });
        //     }
        // );
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
        const payload = {
            user: {
                id: user.id
            }
        };
        console.log(payload);
        // jwt.sign(
        //     payload,
        //     config.get('jwtSecret'),
        //     { expiresIn: 360000 },
        //     (err, token) => {
        //         if (err) throw err;
        //         res.json({ token });
        //     }
        // );
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
}

module.exports.Logout = function(req, res) {
    req.logout();
    res.json({ msg: 'Success' });
}