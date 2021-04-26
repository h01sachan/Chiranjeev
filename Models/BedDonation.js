var mongoose = require("mongoose");

const bedDonation = new mongoose.Schema({
    DoantorName:{
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
    City:{
        type : String,
        require : true,
    },
    State :{
        type : String,
        require : true,
    }
});

module.exports = mongoose.model("BedDonation",bedDonation);