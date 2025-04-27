require("dotenv").config(); 
const express = require("express");
const app = express();
const cors = require("cors");
require("./config/db");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const doctorRoutes = require("./routes/doctorRoutes.js");


app.get("/", (req, res) => {
    res.send("Welcome to Hospital Management System!");
});

app.use("/api/doctors", doctorRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
