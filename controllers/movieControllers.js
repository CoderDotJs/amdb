const Movie = require("../models/movieSchema");

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Data Retrieval Failed",
    });
  }
};
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      res.status(404).json({
        status: "error",
        message: "Movie not found / exist",
      });
    }
    await movie.remove({
      new: true,
    });
    res.json({
      status: "success",
      message: "Movie deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Deletion Failed",
    });
  }
};

exports.addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body, {
      new: true,
    });
    res.json(movie);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Movie creation failed",
    });
  }
};
