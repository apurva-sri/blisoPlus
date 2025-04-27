const express = require("express");
const router = express.Router();

router.post("/register", createPatient);

module.exports  = router;