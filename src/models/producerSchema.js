const mongoose = require("mongoose");

const producerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    dob: {
      type: Date,
    },
    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
    netWorth: {
      type: Number,
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
  },
  { timestamp: true }
);

export default mongoose.model("Producer", producerSchema);
