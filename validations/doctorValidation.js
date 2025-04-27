const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");
const bcrypt = require("bcryptjs");

async function loginDoctor(req, res) {
  try {
    const { plusEmail, password } = req.body;
    const doctor = await Doctor.findOne({ plusEmail });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found!" });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({ doctorId: doctor._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    res.status(200).json({
      message: "Login successful!",
      token,
      doctor: {
        name: doctor.name,
        plusEmail: doctor.plusEmail,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong!",
      error: err.message,
    });
  }
};

module.exports = {loginDoctor};
