const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const path = require("path");
app.use(bodyParser.json());

app.use("/static", express.static(__dirname));
app.use(express.static(path.join(__dirname, "/../public")));
app.use(express.static(path.join(__dirname, "/../public/js")));
app.use(express.static(path.join(__dirname, "/../public/pages")));
app.use(express.static(path.join(__dirname, "/../public/styles")));

const db = [];
app.get("/", (req, res) => {
  res.sendFile(`${path.join(__dirname, "/../public/pages/index.html")}`);
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/pages/registration.html"));
});
app.post("/register", (req, res) => {
  console.log(req.body);
  const { firstname, surname, email, phone } = req.body;
  db.push({ employee: { firstname, surname, email, phone } });
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/pages/login.html"));
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
