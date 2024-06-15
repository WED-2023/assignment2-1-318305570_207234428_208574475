<template>
    <div>
      <h2>My Favorite Recipes</h2>
      <RecipePreviewList :title="'Favorite Recipes'" :amountToFetch="4" />
    </div>
  </template>
  
  <script>
  import RecipePreviewList from '../components/RecipePreviewList.vue';
  
  export default {
    name: 'MyFavoriteRecipes',
    components: {
      RecipePreviewList
    }
  };
  </script>
  
  <style scoped>
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  