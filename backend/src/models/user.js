const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Fullname is required"],
        minlength: 5
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please Provide a Valid Email"]
    },
    password: {
        type: String,
        minlength: 8,
        required: [true, "Please Provide a Password"]
    }
})

userSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.checkPassword = async function(userPass){
    const matching = await bcrypt.compare(userPass, this.password)
    return matching;
}

module.exports = mongoose.model('User', userSchema)