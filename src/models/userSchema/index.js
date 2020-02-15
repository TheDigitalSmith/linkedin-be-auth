const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    role:{
        type: String,
        required:true
    },
    company:{
        type:String,
        maxlength:20,
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    description:{
        type: String,
        maxlength: 250
    },
    area:{
        type: String,
        required:true
    },
    image:{
        type:String,
        default: "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png"
    }
}, {timestamps:true})



const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        minlength: 4,
        required: true,
        unique:true
    },
    area:{
        type: String
    },
    bio:  {
        type: String,
        maxlength: 250
    },
    experience: [experienceSchema],
    imageUrl: String,
}, {timestamps: true})

const usersCollection = mongoose.model('user', userSchema)
module.exports = usersCollection