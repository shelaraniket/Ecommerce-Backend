const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser")    
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config();
const PORT = process.env.PORT;
app.use(cors());
const authRoute = require('./routes/authRoute');
const iphoneRoute=require('./routes/iphoneRoute')
const macbookRoute=require('./routes/macbookRoute')
const AirPodRoute=require('./routes/airpodsRoute')
const IWatchRoute=require('./routes/iwatchRoute')
const CartRoute=require('./routes/cartRoute')
const DetailsRoute=require('./routes/dtailsRoute')
app.use(express.json())
const User = require('./model/userSchema');
app.use(authRoute)
app.use(iphoneRoute)
app.use(macbookRoute)
app.use(AirPodRoute)
app.use(IWatchRoute)
app.use(CartRoute)
app.use(DetailsRoute)
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/E-Commerce')
.then(() => {
  app.listen(PORT , () => console.log(`DB Connection Successfull , Server Running at Port ${PORT}`));
})
.catch( err => console.log('DB Connection Failed'))
