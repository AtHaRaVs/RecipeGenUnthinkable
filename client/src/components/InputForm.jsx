import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState("");
  const [dietary, setDietary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/api/recipe", {
        ingredients: ingredients
          .split(",")
          .map((ingredient) => ingredient.trim()),
        dietary: dietary,
      });
      console.log(response.data);
      onSearch(response.data);
    } catch (err) {
      console.log("Error during search", err);
    }

    window.scrollTo({
      top: 300, // Adjust this value to scroll the desired amount
      behavior: "smooth",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 flex flex-col items-center justify-center h-screen"
      method="post"
    >
      <input
        type="text"
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="border p-3 rounded w-full max-w-md mb-4"
      />
      <select
        value={dietary}
        onChange={(e) => setDietary(e.target.value)}
        className="border p-3 rounded w-full max-w-md mb-4"
      >
        <option value="">Dietary Preferences</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="gluten-free">Gluten-Free</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded w-full max-w-md"
      >
        Search
      </button>
    </form>
  );
};

export default InputForm;
