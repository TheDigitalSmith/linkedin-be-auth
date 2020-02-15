const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userService = require('./src/services/users/index');
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODBURL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(db => console.log('mongodb connected'), error => console.log('MongoDb failed to Connect', error))


const port = process.env.PORT || 9000
app.listen(port, ()=>{
    console.log(`Your server is launch at launchpad ${port}`);
})

app.use(cors());
app.use(express.json());
app.use('/users', userService);
