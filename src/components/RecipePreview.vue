<template>
  <div class="recipe-preview">
    <router-link :to="{ name: 'recipe', params: { recipeTitle: recipe.title, recipeId: recipe.id } }">
      <div class="recipe-body">
        <img :src="recipe.image" class="recipe-image" />
      </div>
      <div class="recipe-footer">
        <div :title="recipe.title" class="recipe-title" :style="{ color: recipe.clicked ? 'blue' : '' }">
          {{ recipe.title }}
        </div>
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
          <div class="likes">
            <b-button @click.prevent="likeClicked" variant="outline" class="mb-2">
              <b-icon :icon="like_clicked ? 'heart-fill' : 'heart'" aria-hidden="true"></b-icon>
            </b-button>
          </div>
        </div>
      </div>
    </router-link>

    <div class="bottom-right">
      <b-toast v-model="toastShow" :auto-hide-delay="5000" no-close-button>
        {{ toastMessage }}
        <b-button @click="dismissToast" variant="outline-secondary" size="sm">Close</b-button>
      </b-toast>
    </div>
  </div>
</template>


<script>
import { BToast } from 'bootstrap-vue';
import { mockAddFavorite } from '../services/user';

export default {
  name: 'DietaryIcons',
  components: {
    BToast,
  },
  data() {
    return {
      like_clicked: false,
      toastShow: false,
      toastMessage: '',
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  async mounted() {
  },
  methods: {
    async likeClicked() {
      this.like_clicked = !this.like_clicked;
      const userDetails = {
        recipeId: this.recipe.id,
      };
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/favorites", userDetails
      );
      console.log("respons:", response);
      this.recipes = response.data;

    } catch (err) {
      console.error('Error fetching favorite recipes:', err);
    }
      // const response = mockAddFavorite(this.recipe.id);
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
.recipe-preview {
  display: inline-block;
  width: 500px;
  height: 350px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 7px #c7c6c6;
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
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #504f4f;
}

.recipe-overview {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14pt;
  color: #555;
}

.recipe-overview .time,
.recipe-overview .likes,
.recipe-overview .dietary-icons {
  display: flex;
  align-items: center;
}

.recipe-overview .dietary-icons {
  margin-right: auto;
}

.icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  object-fit: cover;
}

.clock-icon {
  margin-right: 5px;
}

.likes {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.likes .like-text {
  margin-left: 5px;
  margin-bottom: 10px;
}

.bottom-right {
  position: fixed;
  margin-top: 20%;
  right: 100%;
}
</style>
