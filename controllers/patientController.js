const Patient = require("../models/Patient");
const puppeteer = require('puppeteer');
const {generatePatientHTML} = require("../utils/patientRegistrationTemplate");

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

    const savedPatient = await newPatient.save();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlContent = generatePatientHTML(savedPatient);

    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({format: 'A4'});

    await browser.close();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="patient_registration.pdf"',
    });

    res.send(pdfBuffer);

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error registering patient. Please try again later.",
      error: err.message,
    });
  }
}
