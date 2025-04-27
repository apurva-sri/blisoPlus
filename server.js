require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("./config/db");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Welcome");
});

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});
