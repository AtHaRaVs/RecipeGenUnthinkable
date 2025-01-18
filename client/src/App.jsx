import { useState } from "react";
import InputForm from "./components/InputForm";
import RecipeList from "./components/RecipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (data) => {
    setRecipes(data);
  };

  return (
    <div>
      <InputForm onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
