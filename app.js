const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env.local" });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use(require("./routes/authRoutes"));
app.use(require("./routes/movieRoutes"));

module.exports = app;
