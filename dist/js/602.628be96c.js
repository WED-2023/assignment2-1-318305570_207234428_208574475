(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[602],{602:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e.recipe?t("div",{staticClass:"recipe-content"},[t("div",{staticClass:"recipe-header"},[t("h1",{staticClass:"recipe-title"},[e._v(e._s(e.recipe.title))]),t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"recipe-details"},[t("div",{staticClass:"dietary-icons"},[e.recipe.vegan?t("img",{staticClass:"icon",attrs:{src:r(3238),alt:"Vegan"}}):e._e(),e.recipe.vegetarian?t("img",{staticClass:"icon",attrs:{src:r(7221),alt:"Vegetarian"}}):e._e(),e.recipe.glutenFree?t("img",{staticClass:"icon",attrs:{src:r(6912),alt:"Gluten-Free"}}):e._e()]),t("div",{staticClass:"recipe-overview"},[t("div",{staticClass:"time"},[t("b-icon-clock",{staticClass:"clock-icon"}),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes ")],1)])]),t("div",{staticClass:"likes"},[t("b-button",{staticClass:"like-button",attrs:{variant:"outline"},on:{click:function(t){return t.preventDefault(),e.likeClicked.apply(null,arguments)}}},[t("b-icon",{attrs:{icon:e.like_clicked?"heart-fill":"heart","aria-hidden":"true"}})],1),t("span",{staticClass:"like-text"},[e._v(e._s(e.like_clicked?e.recipe.aggregateLikes+1:e.recipe.aggregateLikes)+" likes")])],1),t("div",{staticClass:"recipe-ingredients"},[t("h2",[e._v("Ingredients | "+e._s(e.recipe.servings)+" servings")]),t("ul",e._l(e.recipe.extendedIngredients,(function(r,n){return t("li",{key:n+"_"+r.id},[e._v(" "+e._s(r.original)+" ")])})),0)]),t("div",{staticClass:"recipe-instructions"},[t("h2",[e._v("Instructions")]),t("ol",[e._v(" "+e._s(e.recipe._instructions)+" ")])])]),t("b-toast",{attrs:{"auto-hide-delay":5e3,"no-close-button":""},model:{value:e.toastShow,callback:function(t){e.toastShow=t},expression:"toastShow"}},[e._v(" "+e._s(e.toastMessage)+" "),t("b-button",{attrs:{variant:"outline-secondary",size:"sm"},on:{click:e.dismissToast}},[e._v("Close")])],1)],1):e._e()])},i=[],a=r(124),s=r(8534),c=(r(4916),r(5306),r(9805)),o=r(575),l=r(3099);const u={name:"DietaryIcons",components:{BToast:o.K},data:function(){return{recipe:null,like_clicked:!1,toastShow:!1,toastMessage:""}},created:function(){var e=this;return(0,s.Z)((0,a.Z)().mark((function t(){var r,n,i,s,o,l,u,d,v,g,p,f,x,h,k;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{r=(0,c.i)(e.$route.params.recipeId),200!==r.status&&e.$router.replace("/NotFound"),n=r.data.recipe,i=n.analyzedInstructions,s=n.instructions,o=n.extendedIngredients,l=n.aggregateLikes,u=n.readyInMinutes,d=n.image,v=n.title,g=n.vegetarian,p=n.vegan,f=n.glutenFree,x=n.servings,h=s,k={instructions:s,_instructions:h,analyzedInstructions:i,extendedIngredients:o,aggregateLikes:l,readyInMinutes:u,image:d,title:v,vegetarian:g,vegan:p,glutenFree:f,servings:x},e.recipe=k}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})))()},methods:{likeClicked:function(){this.like_clicked=!this.like_clicked;var e=(0,l.p)(this.recipe.id);this.toastMessage=e.response.data.message,this.toastShow=!0},dismissToast:function(){this.toastShow=!1}}},d=u;var v=r(1001),g=(0,v.Z)(d,n,i,!1,null,"56dee2ff",null);const p=g.exports},1530:(e,t,r)=>{"use strict";var n=r(8710).charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},7007:(e,t,r)=>{"use strict";r(4916);var n=r(1470),i=r(8052),a=r(2261),s=r(7293),c=r(5112),o=r(8880),l=c("species"),u=RegExp.prototype;e.exports=function(e,t,r,d){var v=c(e),g=!s((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),p=g&&!s((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return t=!0,null},r[v](""),!t}));if(!g||!p||r){var f=n(/./[v]),x=t(v,""[e],(function(e,t,r,i,s){var c=n(e),o=t.exec;return o===a||o===u.exec?g&&!s?{done:!0,value:f(t,r,i)}:{done:!0,value:c(r,t,i)}:{done:!1}}));i(String.prototype,e,x[0]),i(u,v,x[1])}d&&o(u[v],"sham",!0)}},647:(e,t,r)=>{var n=r(1702),i=r(7908),a=Math.floor,s=n("".charAt),c=n("".replace),o=n("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,d,v){var g=r+e.length,p=n.length,f=u;return void 0!==d&&(d=i(d),f=l),c(v,f,(function(i,c){var l;switch(s(c,0)){case"$":return"$";case"&":return e;case"`":return o(t,0,r);case"'":return o(t,g);case"<":l=d[o(c,1,-1)];break;default:var u=+c;if(0===u)return i;if(u>p){var v=a(u/10);return 0===v?i:v<=p?void 0===n[v-1]?s(c,1):n[v-1]+s(c,1):i}l=n[u-1]}return void 0===l?"":l}))}},7651:(e,t,r)=>{var n=r(6916),i=r(9670),a=r(614),s=r(4326),c=r(2261),o=TypeError;e.exports=function(e,t){var r=e.exec;if(a(r)){var l=n(r,e,t);return null!==l&&i(l),l}if("RegExp"===s(e))return n(c,e,t);throw o("RegExp#exec called on incompatible receiver")}},2261:(e,t,r)=>{"use strict";var n=r(6916),i=r(1702),a=r(1340),s=r(7066),c=r(2999),o=r(2309),l=r(30),u=r(9909).get,d=r(9441),v=r(7168),g=o("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,f=p,x=i("".charAt),h=i("".indexOf),k=i("".replace),_=i("".slice),I=function(){var e=/a/,t=/b*/g;return n(p,e,"a"),n(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),m=c.BROKEN_CARET,C=void 0!==/()??/.exec("")[1],b=I||C||m||d||v;b&&(f=function(e){var t,r,i,c,o,d,v,b=this,y=u(b),w=a(e),E=y.raw;if(E)return E.lastIndex=b.lastIndex,t=n(f,E,w),b.lastIndex=E.lastIndex,t;var $=y.groups,R=m&&b.sticky,S=n(s,b),M=b.source,T=0,A=w;if(R&&(S=k(S,"y",""),-1===h(S,"g")&&(S+="g"),A=_(w,b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==x(w,b.lastIndex-1))&&(M="(?: "+M+")",A=" "+A,T++),r=new RegExp("^(?:"+M+")",S)),C&&(r=new RegExp("^"+M+"$(?!\\s)",S)),I&&(i=b.lastIndex),c=n(p,R?r:b,A),R?c?(c.input=_(c.input,T),c[0]=_(c[0],T),c.index=b.lastIndex,b.lastIndex+=c[0].length):b.lastIndex=0:I&&c&&(b.lastIndex=b.global?c.index+c[0].length:i),C&&c&&c.length>1&&n(g,c[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c&&$)for(c.groups=d=l(null),o=0;o<$.length;o++)v=$[o],d[v[0]]=c[v[1]];return c}),e.exports=f},7066:(e,t,r)=>{"use strict";var n=r(9670);e.exports=function(){var e=n(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},2999:(e,t,r)=>{var n=r(7293),i=r(7854),a=i.RegExp,s=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),c=s||n((function(){return!a("a","y").sticky})),o=s||n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:o,MISSED_STICKY:c,UNSUPPORTED_Y:s}},9441:(e,t,r)=>{var n=r(7293),i=r(7854),a=i.RegExp;e.exports=n((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,t,r)=>{var n=r(7293),i=r(7854),a=i.RegExp;e.exports=n((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},4916:(e,t,r)=>{"use strict";var n=r(2109),i=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},5306:(e,t,r)=>{"use strict";var n=r(2104),i=r(6916),a=r(1702),s=r(7007),c=r(7293),o=r(9670),l=r(614),u=r(8554),d=r(9303),v=r(7466),g=r(1340),p=r(4488),f=r(1530),x=r(8173),h=r(647),k=r(7651),_=r(5112),I=_("replace"),m=Math.max,C=Math.min,b=a([].concat),y=a([].push),w=a("".indexOf),E=a("".slice),$=function(e){return void 0===e?e:String(e)},R=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[I]&&""===/./[I]("a","$0")}(),M=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,t,r){var a=S?"$":"$0";return[function(e,r){var n=p(this),a=u(e)?void 0:x(e,I);return a?i(a,e,n,r):i(t,g(n),e,r)},function(e,i){var s=o(this),c=g(e);if("string"==typeof i&&-1===w(i,a)&&-1===w(i,"$<")){var u=r(t,s,c,i);if(u.done)return u.value}var p=l(i);p||(i=g(i));var x=s.global;if(x){var _=s.unicode;s.lastIndex=0}var I=[];while(1){var R=k(s,c);if(null===R)break;if(y(I,R),!x)break;var S=g(R[0]);""===S&&(s.lastIndex=f(c,v(s.lastIndex),_))}for(var M="",T=0,A=0;A<I.length;A++){R=I[A];for(var F=g(R[0]),O=m(C(d(R.index),c.length),0),D=[],K=1;K<R.length;K++)y(D,$(R[K]));var L=R.groups;if(p){var N=b([F],D,O,c);void 0!==L&&y(N,L);var Z=g(n(i,void 0,N))}else Z=h(F,c,O,D,L,i);O>=T&&(M+=E(c,T,O)+Z,T=O+F.length)}return M+E(c,T)}]}),!M||!R||S)}}]);
//# sourceMappingURL=602.628be96c.js.map