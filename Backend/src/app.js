const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const path = require("path");
app.use(bodyParser.json());

const db = {
  rate: 30,
  currency: "ZAR",
  employer: "Josh",
  employee: "Merriam",
};

app.use("/static", express.static(__dirname));
app.use(express.static(path.join(__dirname, "/../public")));
app.use(express.static(path.join(__dirname, "/../public/js")));
app.use(express.static(path.join(__dirname, "/public/pages")));

console.log(`${path.join(__dirname, "/../public/js")}`);

app.get("/setup", (req, res) => {
  res.send(db);
});

app.get("/", (req, res) => {
  res.sendFile(`${path.join(__dirname, "/../public/pages/index.html")}`);
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/../pages/login.html"));
});

app.get("/history", (req, res) => {
  res.sendFile(path.join(__dirname + "/../pages/history.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/pages/dashboard.html"));
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", async (req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
