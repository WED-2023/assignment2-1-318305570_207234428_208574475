<template>
  <div>
    <!-- Recipe Creation Modal -->
    <b-modal ref="modal" id="recipe-modal" title="Create Recipe" hide-footer>
      <b-form @submit.stop.prevent="handleSubmit">
        <b-form-group label="Recipe Picture URL" label-for="recipe-picture">
          <b-form-input id="recipe-picture" v-model="recipeDetails.picture" required></b-form-input>
        </b-form-group>

        <b-form-group label="Recipe Title" label-for="recipe-title">
          <b-form-input id="recipe-title" v-model="recipeDetails.title" required></b-form-input>
        </b-form-group>

        <b-form-group label="Preparation Time (minutes)" label-for="prep-time">
          <b-form-input id="prep-time" v-model="recipeDetails.prepTime" type="number" required></b-form-input>
        </b-form-group>

        <b-form-group label-for="is-vegetarian">
          <b-form-checkbox id="is-vegetarian" v-model="recipeDetails.isVegetarian">Vegetarian</b-form-checkbox>
        </b-form-group>

        <b-form-group label-for="is-vegan">
          <b-form-checkbox id="is-vegan" v-model="recipeDetails.isVegan">Vegan</b-form-checkbox>
        </b-form-group>

        <b-form-group label-for="is-gluten-free">
          <b-form-checkbox id="is-gluten-free" v-model="recipeDetails.isGlutenFree">Gluten-Free</b-form-checkbox>
        </b-form-group>

        <b-form-group label="Ingredients" label-for="recipe-ingredients">
          <b-form-textarea id="recipe-ingredients" v-model="recipeDetails.ingredients" rows="3" required></b-form-textarea>
        </b-form-group>

        <b-form-group label="Instructions" label-for="recipe-instructions">
          <b-form-textarea id="recipe-instructions" v-model="recipeDetails.instructions" rows="5" required></b-form-textarea>
        </b-form-group>

        <b-button class="button" variant="dark" @click="handleSubmit">Save Recipe</b-button>
        <b-button class="button" variant="secondary" @click="cancel">Cancel</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mockAddUserRecipe } from '../services/user';

export default {
  data() {
    return {
      recipeDetails: {
        picture: '',
        title: '',
        prepTime: 0,
        isVegetarian: false,
        isVegan: false,
        isGlutenFree: false,
        ingredients: '',
        instructions: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      const response = mockAddUserRecipe(this.recipeDetails);
      if (response.status === 200 && response.response.data.success) {
        // Emit an event to notify parent about the new recipe
        this.$emit('recipe-saved', this.recipeDetails);

        // Reset the form
        this.recipeDetails = {
          picture: '',
          title: '',
          prepTime: 0,
          isVegetarian: false,
          isVegan: false,
          isGlutenFree: false,
          ingredients: '',
          instructions: ''
        };

        // Close the modal
        this.$bvModal.hide('recipe-modal');

        // Redirect to MyRecipes page
        this.$router.push({ name: 'myRecipes' });
      } else {
        console.error('Error adding recipe');
      }
    },
    cancel() {
      // Reset the form
      this.recipeDetails = {
        picture: '',
        title: '',
        prepTime: 0,
        isVegetarian: false,
        isVegan: false,
        isGlutenFree: false,
        ingredients: '',
        instructions: ''
      };

      // Close the modal
      this.$bvModal.hide('recipe-modal');
    }
  }
};
</script>

<style>
  .button{
    margin-right: 10px;
  }
</style>
