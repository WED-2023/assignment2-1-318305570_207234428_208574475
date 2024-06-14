<template>
  <div class="main-container">
    <div class="column-left">
      <RecipePreviewList title="Explore this recipes" :amountToFetch="3" :key="randomRecipesKey" />
      <b-button variant="primary" class="new-recipes-button" @click="refreshRandomRecipes">New Random Recipes</b-button>
    </div>
    <div class="column-right">
      <div v-if="$root.store.username">
        <RecipePreviewList title="Last Viewed Recipes" :amountToFetch="3" :recipes="lastViewedRecipes" />
      </div>
      <div v-else>
        <LoginPage />
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPage from "../pages/LoginPage.vue";

export default {
  components: {
    RecipePreviewList,
    LoginPage
  },
  data() {
    return {
      randomRecipesKey: 0,
      lastViewedRecipes: [],
    };
  },
  mounted() {
    this.fetchLastViewedRecipes();
  },
  methods: {
    refreshRandomRecipes() {
      this.randomRecipesKey += 1;
    },
    async fetchLastViewedRecipes() {
      try {
        // Replace with your API call to get last viewed recipes
        const response = await fetch('https://your-api-endpoint.com/last-viewed-recipes');
        this.lastViewedRecipes = await response.json();
      } catch (error) {
        console.error('Error fetching last viewed recipes:', error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  justify-content: space-between;
}

.column-left, .column-right {
  width: 48%;
}

.column-left h2, .column-right h2 {
  text-align: center;
}

.new-recipes-button {
  display: block;
  margin: 20px auto;
}
</style>
