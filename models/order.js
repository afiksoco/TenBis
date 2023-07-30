const {Schema, model} = require('mongoose');


const orderSchema = new Schema({
    id: {type: Number},
    price: {type: Number},
    dish_id: {type: Number},
    restaurant_id: {type: Number}
},{collection: 'orders'}
);

const Order =  model('Order', orderSchema);
module.exports = Order;