var mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
    Email : {
        type: String,
        require: true,
        unique: true
    },
    Otp : {
        type: String,
        require: true,
    },
});
OtpSchema.index({ createdAt: 1 }, { expireAfterSeconds:180 });

module.exports = mongoose.model("Otp", OtpSchema);