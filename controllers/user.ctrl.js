const User = require("../models/user");
const mongoose = require('mongoose');

exports.userController = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (err) {
            console.log(`Error loading the data from the db: ${err}`);
            res.status(500).json({ error: 'Error loading data from the database' });
        }
    },

    async getOneUser(req, res) {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            console.log(`Error loading the data from the db: ${err}`);
            res.status(500).json({ error: 'Error loading data from the database' });
        }
    },

    async addUser(req, res) {
        const { body } = req;
        try {
            const user = new User(body);
            const result = await user.save();
            res.json(result);
            console.log(`User added: ${result}`);
        } catch (err) {
            res.status(400).json({ error: 'Error creating the user' });
            console.log(`Error: ${err}`);
        }
    },

    async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const result = await User.deleteOne({ _id: id });
            if (result.deletedCount === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(result);
            console.log('User deleted');
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Error deleting the user' });
        }
    }
};
