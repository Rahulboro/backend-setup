const { default: mongoose } = require("mongoose");

const MONGODB_URL = "something url"
exports.connect =()=>{
    mongoose.connect(MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    .then(console.log("db connected"))
    .catch((error)=>{
        console.log("db connection failed")
        console.log(error);
        process.exit(1)
        
    })
}