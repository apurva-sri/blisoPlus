const express = require("express");
const { createPatient, getAllPatients, searchPatient } = require("../controllers/patientController");
const router = express.Router();

router.post("/register", createPatient);
router.get("/all-patient", getAllPatients);
router.get("/search", searchPatient);

module.exports  = router;