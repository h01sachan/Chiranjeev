var mongoose = require("mongoose");

const PlasmaDonation = new mongoose.Schema({
   Name:{
        type : String,
        require : true,
    },
    Number:{
        type : String,
        require : true
    },
    Age: {
        type: Number,
        require: true,
        unique: true
    },
    Gender: {
        type : String,
        require : true,
    },
    City:{
        type : String,
        require : true
    },
    BloodGroup:{
        type : String,
        require : true
    }
});

module.exports = mongoose.model("PlasmaDonation",PlasmaDonation);