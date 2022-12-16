const mongoose = require("mongoose");

const termsConditionsSchema = new mongoose.Schema({
    businessName:{
        type: String,
        required: [true, "Please provide a business name"],
        minlength: 5
    },
    businessUrl:{
        type: String,
    },
    businessMail:{
        type: String,
        required: [true, "Provide a business mail"]
    },
    businessContact:{
        type: String,
        required: [true, "Provide a business contact number"]
    },
    country: {
        type: String,
        required: [true, "State the country your business is located"]
    },
    state:{
        type: String,
        required: [true, "Provide the your business state of residence"]
    },
    canCreateAccount:{
        type: Boolean,
        default: true
    },
    canEditAccount:{
        type: Boolean,
        default: true
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, "Please provide user"]
    }
}, {timestamps:true})


module.exports = mongoose.model('TermsConditions', termsConditionsSchema);