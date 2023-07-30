const Order = require("../models/order");
const mongoose = require('mongoose');
exports.orderController = {
    async getAllOrders(req, res) {
        try {
            const docs = await Order.find({});
            res.json(docs);
        } catch (err) {
            console.log(`Error loading the data from the db: ${err}`);
            res.status(500).json({ error: 'Error loading data from the database' });
        }
    },

    async getOneOrder(req, res) {
        const { id } = req.params;
        try {
            const doc = await Order.findById(id);
            if (!doc) {
                return res.status(404).json({ error: 'Order not found' });
            }
            res.json(doc);
        } catch (err) {
            console.log(`Error loading the data from the db: ${err}`);
            res.status(500).json({ error: 'Error loading data from the database' });
        }
    },

    async addOrder(req, res) {
        const { body } = req;
        try {
            const order = new Order(body);
            const result = await order.save();
            res.json(result);
            console.log(`Order added: ${result}`);
        } catch (err) {
            res.status(400).json({ error: 'Error creating the order' });
            console.log(`Error: ${err}`);
        }
    },

    async deleteOrder(req, res) {
        const { id } = req.params;
        try {
            const result = await Order.deleteOne(id);
            if (!result) {
                return res.status(404).json({ error: 'Order not found' });
            }
            res.json(result);
            console.log('Order deleted');
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Error deleting the order' });
        }
    }


}