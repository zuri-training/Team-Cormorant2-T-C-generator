const CustomError = require('../errors/customError');
const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
    let customError = {
        // set Default
        statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong try again!"
    }
    return res.status(customError.statusCode).json({msg:customError.msg})
    // if(err instanceof CustomError){
    //     res.status(err.statusCode).json({msg: err.message});
    //     next()
    // }
}

module.exports = errorHandler;