<template>
    <div>
      <h2>My Recipes</h2>
      <div v-for="recipe in recipes" :key="recipe.title">
        <img :src="recipe.picture" alt="Recipe Picture" />
        <h3>{{ recipe.title }}</h3>
        <p>Preparation Time: {{ recipe.prepTime }} minutes</p>
        <p v-if="recipe.isVegetarian">Vegetarian</p>
        <p v-if="recipe.isVegan">Vegan</p>
        <p v-if="recipe.isGlutenFree">Gluten-Free</p>
        <p>Ingredients: {{ recipe.ingredients }}</p>
        <p>Instructions: {{ recipe.instructions }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recipes: []
      };
    },
    created() {
      console.log('MyRecipe component created');
      this.$root.$on('new-recipe-added', this.addRecipe);
    },
    methods: {
      addRecipe(recipeDetails) {
        console.log('Received new-recipe-added event:', recipeDetails);
        this.recipes.push(recipeDetails);
      }
    },
    beforeDestroy() {
      this.$root.$off('new-recipe-added', this.addRecipe);
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  


<!-- <template>
    <div>
      <h2>My Recipes</h2>
      <div v-for="recipe in recipes" :key="recipe.title">
        <img :src="recipe.picture" alt="Recipe Picture" />
        <h3>{{ recipe.title }}</h3>
        <p>Preparation Time: {{ recipe.prepTime }} minutes</p>
        <p v-if="recipe.isVegetarian">Vegetarian</p>
        <p v-if="recipe.isVegan">Vegan</p>
        <p v-if="recipe.isGlutenFree">Gluten-Free</p>
        <p>Ingredients: {{ recipe.ingredients }}</p>
        <p>Instructions: {{ recipe.instructions }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mockGetRecipeFullDetails } from '../services/recipes';
  
  export default {
    data() {
      return {
        recipes: []
      };
    },
    created() {
      console.log('MyRecipe component created');
      this.$root.$on('new-recipe-added', this.addRecipe);
    },
    methods: {
      addRecipe(recipeDetails) {
        console.log('Received new-recipe-added event:', recipeDetails);
        const fakeRecipeId = 1; // For simplicity, assuming we use a fixed ID for the fake recipe
        const fullDetails = mockGetRecipeFullDetails(fakeRecipeId);
        if (fullDetails && fullDetails.data && fullDetails.data.recipe) {
          console.log('Full details of the recipe:', fullDetails.data.recipe);
          this.recipes.push(fullDetails.data.recipe);
        } else {
          console.log('Adding received recipe details');
          this.recipes.push(recipeDetails);
        }
      }
    },
    beforeDestroy() {
      this.$root.$off('new-recipe-added', this.addRecipe);
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
   -->