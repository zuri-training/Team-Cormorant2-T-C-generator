// THIS CODE ENABLES US TO CONNECT TO OUR DATABSE. IT WOULD BE IMPORTED ON THE SERVER.JS
const mongoose = require("mongoose");
mongoose.set('strictQuery',true);

const connectDatabase = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDatabase;