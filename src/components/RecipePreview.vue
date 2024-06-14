<template>
  <div class="recipe-preview">
    <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }">
      <div class="recipe-body">
        <img :src="recipe.image" class="recipe-image" />
      </div>
      <div class="recipe-footer">
        <div :title="recipe.title" class="recipe-title">
          {{ recipe.title }}
        </div>
        <div class="recipe-overview">
          <div class="time">
            <b-icon-clock></b-icon-clock>
            {{ recipe.readyInMinutes }} minutes
          </div>
          <div class="likes">
            <b-button @click.prevent="likeClicked" variant="outline" class="mb-2">
              <b-icon :icon="like_clicked ? 'heart-fill' : 'heart'" aria-hidden="true"></b-icon>
            </b-button>
            {{ like_clicked ? recipe.aggregateLikes + 1 : recipe.aggregateLikes }} likes
          </div>
        </div>
        <div class="dietary-icons">
          <img v-if="recipe.vegan" src="@/assets/vegan.png" class="icon" alt="Vegan" />
          <img v-if="recipe.vegetarian" src="@/assets/vegetarian.png" class="icon" alt="Vegetarian" />
          <img v-if="recipe.glutenFree" src="@/assets/gluten-free.png" class="icon" alt="Gluten-Free" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { BootstrapVueIcons } from 'bootstrap-vue';

export default {
  name: 'DietaryIcons',
  data() {
    return {
      like_clicked: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods: {
    likeClicked() {
      this.like_clicked = !this.like_clicked;
    }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
  text-decoration: none;
  color: inherit;
  background-color: #fff;
}

.recipe-preview:hover {
  transform: translateY(-10px);
}

.recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.recipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recipe-footer {
  padding: 15px;
  background-color: #f8f8f8;
}

.recipe-title {
  font-size: 13pt;
  font-weight: bold;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recipe-overview {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14pt;
  color: #555;
}

.recipe-overview li {
  display: flex;
  align-items: center;
}

#icons{
  width: 8%;
  height: 8%;
  object-fit: cover;
}
</style>
