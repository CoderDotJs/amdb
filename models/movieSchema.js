const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    actors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Actor",
      },
    ],
    release: {
      type: Date,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    plot: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    awards: [
      {
        name: {
          type: String,
          required: true,
        },
        year: {
          type: Number,
          required: true,
        },
      },
    ],
    runTime: {
      type: Number,
      required: true,
    },
    boxOffice: {
      type: Number,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    producers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producer",
      },
    ],
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
