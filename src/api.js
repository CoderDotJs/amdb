const express = require("express");
const serverless = require("serverless-http");
const app = express();
const cors = require("cors");
const router = express.Router();
require("dotenv").config({ path: "./.env.local" });
const connectDatabase = require("./database/database");
const { register, login, profile } = require("./controllers/userControllers");
const { verifyJwt } = require("./utils/verifyJwt");
const {
  getMovies,
  deleteMovie,
  addMovie,
} = require("./controllers/movieControllers");

connectDatabase();

app.use(cors());
app.use(express.json());

router.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

router.get("/movies", verifyJwt, getMovies);
router.post("/movies/add-new", verifyJwt, addMovie);
router.delete("/movies/:id", verifyJwt, deleteMovie);

router.post("/register", register);
router.post("/login", login);
router.get("/profile", verifyJwt, profile);

app.use("/.netlify/functions/api", router);
// app.use(require("./routes/authRoutes"));
// app.use(require("./routes/movieRoutes"));

module.exports = app;
module.exports.handler = serverless(app);
