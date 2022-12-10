const User = require("../models/user");


const signUp = async (req,res) => {
    const { fullname, email, password } = req.body;
    if ( !fullname || !email || !password ){
        res.status(401).json({msg:"fullname, password, email are required"})
    }
    const user = await User.create({...req.body})
    res.status(200).json({exist:true, fullname: user.fullname})
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
    if (password === user.password){
       return res.status(200).json({exist:true, fullname:user.fullname})
    }   
    res.status(401).send("Invalid Credentials")
}


module.exports = {
    signIn,
    signUp
}