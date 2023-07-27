const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { restRouter } = require('./router');


const app = express();
const port = process.env.PORT || 3001;

dotenv.config();
app.use(express.json());
app.use(cors());
console.log(process.env.MONGO_URL);

// localhost:3001/api/patients
app.use('/api/restaurants', restRouter);
//app.use('/api/users', userRouter);
//app.use('/orders', orderRouter);

mongoose
    .set("strictQuery", false)
    .connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB...");
})
    .catch((err) => console.log(`${err} did not connect`));

app.listen(port, () => console.log(`Listening on port ${port}`));

// const express = require('express');
// const app = express();
// const logger = require('morgan');
// const port = process.env.PORT || 8080;
//
// app.use(express.json());
// app.use(logger("dev"));
//

//
// app.use((req, res) => {
//     res.status(500).send("something is broken");
// });
// // app.all('*', (req, res) => {
// //     res.status(500).send("something is broken");
// // })
//
//
// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// })