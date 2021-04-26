var mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
    HospitalName:{
        type : String,
        require : true,
    },
    Email : {
        type: String,
        require: true,
        unique: true
    },
    Password : {
        type : String,
        require : true,
        min : 6
    },
    Isverified: {
        type: String,
        default : "false",
        require : false
    },
    InchargeName :
    {
        type: String,
        default : "UpdateInfo",
        require : false
    },
    Address :{
        type : String,
        default : "UpdateInfo",
        require : false,
        unique: true
    },
    State :{
        type : String,
        default : "UpdateInfo",
        require : false
    },
    City :{
        type : String,
        default : "UpdateInfo",
        require : false
    },
    Contact :{
        type : String,
        default : "UpdateInfo",
        require : false,
        max: 10,
        min: 10,
    },
    BedAvailibility :
    {
        type : String,
        default : "UpdateInfo",
        require : false
    },
    PlasmaAvailibility :
    {
        type : String,
        default : "UpdateInfo",
        require : false
    },
    VaccineAvailibility :
    {
        type : String,
        default : "UpdateInfo",
        require : false
    }
});
module.exports = mongoose.model("HospitalAuth",HospitalSchema);