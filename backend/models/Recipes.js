const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  steps: [String],
  nutritionalInfo: {
    calories: Number,
    protein: Number,
    fat: { type: Number, default: 0 },
  },
  difficulty: String,
  time: Number,
  cuisine: String,
  dietaryRestriction: [String],
});

module.exports = mongoose.model("Recipe", recipeSchema);
