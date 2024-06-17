<template>
  <div class="container">
    <div v-if="recipe" class="recipe-content">
      <div class="recipe-header">
        <h1 class="recipe-title">{{ recipe.title }}</h1>
        <img :src="recipe.image" class="recipe-image" />
      </div>
      <div class="recipe-body">
        <div class="recipe-details">
          <div class="dietary-icons">
            <img v-if="recipe.vegan" src="@/assets/vegan.png" class="icon" alt="Vegan" />
            <img v-if="recipe.vegetarian" src="@/assets/vegetarian.png" class="icon" alt="Vegetarian" />
            <img v-if="recipe.glutenFree" src="@/assets/gluten-free.png" class="icon" alt="Gluten-Free" />
          </div>
          <div class="recipe-overview">
            <div class="time">
              <b-icon-clock class="clock-icon"></b-icon-clock>
              {{ recipe.readyInMinutes }} minutes
            </div>
          </div>
        </div>
        <div class="likes">
          <b-button @click.prevent="likeClicked" variant="outline" class="like-button">
            <b-icon :icon="like_clicked ? 'heart-fill' : 'heart'" aria-hidden="true"></b-icon>
          </b-button>
          <span class="like-text">{{ like_clicked ? recipe.aggregateLikes + 1 : recipe.aggregateLikes }} likes</span>
        </div>
        <div class="recipe-ingredients">
          <h2>Ingredients | {{ recipe.servings }} servings</h2>
          <ul>
            <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
              {{ r.original }}
            </li>
          </ul>
        </div>
        <div class="recipe-instructions">
          <h2>Instructions</h2>
          <ol>
            <li v-for="s in recipe._instructions" :key="s.number">
              {{ s.step }}
            </li>
          </ol>
        </div>
      </div>
      <b-toast v-model="toastShow" :auto-hide-delay="5000" no-close-button>
        {{ toastMessage }}
        <b-button @click="dismissToast" variant="outline-secondary" size="sm">Close</b-button>
      </b-toast>
    </div>
  </div>
</template>

<script>
import { mockGetRecipeFullDetails } from "../services/recipes.js";
import { BToast } from 'bootstrap-vue';
import { mockAddFavorite } from '../services/user';

export default {
  name: 'DietaryIcons',
  components: {
    BToast,
  },
  data() {
    return {
      recipe: null,
      like_clicked: false,
      toastShow: false,
      toastMessage: '',
    };
  },
  async created() {
    try {
      let response;
      response = mockGetRecipeFullDetails(this.$route.params.recipeId);
      if (response.status !== 200) this.$router.replace("/NotFound");

      let {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegetarian,
        vegan,
        glutenFree,
        servings
      } = response.data.recipe;

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegetarian,
        vegan,
        glutenFree,
        servings
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    likeClicked() {
      this.like_clicked = !this.like_clicked;
      const response = mockAddFavorite(this.recipe.id);
      this.toastMessage = response.response.data.message;
      this.toastShow = true;
    },
    dismissToast() {
      this.toastShow = false;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  background-color: #ffffff;
  color: #f0f0f0;
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.recipe-content {
  background-color: #f2f0f0f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.recipe-header {
  text-align: center;
  margin-bottom: 20px;
}

.recipe-title {
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 20px;
  color: #353535;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
}

.recipe-image {
  max-width: 65%;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.recipe-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.recipe-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.dietary-icons {
  display: flex;
  align-items: center;
}

.icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.recipe-overview {
  display: flex;
  align-items: center;
}

.time, .likes {
  display: flex;
  align-items: center;
  font-size: 1.2em;
}

.clock-icon {
  margin-right: 5px;
}

.like-button {
  margin-top: -20px;
  margin-right: -2px;
  margin-left: -10px;
}

.recipe-ingredients, .recipe-instructions {
  background-color: #f9f6f6;
  padding: 20px;
  border-radius: 8px;
}

.recipe-ingredients h2, .recipe-instructions h2 {
  font-size: 1.8em;
  font-weight: 700;
  margin-bottom: 15px;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
  color: #393737;
}

li {
  padding: 5px 0;
}

.like-text {
  margin-top: -20px;
  font-size: 1em;
  color: #484848;
}

</style>
