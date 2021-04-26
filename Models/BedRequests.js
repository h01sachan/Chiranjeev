var mongoose = require("mongoose");

const bedRequest = new mongoose.Schema({
    HospitalName:{
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
});

module.exports = mongoose.model("bedRequest",bedRequest);