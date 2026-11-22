const userModel = require('../models/user.model');
const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcryptjs"); 

async function registerUser(req, res) {
    //Extracting data from the body
    const { username, email, password, role = "user" } = req.body;

    //duplicate user cheack
    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {username}, 
            {email}
        ]
    })
    if(isUserAlreadyExists){
        return res.status(409).json({message:"User already exists"})
    }

    // passwod hasing
    const hash = await bcrypt.hash(password, 10); 

    //creating the user 
    const user = await userModel.create({
        username, 
        email,
        password: hash, 
        role
    })

    // jwt token generation
    const token = jwt.sign({
        id:user._id,
        role:user.role,
    }, process.env.JWT_SECRETS)

    //setting the cookie
    res.cookie("token", token)

    //response
    res.status(201).json({
        message:"User registered successfully", 
        user:{
            id:user._id, 
            username: user.username, 
            email:user.email, 
            role:user.role,
        }
    })
}


module.exports = {registerUser}

