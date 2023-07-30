const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { restRouter } = require('./routers/restaurant.router');
const {userRouter}= require('./routers/user.router');
const {orderRouter}= require('./routers/order.router');

const app = express();
const port = process.env.PORT || 3001;

dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/api/restaurants', restRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use((req, res) => {
    res.status(500).send("something is broken");
 });
mongoose
    .set("strictQuery", false)
    .connect(process.env.MONGO_URL)
.then(() => {
   console.log("Connected to MongoDB...");
})
    .catch((err) => console.log(`${err} did not connect`));

app.listen(port, () => console.log(`Listening on port ${port}`));
