"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[348],{6348:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("RecipePreviewList",{attrs:{recipes:e.recipes}})],1)},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"title"},[t("h1",[e._v("My Recipes")])])}],i=n(124),o=n(8534),c=n(9978);const a={name:"MyRecipes",components:{RecipePreviewList:c.Z},data:function(){return{recipes:[]}},created:function(){this.$root.$on("new-recipe-added",this.incrementAmountToFetch),this.loadInitialRecipes()},mounted:function(){var e=this;return(0,o.Z)((0,i.Z)().mark((function t(){var n;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("blah",e.$root.store.server_domain),t.next=4,e.axios.get(e.$root.store.server_domain+"/users/myrecipes/preview");case 4:n=t.sent,e.recipes=n.data,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error("Error fetching users recipes:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},methods:{incrementAmountToFetch:function(){this.amountToFetch++},loadInitialRecipes:function(){this.amountToFetch=1}},beforeDestroy:function(){this.$root.$off("new-recipe-added",this.incrementAmountToFetch)}},u=a;var h=n(1001),p=(0,h.Z)(u,r,s,!1,null,"a454f320",null);const l=p.exports}}]);
//# sourceMappingURL=348.64bf6a5e.js.map