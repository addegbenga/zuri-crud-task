const express = require("express");
const connectToDB = require("./config/db");
const path = require("path");
require("dotenv").config();

//App
const app = express();

//connect databse
connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static("public"));
app.use("/", express.static(path.join(__dirname, "public")));

//routes middleware
app.use("/api/user", require("./routes/user"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server hosted on: http://localhost:${port}`);
});
