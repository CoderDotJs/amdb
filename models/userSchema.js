const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "editor", "user"],
      default: "user",
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("User", userSchema);
