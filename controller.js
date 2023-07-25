const { users, orders, rests } = require('./data');

exports.restController = {
    getRests(req, res) {
        console.log(rests);
        res.json(rests);
    },
    addRest(req, res) {
        const { body } = req;
        rests.push(body);
        res.status(200).send(rests);
    },
    getOneRest(req, res) {
        const { id } = req.params;
        let restaurant;
        for (let i = 0; i < rests.length; i++) {
            if (rests[i].id == id) {
                restaurant = rests[i];
            }
        }
        res.json(restaurant);
    }
};

exports.userController = {};
exports.orderController = {};