(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{705:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(11),r(5),r(15),r(9),r(16);var n=r(1),o=r(3),l=(r(30),r(22)),c=r.n(l),d=r(57);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"admin",data:function(){return{title:"",url:"",intro:"",status:""}},methods:f(f({},Object(d.b)({updateVideo:"videos/updateVideo"})),{},{update:function(){if(this.title){var t=new FormData;t.append("id",this.$route.params.videoid),t.append("title",this.title),t.append("intro",this.intro),t.append("url",this.url),t.append("status",this.status),this.updateVideo(t)}else this.$toast.show("Please fill the field",{type:"error"})}}),mounted:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={headers:{Authorization:"Bearer "+localStorage.getItem("token")}},r.next=3,c.a.put("http://localhost:8000/api/admin/videos/".concat(e.$route.params.videoid),t,n);case 3:o=r.sent,e.title=o.data.data.title,e.url=o.data.data.url,e.intro=o.data.data.intro,e.status=o.data.data.status;case 8:case"end":return r.stop()}}),r)})))()}},h=r(34),w=r(42),O=r.n(w),y=r(227),j=r(530),x=r(529),C=r(524),V=r(528),k=r(211),_=r(525),P=r(549),D=r(508),E=r(548),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",{staticClass:"mt-10",attrs:{justify:"center"}},[r("v-col",[r("nuxt-link",{attrs:{to:"/admin/video"}},[r("v-btn",{staticClass:"mb-2",attrs:{color:"yellow lighten-2",text:"",outlined:""}},[r("v-icon",{staticClass:"mdi mdi-arrow-left m-1"}),t._v("\n            Go Back\n          ")],1)],1),t._v(" "),r("v-card",{staticClass:"text-center pa-5 elevation-5"},[r("v-card-title",{staticClass:"justify-center mb-7"},[t._v("\n            Update Video")]),t._v(" "),r("v-card-subtitle",[r("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.update.apply(null,arguments)}}},[r("v-text-field",{staticClass:"ma-2",attrs:{label:"Enter Titile",color:"green lighten-1","hide-details":"auto",outlined:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),r("v-text-field",{staticClass:"ma-2",attrs:{label:"Enter URL",color:"green lighten-1","hide-details":"auto",outlined:""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),r("v-textarea",{staticClass:"ma-2",attrs:{color:"green lighten-1",label:"Enter intro",outlined:""},model:{value:t.intro,callback:function(e){t.intro=e},expression:"intro"}}),t._v(" "),r("v-switch",{staticClass:"ma-2",attrs:{label:"published",color:"green lighten-1"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),t._v(" "),r("v-btn",{attrs:{type:"submit",color:"yellow lighten-2",text:"",outlined:""}},[r("v-icon",{staticClass:"mdi mdi-content-save-check m-1"}),t._v("\n                "+t._s(t.$store.state.isloading?"Updating...":"Update"))],1)],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VBtn:y.a,VCard:j.a,VCardSubtitle:x.b,VCardTitle:x.d,VCol:C.a,VContainer:V.a,VIcon:k.a,VRow:_.a,VSwitch:P.a,VTextField:D.a,VTextarea:E.a})}}]);