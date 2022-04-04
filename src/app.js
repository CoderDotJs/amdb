const express = require("express");
const serverless = require("serverless-http");
const app = express();
const cors = require("cors");
const router = express.Router();
require("dotenv").config({ path: "./.env.local" });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use("/.netlify/functions/api", router);
app.use(require("./routes/authRoutes"));
app.use(require("./routes/movieRoutes"));

module.exports.handler = serverless(app);
