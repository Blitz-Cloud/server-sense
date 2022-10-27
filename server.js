const express = require("express");
require("dotenv/config");
const app = express();
const morgan = require("morgan");
const port = process.env["PORT"];
const path = require("path");

//
const user = require("./routes/user");

// SET
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.engine("ejs", require("ejs-mate"));

// USE
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));

//
app.get("/", (req, res) => {
  res.render("index");
});

// ROUTES

app.use("/", user);

//
app.listen(port, () => {
  console.log("Server is listening on http://localhost:8080");
});
