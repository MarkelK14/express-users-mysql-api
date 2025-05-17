const User = require('../models/users.model')

const getAll = async (req, res) => {
    const users = await User.selectAll();
    res.json(users);
}

const getById = async (req, res) => {
    // NOTE: Assuming the ID is a valid number and exists in the database:
    // const { id } = req.params;
    // const user = await Users.selectById(id);
    // if (user.length === 0) {
    //     return res.status(404).json({ message: 'User not found' });
    // }
    // res.json(user[0]); // Return the first element of the array - assuming the ID is unique and there is only one user with that ID

    // NOTE: Alternatively, if you want to use the middleware to check the ID:
    res.json(req.user); // Assuming req.user is set by the middleware
}

const create = async (req, res) => {
    const result = await User.insert(req.body);
    const newUser = await User.selectById(result.insertId);
    res.json(newUser); // Return the newly created user
}

const edit = async (req, res) => {
    const { userId } = req.params;
    const result = await User.updateById(userId, req.body);
    const user = await User.selectById(userId);
    res.json(user);
}

const remove = async (req, res) => {
    const { userId } = req.params;

    // NOTE: Assuming the ID is a valid number and exists in the database:
    // const resturante = await Restaurante.selectById(restauranteID);
    // await User.deleteById(userId);
    // res.json(resturante); // Return the restaurant that was deleted
    
    // NOTE: Alternatively, if you want to use the middleware to check the ID:
    await User.deleteById(userId);
    res.json(req.user); // Assuming req.user is set by the middleware
}

module.exports = { 
    getAll,
    getById,
    create,
    edit,
    remove
}