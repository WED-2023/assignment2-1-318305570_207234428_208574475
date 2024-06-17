<template>
  <b-container>
    <h3>
      {{ title }}
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import { mockGetRecipesPreview } from "../services/recipes.js";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    amountToFetch: {
      type: Number,
      required: true,
    },

    //chat gpt add:
    userName: {
      type: String,
      required: false,
      default: ''
    }

  },
  data() {
    return {
      recipes: [],
    };
  },
  watch: {
    $props: {
      handler() {
        this.updateRecipes();
      },
      deep: true,
    },
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        // const response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/random",
        // );
        //const response = mockGetRecipesPreview(this.amountToFetch);
        const response = mockGetRecipesPreview(this.amountToFetch, this.userName);

        const recipes = response.data.recipes;
        this.recipes = recipes;
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
