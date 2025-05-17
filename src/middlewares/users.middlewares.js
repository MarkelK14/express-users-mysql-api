const User = require('../models/users.model');

const checkUserId = async (req, res, next) => {
    const { userId } = req.params;
    if(isNaN(userId) || userId <= 0) {
        return res.status(400).json({ message: 'The user ID must be a positive number' });
    }

    const result = await User.selectById(userId);
    if (!result) {
        return res.status(404).json({ message: 'The user ID does not exist' });
    }

    req.user = result;

    next();
}

module.exports = { checkUserId }