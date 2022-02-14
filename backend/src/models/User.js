const monggoose = require("mongoose");

const userSchema = new monggoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 150,
      min: 6,
    },

    email: {
      type: String,
      required: true,
      max: 255,
      min: 6,
    },

    password: {
      type: String,
      required: true,
      min: 6,
      max: 1000,
    },
  },

  {
    timestamps: true,
  },
);

module.exports = monggoose.model("User", userSchema);
