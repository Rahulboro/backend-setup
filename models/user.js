const mongoose = require("mongoose")
const userschema = new mongoose.Schema({
    firsname:{
        type:String,
        default:null
    },
    lastname:{
        type:String,
        default:null
    },
    email:{
        type:String,
        unique: true,
    },
    token:{
        type:String,
        unique: true,
    },
})

module.exports = mongoose.model("user",userschema)