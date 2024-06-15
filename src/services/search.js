//src/services/search.js

import recipe_previews from "../assets/mocks/recipe_preview.json";

export function mockSearchRecipes(query, amount, category, answers=false) {
  if (!answers) {
    throw { status: 409, response: { data: { message: "No recipes were found", success: false } } };
  }

  // If amount is greater than the length of recipe_previews, duplicate recipes
  const timesToRepeat = Math.ceil(amount / recipe_previews.length);
  const extendedRecipes = Array(timesToRepeat).fill(recipe_previews).flat();

  // Shuffle the array and select the required amount
  const shuffled = extendedRecipes.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, amount);
  
  return { data: { recipes: selected } };
}
