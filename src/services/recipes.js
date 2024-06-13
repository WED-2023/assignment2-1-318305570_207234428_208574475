// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_previews from "../assets/mocks/recipe_preview.json";


export function mockGetRecipesPreview(amount = 1) {
  const shuffled = recipe_previews.sort(() => 0.5 - Math.random()); // Shuffle the array
  const selected = shuffled.slice(0, amount); // Get sub-array of first n elements after shuffle
  return { data: { recipes: selected } };
}

export function mockGetRecipeFullDetails(recipeId) {
    return { data: { recipe: recipe_full_view } } ;
  }
  
