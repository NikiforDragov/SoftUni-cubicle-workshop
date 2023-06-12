const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');

exports.register = (userData) => User.create(userData);

const SECRET = '0db63dc95c37caf5e7aef9923fdc814cb9ac2f91069f85103a10fbd03be0cd9b';

exports.login = async (username, password) => {

    const user = await User.findOne({ username });

    if (!user) {
        throw new Error('Cannot find username or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Cannot find username or password!');
    }

    const payload = {
        _id: user._id,
        username: user.username
    }

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' })

    return token
}