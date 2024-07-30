const mongoose = require('mongoose');
const URL='mongodb://localhost:27017/tradevista';

const connectDb=async()=>{
    try{
       await mongoose.connect(URL);
        console.log("Connected to MongoDB");
    }

    catch(error){
        console.log("Error connecting to MongoDB:", error);
    }
};

module.exports = connectDb;