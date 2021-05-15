//import all required packages here
const express = require("express");
const router = express.Router();
const Donation = require("../Controllers/Donation");

router.post("/Donation/Bed",Donation.BedDonation);
router.post("/Donation/Plasma",Donation.PlasmaDonation);
router.get("/HospitalRequests",Donation.getHospitalRequests);
router.get("/BedDonorRequests" , Donation.BedDonorList);
router.get("/PlasmaDonorRequests",Donation.PlasmaDonorList);

module.exports = router;