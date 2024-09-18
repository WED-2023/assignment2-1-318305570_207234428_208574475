(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[838],{8838:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});n(8309),n(2526),n(1817);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"family-recipes"},[t("h1",[e._v("Ancient Family Secrets (aka Recipes)")]),e.loading?t("div",{staticClass:"loading"},[t("p",[e._v("Loading... (Or maybe I'm just pretending to be busy)")]),t("div",{staticClass:"spinner"})]):t("div",[e._l(e.recipes,(function(n){return t("div",{key:n.id,staticClass:"recipe-card"},[t("h2",[e._v(e._s(n.name))]),t("p",{staticClass:"recipe-description"},[e._v(e._s(n.description))]),t("p",[t("strong",[e._v("Recipe from:")]),e._v(" "+e._s(n.owner))]),t("p",[t("strong",[e._v("Occasion:")]),e._v(" "+e._s(n.occasion))]),e._m(0,!0),t("ul",e._l(n.ingredients,(function(n){return t("li",{key:n,on:{click:e.revealEasterEgg}},[e._v(e._s(n))])})),0),e.easterEgg?t("p",{staticClass:"easter-egg"},[e._v("Congratulations! You found the secret recipe for laughter!")]):e._e(),e._m(1,!0),t("ol",e._l(n.instructions,(function(n){return t("li",{key:n},[e._v(e._s(n))])})),0),t("button",{staticClass:"secret-button",on:{click:e.revealSecret}},[e._v("Click for Secret Family Ingredient")]),e.showSecret?t("p",{staticClass:"secret-reveal"},[e._v("The secret ingredient is... love (and a dash of sarcasm)!")]):e._e()])})),t("button",{staticClass:"advice-button",on:{click:e.getRandomAdvice}},[e._v("Click for Random Cooking Advice")]),e.randomAdvice?t("p",{staticClass:"random-advice"},[e._v(e._s(e.randomAdvice))]):e._e()],2),e._m(2)])},o=[function(){var e=this,t=e._self._c;return t("p",[t("strong",[e._v("Ingredients:")])])},function(){var e=this,t=e._self._c;return t("p",[t("strong",[e._v("Instructions:")])])},function(){var e=this,t=e._self._c;return t("footer",[t("p",[e._v("Disclaimer: No grandmothers were harmed in the making of these recipes. Side effects may include food comas and unsolicited compliments.")])])}];n(2564);const r={name:"MyFamilyRecipesPage",data:function(){return{loading:!0,showSecret:!1,easterEgg:!1,randomAdvice:"",recipes:[{id:1,name:"Sarmale (Stuffed Cabbage Rolls)",description:"Guaranteed to impress your in-laws—or at least keep them busy chewing.",owner:"Grandma from Romania",occasion:"When you need to prove you can roll something besides your eyes",ingredients:["1 large cabbage (because tiny cabbages don’t cut it)","500g minced pork (or use beef, but Grandma will know)","200g rice","1 onion","2 carrots","Salt and pepper to taste","1 tablespoon paprika","500ml tomato sauce"],instructions:["Boil the cabbage leaves until they’re as flexible as your weekend plans.","In a bowl, mix minced pork, rice, chopped onion, grated carrots, salt, pepper, and paprika.","Place a spoonful of the mixture on each cabbage leaf and roll it tighter than you roll out of bed on a Monday.","Place the rolls in a pot, cover with tomato sauce, and simmer for about 2 hours.","Serve hot and bask in the compliments."]},{id:2,name:"Baklava",description:"The dessert that's worth the sticky fingers and a small sugar coma.",owner:"Grandfather from Turkey",occasion:"When you want to impress people with your layers—of pastry, not personality",ingredients:["500g phyllo dough","200g melted butter (because you didn’t really want to fit into those jeans anyway)","300g chopped walnuts","200g sugar","1 teaspoon cinnamon","200ml water","100g honey"],instructions:["Preheat the oven to 180°C (350°F).","Layer half of the phyllo dough in a greased baking dish, brushing each layer with melted butter.","Combine chopped walnuts, sugar, and cinnamon. Sprinkle over the phyllo layers.","Layer the remaining phyllo dough on top, again brushing each layer with butter.","Cut into diamond shapes (because apparently, squares are too basic) and bake for 45 minutes until golden.","Meanwhile, combine water and honey in a pot and bring to a boil. Pour over baked baklava.","Let it soak and cool before serving. Try not to eat it all in one sitting."]},{id:3,name:"Goulash",description:"For when you need comfort food, and a blanket just isn’t enough.",owner:"Aunt from Hungary",occasion:"When you need a hug in a bowl but nobody’s around",ingredients:["500g beef, cubed (make sure they’re cube-shaped, or the recipe police will come)","2 onions, chopped","2 bell peppers, chopped","3 tomatoes, chopped","3 potatoes, cubed","2 tablespoons paprika","Salt and pepper to taste","2 cups beef broth","1 tablespoon caraway seeds","2 cloves garlic, minced"],instructions:["In a large pot, sauté onions in oil until golden. Add beef and cook until browned.","Stir in paprika, garlic, and caraway seeds.","Add bell peppers, tomatoes, and potatoes. Pour in beef broth and bring to a boil.","Reduce heat and simmer for 1.5-2 hours until meat is tender. Stir occasionally, or just whenever you remember it exists.","Season with salt and pepper. Serve hot with bread and a side of nostalgia."]}]}},mounted:function(){var e=this;setTimeout((function(){e.loading=!1}),5e3)},methods:{revealSecret:function(){this.showSecret=!0},revealEasterEgg:function(){this.easterEgg=!0},getRandomAdvice:function(){var e=["If you're afraid of butter, use cream.","Never trust a skinny chef.","Wine pairs with everything, even your cooking disasters.","A watched pot never boils, but a forgotten one will definitely burn.","Always add a little extra cheese—you deserve it."];this.randomAdvice=e[Math.floor(Math.random()*e.length)]}}},i=r;var s=n(1001),c=(0,s.Z)(i,a,o,!1,null,null,null);const l=c.exports},9363:e=>{e.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},7152:(e,t,n)=>{"use strict";var a=n(7854),o=n(2104),r=n(614),i=n(9363),s=n(8113),c=n(206),l=n(8053),d=a.Function,u=/MSIE .\./.test(s)||i&&function(){var e=a.Bun.version.split(".");return e.length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2])}();e.exports=function(e,t){var n=t?2:1;return u?function(a,i){var s=l(arguments.length,1)>n,u=r(a)?a:d(a),p=s?c(arguments,n):[],h=s?function(){o(u,this,p)}:u;return t?e(h,i):e(h)}:e}},6815:(e,t,n)=>{var a=n(2109),o=n(7854),r=n(7152),i=r(o.setInterval,!0);a({global:!0,bind:!0,forced:o.setInterval!==i},{setInterval:i})},8417:(e,t,n)=>{var a=n(2109),o=n(7854),r=n(7152),i=r(o.setTimeout,!0);a({global:!0,bind:!0,forced:o.setTimeout!==i},{setTimeout:i})},2564:(e,t,n)=>{n(6815),n(8417)}}]);
//# sourceMappingURL=838.ba197ff8.js.map