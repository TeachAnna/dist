(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{533:function(t,e,n){t.exports=n.p+"img/loading.84c9b52.svg"},677:function(t,e,n){"use strict";n.r(e);n(12),n(10),n(11),n(5),n(15),n(9),n(16);var r=n(1),l=n(3),c=(n(30),n(48),n(57));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={layout:"admin",middleware:["auth"],data:function(){return{page:0,num_per_page:3,searchQuery:""}},computed:v(v({},Object(c.c)({teams:"teams/getTeams"})),{},{new_page_items:function(){return this.teams.slice(this.num_per_page*this.page,this.num_per_page*(this.page+1))}}),methods:v(v(v({set_page:function(t){this.page=this.page+t}},Object(c.b)(["getAdmins"])),Object(c.b)({getTeams:"teams/getTeams",deleteTeam:"teams/deleteTeam"})),{},{delTeam:function(t){this.deleteTeam(t),this.fetchTeams()}}),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAdmins();case 2:return e.next=4,t.getTeams();case 4:case"end":return e.stop()}}),e)})))()}},d=n(34),m=n(42),h=n.n(m),f=n(227),x=n(530),y=n(529),w=n(528),C=n(211),O=n(177),k=n(63),j=n(555),T=n(549),S=n(508),component=Object(d.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-card",{staticClass:"pa-3 mt-15 elevation-5"},[r("v-card-text",{staticClass:"d-flex justify-space-between align-center"},[r("v-card-title",[t._v(" Teams ( "+t._s(t.teams.length)+" ) ")]),t._v(" "),r("v-card-actions",[r("nuxt-link",{attrs:{to:"/admin/teams/create-team"}},[r("v-btn",{attrs:{color:"yellow lighten-2",text:"",outlined:""}},[r("v-icon",{staticClass:"mdi mdi-plus-circle mx-1",attrs:{size:"large"}}),t._v("\n              New\n            ")],1)],1)],1)],1),t._v(" "),r("v-sheet",{staticClass:"d-flex align-center"},[r("v-text-field",{staticClass:"ma-3",attrs:{label:"Enter count posts on page","hide-details":"auto",outlined:"",color:"green lighten-1",type:"number"},model:{value:t.num_per_page,callback:function(e){t.num_per_page=e},expression:"num_per_page"}}),t._v(" "),r("v-switch",{attrs:{label:"sort",value:"title",color:"green lighten-1"},model:{value:t.selectSort,callback:function(e){t.selectSort=e},expression:"selectSort"}}),t._v(" "),r("v-text-field",{staticClass:"ma-3",attrs:{label:"Search Here ...","hide-details":"auto",outlined:"",color:"green lighten-1","append-icon":"mdi mdi-magnify"},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1),t._v(" "),r("v-card-subtitle",[t.$store.state.isloading?r("div",[r("h1",{staticClass:"text-center my-3"},[r("img",{attrs:{src:n(533),alt:""}})])]):r("div",[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",{staticClass:"bg blue-grey darken-3"},[r("tr",[r("th",{staticClass:"text-enter"},[t._v("Id")]),t._v(" "),r("th",{staticClass:"text-enter"},[t._v("Name")]),t._v(" "),r("th",{staticClass:"text-enter"},[t._v("Image")]),t._v(" "),r("th",{staticClass:"text-enter"},[t._v("Position")]),t._v(" "),r("th",{staticClass:"text-enter"},[t._v("Status")]),t._v(" "),r("th",{staticClass:"text-enter"},[t._v("Edit")]),t._v(" "),r("th",{staticClass:"text-enter"},[t._v("Delete")])])]),t._v(" "),r("tbody",t._l(t.new_page_items,(function(e,n){return r("tr",{key:n},[r("td",{},[t._v(t._s(n+1))]),t._v(" "),r("td",{},[t._v(t._s(e.name))]),t._v(" "),r("td",{},[r("v-img",{attrs:{src:t.$store.state.urlSite+"/storage/"+e.image,width:"70",cover:""}})],1),t._v(" "),r("td",{},[t._v(t._s(e.position))]),t._v(" "),r("td",{},["true"==e.status?r("div",[r("v-icon",{attrs:{color:"green darken-3"}},[t._v(" mdi-check")])],1):r("div",[r("v-icon",{attrs:{color:"yellow lighten-1"}},[t._v(" mdi-check")])],1)]),t._v(" "),r("td",{},[r("nuxt-link",{attrs:{to:"/admin/teams/update-team/"+e.id}},[r("v-btn",{staticClass:"ma-2",attrs:{text:"",variant:"text",color:"blue"}},[r("v-icon",{attrs:{color:"yellow lighten-1"}},[t._v(" mdi-pencil")])],1)],1)],1),t._v(" "),r("td",{},[r("v-btn",{staticClass:"ma-2",attrs:{text:"",variant:"text",color:"blue"},on:{click:function(n){return t.delTeam(e.id)}}},[r("v-icon",{attrs:{color:"yellow lighten-1"}},[t._v(" mdi-delete")])],1)],1)])})),0)]},proxy:!0}])})],1)]),t._v(" "),r("v-card-actions",{staticClass:"justify-center pt-3 mb-5"},[r("div",{staticClass:"pagination"},[t.page-1>=0?r("v-btn",{attrs:{color:"yellow lighten-2",text:"",outlined:""},on:{click:function(e){return t.set_page(-1)}}},[t._v("«")]):t._e(),t._v(" "),t.page-2>=0?r("v-btn",{attrs:{color:"yellow lighten-2",text:"",outlined:""},on:{click:function(e){return t.set_page(-2)}}},[t._v(t._s(t.page-1))]):t._e(),t._v(" "),t.page-1>=0?r("v-btn",{attrs:{color:"yellow lighten-2",text:"",outlined:""},on:{click:function(e){return t.set_page(-1)}}},[t._v(t._s(t.page))]):t._e(),t._v(" "),t.teams.length>=t.num_per_page?r("v-btn",{staticClass:"active",attrs:{color:"yellow lighten-2",text:"",outlined:""}},[t._v(t._s(t.page+1))]):t._e(),t._v(" "),this.num_per_page*(this.page+1)<this.teams.length?r("v-btn",{attrs:{color:"yellow lighten-2",text:"",outlined:""},on:{click:function(e){return t.set_page(1)}}},[t._v(t._s(t.page+2))]):t._e(),t._v(" "),this.num_per_page*(this.page+2)<this.teams.length?r("v-btn",{attrs:{color:"yellow lighten-2",text:"",outlined:""},on:{click:function(e){return t.set_page(2)}}},[t._v(t._s(t.page+3))]):t._e(),t._v(" "),this.num_per_page*(this.page+1)<this.teams.length?r("v-btn",{attrs:{color:"yellow lighten-2",text:"",outlined:""},on:{click:function(e){return t.set_page(1)}}},[t._v("»")]):t._e()],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:f.a,VCard:x.a,VCardActions:y.a,VCardSubtitle:y.b,VCardText:y.c,VCardTitle:y.d,VContainer:w.a,VIcon:C.a,VImg:O.a,VSheet:k.a,VSimpleTable:j.a,VSwitch:T.a,VTextField:S.a})}}]);