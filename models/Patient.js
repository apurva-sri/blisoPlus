const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  personalEmail: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  medicalHistory: [
    {
      illness: { type: String, required: true },
      treatment: { type: String, required: true },
      notes: { type: String, default: "No additional notes." }
    }
  ],
  emergencyContact: {
    name: { type: String, required: true },
    relation: { type: String, required: true },
    phone: { type: String, required: true }
  },
  profileImage: {
    type: String,
    default: "default_patient.png",
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Patient", patientSchema);
