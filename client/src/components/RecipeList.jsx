import React from "react";

const RecipeList = ({ recipes }) => {
  // Sort recipes by difficulty (easy to hard) and time (ascending)
  const sortedRecipes = recipes.sort((a, b) => {
    const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };

    // Sort by difficulty first, then by cooking time
    if (difficultyOrder[a.difficulty] !== difficultyOrder[b.difficulty]) {
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    } else {
      return a.time - b.time;
    }
  });

  return (
    <div className="p-6 space-y-6">
      {/* Informative Note */}
      <div className="text-center mb-6 text-gray-500">
        <p className="font-medium text-lg">
          Recipes are sorted by the least difficulty and the least cooking time.
        </p>
      </div>

      {/* Recipe List */}
      {sortedRecipes.length === 0 ? (
        <p className="text-center text-xl text-gray-500">No recipes found</p>
      ) : (
        sortedRecipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white text-black p-6 rounded-xl shadow-lg hover:shadow-xl hover:ring-4 hover:ring-gray-500 transition-all duration-300"
          >
            <div className="text-center mb-6">
              <h3 className="text-4xl font-bold">{recipe.name}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column */}
              <div>
                <div className="mb-4">
                  <p className="font-medium">Cuisine:</p>
                  <p>{recipe.cuisine || "N/A"}</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium">Difficulty:</p>
                  <p>{recipe.difficulty || "N/A"}</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium">Dietary Restrictions:</p>
                  <p>
                    {recipe.dietaryRestriction &&
                    recipe.dietaryRestriction.length > 0
                      ? recipe.dietaryRestriction.join(", ")
                      : "N/A"}
                  </p>
                </div>
              </div>

              {/* Center Column */}
              <div>
                <div className="mb-4">
                  <p className="font-medium">Ingredients:</p>
                  <p>
                    {recipe.ingredients && recipe.ingredients.length > 0
                      ? recipe.ingredients.join(", ")
                      : "N/A"}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="font-medium">Steps:</p>
                  <ul className="list-disc pl-5">
                    {recipe.steps && recipe.steps.length > 0
                      ? recipe.steps.map((step, index) => (
                          <li key={index} className="text-sm">
                            {step}
                          </li>
                        ))
                      : "No steps available"}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div>
                  <p className="font-medium">Nutritional Info:</p>
                  <ul>
                    <li>
                      Calories: {recipe.nutritionalInfo?.calories || "N/A"}
                    </li>
                    <li>
                      Protein: {recipe.nutritionalInfo?.protein || "N/A"}g
                    </li>
                    <li>Fat: {recipe.nutritionalInfo?.fat || "N/A"}g</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
