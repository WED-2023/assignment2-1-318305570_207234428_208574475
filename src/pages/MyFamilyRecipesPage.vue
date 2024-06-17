<template>
    <div class="family-recipes">
      <h1>My Family Recipes</h1>
      <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
        <h2>{{ recipe.name }}</h2>
        <p><strong>Recipe from:</strong> {{ recipe.owner }}</p>
        <p><strong>Occasion:</strong> {{ recipe.occasion }}</p>
        <p><strong>Ingredients:</strong></p>
        <ul>
          <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
          <li v-for="step in recipe.instructions" :key="step">{{ step }}</li>
        </ol>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyFamilyRecipesPage', 
    data() {
      return {
        recipes: [
          {
            id: 1,
            name: 'Sarmale (Stuffed Cabbage Rolls)',
            owner: 'Grandma from Romania',
            occasion: 'Usually made during Christmas and family gatherings',
            ingredients: [
              '1 large cabbage',
              '500g minced pork',
              '200g rice',
              '1 onion',
              '2 carrots',
              'Salt and pepper to taste',
              '1 tablespoon paprika',
              '500ml tomato sauce'
            ],
            instructions: [
              'Boil the cabbage leaves until soft.',
              'In a bowl, mix minced pork, rice, chopped onion, grated carrots, salt, pepper, and paprika.',
              'Place a spoonful of the mixture on each cabbage leaf and roll it tightly.',
              'Place the rolls in a pot, cover with tomato sauce, and simmer for about 2 hours.',
              'Serve hot.'
            ]
          },
          {
            id: 2,
            name: 'Baklava',
            owner: 'Grandfather from Turkey',
            occasion: 'Made during special celebrations and festivals',
            ingredients: [
              '500g phyllo dough',
              '200g melted butter',
              '300g chopped walnuts',
              '200g sugar',
              '1 teaspoon cinnamon',
              '200ml water',
              '100g honey'
            ],
            instructions: [
              'Preheat the oven to 180°C (350°F).',
              'Layer half of the phyllo dough in a greased baking dish, brushing each layer with melted butter.',
              'Combine chopped walnuts, sugar, and cinnamon. Sprinkle over the phyllo layers.',
              'Layer the remaining phyllo dough on top, again brushing each layer with butter.',
              'Cut into diamond shapes and bake for 45 minutes until golden.',
              'Meanwhile, combine water and honey in a pot and bring to a boil. Pour over baked baklava.',
              'Let it soak and cool before serving.'
            ]
          },
          {
            id: 3,
            name: 'Goulash',
            owner: 'Aunt from Hungary',
            occasion: 'Commonly made during family reunions',
            ingredients: [
              '500g beef, cubed',
              '2 onions, chopped',
              '2 bell peppers, chopped',
              '3 tomatoes, chopped',
              '3 potatoes, cubed',
              '2 tablespoons paprika',
              'Salt and pepper to taste',
              '2 cups beef broth',
              '1 tablespoon caraway seeds',
              '2 cloves garlic, minced'
            ],
            instructions: [
              'In a large pot, sauté onions in oil until golden.',
              'Add beef and cook until browned.',
              'Stir in paprika, garlic, and caraway seeds.',
              'Add bell peppers, tomatoes, and potatoes.',
              'Pour in beef broth and bring to a boil. Reduce heat and simmer for 1.5-2 hours until meat is tender.',
              'Season with salt and pepper. Serve hot with bread.'
            ]
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  .family-recipes {
    font-family: Arial, sans-serif;
    padding: 20px;
    color: white; 
  }
  
  .recipe-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .recipe-card h2 {
    margin-top: 0;
  }
  
  .recipe-card ul,
  .recipe-card ol {
    margin: 0;
    padding-left: 20px;
  }
  </style>
  