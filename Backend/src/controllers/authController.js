const User = require("../models/user");
const jwt = require('jsonwebtoken');
const UnAuthenticatedError = require("../../errors/unAuthenticated")
const BadRequestError = require('../../errors/badRequestError');


const signUp = async (req,res) => {
    const { fullname, email, password, renterPassword } = req.body;
    // if ( !fullname || !email || !password || !passwordCheck ){
    //    return res.status(400).json({msg:"fullname, password, email are required"})
    //     throw new BadRequestError("fullname, password, email are required")
    // }
    if( password !== renterPassword ){
        return res.status(400).json({msg:"Passwords do not match"})
    }
    const userExists = await User.findOne({email})
    if(userExists){
        return res.status(400).json({msg:"User Already Exists"})
    }
    const user = await User.create({...req.body})
    if (user) {
       return res.status(200).json({msg:"User created successfully"})
    }
    const token = jwt.sign({userId:user._id, username:user.fullname}, process.env.JWT_SECRET,{ expiresIn: '10d'})
    res.status(200).json({exist:true, fullname: user.fullname, token})
}

const signIn = async (req,res) => {
    const {email, password} = req.body;
    if (!email || !password){
       return res.status(400).json({msg:"Email and password required"})
    } 
    const user = await User.findOne({email})
    if(!user){
       return res.status(401).json({msg:"Invalid Credentials"})
    }
    if(user) {
        return res.status(200).json({msg:"Welcome Back!"})
    }
    const isPasswordMatch = await user.renterPassword(password)
    if (isPasswordMatch){
        const token = jwt.sign({userId:user._id, username:user.fullname}, process.env.JWT_SECRET,{ expiresIn: '10d'})
       return res.status(200).json({exist:true, fullname:user.fullname, token})
    }   
    return res.status(401).send("Invalid Credentials")
}


module.exports = {
    signIn,
    signUp
}