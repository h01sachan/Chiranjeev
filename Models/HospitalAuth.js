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
        default : "false"
    },
});

module.exports = mongoose.model("HospitalAuth",HospitalSchema);