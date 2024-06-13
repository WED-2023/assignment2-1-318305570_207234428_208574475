// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_previews from "../assets/mocks/recipe_preview.json";


export function mockGetRecipesPreview(amount = 1) {
  const shuffled = recipe_previews.sort(() => 0.5 - Math.random()); // Shuffle the array
  const selected = shuffled.slice(0, amount); // Get sub-array of first n elements after shuffle
  return { data: { recipes: selected } };
}

// export function mockGetRecipeFullDetails(recipeId) {
//     return { data: { recipe: recipe_full_view } } ;
//   }
  

// Function to find a recipe by ID in the mock data
function findRecipeById(recipeId) {
  return recipe_full_view.find(recipe => recipe.id === recipeId);
}

// Mock function to get full recipe details by ID
export function mockGetRecipeFullDetails(recipeId) {
  const recipe = findRecipeById(recipeId);

  if (!recipe) {
    return {
      status: 404, // Simulate Not Found error
      data: null
    };
  }

  return { data: { recipe: recipe } } ;
}