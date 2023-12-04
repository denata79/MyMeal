const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes')
const cors = require('cors');

require('dotenv').config();
mongoose.set("strictQuery", false);


const PORT = 7000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MangoDB_Link)
.then(() => console.log('We were connected to mango'))
.catch((err) => console.log(error))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I am on port ${PORT}`)
})

//mongodb+srv://denata79:<password>@cluster0.fgiue0w.mongodb.net/?retryWrites=true&w=majority
//denata79 18Iul01230307