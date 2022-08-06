const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const { getEmployees } = require("./controllers/employees");

app.get("/", async (req, res) => {
  res.send(await getEmployees());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
