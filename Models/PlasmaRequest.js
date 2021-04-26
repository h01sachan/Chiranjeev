var mongoose = require("mongoose");

const PlasmaRequest = new mongoose.Schema({
    HospitalName:{
        type : String,
        require : true,
    },
    Number:{
        type : String,
        require : true
    },
    City:{
        type : String,
        require : true
    },
    Address:{
        type : String,
        require : true
    },
    BloodGroup:{
        type : String,
        require : true
    },
    HospitalEmail :
    {
        type : String,
        require : true
    }
});

module.exports = mongoose.model("PlasmaRequest",PlasmaRequest);