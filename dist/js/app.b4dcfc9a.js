(()=>{"use strict";var e={9230:(e,t,r)=>{r.d(t,{Z:()=>b});var i=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._t("default")],2),t("b-row",e._l(e.recipes,(function(r){return t("b-col",{key:r.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:r,isFromMyRecipes:e.isFromMyRecipes}})],1)})),1)],1)},s=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-preview"},[t("router-link",{attrs:{to:{name:"recipe",params:{recipeTitle:e.recipe.title,recipeId:e.recipe.id,fromMyRecipes:this.isFromMyRecipes}}}},[t("div",{staticClass:"recipe-body"},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-footer"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),t("div",{staticClass:"dietary-icons"},[e.recipe.vegan?t("img",{staticClass:"icon",attrs:{src:r(3238),alt:"Vegan"}}):e._e(),e.recipe.vegetarian?t("img",{staticClass:"icon",attrs:{src:r(7221),alt:"Vegetarian"}}):e._e(),e.recipe.glutenFree?t("img",{staticClass:"icon",attrs:{src:r(6912),alt:"Gluten-Free"}}):e._e()]),t("div",{staticClass:"recipe-overview"},[t("div",{staticClass:"time"},[t("b-icon-clock",{staticClass:"clock-icon"}),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes ")],1),t("div",{staticClass:"likes"},[t("span",{staticClass:"like-text"},[e._v(e._s(e.recipeLikes))]),t("b-button",{staticClass:"mb-2",attrs:{variant:"outline"},on:{click:function(t){return t.preventDefault(),e.likeClicked.apply(null,arguments)}}},[t("b-icon",{attrs:{icon:e.like_clicked?"heart-fill":"heart","aria-hidden":"true"}})],1)],1)])])]),t("div",{staticClass:"bottom-right"},[t("b-toast",{attrs:{"auto-hide-delay":5e3,"no-close-button":""},model:{value:e.toastShow,callback:function(t){e.toastShow=t},expression:"toastShow"}},[e._v(" "+e._s(e.toastMessage)+" "),t("b-button",{attrs:{variant:"outline-secondary",size:"sm"},on:{click:e.dismissToast}},[e._v("Close")])],1)],1)],1)},n=[],o=r(124),c=r(8534),l=(r(2222),r(5212),r(1539),r(575));const u={name:"RecipePreview",components:{BToast:l.K},data:function(){return{like_clicked:!1,toastShow:!1,toastMessage:"",recipeLikes:0}},props:{recipe:{type:Object,required:!0},isFromMyRecipes:{type:Boolean,default:!1}},mounted:function(){var e=this;return(0,c.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isFromMyRecipes){t.next=3;break}return t.next=3,e.fetchRecipeDetails();case 3:return t.next=5,e.checkIfFavorite();case 5:case"end":return t.stop()}}),t)})))()},methods:{fetchRecipeDetails:function(){var e=this;return(0,c.Z)((0,o.Z)().mark((function t(){var r,i;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("".concat(e.$root.store.server_domain,"/recipes/previewRecipe/").concat(e.recipe.id));case 3:r=t.sent,i=r.data,e.recipeLikes=i.aggregateLikes,t.next=13;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error("Error fetching recipe details:",t.t0),e.toastMessage="Error fetching recipe details",e.toastShow=!0;case 13:case"end":return t.stop()}}),t,null,[[0,8]])})))()},checkIfFavorite:function(){var e=this;return(0,c.Z)((0,o.Z)().mark((function t(){var r,i;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("".concat(e.$root.store.server_domain,"/users/userfavorites"));case 3:r=t.sent,i=r.data,e.like_clicked=i.some((function(t){return t===e.recipe.id})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error("Error fetching favorite recipes:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},likeClicked:function(){var e=this;return(0,c.Z)((0,o.Z)().mark((function t(){var r;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.like_clicked=!e.like_clicked,r={recipeId:e.recipe.id},t.prev=2,t.next=5,e.axios.post("".concat(e.$root.store.server_domain,"/users/favorites"),r);case 5:t.sent,e.toastMessage="Recipe successfully saved as favorite",e.toastShow=!0,t.next=15;break;case 10:t.prev=10,t.t0=t["catch"](2),console.error("Error adding recipe to favorites:",t.t0),e.toastMessage="Error adding recipe to favorites",e.toastShow=!0;case 15:case"end":return t.stop()}}),t,null,[[2,10]])})))()},dismissToast:function(){this.toastShow=!1}}},p=u;var d=r(1001),m=(0,d.Z)(p,a,n,!1,null,"ba94a7de",null);const v=m.exports;r(9805);const f={name:"RecipePreviewList",components:{RecipePreview:v},props:{recipes:{type:Array,required:!0},isFromMyRecipes:{type:Boolean,default:!1}}},h=f;var g=(0,d.Z)(h,i,s,!1,null,"0b430947",null);const b=g.exports},5484:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-page"},[t("div",{staticClass:"login-container"},[t("h1",{staticClass:"title"},[e._v("Login")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[t("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[t("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[e._v(" Username is required ")])],1),t("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[t("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[e._v(" Password is required ")])],1),t("b-button",{staticClass:"mx-auto mt-3 d-block",staticStyle:{width:"140px"},attrs:{type:"submit",variant:"secondary"}},[e._v(" Login ")]),t("div",{staticClass:"mt-2 text-center"},[t("span",[e._v("Do not have an account yet?")]),t("router-link",{staticClass:"ml-1",staticStyle:{color:"#a09e9e"},attrs:{to:"register"}},[e._v("Register here")])],1)],1),e.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)])},s=[],a=r(124),n=r(8534),o=(r(7658),r(379));const c={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:o.C1},password:{required:o.C1}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,i=t.$error;return r?!i:null},Login:function(){var e=this;return(0,n.Z)((0,a.Z)().mark((function t(){var r;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r={username:e.form.username,password:e.form.password},t.next=4,e.axios.post(e.$root.store.server_domain+"/login",r);case 4:t.sent,e.$root.store.login(e.form.username),e.$router.push("/"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},l=c;var u=r(1001),p=(0,u.Z)(l,i,s,!1,null,"33d64273",null);const d=p.exports},3149:(e,t,r)=>{r(6992),r(8674),r(9601),r(7727),r(9554),r(1539),r(4747);var i=r(144),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark fixed-top"},[t("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"main"}}},[e._v("Home")]),e._m(0),t("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo01"}},[t("ul",{staticClass:"navbar-nav mr-auto"},[t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"search"}}},[t("b-icon",{attrs:{icon:"search",scale:"0.75"}}),e._v(" Search")],1)],1),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"about"}}},[t("b-icon",{attrs:{icon:"question",scale:"1.4"}}),e._v("About")],1)],1),e.$root.store.username?t("li",{staticClass:"nav-item"},[t("button",{staticClass:"btn btn-link nav-link",on:{click:e.showCreateRecipeModal}},[e._v("New Recipe")])]):e._e(),e.$root.store.username?t("li",{staticClass:"nav-item ml-2"},[t("b-dropdown",{attrs:{text:"Personal",right:""}},[t("b-dropdown-item",{attrs:{to:{name:"myFavoriteRecipes"}}},[e._v("My Favorite Recipes "),t("b-icon",{attrs:{icon:"heart",scale:"0.75"}})],1),t("b-dropdown-item",{attrs:{to:{name:"myRecipes"}}},[e._v("My Recipes")]),t("b-dropdown-item",{attrs:{to:{name:"myFamilyRecipes"}}},[e._v("My Family's Recipes")])],1)],1):e._e()]),t("ul",{staticClass:"navbar-nav ml-auto align-items-center"},[e.$root.store.username?e._e():t("li",{staticClass:"nav-item"},[t("span",{staticClass:"navbar-text mr-2 align-middle"},[e._v("Hello Guest:")])]),e.$root.store.username?e._e():t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"btn btn-outline-light btn-sm mr-2 align-middle",attrs:{to:{name:"register"}}},[e._v("Register")])],1),e.$root.store.username?e._e():t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"btn btn-outline-light btn-sm align-middle",attrs:{to:{name:"login"}}},[e._v("Login")])],1),e.$root.store.username?t("li",{staticClass:"nav-item"},[t("span",{staticClass:"nav-link mr-2 align-middle"},[t("b-icon",{attrs:{icon:"person",scale:"1"}}),e._v(" "+e._s(e.$root.store.username))],1)]):e._e(),e.$root.store.username?t("li",{staticClass:"nav-item"},[t("button",{staticClass:"btn btn-outline-light btn-sm align-middle",on:{click:e.Logout}},[e._v("Logout")])]):e._e()])])],1),t("router-view"),t("div",{staticClass:"banner-bottom-right",attrs:{id:"bthn",lang:"en"}}),e._v(" "),t("CreateRecipe",{ref:"createRecipeModal",on:{"recipe-saved":e.addRecipeToMyRecipes}})],1)},a=[function(){var e=this,t=e._self._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],n=r(124),o=r(8534),c=(r(7658),r(1642)),l=r(7379),u=function(){var e=this,t=e._self._c;return t("div",[t("b-modal",{ref:"modal",attrs:{id:"recipe-modal",title:"Create Recipe","hide-footer":""}},[t("b-form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("b-form-group",{attrs:{label:"Recipe Picture URL","label-for":"recipe-picture"}},[t("b-form-input",{attrs:{id:"recipe-picture",required:""},model:{value:e.recipeDetails.picture,callback:function(t){e.$set(e.recipeDetails,"picture",t)},expression:"recipeDetails.picture"}})],1),t("b-form-group",{attrs:{label:"Recipe Title","label-for":"recipe-title"}},[t("b-form-input",{attrs:{id:"recipe-title",required:""},model:{value:e.recipeDetails.title,callback:function(t){e.$set(e.recipeDetails,"title",t)},expression:"recipeDetails.title"}})],1),t("b-form-group",{attrs:{label:"Preparation Time (minutes)","label-for":"prep-time"}},[t("b-form-input",{attrs:{id:"prep-time",type:"number",required:""},model:{value:e.recipeDetails.prepTime,callback:function(t){e.$set(e.recipeDetails,"prepTime",t)},expression:"recipeDetails.prepTime"}})],1),t("b-form-group",{attrs:{label:"Number of Servings","label-for":"servings"}},[t("b-form-input",{attrs:{id:"servings",type:"number",required:""},model:{value:e.recipeDetails.servings,callback:function(t){e.$set(e.recipeDetails,"servings",t)},expression:"recipeDetails.servings"}})],1),t("b-form-group",{attrs:{"label-for":"is-vegetarian"}},[t("b-form-checkbox",{attrs:{id:"is-vegetarian"},model:{value:e.recipeDetails.isVegetarian,callback:function(t){e.$set(e.recipeDetails,"isVegetarian",t)},expression:"recipeDetails.isVegetarian"}},[e._v("Vegetarian")])],1),t("b-form-group",{attrs:{"label-for":"is-vegan"}},[t("b-form-checkbox",{attrs:{id:"is-vegan"},model:{value:e.recipeDetails.isVegan,callback:function(t){e.$set(e.recipeDetails,"isVegan",t)},expression:"recipeDetails.isVegan"}},[e._v("Vegan")])],1),t("b-form-group",{attrs:{"label-for":"is-gluten-free"}},[t("b-form-checkbox",{attrs:{id:"is-gluten-free"},model:{value:e.recipeDetails.isGlutenFree,callback:function(t){e.$set(e.recipeDetails,"isGlutenFree",t)},expression:"recipeDetails.isGlutenFree"}},[e._v("Gluten-Free")])],1),t("b-form-group",{attrs:{label:"Add Ingredient","label-for":"new-ingredient"}},[t("b-form-input",{attrs:{id:"new-ingredient",placeholder:"Enter ingredient"},model:{value:e.newIngredient,callback:function(t){e.newIngredient=t},expression:"newIngredient"}}),t("b-button",{staticClass:"mt-2",attrs:{variant:"dark"},on:{click:e.addIngredient}},[e._v("Add Ingredient")])],1),t("b-form-group",{attrs:{"label-for":"recipe-ingredients"}},[t("ul",e._l(e.recipeDetails.ingredients,(function(r,i){return t("li",{key:i},[e._v(e._s(r))])})),0)]),t("b-form-group",{attrs:{label:"Instructions","label-for":"recipe-instructions"}},[t("b-form-textarea",{attrs:{id:"recipe-instructions",rows:"5",required:""},model:{value:e.recipeDetails.instructions,callback:function(t){e.$set(e.recipeDetails,"instructions",t)},expression:"recipeDetails.instructions"}})],1),t("b-button",{staticClass:"button",attrs:{variant:"dark",type:"submit"}},[e._v("Save Recipe")]),t("b-button",{staticClass:"button",attrs:{variant:"secondary"},on:{click:e.cancel}},[e._v("Cancel")])],1)],1)],1)},p=[];r(3210),r(3099);const d={data:function(){return{recipeDetails:{title:"",picture:"",prepTime:0,isVegetarian:!1,isVegan:!1,isGlutenFree:!1,ingredients:[],instructions:"",servings:0},newIngredient:""}},methods:{addIngredient:function(){""!==this.newIngredient.trim()&&(this.recipeDetails.ingredients.push(this.newIngredient.trim()),this.newIngredient="")},handleSubmit:function(){var e=this;return(0,o.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Submitting recipe:",e.recipeDetails),t.next=3,e.axios.post(e.$root.store.server_domain+"/users/recipes",e.recipeDetails);case 3:r=t.sent,e.recipes=r.data,200===r.status&&r.data.success?(e.$emit("recipe-saved",e.recipeDetails),e.recipeDetails={picture:"",title:"",prepTime:0,isVegetarian:!1,isVegan:!1,isGlutenFree:!1,ingredients:[],instructions:"",servings:0},e.$bvModal.hide("recipe-modal"),e.$router.push({name:"myRecipes"})):console.error("Error adding recipe");case 6:case"end":return t.stop()}}),t)})))()},cancel:function(){this.recipeDetails={picture:"",title:"",prepTime:0,isVegetarian:!1,isVegan:!1,isGlutenFree:!1,ingredients:[],instructions:"",servings:0},this.$bvModal.hide("recipe-modal")}}},m=d;var v=r(1001),f=(0,v.Z)(m,u,p,!1,null,null,null);const h=f.exports,g={name:"App",components:{BDropdown:c.R,BDropdownItem:l.E,CreateRecipe:h},mounted:function(){var e=document.createElement("script");e.type="text/javascript",e.src="https://bringthemhomenow.net/1.1.0/hostages-ticker.js",e.setAttribute("integrity","sha384-DHuakkmS4DXvIW79Ttuqjvl95NepBRwfVGx6bmqBJVVwqsosq8hROrydHItKdsne"),e.setAttribute("crossorigin","anonymous"),document.getElementsByTagName("head")[0].appendChild(e)},methods:{showCreateRecipeModal:function(){this.$refs.createRecipeModal.$bvModal.show("recipe-modal")},addRecipeToMyRecipes:function(e){this.$root.$emit("new-recipe-added",e)},Logout:function(){var e=this;return(0,o.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.post(e.$root.store.server_domain+"/logout");case 2:t.sent,e.$root.store.logout(),e.$root.toast("Logout","User logged out successfully","success"),e.$router.push("/")["catch"]((function(){}));case 6:case"end":return t.stop()}}),t)})))()}}},b=g;var w=(0,v.Z)(b,s,a,!1,null,null,null);const C=w.exports;var y=r(1939),k=r.n(y),x=r(9669),P=r.n(x),R=r(6123),D=r.n(R),Z=(r(8783),r(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-container"},[e._m(0),t("div",{staticClass:"columns-container"},[t("div",{staticClass:"column"},[t("RecipePreviewList",{attrs:{recipes:e.firstColumnRecipes}})],1),t("div",{staticClass:"column"},[t("div",{class:{blurred:!e.$root.store.username}},[t("RecipePreviewList",{attrs:{recipes:e.secondColumnRecipes}})],1),e.$root.store.username?e._e():t("div",{staticClass:"login-overlay"},[t("LoginPage")],1)])]),t("b-button",{staticClass:"new-recipes-button",attrs:{variant:"secondary"},on:{click:e.refreshRandomRecipes}},[e._v("New Random Recipes")])],1)}),T=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-title"},[t("h1",[e._v("Welcome to Reciplease")])])}],S=(r(7042),r(9230)),L=r(5484);const B={components:{RecipePreviewList:S.Z,LoginPage:L["default"]},data:function(){return{recipes:[],firstColumnRecipes:[],secondColumnRecipes:[]}},mounted:function(){var e=this;return(0,o.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.refreshRandomRecipes();case 2:case"end":return t.stop()}}),t)})))()},methods:{refreshRandomRecipes:function(){var e=this;return(0,o.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/random");case 3:r=t.sent,e.recipes=r.data,e.splitRecipesIntoColumns(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error("Error fetching random recipes:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},splitRecipesIntoColumns:function(){var e=Math.ceil(this.recipes.length/2);this.firstColumnRecipes=this.recipes.slice(0,e),this.secondColumnRecipes=this.recipes.slice(e)}}},O=B;var E=(0,v.Z)(O,Z,T,!1,null,"1708f7d4",null);const M=E.exports;var q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h2",[e._v("There was a problem fetching the recipe, please try again later..")]),t("router-link",{staticClass:"text-primary",attrs:{to:"/",exact:""}},[e._v("Go back home")])],1)},A=[],F={},I=(0,v.Z)(F,q,A,!1,null,"a2515efa",null);const K=I.exports;var N=[{path:"/",name:"main",component:M},{path:"/register",name:"register",component:function(){return r.e(576).then(r.bind(r,6576))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(r.bind(r,5484))}},{path:"/search",name:"search",component:function(){return r.e(225).then(r.bind(r,225))}},{path:"/recipes",name:"recipe",component:function(){return r.e(851).then(r.bind(r,4851))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return r.e(851).then(r.bind(r,4851))}},{path:"/about",name:"about",component:function(){return r.e(175).then(r.bind(r,175))}},{path:"/my-recipes",name:"myRecipes",component:function(){return r.e(381).then(r.bind(r,2381))}},{path:"/my-favorite-recipes",name:"myFavoriteRecipes",component:function(){return r.e(493).then(r.bind(r,493))}},{path:"/my-family-recipes",name:"myFamilyRecipes",component:function(){return r.e(838).then(r.bind(r,8838))}},{path:"*",name:"notFound",component:K}];const V=N;var G=r(8345),X=r(8620),Y=(r(7024),r(508)),U=r(7563),W=r(7419),J=r(1869),z=r(295),Q=r(3090),H=r(794),j=r(4063),_=r(6820),$=r(7772),ee=r(869),te=r(3017);i["default"].use(G.ZP);var re=new G.ZP({routes:V});[Y.E,U.w6,W.g,J.SY,z.xL,Q.u3,H.v5,j.F,_.m$,$.A6,ee.XG7,te.A7].forEach((function(e){return i["default"].use(e)})),i["default"].use(X.ZP),i["default"].use(D()),P().defaults.withCredentials=!0,P().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),P().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),i["default"].use(k(),P()),i["default"].config.productionTip=!1;var ie={server_domain:"http://localhost:80",username:i["default"].$cookies.get("username"),login:function(e){localStorage.setItem("username",e),i["default"].$cookies.set("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),i["default"].$cookies.remove("username"),this.username=void 0}};console.log(ie),new i["default"]({router:re,data:function(){return{store:ie}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:i,autoHideDelay:3e3})}},render:function(e){return e(C)}}).$mount("#app")},9805:(e,t,r)=>{r(3336),r(4944),r(3792),r(3290),r(2707),r(7042),r(9826),r(1539),r(199),r(5352)},3099:(e,t,r)=>{r(199),r(5352)},6912:(e,t,r)=>{e.exports=r.p+"img/gluten-free.743788f0.png"},3238:(e,t,r)=>{e.exports=r.p+"img/vegan.d760fd05.png"},7221:e=>{e.exports="data:image/png;base64,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"},199:e=>{e.exports=[]},5352:e=>{e.exports=[]}},t={};function r(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,i,s,a)=>{if(!i){var n=1/0;for(u=0;u<e.length;u++){for(var[i,s,a]=e[u],o=!0,c=0;c<i.length;c++)(!1&a||n>=a)&&Object.keys(r.O).every((e=>r.O[e](i[c])))?i.splice(c--,1):(o=!1,a<n&&(n=a));if(o){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,s,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,i)=>(r.f[i](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{175:"34ebb1ea",225:"223b0bde",381:"f4891b57",493:"adbd94e0",576:"96c26928",838:"ba197ff8",851:"1cc2b6ff"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{175:"d2753957",225:"e1a494cb",381:"8d331ea7",493:"5db7fc4c",576:"bcd1baa9",838:"13884913",851:"93f380c5"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";r.l=(i,s,a,n)=>{if(e[i])e[i].push(s);else{var o,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==i||p.getAttribute("data-webpack")==t+a){o=p;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",t+a),o.src=i),e[i]=[s];var d=(t,r)=>{o.onerror=o.onload=null,clearTimeout(m);var s=e[i];if(delete e[i],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((e=>e(r))),t)return t(r)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,i,s)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var n=r=>{if(a.onerror=a.onload=null,"load"===r.type)i();else{var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=o,a.parentNode&&a.parentNode.removeChild(a),s(c)}};return a.onerror=a.onload=n,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],a=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===e||a===t))return s}var n=document.getElementsByTagName("style");for(i=0;i<n.length;i++){s=n[i],a=s.getAttribute("data-href");if(a===e||a===t)return s}},i=i=>new Promise(((s,a)=>{var n=r.miniCssF(i),o=r.p+n;if(t(n,o))return s();e(i,o,null,s,a)})),s={143:0};r.f.miniCss=(e,t)=>{var r={175:1,225:1,381:1,493:1,576:1,838:1,851:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=i(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,i)=>{var s=r.o(e,t)?e[t]:void 0;if(0!==s)if(s)i.push(s[2]);else{var a=new Promise(((r,i)=>s=e[t]=[r,i]));i.push(s[2]=a);var n=r.p+r.u(t),o=new Error,c=i=>{if(r.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var a=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",o.name="ChunkLoadError",o.type=a,o.request=n,s[1](o)}};r.l(n,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,i)=>{var s,a,[n,o,c]=i,l=0;if(n.some((t=>0!==e[t]))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(c)var u=c(r)}for(t&&t(i);l<n.length;l++)a=n[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},i=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=r.O(void 0,[998],(()=>r(3149)));i=r.O(i)})();
//# sourceMappingURL=app.b4dcfc9a.js.map