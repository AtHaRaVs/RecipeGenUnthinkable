require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipes");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/recipe", recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
