const asyncHandler = require("express-async-handler");

const DonationBed = require("../Models/BedDonation");
const DoantionPlasma = require("../Models/PlasmaDonation");
const PlasmaReqByHospital = require("../Models/PlasmaRequest");
const BedReqByHospital = require("../Models/BedRequests");

exports.BedDonation = asyncHandler(async (req, res, next) => {
  const { DonorName, Number, City, State, NoOfBed } = req.body;
  console.log(req.body);
  if (!DonorName || !Number || !City || !State || !NoOfBed) {
    return res
      .status(500)
      .json({ Error: "Please Fill all the require fields" });
  }
  const DonorDetails = new DonationBed(req.body);
  await DonorDetails.save();
  return res.status(200).json({ DonorDetails: DonorDetails });
});

exports.PlasmaDonation = asyncHandler(async (req, res, next) => {
  const { DonorName, Number, Age, BloodGroup, Gender, City, Date } = req.body;
  console.log(req.body);
  if (
    !DonorName ||
    !Number ||
    !Age ||
    !City ||
    !Gender ||
    !BloodGroup ||
    !Date
  ) {
    return res
      .status(500)
      .json({ Error: "Please Fill all the require fields" });
  }
  const DonorDetails = new DoantionPlasma(req.body);
  await DonorDetails.save();
  return res.status(200).json({ DonorDetails: DonorDetails });
});

exports.getHospitalBedRequests = asyncHandler(async (req, res, next) => {
  const BedReq = await BedReqByHospital.find()
    .populate(
      "HospitalDetails",
      "HospitalName Contact State City Address InchargeName"
    )
    .exec();
  res.status(200).json({ BedReq: BedReq });
  //const BedRequests = await BedReqByHospital.find();
});
exports.getHospitalPlasmaRequests = asyncHandler(async (req, res, next) => {
  const PlasmaReq = await PlasmaReqByHospital.find()
    .populate(
      "HospitalDetails",
      "HospitalName Contact State City Address InchargeName"
    )
    .exec();
  res.status(200).json({ PlasmaReq: PlasmaReq });
  //const BedRequests = await BedReqByHospital.find();
});

exports.BedDonorList = asyncHandler(async (req, res, next) => {
  const DonorList = await DonationBed.find().exec();
  console.log(DonorList);
  res.status(200).json({ DonorList: DonorList });
});
exports.PlasmaDonorList = asyncHandler(async (req, res, next) => {
  const DonorList = await DoantionPlasma.find().exec();
  console.log(DonorList);
  res.status(200).json({ DonorList: DonorList });
});

exports.SearchInBedRequests = asyncHandler(async (req, res, next) => {
  const BedReq = await BedReqByHospital.find()
    .populate(
      "HospitalDetails",
      "HospitalName Contact State City Address InchargeName"
    )
    .exec();
    const BedArray = [];
    console.log(req.body.City);
    BedReq.forEach((element)=>{
        var cmp = (element.HospitalDetails.City).toString();
        cmp = cmp.toLowerCase();
        if(cmp.match((req.body.City.toLowerCase()))){
            BedArray.push(element);
        }
    });
    
  return res.status(200).json({ BedReq: BedArray });
});

exports.SearchInPlasmaRequests = asyncHandler (async(req,res,next)=>{
    const PlasmaReq = await PlasmaReqByHospital.find().populate(
        "HospitalDetails",
        "HospitalName Contact State City Address InchargeName"
      ).exec();

      const PlasmaArray = [];
      PlasmaReq.forEach((element)=>{
        var cmp = (element.HospitalDetails.City).toString();
        cmp = cmp.toLowerCase();
        if(cmp.match((req.body.City.toLowerCase()))){
            PlasmaArray.push(element);
          }
      });
    return res.status(200).json({PlasmaReq : PlasmaArray});
});


