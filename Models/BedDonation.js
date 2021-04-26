var mongoose = require("mongoose");

const bedDonantion = new mongoose.Schema({
    Name:{
        type : String,
        require : true,
    },
    Number:{
        type : String,
        require : true
    },
    Address: {
        type: String,
        require: true,
        unique: true
    },
    NoOfBed: {
        type : Number,
        require : true,
    },
    city:{
        type : Number,
        require : true,
    }
});

module.exports = mongoose.model("bedDonantion",bedDonantion);