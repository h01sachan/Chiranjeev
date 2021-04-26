const AsyncHandler = require("express-async-handler");

const BedRequest = require("../Models/BedRequests");
const PlasmaRequest = require("../Models/PlasmaRequest");
const HospitalList = require("../Models/HospitalAuth");
exports.RequestBed = AsyncHandler ( async (req,res,next)=>{
    const { HospitalName , Number , Address , NoOfBed , HospitalEmail, City } = req.body;
    const FindHospital = await HospitalList.findOne({Email : HospitalEmail});
    if(!FindHospital) 
    {
        return res.status(500).json({Error : "No hospital is registered with this email id"});
    }

    const RequestDetails = new BedRequest(req.body);
    await RequestDetails.save();

});
exports.RequestPlasma = AsyncHandler ( async (req,res,next)=>{
    const { HospitalName , Number , Address , BloodGroup , HospitalEmail ,City } = req.body;
    const FindHospital = await HospitalList.findOne({Email : HospitalEmail});
    if(!FindHospital) 
    {
        return res.status(500).json({Error : "No hospital is registered with this email id"});
    }

    const RequestDetails = new PlasmaRequest(req.body);
    await RequestDetails.save();
});