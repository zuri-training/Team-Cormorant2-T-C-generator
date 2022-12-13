const User = require("../models/user");
const jwt = require('jsonwebtoken');
const UnAuthenticatedError = require("../../errors/unAuthenticated")
const BadRequestError = require('../../errors/badRequestError');


const signUp = async (req,res) => {
    const { fullname, email, password } = req.body;
    if ( !fullname || !email || !password ){
        // res.status(401).json({msg:"fullname, password, email are required"})
        throw new BadRequestError("fullname, password, email are required")
    }
    const userExists = await User.findOne({email})
    if(userExists){
        return res.status(400).json({msg:"User already exists"})
    }
    const user = await User.create({...req.body})
    const token = jwt.sign({_id:user._id, fullname:user.fullname}, process.env.JWT_SECRET,{ expiresIn: '10d'})
    res.status(200).json({exist:true, fullname: user.fullname, token})
}

const signIn = async (req,res) => {
    const {email, password} = req.body;
    if (!email || !password){
        res.status(400).json({msg:"email and password is required"})
    } 
    const user = await User.findOne({email})
    if(!user){
        res.status(401).json({msg:"Invalid Credentials"})
    }
    const isPasswordMatch = await user.checkPassword(password)
    if (isPasswordMatch){
        const token = jwt.sign({_id:user._id, fullname:user.fullname}, process.env.JWT_SECRET,{ expiresIn: '10d'})
       return res.status(200).json({exist:true, fullname:user.fullname, token})
    }   
    res.status(401).send("Invalid Credentials")
}


module.exports = {
    signIn,
    signUp
}