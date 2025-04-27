const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
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
  department: {
    type: String,
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
  plusEmail: {
    // email provided by hospital to identify the doctor
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  consultationFee: {
    type: Number,
    default: 0,
  },
  schedule: {
    type: String,
    default: "Not Scheduled",
  },
  image: {
    type: String,
    default: "default.png",
  },
  password: { 
    type: String 
  },
  description: [
    {
      degree: {
        type: String,
        required: true,
      },
      mastersDegree: {
        type: String,
        required: true,
      },
      otherInfo: {
        type: String,
        default: "none",
      },
    },
  ],
});

module.exports = mongoose.model("Doctor", doctorSchema);
