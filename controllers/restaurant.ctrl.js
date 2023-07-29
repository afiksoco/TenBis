const Restaurant = require("../models/restaurant");
const mongoose = require("mongoose");

exports.restController = {
    async getAllRestaurants(req, res) {
        try {
            const docs = await Restaurant.find({});//to filter {id: {$grt:8}}
            res.json(docs);
        } catch (err) {
            console.log(`Error loading the data from the db: ${err}`);
        }
    },
    async getOneRestaurant(req, res) {
        try {
            const docs = await Restaurant.find({});
            res.json(dosc);
        } catch (err) {
            console.log(`Error loading the data from the db: ${err}`);
        }
    },
    async addRestuarant(req, res) {
        const {body} = req;
        try {
            const rest = new Restaurant(body);
            const result = await rest.save();
            res.json(result);
            console.log(`rest added ${result}`);
        } catch (err) {
            res.status(404).json(err)
            console.log(`error:${err}`)
        }
    },
    async deleteRestaurant(req, res) {
        const {id} = req.params;
        try {
            const result = await Restaurant.deleteOne({id:id});
            res.json(result);
            console.log(`rest deleted`)
        }catch (e){
            console.log(e);
            res.status(404).json(e);
        }
    }
}

///////JSON FILES //////
// exports.restController = {
//     getRests(req, res) {
//         console.log(rests);
//         res.json(rests);
//     },
//     addRest(req, res) {
//         const { body } = req;
//         rests.push(body);
//         res.status(200).send(rests);
//     },
//     getOneRest(req, res) {
//         const { id } = req.params;
//         let restaurant;
//         for (let i = 0; i < rests.length; i++) {
//             if (rests[i].id == id) {
//                 restaurant = rests[i];
//             }
//         }
//         res.json(restaurant);
//     }
// };

// exports.userController = {};
// exports.orderController = {};