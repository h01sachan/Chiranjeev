var mongoose = require("mongoose");

const IndividualSchema = new mongoose.Schema({
    FirstName:{
        type : String,
        require : true,
    },
    LastName:{
        type : String,
        require : true
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

module.exports = mongoose.model("individual",IndividualSchema);