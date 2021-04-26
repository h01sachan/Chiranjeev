//import all required packages here
const express = require("express");
const router = express.Router();
const SearchRoute = require("../Controllers/Hospital");

router.post("/HospitalsList",SearchRoute.AllHospital);
router.post("/City",SearchRoute.HospitalByCity);
module.exports = router;