const generatePatientHTML = (savedPatient) => {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: navy; }
          .info { margin-bottom: 15px; }
        </style>
      </head>
      <body>
        <h1>Patient Registration</h1>
        <div class="info">
          <strong>Name:</strong> ${savedPatient.name}<br>
          <strong>Age:</strong> ${savedPatient.age}<br>
          <strong>Gender:</strong> ${savedPatient.gender}<br>
          <strong>Date of Birth:</strong> ${savedPatient.dob}<br>
          <strong>Contact Info:</strong> ${savedPatient.contactInfo}<br>
          <strong>Email:</strong> ${savedPatient.personalEmail}<br>
          <strong>Address:</strong> ${savedPatient.address}<br>
          <strong>Blood Group:</strong> ${savedPatient.bloodGroup}<br>
          <strong>Medical History:</strong> ${savedPatient.medicalHistory.map(item => `<p>${item.illness} - ${item.treatment}</p>`).join('')}
        </div>
        <h3>Emergency Contact:</h3>
        <p><strong>Name:</strong> ${savedPatient.emergencyContact.name}</p>
        <p><strong>Relation:</strong> ${savedPatient.emergencyContact.relation}</p>
        <p><strong>Phone:</strong> ${savedPatient.emergencyContact.phone}</p>
        <p>Registration Complete! The patient is successfully registered.</p>
      </body>
    </html>
  `;
};

module.exports = generatePatientHTML;
