const Doctor = require("../models/Doctor");
const bcrypt = require("bcryptjs");

async function createDoctor(req, res) {
  try {
    const {
      name,
      age,
      gender,
      dob,
      department,
      contactInfo,
      personalEmail,
      plusEmail,
      address,
      consultationFee,
      schedule,
      image,
      description,
    } = req.body;

    const newDoctor = new Doctor({
      name,
      age,
      gender,
      dob,
      department,
      contactInfo,
      personalEmail,
      plusEmail,
      address,
      consultationFee,
      schedule,
      image,
      description,
      password: null,
    });

    await newDoctor.save();

    res.status(201).json({
      message: "Doctor created successfully! Now, set your password.",
      doctor: newDoctor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong!",
      error: error.message,
    });
  }
}

async function setPassword(req, res) {
  try {
    const { plusEmail, password } = req.body;
    const doctor = await Doctor.findOne({ plusEmail });
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    doctor.password = hashedPassword;
    await doctor.save();
    res.status(200).json({
      message: "Password set successfully! You can now log in.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong!",
      error: err.message,
    });
  }
}

async function getAllDoctor(req, res) {
  try {
    const doctors = await Doctor.find({});
    if (!doctors) {
      return res.json({ message: "No doctors are listed yet" });
    }
    res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAllDoctor, createDoctor, setPassword };
