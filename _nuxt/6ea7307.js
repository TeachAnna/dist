(window.webpackJsonp=window.webpackJsonp||[]).push([[79,21],{529:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return v}));var n=r(530),o=r(0),c=Object(o.i)("v-card__actions"),d=Object(o.i)("v-card__subtitle"),l=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");n.a},530:function(t,e,r){"use strict";r(12),r(10),r(11),r(5),r(15),r(9),r(16);var n=r(3),o=(r(23),r(180),r(181),r(531),r(220)),c=r(222),d=r(100),l=r(8);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(c.a,d.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},d.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},531:function(t,e,r){var content=r(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("e23b7040",content,!0,{sourceMap:!1})},532:function(t,e,r){var n=r(18)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},533:function(t,e,r){t.exports=r.p+"img/loading.84c9b52.svg"},597:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(11),r(5),r(15),r(9),r(16);var n=r(3),o=(r(23),r(57));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{id:Number,title:String,posts:Array},computed:d({},Object(o.c)({Categorys:"categorys/getCategorys"})),methods:d({},Object(o.b)({getCategorys:"categorys/getCategorys"})),mounted:function(){this.getCategorys()}},v=r(34),h=r(42),_=r.n(h),f=r(530),x=r(529),m=r(524),y=r(528),O=r(525),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",[r("v-col",{attrs:{xl:"8",lg:"8",md:"8",sm:"12"}},[r("div",{staticClass:"my-10"},[r("div",{staticClass:"my-2"},[r("h2",[t._v(t._s(t.title))])]),t._v(" "),r("v-col",{attrs:{xl:"4",lg:"4",md:"4",sm:"12"}},[r("div",{staticClass:"my-10"},[t.posts.length>0?r("v-card",[r("v-card-title",[r("h3",[t._v("#Posts")])]),t._v(" "),r("v-card-text",t._l(t.posts,(function(e,n){return r("div",{key:n},[r("h5",[t._v(t._s(e.title))]),t._v(" "),r("h5",[t._v(t._s(e.id))])])})),0)],1):r("div",[r("h3",[t._v("Posts not found by this category")])]),t._v(" "),r("div")],1)])],1)]),t._v(" "),r("v-col",{attrs:{xl:"4",lg:"4",md:"4",sm:"12"}},[r("div",{staticClass:"my-10"},[r("v-card",[r("v-card-title",[r("h3",[t._v("Categorys")])]),t._v(" "),r("v-card-text",{staticClass:"navbar",class:{active_nav:t.nav}},t._l(t.Categorys,(function(e,n){return r("nuxt-link",{key:n,staticClass:"nav_link",attrs:{exact:"",to:"/category-posts/"+e.id}},[r("h4",{staticClass:"mt-2"},[t._v("\n                "+t._s(e.title)+"\n              ")])])})),1)],1)],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VCard:f.a,VCardText:x.c,VCardTitle:x.d,VCol:m.a,VContainer:y.a,VRow:O.a})},707:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"text-center my-3"},[e("img",{attrs:{src:r(533),alt:""}})])}],o=r(1),c=(r(30),{components:{CategoryDetail:r(597).default},data:function(){return{id:0,title:"",parent_id:"",posts:[],isloading:!1}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("/front/single-categorys/\n        ".concat(t.$route.params.category));case 3:r=e.sent,t.isloading=!1,t.title=r.data.categorys.title,t.id=r.data.categorys.id,t.parent_id=r.data.categorys.parent_id,t.posts=r.data.categorys.posts,console.log(r);case 10:case"end":return e.stop()}}),e)})))()}}),d=r(34),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isloading?r("div",{staticClass:"my-4 text-center"},[t._m(0)]):r("div",[r("CategoryDetail",{attrs:{title:t.title,parent_id:t.parent_id,posts:t.posts,id:t.id}})],1)])}),n,!1,null,null,null);e.default=component.exports}}]);