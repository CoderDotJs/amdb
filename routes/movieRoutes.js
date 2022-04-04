const {
  getMovies,
  deleteMovie,
  addMovie,
} = require("../controllers/movieControllers");
const { verifyJwt } = require("../utils/verifyJwt");

const router = require("express").Router();

router.get("/movies", verifyJwt, getMovies);
router.post("/movies/add-new", verifyJwt, addMovie);
router.delete("/movies/:id", verifyJwt, deleteMovie);

module.exports = router;
