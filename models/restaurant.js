const {Schema, model} = require('mongoose');

const adressSchema = new Schema({
    lng: {type: Number},
    lat: {type: Number}
});
const restaurantSchema = new Schema({
    id: {type: Number},
    name: {type: String},
    location: [adressSchema],
    stars: {type: Number},
}, {collection: 'restaurants'}
 );

const Restaurant = model('Restaurant', restaurantSchema);
//
module.exports = Restaurant;