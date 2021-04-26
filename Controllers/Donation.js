const asyncHandler = require('express-async-handler');

const DonationBed = require("../Models/BedDonation");
const DoantionPlasma = require("../Models/PlasmaDonation");

exports.BedDonation = asyncHandler ( async (req,res,next)=>{
    const {DonatorName,Number,Address,City,State,NoOfBed} = req.body;
    if(!DonatorName || !Number || !Address || !City || !State || !NoOfBed)
    {
        return res.status(500).json({Error : "Please Fill all the require fields"});
    }
    const DonatorDetails = new DonationBed(req.body);
    await DonatorDetails.save();
});

exports.PlasmaDonation = asyncHandler ( async ( req,res,next)=>{
    const {DonatorName , Number , Age, BloodGroup, Gender ,City } =req.body;
    if(!DonatorName || !Number || !Age || !City || !Gender || !BloodGroup)
    {
        return res.status(500).json({Error : "Please Fill all the require fields"});
    }
    const DonatorDetails = new DoantionPlasma(req.body);
    await DonatorDetails.save();
});