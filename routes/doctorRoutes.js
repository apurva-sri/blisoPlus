const express = require('express');
const { createDoctor, getAllDoctor, setPassword, searchDoctor } = require('../controllers/doctorController');
const { loginDoctor } = require('../validations/doctorValidation');
const router = express.Router();


router.post("/new", createDoctor);
router.post("/set-password", setPassword);
router.post("/login", loginDoctor);
router.get("/all", getAllDoctor);
// router.get("/profile", doctor);
router.get("/search", searchDoctor);

module.exports = router;