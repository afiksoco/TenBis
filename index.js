const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 8080;
const { restRouter } = require('./router');

app.use(express.json());
app.use(logger("dev"));

app.use('/api/restaurants', restRouter);
//app.use('/api/users', userRouter);
//app.use('/orders', orderRouter);

app.use((req, res) => {
    res.status(500).send("something is broken");
});
// app.all('*', (req, res) => {
//     res.status(500).send("something is broken");
// })


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})