 
 
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
      this.$root.$on('new-recipe-added', this.addRecipe);
      // Load recipes from JSON file initially
      this.loadRecipesFromJSON();
    },
    methods: {
      addRecipe(recipeDetails) {
        this.recipes.push(recipeDetails);
      },
      loadRecipesFromJSON() {
        try {
          const recipes = require('../assets/mocks/recipe_full_view');
          this.recipes = recipes;
        } catch (error) {
          console.error('Error loading recipes from JSON:', error);
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
   
<!-- <template>
  <div>
    <h2>My Recipes</h2>
    <RecipePreviewList :recipes="recipes" title="My Recipes" :amountToFetch="recipes.length" />
  </div>
</template>

<script>
import RecipePreviewList from '../components/RecipePreviewList.vue';

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      recipes: []
    };
  },
  created() {
    this.$root.$on('new-recipe-added', this.addRecipe);
    this.loadRecipesFromJSON();
  },
  methods: {
    addRecipe(recipeDetails) {
      this.recipes.push(recipeDetails);
    },
    loadRecipesFromJSON() {
      try {
        const recipes = require('../assets/mocks/recipe_full_view.json');
        this.recipes = recipes.recipes;
      } catch (error) {
        console.error('Error loading recipes from JSON:', error);
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
