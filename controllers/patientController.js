const Patient = require("../models/Patient");

async function createPatient(req, res) {
  try {
    const {
      name,
      age,
      gender,
      dob,
      contactInfo,
      personalEmail,
      address,
      bloodGroup,
      medicalHistory,
      emergencyContact,
      profileImage,
    } = req.body;

    const newPatient = new Patient({
      name,
      age,
      gender,
      dob,
      contactInfo,
      personalEmail,
      address,
      bloodGroup,
      medicalHistory,
      emergencyContact,
      profileImage,
    });

    await newPatient.save();

    res.send(201).json({
      message: "Patient created",
      patient: newPatient, 
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error registering patient. Please try again later.",
      error: err.message,
    });
  }
}

async function getAllPatients(req, res) {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patients", error: error.message });
  }
}

async function searchPatient(req, res) {
  try {
    const { name, contactInfo } = req.body;

    const query = {};
    if (name) query.name = { $regex: name, $options: "i" }; // case-insensitive search
    if (contactInfo) query.contactInfo = contactInfo;

    const patients = await Patient.find(query);

    if (patients.length === 0) {
      return res.status(404).json({ message: "No matching patient found" });
    }

    res.status(200).json({
      success: true,
      data: patients
    });
  } catch (error) {
    res.status(500).json({
      message: "Error searching patient",
      error: error.message
    });
  }
}

module.exports = { createPatient, getAllPatients, searchPatient};
