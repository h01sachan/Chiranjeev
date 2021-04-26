const AsyncHandler = require("express-async-handler");

const HospitalList = require("../Models/HospitalAuth");

exports.AllHospital = AsyncHandler ( async (req,res,next)=>{
    const List = await HospitalList.find({
        $and : [
            {IsVerified : "true"},
            {
                $or : [
                    {BedAvailibility : "true"},
                    {PlasmaAvailibility : "true"}
                ]
            }
        ]
    })
    .limit(20)
    .exec();

    return res.status(200).json({List : List});
});

exports.HospitalByCity = AsyncHandler ( async ( req,res,next)=>{
    const City = req.query.city;
    const List = await HospitalList.find({
        $and : [
            {IsVerified : "true"},
            {City : City},
            {
                $or : [
                    {BedAvailibility : "true"},
                    {PlasmaAvailibility : "true"}
                ]
            }
        ]
    })
    .exec();

    res.status(200).json({List : List});
});