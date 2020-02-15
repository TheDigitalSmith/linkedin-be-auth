const express = require('express');
const multer = require('multer');
const users = require('../../models/userSchema/index');

const router = express.Router();

router.get('/', async(req,res)=>{
    console.log('fetching information');
})

module.exports = router;