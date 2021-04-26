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
    City : {
        type: String,
        require: true,
    },
    NoOfBed: {
        type : Number,
        require : true,
    },
    HospitalEmail :
    {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model("bedRequest",bedRequest);