(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{446:function(t,e,a){"use strict";e.a=a.p+"img/placeholder.d05228f8a2d77653d8cf45f4e5f8bf43.jpg"},447:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s},t.exports.default=t.exports,t.exports.__esModule=!0},448:function(t,e,a){},449:function(t,e,a){},450:function(t,e,a){},453:function(t,e,a){var s=a(454),i=a(455),n=a(456),c=a(457);t.exports=function(t){return s(t)||i(t)||n(t)||c()},t.exports.default=t.exports,t.exports.__esModule=!0},454:function(t,e,a){var s=a(447);t.exports=function(t){if(Array.isArray(t))return s(t)},t.exports.default=t.exports,t.exports.__esModule=!0},455:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},456:function(t,e,a){var s=a(447);t.exports=function(t,e){if(t){if("string"==typeof t)return s(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},457:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},458:function(t,e,a){"use strict";a(448)},459:function(t,e,a){"use strict";a(449)},460:function(t,e,a){"use strict";a(450)},465:function(t,e,a){"use strict";var s=function(){var t=this.$createElement;this._self._c;return this._m(0)};s._withStripped=!0;var i={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},n=(a(458),a(140)),c=Object(n.a)(i,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my-16"},[e("div",{staticClass:"d-flex align-center justify-center"},[e("div",{staticClass:"union mr-4"}),this._v(" "),e("div",[e("div",{staticClass:"text01 text-body-1"},[this._v("Oop！")]),this._v(" "),e("div",{staticClass:"text02 text-h6"},[this._v("很抱歉，找不到符合此搜尋相關的內容。")])])])])}],!1,null,"3c158de7",null);c.options.__file="src/vue/pages/components/NoData.vue";e.a=c.exports},466:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.item?a("v-card",{staticClass:"d-flex flex-column flex-md-row pa-4",attrs:{flat:""}},[a("div",{staticClass:"pic ph-240 max-w-md-240 w-100 w-md-50",style:{backgroundImage:"url("+t.chooseone(t.item.Picture.PictureUrl1,t.placeholder)+")"},attrs:{title:t.chooseone(t.item.Picture.PictureDescription1,"無提供照片")}}),t._v(" "),a("v-card-text",{staticClass:"d-flex flex-column flex-1 pa-0 py-4 py-md-0 pl-0 pl-md-4 mb-2"},[a("div",{staticClass:"title text-body-1 mb-2 text-bold",attrs:{title:t.item.Name}},[t._v(t._s(t.item.Name))]),t._v(" "),a("div",{staticClass:"text-body-2 my-2 description"},[t._v("\n      "+t._s(t.item.Description)+"\n    ")]),t._v(" "),a("div",{staticClass:"flex-1"}),t._v(" "),a("div",{staticClass:"d-flex align-center"},[a("div",{staticClass:"anchorIcon mr-2"}),t._v(" "),a("div",{staticClass:"flex-1 text-body-1 text-bold city"},[t._v(t._s(t.item.City))]),t._v(" "),a("v-btn",{attrs:{color:"#FF1D6C",outlined:""},on:{click:function(e){return t.details_click(t.item)}}},[t._v("活動詳情")])],1)])],1):t._e()};s._withStripped=!0;var i=a(445),n=a(446),c={mixins:[i.a],components:{},props:{item:{type:Object,default:null}},data:function(){return{placeholder:n.a}},mounted:function(){},methods:{details_click:function(t){this.$emit("details",t)}},computed:{}},l=(a(459),a(140)),o=Object(l.a)(c,s,[],!1,null,"73aa6eed",null);o.options.__file="src/vue/pages/components/Card01.vue";e.a=o.exports},467:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.item?a("v-card",{staticClass:"d-flex flex-column pa-3",attrs:{flat:""}},[a("div",{staticClass:"pic ph-180 w-100 mb-2",style:{backgroundImage:"url("+t.chooseone(t.item.Picture.PictureUrl1,t.placeholder)+")"},attrs:{title:t.chooseone(t.item.Picture.PictureDescription1,"無提供照片")}}),t._v(" "),a("v-card-title",{staticClass:"pa-0 mb-2 min-h-40 align-start mt-2"},[a("div",{staticClass:"title text-body-1 text-bold",attrs:{title:t.item.Name}},[t._v(t._s(t.item.Name))])]),t._v(" "),a("v-card-text",{staticClass:"pa-0 mb-2"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"anchorIcon mr-2"}),t._v(" "),a("div",{staticClass:"zipCode"},[t._v(t._s(t.item.ZipCodeChinese))])])])],1):t._e()};s._withStripped=!0;var i=a(445),n=a(446),c={mixins:[i.a],components:{},props:{item:{type:Object,default:null}},data:function(){return{placeholder:n.a}},mounted:function(){},methods:{},computed:{}},l=(a(460),a(140)),o=Object(l.a)(c,s,[],!1,null,"73b8866e",null);o.options.__file="src/vue/pages/components/Card02.vue";e.a=o.exports},480:function(t,e,a){},503:function(t,e,a){"use strict";a(480)},509:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"content",class:{bgBlur:t.bgBlur}},[a("Header"),t._v(" "),a("v-main",{staticClass:"main min-h-800"},[a("v-sheet",{staticClass:"section d-flex justify-center align-center pa-2 pa-md-4",attrs:{id:"section01"}},[a("v-responsive",{staticClass:"box d-flex justify-center align-center max-h-490 pa-2 pa-md-4",attrs:{"aspect-ratio":1226/491}},[a("div",{staticClass:"boxContent d-flex align-center flex-column"},[a("v-responsive",{staticClass:"centerLogo",attrs:{"aspect-ratio":487/69}}),t._v(" "),a("div",{staticClass:"my-2 align-self-start text-body-2 white--text"},[t._v("台北、台中、台南、屏東、宜蘭……遊遍台灣")]),t._v(" "),a("div",{staticClass:"d-flex align-center w-100 my-1"},[a("v-text-field",{staticClass:"flex-1",attrs:{label:"搜尋關鍵字",solo:"",dense:"","hide-details":""},on:{change:t.search_change},model:{value:t.temp_search,callback:function(e){t.temp_search=e},expression:"temp_search"}})],1),t._v(" "),a("div",{staticClass:"d-flex align-center w-100 my-1"},[a("v-select",{staticClass:"flex-1 mr-2",attrs:{items:t.typeInfo.items,label:"類別",solo:"",dense:"","hide-details":"",color:"primary","item-color":"primary"},on:{change:t.typeInfo_change},model:{value:t.typeInfo.value,callback:function(e){t.$set(t.typeInfo,"value",e)},expression:"typeInfo.value"}}),t._v(" "),a("v-select",{staticClass:"flex-1",attrs:{items:t.cityInfo.items,label:"不分縣市",solo:"",dense:"","hide-details":"",disabled:""==t.typeInfo.value,color:"primary","item-color":"primary"},on:{change:t.cityInfo_change},model:{value:t.cityInfo.value,callback:function(e){t.$set(t.cityInfo,"value",e)},expression:"cityInfo.value"}})],1)],1)])],1),t._v(" "),a("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8",attrs:{id:"section02"}},[t.search?a("div",{staticClass:"text_search text-h6 text-bold"},[t._v("搜尋關鍵字 - "+t._s(t.search))]):t._e(),t._v(" "),""==t.typeInfo.value?[t.data.delicacy.length||t.data.stay.length?[t.data.delicacy.length?a("v-container",{staticClass:"mb-8",attrs:{id:"section02_1"}},[a("div",{staticClass:"mb-4 title d-flex align-center"},[a("div",{staticClass:"icon mr-2"}),t._v(" "),a("div",{staticClass:"text-h6 text-bold"},[t._v("熱門美食")])]),t._v(" "),a("div",[a("div",{staticClass:"row items"},t._l(t.data.delicacy.slice(0,t.delicacyCount),(function(t){return a("div",{key:t.ID,staticClass:"col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item mb-4"},[a("Card02",{attrs:{item:t}})],1)})),0)])]):t._e(),t._v(" "),t.data.stay.length?a("v-container",{staticClass:"mb-8",attrs:{id:"section02_2"}},[a("div",{staticClass:"mb-4 title d-flex align-center"},[a("div",{staticClass:"icon mr-2"}),t._v(" "),a("div",{staticClass:"text-h6 text-bold"},[t._v("推薦住宿")])]),t._v(" "),a("div",[a("div",{staticClass:"row items"},t._l(t.data.stay.slice(0,t.stayCount),(function(t){return a("div",{key:t.ID,staticClass:"col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item mb-4"},[a("Card02",{attrs:{item:t}})],1)})),0)])]):t._e()]:a("NoData")]:t._e(),t._v(" "),"delicacy"==t.typeInfo.value?[t.data.delicacy.length?a("v-container",{staticClass:"mb-8",attrs:{id:"section02_1"}},[a("div",{staticClass:"mb-4 title d-flex align-center"},[a("div",{staticClass:"icon mr-2"}),t._v(" "),a("div",{staticClass:"text-h6 text-bold"},[t._v("美食 - "+t._s(t.itemsFindValue(t.cityInfo.items,t.cityInfo.value).text))])]),t._v(" "),a("div",[a("div",{staticClass:"row items"},t._l(t.data.delicacy.slice((t.delicacy.pageIndex-1)*t.delicacy.pageItemMax,(t.delicacy.pageIndex-1)*t.delicacy.pageItemMax+t.delicacy.pageItemMax),(function(t){return a("div",{key:t.ID,staticClass:"col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item mb-4"},[a("Card02",{attrs:{item:t}})],1)})),0),t._v(" "),t.delicacy.pageTotal?a("div",{staticClass:"mt-8"},[a("v-pagination",{attrs:{length:t.delicacy.pageTotal,"total-visible":7},model:{value:t.delicacy.pageIndex,callback:function(e){t.$set(t.delicacy,"pageIndex",e)},expression:"delicacy.pageIndex"}})],1):t._e()])]):a("NoData")]:"stay"==t.typeInfo.value?[t.data.stay.length?a("v-container",{staticClass:"mb-8",attrs:{id:"section02_2"}},[a("div",{staticClass:"mb-4 title d-flex align-center"},[a("div",{staticClass:"icon mr-2"}),t._v(" "),a("div",{staticClass:"text-h6 text-bold"},[t._v("住宿 - "+t._s(t.itemsFindValue(t.cityInfo.items,t.cityInfo.value).text))])]),t._v(" "),a("div",[a("div",{staticClass:"row items"},t._l(t.data.stay.slice((t.stay.pageIndex-1)*t.stay.pageItemMax,(t.stay.pageIndex-1)*t.stay.pageItemMax+t.stay.pageItemMax),(function(t){return a("div",{key:t.ID,staticClass:"col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item mb-4"},[a("Card02",{attrs:{item:t}})],1)})),0),t._v(" "),t.stay.pageTotal?a("div",{staticClass:"mt-8"},[a("v-pagination",{attrs:{length:t.stay.pageTotal,"total-visible":7},model:{value:t.stay.pageIndex,callback:function(e){t.$set(t.stay,"pageIndex",e)},expression:"stay.pageIndex"}})],1):t._e()])]):a("NoData")]:t._e()],2)],1),t._v(" "),a("Footer")],1)};s._withStripped=!0;var i=a(451),n=a.n(i),c=a(453),l=a.n(c),o=a(463),r=a(464),d=a(465),u=a(466),p=a(467),v=a(461),m=a(446),f=a(445),y=a(462);function x(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?x(Object(a),!0).forEach((function(e){n()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var _={mixins:[f.a],components:{Header:o.a,Footer:r.a,Card01:u.a,Card02:p.a,NoData:d.a},data:function(){return{temp_search:"",search:"",typeInfo:{value:"",items:[{text:"全部",value:""},{text:"美食",value:"delicacy"},{text:"住宿",value:"stay"}]},cityInfo:{value:"",items:[{text:"不分縣市",value:""}].concat(l()(v.a))},placeholder:m.a,data:{delicacy:[],stay:[]},bgBlur:!1,delicacy:{pageItemMax:10,pageIndex:1,pageTotal:1},stay:{pageItemMax:20,pageIndex:1,pageTotal:1}}},watch:{},mounted:function(){this.updateData()},methods:{updateData:function(){var t=this,e=this.getAuthorizationHeader(),a=this.cityInfo.value,s=this.typeInfo.value,i=this.search;if(""!=a&&(a="/"+a),""==s||"delicacy"==s){var n={$orderby:"SrcUpdateTime asc",$format:"JSON"};""==s&&(n.$top=10),n.$filter="(ZipCode ne null or City ne null)",""!=i&&(n.$filter+=" and (contains(Name,'".concat(i,"') or contains(Address,'").concat(i,"'))")),Object(y.o)("https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/",{headers:h({},e)}).get(a).query(n).then((function(e){t.data.delicacy=e.map((function(e){var a;return h(h({},e),{},{ZipCodeChinese:null!==(a=t.zipCodeToChinese(e.ZipCode))&&void 0!==a?a:e.City})})),""!=t.typeInfo.value&&(t.delicacy.pageIndex=1,t.delicacy.pageTotal=Math.ceil(t.data.delicacy.length/t.delicacy.pageItemMax))}))}if(""==s||"stay"==s){var c={$orderby:"SrcUpdateTime asc",$format:"JSON"};""==s&&(c.$top=10),c.$filter="(ZipCode ne null or City ne null)",""!=i&&(c.$filter+=" and contains(Name,'".concat(i,"') or contains(Address,'").concat(i,"')")),Object(y.o)("https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/",{headers:h({},e)}).get(a).query(c).then((function(e){t.data.stay=e.map((function(e){var a;return h(h({},e),{},{ZipCodeChinese:null!==(a=t.zipCodeToChinese(e.ZipCode))&&void 0!==a?a:e.City})})),""!=t.typeInfo.value&&(t.stay.pageIndex=1,t.stay.pageTotal=Math.ceil(t.data.stay.length/t.stay.pageItemMax))}))}},search_change:function(){this.search=this.temp_search,this.updateData()},search_click:function(){this.search=this.temp_search,this.updateData()},coordinate_click:function(){alert("尚未開放功能")},typeInfo_change:function(t){""==this.typeInfo.value&&(this.cityInfo.value=""),this.updateData()},cityInfo_change:function(t){this.updateData()},delicacyDialog_display:function(t){this.bgBlur=t}},computed:{delicacyCount:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 4;case"sm":return 6;case"md":return 9;case"lg":return 8;case"xl":return 10}},stayCount:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 4;case"sm":return 6;case"md":return 9;case"lg":return 8;case"xl":return 10}}}},g=(a(503),a(140)),C=Object(g.a)(_,s,[],!1,null,"8958f8b4",null);C.options.__file="src/vue/pages/Stay.vue";e.default=C.exports}}]);