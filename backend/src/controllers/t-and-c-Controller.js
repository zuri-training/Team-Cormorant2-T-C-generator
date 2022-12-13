const TermsConditions = require("../models/terms-and-conditions");
const { StatusCodes } = require("http-status-codes");


const createTC = async (req,res) => {
    const { userId } = req.user
    req.body.createdBy = userId;
    const T_C = await TermsConditions.create(req.body)
    res.status(StatusCodes.CREATED).json(T_C)
}


module.exports = {
    createTC
}