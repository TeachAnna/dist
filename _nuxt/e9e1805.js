(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{698:function(t,e,n){"use strict";n.r(e);n(12),n(10),n(11),n(5),n(15),n(9),n(16);var r=n(1),o=n(3),l=(n(30),n(22)),c=n.n(l),d=n(57);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={layout:"admin",data:function(){return{title:"",status:""}},methods:m(m({},Object(d.b)({updateMenu:"menus/updateMenu"})),{},{update:function(){if(this.title){var data={id:this.$route.params.menuid,title:this.title,status:this.status};this.updateMenu(data)}else this.$toast.show("Please fill the field",{type:"error"})}}),mounted:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={headers:{Authorization:"Bearer "+localStorage.getItem("token")}},n.next=3,c.a.put("http://localhost:8000/api/admin/menus/".concat(e.$route.params.menuid),t,r);case 3:o=n.sent,e.title=o.data.data.title,e.status=o.data.data.status;case 6:case"end":return n.stop()}}),n)})))()}},h=n(34),w=n(42),O=n.n(w),y=n(227),j=n(530),C=n(529),x=n(524),V=n(528),_=n(211),k=n(525),P=n(549),S=n(508),D=n(548),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SidebarVue"),t._v(" "),n("v-container",[n("v-row",{staticClass:"mt-10",attrs:{justify:"center"}},[n("v-col",[n("nuxt-link",{attrs:{to:"/admin/menu"}},[n("v-btn",{staticClass:"mb-2",attrs:{color:"yellow lighten-2",text:"",outlined:""}},[n("v-icon",{staticClass:"mdi mdi-arrow-left m-1"}),t._v("\n            Go Back\n          ")],1)],1),t._v(" "),n("v-card",{staticClass:"text-center pa-5 elevation-5"},[n("v-card-title",{staticClass:"justify-center mb-7"},[t._v("\n            Update Menu")]),t._v(" "),n("v-card-subtitle",[n("form",{staticClass:"form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.update.apply(null,arguments)}}},[n("v-text-field",{staticClass:"ma-2",attrs:{label:"Enter Titile",color:"green lighten-1","hide-details":"auto",outlined:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("v-textarea",{staticClass:"ma-2",attrs:{color:"green lighten-1",label:"Enter intro",outlined:""},model:{value:t.intro,callback:function(e){t.intro=e},expression:"intro"}}),t._v(" "),n("v-switch",{staticClass:"ma-2",attrs:{label:"published",color:"green lighten-1"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),t._v(" "),n("v-btn",{attrs:{type:"submit",color:"yellow lighten-2",text:"",outlined:""}},[n("v-icon",{staticClass:"mdi mdi-content-save-check m-1"}),t._v("\n                "+t._s(t.$store.state.isloading?"Updating...":"Update"))],1)],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VBtn:y.a,VCard:j.a,VCardSubtitle:C.b,VCardTitle:C.d,VCol:x.a,VContainer:V.a,VIcon:_.a,VRow:k.a,VSwitch:P.a,VTextField:S.a,VTextarea:D.a})}}]);