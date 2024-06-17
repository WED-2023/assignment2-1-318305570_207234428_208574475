<template>
  <div class="main-container">
    <div class="page-title">
      <h1>Welcome to Reciplease</h1>
    </div>
    <div class="columns-container">
      <div class="column-left">
        <div class="column-title">
          <h2>Explore this recipes</h2>
        </div>
        <RecipePreviewList :amountToFetch="3" :key="randomRecipesKey" />
        <b-button variant="secondary" class="new-recipes-button" @click="refreshRandomRecipes">New Random Recipes</b-button>
      </div>
      <div class="column-right">
        <div class="column-title">
          <h2>Last Viewed Recipes</h2>
        </div>
        <div v-if="$root.store.username">
          <RecipePreviewList :amountToFetch="3" :recipes="lastViewedRecipes" />
        </div>
        <div v-else class="login-container">
          <LoginPage />
        </div>
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
  methods: {
    refreshRandomRecipes() {
      this.randomRecipesKey += 1;
    },
    async fetchLastViewedRecipes() {
      try {
        // Replace with your API call to get last viewed recipes
        // const response = await fetch('https://your-api-endpoint.com/last-viewed-recipes');
        // this.lastViewedRecipes = await response.json();
      } catch (error) {
        // console.error('Error fetching last viewed recipes:', error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  padding: 20px;
}

.page-title {
  background-color: rgba(44, 44, 46, 0.8); /* Transparent background */
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 12px; /* Rounded corners */
}

.page-title h1 {
  color: #fff; /* Text color */
  margin: 0;
}

.columns-container {
  display: flex;
  justify-content: space-between; /* Space between columns */
  gap: 20px; /* Gap between columns */
  margin: 0 auto; /* Center columns horizontally */
  max-width: 1200px; /* Maximum width for the columns */
}

.column-left, .column-right {
  flex: 1; /* Equal width for both columns */
  color: #fff; /* Text color */
}

.column-left {
  margin-right: 10px; /* Space between columns */
}

.column-right {
  margin-left: 10px; /* Space between columns */
}

.column-title {
  background-color: rgba(44, 44, 46, 0.8); /* Transparent background */
  padding: 10px;
  border-radius: 8px; /* Rounded corners */
  text-align: center; /* Center column titles */
}

.column-title h2 {
  color: #fff; /* Text color */
  margin: 0; /* Remove margin */
}

.new-recipes-button {
  display: block;
  margin: 20px auto; /* Center button */
}

.login-container {
  margin-top: 40px; /* Adjust this value to align with the first recipe */
}
</style>
