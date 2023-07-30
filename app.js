require ("./config/database").connect
const express = require ("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

// import model 

const app = express()
app.use(express.json())

// routes 
app.get("/", (req, res )=>{
    res.send("Hello home routes")

})