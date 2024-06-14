<template>
  <div class="card" id="main-card">

    <div class="row">
      <input v-model="searchQuery" type="text" placeholder="Search by recipe name or dish">
      <select v-model="resultsLimit">
        <option value="5">5 results</option>
        <option value="10">10 results</option>
        <option value="15">15 results</option>
      </select>
      <button @click="searchRecipes">Search</button>
    </div>
    
    <a data-toggle="collapse" href="#AdvanceFilter" role="button" aria-expanded="false" aria-controls="AdvanceFilter" class="advanced">
          Advance Search With Filters <i class="fa fa-angle-down"></i></a>
    <div class="collapse" id="AdvanceFilter">
      <div class="card card-body">
        <div class="row">
          <div class="col" v-for="category in categories" :key="category.name">
            <h3>{{ category.name }}</h3>
            <div class="form-check" v-for="item in category.items" :key="item">
              <input
                class="form-check-input custom-checkbox" 
                type="checkbox"
                v-model="checkedItems[category.name][item]"
                :value="item.value"
                :id="item" 
              >
              <label class="form-check-label" :for="item">
                {{ item }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="searchResults.length > 0">
      <RecipePreviewList :title="'Search Results'" :amountToFetch="resultsLimit" :recipes="searchResults" />
    </div>
    <b-alert
      class="mt-2"
      v-if="submitError"
      variant="warning"
      dismissible
      show
    >
      No recipes found
    </b-alert>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList.vue";
import categories from "../assets/categories";
import {mockSearchRecipes} from "../services/search"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  name: "SearchPage",
  components: {
    RecipePreviewList,
  },
  data() {

    // initialize checkedItems so it could handle all our categories and items
    const checkedItems = {};
    categories.forEach((category) => {
      checkedItems[category.name] = {};
      category.items.forEach((item) => {
        checkedItems[category.name][item] = false;
      });
    });

    return {
      categories: categories,
      searchQuery: "",
      resultsLimit: 5,
      selectedCategory: "",
      searchResults: [],
      checkedItems: checkedItems,
      submitError: undefined,
      filters: {
        query: '',
        intolerances: checkedItems.Intolerances,
        diet: checkedItems.Diet,
        cuisine: checkedItems.Cuisine,
        number: this.selectedReturnOption,
      }
    };
  },
  methods: {
    async searchRecipes() {
      // Check if searchQuery is empty
      if (!this.searchQuery.trim()) {
        return; // Exit the method if searchQuery is empty or whitespace only
      }

      try {
        console.log(this.resultsLimit)
        const response = await mockSearchRecipes(this.searchQuery, this.resultsLimit, this.selectedCategory, true);
        this.searchResults = response.data.recipes;
      } catch (err) {
        console.log(err.response);
        this.submitError = err.response.data.message;
      }

      const checkedBoxes = {};
      for (const category in this.checkedItems) {
        checkedBoxes[category] = Object.keys(this.checkedItems[category]).filter((item) => {
          return this.checkedItems[category][item];
        });
      }

      this.filters.query = this.searchQuery;
      this.filters.intolerances = checkedBoxes.Intolerances;
      this.filters.diet = checkedBoxes.Diet;
      this.filters.cuisine = checkedBoxes.Cuisine;
      this.filters.number = this.resultsLimit;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: 20px;
  padding: 20px;
  width: 100%;
}
.row {
  display: flex;
  flex-wrap: wrap;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.form-check-inline {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.form-check-inline .form-check-input {
  margin-right: 5px;
}

#main-card{
  background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%);
}

.advanced {
  color: white
}

h1{
  color: white;
  font-weight: bold;
}
</style>
