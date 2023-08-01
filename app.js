require ("./config/database").connect()
const express = require ("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

// import model 
const User = require("./models/user")
const { check } = require("app")

const app = express()
app.use(express.json())

// routes 
app.get("/", (req, res )=>{
    res.send("Hello home routes")
})
app.post("/register",async(req, res )=>{
    try{
        // collection all information from the front end 
        const {firstnam, lastname, email, token}= req.body
        // validate the data if exists 
        if (!(email && password && lastname && fistname))
        {
            res.status(401).send
        }
        // check if the user exist in the database 
    const existingUser = await User.findOne({email: email})
    if (existingUser) {
        res.status(401).send("already in database")
    }

    //encrypting the password
    const encryptedPassword = await bcrypt.hash(password,10)
    
    //creating a new entry in database 
    
    const newUser = await User.create({
        firstnam,
        lastname,
        email,
        password : encryptedPassword

    })

    // create a token and send it to user 
    jwt.sign({}, '')


}    catch(error){
        console.log(error);
        console.log("error of the respond route")
    }
})