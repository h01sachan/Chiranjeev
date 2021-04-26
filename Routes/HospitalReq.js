//import all required packages here
const express = require("express");
const router = express.Router();
const HospitalRequest = require("../Controllers/HospitalReq");

router.post("/Request/Bed",HospitalRequest.RequestBed);
router.post("/Request/Plasma",HospitalRequest.RequestPlasma);

module.exports = router;