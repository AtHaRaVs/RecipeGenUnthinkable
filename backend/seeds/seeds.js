const Recipe = require("../models/Recipes");
const connectDb = require("../config/db");

const seedRecipes = async () => {
  await connectDb();
  console.log("MongoDB Connected");

  const recipes = [
    {
      name: "Chicken Caesar Salad",
      ingredients: [
        "chicken",
        "romaine lettuce",
        "caesar dressing",
        "croutons",
        "parmesan",
      ],
      steps: [
        "Grill chicken",
        "Chop lettuce",
        "Mix with dressing",
        "Top with croutons and parmesan",
      ],
      nutritionalInfo: { calories: 350, protein: 25 },
      difficulty: "Medium",
      time: 25,
      cuisine: "American",
      dietaryRestriction: ["gluten-free"],
    },
    {
      name: "Vegetable Stir-Fry",
      ingredients: [
        "broccoli",
        "carrot",
        "bell pepper",
        "soy sauce",
        "ginger",
        "garlic",
      ],
      steps: [
        "Chop vegetables",
        "Stir-fry in pan",
        "Add soy sauce and seasonings",
        "Serve with rice",
      ],
      nutritionalInfo: { calories: 200, protein: 5 },
      difficulty: "Easy",
      time: 15,
      cuisine: "Chinese",
      dietaryRestriction: ["vegan", "gluten-free"],
    },
    {
      name: "Grilled Salmon",
      ingredients: ["salmon", "lemon", "garlic", "olive oil", "salt", "pepper"],
      steps: [
        "Marinate salmon",
        "Grill on medium heat",
        "Serve with lemon slices",
      ],
      nutritionalInfo: { calories: 350, protein: 30 },
      difficulty: "Medium",
      time: 25,
      cuisine: "Mediterranean",
      dietaryRestriction: ["gluten-free", "paleo"],
    },
    {
      name: "Tacos",
      ingredients: [
        "taco shells",
        "ground beef",
        "cheese",
        "lettuce",
        "tomato",
        "sour cream",
      ],
      steps: ["Cook beef", "Assemble tacos with toppings", "Serve with salsa"],
      nutritionalInfo: { calories: 500, protein: 20 },
      difficulty: "Easy",
      time: 15,
      cuisine: "Mexican",
      dietaryRestriction: ["gluten-free"],
    },
    {
      name: "Quinoa Salad",
      ingredients: [
        "quinoa",
        "cucumber",
        "tomato",
        "feta cheese",
        "olive oil",
        "lemon",
      ],
      steps: [
        "Cook quinoa",
        "Chop vegetables",
        "Mix together with feta and olive oil",
        "Serve chilled",
      ],
      nutritionalInfo: { calories: 250, protein: 8 },
      difficulty: "Easy",
      time: 30,
      cuisine: "Mediterranean",
      dietaryRestriction: ["vegetarian", "gluten-free"],
    },
    {
      name: "Eggplant Parmesan",
      ingredients: [
        "eggplant",
        "marinara sauce",
        "mozzarella cheese",
        "parmesan",
        "basil",
      ],
      steps: [
        "Slice and bread eggplant",
        "Fry slices",
        "Layer with sauce and cheese",
        "Bake in the oven",
      ],
      nutritionalInfo: { calories: 350, protein: 15 },
      difficulty: "Medium",
      time: 45,
      cuisine: "Italian",
      dietaryRestriction: ["vegetarian"],
    },
    {
      name: "Beef Stir-Fry",
      ingredients: [
        "beef",
        "bell pepper",
        "onion",
        "soy sauce",
        "ginger",
        "garlic",
      ],
      steps: [
        "Slice beef and vegetables",
        "Stir-fry in pan",
        "Add soy sauce and seasonings",
        "Serve with rice",
      ],
      nutritionalInfo: { calories: 400, protein: 30 },
      difficulty: "Medium",
      time: 20,
      cuisine: "Chinese",
      dietaryRestriction: ["gluten-free"],
    },
  ];

  try {
    await Recipe.insertMany(recipes);
    console.log("Recipe seeded successfully.");
  } catch (error) {
    console.error("Error while seeding:", error);
  }
};

seedRecipes();
