(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{443:function(t,e,a){"use strict";e.a=a.p+"img/placeholder.d05228f8a2d77653d8cf45f4e5f8bf43.jpg"},445:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s},t.exports.default=t.exports,t.exports.__esModule=!0},446:function(t,e,a){},447:function(t,e,a){},449:function(t,e,a){var s=a(450),i=a(451),n=a(452),c=a(453);t.exports=function(t){return s(t)||i(t)||n(t)||c()},t.exports.default=t.exports,t.exports.__esModule=!0},450:function(t,e,a){var s=a(445);t.exports=function(t){if(Array.isArray(t))return s(t)},t.exports.default=t.exports,t.exports.__esModule=!0},451:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},452:function(t,e,a){var s=a(445);t.exports=function(t,e){if(t){if("string"==typeof t)return s(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},453:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},454:function(t,e,a){"use strict";a(446)},455:function(t,e,a){"use strict";a(447)},459:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.item?a("v-card",{staticClass:"d-flex flex-column flex-md-row pa-4",attrs:{flat:""}},[a("div",{staticClass:"pic ph-240 max-w-md-240 w-100 w-md-50",style:{backgroundImage:"url("+t.chooseone(t.item.Picture.PictureUrl1,t.placeholder)+")"},attrs:{title:t.chooseone(t.item.Picture.PictureDescription1,"無提供照片")}}),t._v(" "),a("v-card-text",{staticClass:"d-flex flex-column flex-1 pa-0 py-4 py-md-0 pl-0 pl-md-4 mb-2"},[a("div",{staticClass:"title text-body-1 mb-2 text-bold",attrs:{title:t.item.Name}},[t._v(t._s(t.item.Name))]),t._v(" "),a("div",{staticClass:"text-body-2 my-2 description"},[t._v("\n      "+t._s(t.item.Description)+"\n    ")]),t._v(" "),a("div",{staticClass:"flex-1"}),t._v(" "),a("div",{staticClass:"d-flex align-center"},[a("div",{staticClass:"anchorIcon mr-2"}),t._v(" "),a("div",{staticClass:"flex-1 text-body-1 text-bold city"},[t._v(t._s(t.item.City))]),t._v(" "),a("v-btn",{attrs:{color:"#FF1D6C",outlined:""},on:{click:function(e){return t.details_click(t.item)}}},[t._v("活動詳情")])],1)])],1):t._e()};s._withStripped=!0;var i=a(444),n=a(443),c={mixins:[i.a],components:{},props:{item:{type:Object,default:null}},data:function(){return{placeholder:n.a}},mounted:function(){},methods:{details_click:function(t){this.$emit("details",t)}},computed:{}},l=(a(454),a(140)),o=Object(l.a)(c,s,[],!1,null,"73aa6eed",null);o.options.__file="src/vue/pages/components/Card01.vue";e.a=o.exports},460:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.item?a("v-card",{staticClass:"d-flex flex-column pa-3",attrs:{flat:""}},[a("div",{staticClass:"pic ph-180 w-100 mb-2",style:{backgroundImage:"url("+t.chooseone(t.item.Picture.PictureUrl1,t.placeholder)+")"},attrs:{title:t.chooseone(t.item.Picture.PictureDescription1,"無提供照片")}}),t._v(" "),a("v-card-title",{staticClass:"pa-0 mb-2 min-h-40 align-start mt-2"},[a("div",{staticClass:"title text-body-1 text-bold",attrs:{title:t.item.Name}},[t._v(t._s(t.item.Name))])]),t._v(" "),a("v-card-text",{staticClass:"pa-0 mb-2"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"anchorIcon mr-2"}),t._v(" "),a("div",{staticClass:"address"},[t._v(t._s(t.item.Address))])])])],1):t._e()};s._withStripped=!0;var i=a(444),n=a(443),c={mixins:[i.a],components:{},props:{item:{type:Object,default:null}},data:function(){return{placeholder:n.a}},mounted:function(){},methods:{},computed:{}},l=(a(455),a(140)),o=Object(l.a)(c,s,[],!1,null,"73b8866e",null);o.options.__file="src/vue/pages/components/Card02.vue";e.a=o.exports},466:function(t,e,a){},474:function(t,e,a){"use strict";a(466)},479:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"content",class:{bgBlur:t.bgBlur}},[a("Header"),t._v(" "),a("v-main",{staticClass:"main min-h-800"},[a("v-sheet",{staticClass:"section d-flex justify-center align-center pa-2 pa-md-4",attrs:{id:"section01"}},[a("v-responsive",{staticClass:"box d-flex justify-center align-center max-h-491 pa-2 pa-md-4",attrs:{"aspect-ratio":1226/491}},[a("div",{staticClass:"boxContent d-flex align-center flex-column"},[a("v-responsive",{staticClass:"centerLogo",attrs:{"aspect-ratio":487/69}}),t._v(" "),a("div",{staticClass:"my-2 align-self-start text-body-2 white--text"},[t._v("台北、台中、台南、屏東、宜蘭……遊遍台灣")]),t._v(" "),a("div",{staticClass:"d-flex align-center w-100 my-1"},[a("v-text-field",{staticClass:"flex-1",attrs:{label:"搜尋關鍵字",solo:"",dense:"","hide-details":""},on:{change:t.search_change},model:{value:t.temp_search,callback:function(e){t.temp_search=e},expression:"temp_search"}})],1),t._v(" "),a("div",{staticClass:"d-flex align-center w-100 my-1"},[a("v-select",{staticClass:"flex-1 mr-2",attrs:{items:t.typeInfo.items,label:"類別",solo:"",dense:"","hide-details":""},on:{change:t.typeInfo_change},model:{value:t.typeInfo.value,callback:function(e){t.$set(t.typeInfo,"value",e)},expression:"typeInfo.value"}}),t._v(" "),a("v-select",{staticClass:"flex-1",attrs:{items:t.cityInfo.items,label:"不分縣市",solo:"",dense:"","hide-details":"",disabled:""==t.typeInfo.value},on:{change:t.cityInfo_change},model:{value:t.cityInfo.value,callback:function(e){t.$set(t.cityInfo,"value",e)},expression:"cityInfo.value"}})],1)],1)])],1),t._v(" "),a("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8",attrs:{id:"section02"}},[a("div",{staticClass:"w-100 mb-4",attrs:{id:"card_shadow01"}}),t._v(" "),t.search?a("div",{staticClass:"text_search text-h6 text-bold"},[t._v("搜尋關鍵字 - "+t._s(t.search))]):t._e()]),t._v(" "),""==t.typeInfo.value?a("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8",attrs:{id:"section03"}},[a("v-container",{staticClass:"mb-8",attrs:{id:"section03_1"}},[a("div",{staticClass:"mb-4 title d-flex align-center"},[a("div",{staticClass:"icon mr-2"}),t._v(" "),a("div",{staticClass:"text-h6 text-bold"},[t._v("熱門美食")])]),t._v(" "),a("div",[a("div",{staticClass:"row items"},t._l(t.data.delicacy.slice(0,t.delicacyCount),(function(t){return a("div",{key:t.ID,staticClass:"col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item mb-4"},[a("Card02",{attrs:{item:t}})],1)})),0)])]),t._v(" "),a("v-container",{staticClass:"mb-8",attrs:{id:"section03_2"}},[a("div",{staticClass:"mb-4 title d-flex align-center"},[a("div",{staticClass:"icon mr-2"}),t._v(" "),a("div",{staticClass:"text-h6 text-bold"},[t._v("推薦住宿")])]),t._v(" "),a("div",[a("div",{staticClass:"row items"},t._l(t.data.stay.slice(0,t.stayCount),(function(t){return a("div",{key:t.ID,staticClass:"col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item mb-4"},[a("Card02",{attrs:{item:t}})],1)})),0)])])],1):t._e(),t._v(" "),"delicacy"==t.typeInfo.value?a("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8",attrs:{id:"section03"}},[a("v-container",{staticClass:"mb-8",attrs:{id:"section03_1"}},[a("div",{staticClass:"mb-4 title d-flex align-center"},[a("div",{staticClass:"icon mr-2"}),t._v(" "),a("div",{staticClass:"text-h6 text-bold"},[t._v("美食 - "+t._s(t.itemsFindValue(t.cityInfo.items,t.cityInfo.value).text))])]),t._v(" "),a("div",[a("div",{staticClass:"row items"},t._l(t.data.delicacy.slice((t.delicacy.pageIndex-1)*t.delicacy.pageItemMax,(t.delicacy.pageIndex-1)*t.delicacy.pageItemMax+t.delicacy.pageItemMax),(function(t){return a("div",{key:t.ID,staticClass:"col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item mb-4"},[a("Card02",{attrs:{item:t}})],1)})),0),t._v(" "),t.delicacy.pageTotal?a("div",{staticClass:"mt-8"},[a("v-pagination",{attrs:{length:t.delicacy.pageTotal,"total-visible":7},model:{value:t.delicacy.pageIndex,callback:function(e){t.$set(t.delicacy,"pageIndex",e)},expression:"delicacy.pageIndex"}})],1):t._e()])])],1):"stay"==t.typeInfo.value?a("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8",attrs:{id:"section03"}},[a("v-container",{staticClass:"mb-8",attrs:{id:"section03_2"}},[a("div",{staticClass:"mb-4 title d-flex align-center"},[a("div",{staticClass:"icon mr-2"}),t._v(" "),a("div",{staticClass:"text-h6 text-bold"},[t._v("住宿 - "+t._s(t.itemsFindValue(t.cityInfo.items,t.cityInfo.value).text))])]),t._v(" "),a("div",[a("div",{staticClass:"row items"},t._l(t.data.stay.slice((t.stay.pageIndex-1)*t.stay.pageItemMax,(t.stay.pageIndex-1)*t.stay.pageItemMax+t.stay.pageItemMax),(function(t){return a("div",{key:t.ID,staticClass:"col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item mb-4"},[a("Card02",{attrs:{item:t}})],1)})),0),t._v(" "),t.stay.pageTotal?a("div",{staticClass:"mt-8"},[a("v-pagination",{attrs:{length:t.stay.pageTotal,"total-visible":7},model:{value:t.stay.pageIndex,callback:function(e){t.$set(t.stay,"pageIndex",e)},expression:"stay.pageIndex"}})],1):t._e()])])],1):t._e()],1),t._v(" "),a("Footer")],1)};s._withStripped=!0;var i=a(448),n=a.n(i),c=a(449),l=a.n(c),o=a(457),r=a(458),d=a(459),u=a(460),p=a(456),f=a(443);function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){n()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var x={mixins:[a(444).a],components:{Header:o.a,Footer:r.a,Card01:d.a,Card02:u.a},data:function(){return{temp_search:"",search:"",typeInfo:{value:"",items:[{text:"全部",value:""},{text:"美食",value:"delicacy"},{text:"住宿",value:"stay"}]},cityInfo:{value:"",items:[{text:"不分縣市",value:""}].concat(l()(p.a))},placeholder:f.a,data:{delicacy:[],stay:[]},bgBlur:!1,delicacy:{pageItemMax:10,pageIndex:1,pageTotal:1},stay:{pageItemMax:20,pageIndex:1,pageTotal:1}}},watch:{},mounted:function(){this.updateData()},methods:{updateData:function(){var t=this,e=this.getAuthorizationHeader(),a=this.cityInfo.value,s=this.typeInfo.value,i=this.search;if(""!=a&&(a="/"+a),""==s||"delicacy"==s){var n={orderby:"SrcUpdateTime asc",format:"JSON"};""==s&&(n.top=10),""!=i&&(n.filter="contains(Name,'".concat(i,"') or contains(Address,'").concat(i,"')")),fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant".concat(a,"?").concat(this.parameterToStr(n)),{headers:v({},e)}).then((function(t){return t.json()})).then((function(e){t.data.delicacy=e,""!=t.typeInfo.value&&(t.delicacy.pageIndex=1,t.delicacy.pageTotal=Math.ceil(t.data.delicacy.length/t.delicacy.pageItemMax))}))}if(""==s||"stay"==s){var c={orderby:"SrcUpdateTime asc",format:"JSON"};""==s&&(c.top=10),""!=i&&(c.filter="contains(Name,'".concat(i,"') or contains(Address,'").concat(i,"')")),fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel".concat(a,"?").concat(this.parameterToStr(c)),{headers:v({},e)}).then((function(t){return t.json()})).then((function(e){t.data.stay=e,""!=t.typeInfo.value&&(t.stay.pageIndex=1,t.stay.pageTotal=Math.ceil(t.data.stay.length/t.stay.pageItemMax))}))}},search_change:function(){this.search=this.temp_search,this.updateData()},search_click:function(){this.search=this.temp_search,this.updateData()},coordinate_click:function(){alert("尚未開放功能")},typeInfo_change:function(t){""==this.typeInfo.value&&(this.cityInfo.value=""),this.updateData()},cityInfo_change:function(t){this.updateData()},delicacyDialog_display:function(t){this.bgBlur=t}},computed:{delicacyCount:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 4;case"sm":return 6;case"md":return 9;case"lg":return 8;case"xl":return 10}},stayCount:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 4;case"sm":return 6;case"md":return 9;case"lg":return 8;case"xl":return 10}}}},y=(a(474),a(140)),h=Object(y.a)(x,s,[],!1,null,"8958f8b4",null);h.options.__file="src/vue/pages/Stay.vue";e.default=h.exports}}]);