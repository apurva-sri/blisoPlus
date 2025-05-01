require("dotenv").config(); 
const express = require("express");
const app = express();
const cors = require("cors");
require("./config/db");
const engine = require('ejs-mate');
const PORT = process.env.PORT || 5000;

app.engine('ejs', engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

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
