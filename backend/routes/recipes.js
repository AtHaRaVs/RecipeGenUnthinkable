const express = require("express");
const Recipe = require("../models/Recipes");
const router = express.Router();

router.post("/", async (req, res) => {
  const { ingredients, dietary } = req.body;

  try {
    // Build the query to match ingredients and dietary restrictions
    const ingredientList = ingredients.map((ingredient) =>
      ingredient.trim().toLowerCase()
    );
    let query = { ingredients: { $all: ingredientList } };

    // Add dietary restriction if provided
    if (dietary) {
      query.dietaryRestriction = { $in: [dietary] };
    }

    // Find recipes based on the query
    const recipes = await Recipe.find(query);

    // Send the filtered recipes back as response
    res.status(200).json(recipes);
  } catch (err) {
    console.error("Error fetching recipes:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
