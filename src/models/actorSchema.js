const mongoose = require("mongoose");

const ActorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
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

export default mongoose.model("Actor", ActorSchema);
