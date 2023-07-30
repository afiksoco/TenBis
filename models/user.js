const {Schema, model} = require('mongoose');

const historySchema = new Schema({
    order_id: {type: Number},
    date: {type: Date}
});

const userSchema = new Schema({
    id: {type: Number},
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    balance: {type: Number},
    history: [historySchema]
}, {collction: 'users'});

const User = model('User', userSchema);
module.exports = User;