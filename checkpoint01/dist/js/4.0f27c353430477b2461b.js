(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{456:function(t,e,i){},460:function(t,e,i){},470:function(t,e,i){"use strict";i(456)},473:function(t,e,i){"use strict";i(460)},478:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-sheet",{staticClass:"content",class:{bgBlur:t.bgBlur}},[i("Header"),t._v(" "),i("v-main",{staticClass:"main min-h-800"},[i("v-sheet",{staticClass:"section d-flex justify-center align-center pa-2 pa-md-4",attrs:{id:"section01"}},[i("v-responsive",{staticClass:"box d-flex justify-center align-center max-h-491 pa-2 pa-md-4",attrs:{"aspect-ratio":1226/491}},[i("div",{staticClass:"boxContent d-flex align-center flex-column"},[i("v-responsive",{staticClass:"centerLogo",attrs:{"aspect-ratio":487/69}}),t._v(" "),i("div",{staticClass:"my-2 align-self-start text-body-2 white--text"},[t._v("台北、台中、台南、屏東、宜蘭……遊遍台灣")]),t._v(" "),i("div",{staticClass:"d-flex align-center w-100 my-1"},[i("v-text-field",{staticClass:"flex-1 mr-2",attrs:{label:"搜尋關鍵字",solo:"",dense:"","hide-details":""},on:{change:t.search_change},model:{value:t.temp_search,callback:function(e){t.temp_search=e},expression:"temp_search"}})],1),t._v(" "),i("div",{staticClass:"d-flex align-center w-100 my-1"},[i("v-select",{staticClass:"flex-1 mr-2",attrs:{items:t.typeInfo.items,label:"類別",solo:"",dense:"","hide-details":""},on:{change:t.typeInfo_change},model:{value:t.typeInfo.value,callback:function(e){t.$set(t.typeInfo,"value",e)},expression:"typeInfo.value"}}),t._v(" "),i("v-select",{staticClass:"flex-1 mr-2",attrs:{items:t.cityInfo.items,label:"不分縣市",solo:"",dense:"","hide-details":"",disabled:""==t.typeInfo.value},on:{change:t.cityInfo_change},model:{value:t.cityInfo.value,callback:function(e){t.$set(t.cityInfo,"value",e)},expression:"cityInfo.value"}})],1)],1)])],1),t._v(" "),i("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8",attrs:{id:"section02"}},[i("div",{staticClass:"w-100 mb-4",attrs:{id:"card_shadow01"}}),t._v(" "),t.search?i("div",{staticClass:"text_search text-h6 text-bold"},[t._v("搜尋關鍵字 - "+t._s(t.search))]):t._e()]),t._v(" "),""==t.typeInfo.value?i("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8",attrs:{id:"section03"}},[i("v-container",{staticClass:"mb-8",attrs:{id:"section03_1"}},[i("div",{staticClass:"mb-4 title d-flex align-center"},[i("div",{staticClass:"icon mr-2"}),t._v(" "),i("div",{staticClass:"text-h6 text-bold"},[t._v("最新活動")])]),t._v(" "),i("div",[i("div",{staticClass:"row items"},t._l(t.data.activity.slice(0,4),(function(e){return i("div",{key:e.ID,staticClass:"col-n1 col-lg-n2 item mb-4"},[i("Card01",{attrs:{item:e},on:{details:t.details_dialog}})],1)})),0)])]),t._v(" "),i("v-container",{staticClass:"mb-8",attrs:{id:"section03_2"}},[i("div",{staticClass:"mb-4 title d-flex align-center"},[i("div",{staticClass:"icon mr-2"}),t._v(" "),i("div",{staticClass:"text-h6 text-bold"},[t._v("熱門景點")])]),t._v(" "),i("div",[i("div",{staticClass:"row items"},t._l(t.data.scenicspot.slice(0,t.scenicspotCount),(function(t){return i("div",{key:t.ID,staticClass:"col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item mb-4"},[i("Card02",{attrs:{item:t}})],1)})),0)])])],1):t._e(),t._v(" "),"activity"==t.typeInfo.value?i("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8",attrs:{id:"section03"}},[i("v-container",{staticClass:"mb-8",attrs:{id:"section03_1"}},[i("div",{staticClass:"mb-4 title d-flex align-center"},[i("div",{staticClass:"icon mr-2"}),t._v(" "),i("div",{staticClass:"text-h6 text-bold"},[t._v("活動 - "+t._s(t.itemsFindValue(t.cityInfo.items,t.cityInfo.value).text))])]),t._v(" "),i("div",[i("div",{staticClass:"row items"},t._l(t.data.activity.slice((t.activity.pageIndex-1)*t.activity.pageItemMax,(t.activity.pageIndex-1)*t.activity.pageItemMax+t.activity.pageItemMax),(function(e){return i("div",{key:e.ID,staticClass:"col-n1 col-lg-n2 item mb-4"},[i("Card01",{attrs:{item:e},on:{details:t.details_dialog}})],1)})),0),t._v(" "),t.activity.pageTotal?i("div",{staticClass:"mt-8"},[i("v-pagination",{attrs:{length:t.activity.pageTotal,"total-visible":7},model:{value:t.activity.pageIndex,callback:function(e){t.$set(t.activity,"pageIndex",e)},expression:"activity.pageIndex"}})],1):t._e()])])],1):"scenicspot"==t.typeInfo.value?i("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8",attrs:{id:"section03"}},[i("v-container",{staticClass:"mb-8",attrs:{id:"section03_2"}},[i("div",{staticClass:"mb-4 title d-flex align-center"},[i("div",{staticClass:"icon mr-2"}),t._v(" "),i("div",{staticClass:"text-h6 text-bold"},[t._v("景點 - "+t._s(t.itemsFindValue(t.cityInfo.items,t.cityInfo.value).text))])]),t._v(" "),i("div",[i("div",{staticClass:"row items"},t._l(t.data.scenicspot.slice((t.scenicspot.pageIndex-1)*t.scenicspot.pageItemMax,(t.scenicspot.pageIndex-1)*t.scenicspot.pageItemMax+t.scenicspot.pageItemMax),(function(t){return i("div",{key:t.ID,staticClass:"col-n1 col-sm-n2 col-md-n3 col-lg-n4 col-xl-n5 item mb-4"},[i("Card02",{attrs:{item:t}})],1)})),0),t._v(" "),t.scenicspot.pageTotal?i("div",{staticClass:"mt-8"},[i("v-pagination",{attrs:{length:t.scenicspot.pageTotal,"total-visible":7},model:{value:t.scenicspot.pageIndex,callback:function(e){t.$set(t.scenicspot,"pageIndex",e)},expression:"scenicspot.pageIndex"}})],1):t._e()])])],1):t._e()],1),t._v(" "),i("Footer"),t._v(" "),i("ActivityDialog",{ref:"activityDialog",on:{display:t.activityDialog_display}})],1)};a._withStripped=!0;var s=i(448),n=i.n(s),c=i(454),l=i.n(c),o=i(449),r=i(450),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:"800","content-class":"activityDialog"},model:{value:t.details_dialog,callback:function(e){t.details_dialog=e},expression:"details_dialog"}},[t.details_info?i("v-card",[i("div",{staticClass:"pa-4"},[i("div",{staticClass:"pic ph-400 w-100",style:{backgroundImage:"url("+t.chooseone(t.details_info.pics.length?t.details_info.pics[t.details_index].url:null,t.placeholder)+")"},attrs:{title:t.chooseone(t.details_info.pics.length?t.details_info.pics[t.details_index].description:null,"無提供照片")}})]),t._v(" "),t.details_info.pics.length?i("div",{staticClass:"d-flex pa-2"},[i("div",{staticClass:"flex-1"}),t._v(" "),i("v-btn",{staticClass:"mx-1 btn_pn",attrs:{small:"",disabled:t.details_index<=0},on:{click:function(e){t.details_index--}}},[i("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),i("v-btn",{staticClass:"mx-1 btn_pn",attrs:{small:"",disabled:t.details_index>=t.details_info.pics.length-1},on:{click:function(e){t.details_index++}}},[i("v-icon",[t._v("mdi-chevron-right")])],1)],1):t._e(),t._v(" "),i("v-card-text",{staticClass:"d-flex flex-column flex-1"},[i("div",{staticClass:"title mb-2 text-bold text-h6",attrs:{title:t.details_info.Name}},[t._v(t._s(t.details_info.Name))]),t._v(" "),i("div",{staticClass:"text-body-2 my-2 description mb-4"},[t._v("\n        "+t._s(t.details_info.Description)+"\n      ")]),t._v(" "),i("div",{staticClass:"d-flex align-center"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-n2 d-flex"},[i("div",{staticClass:"dateRangeIcon mr-2"}),t._v(" "),i("div",[t._v(t._s(t.getTimeRange(t.details_info.StartTime,t.details_info.EndTime)))])]),t._v(" "),i("div",{staticClass:"col-n2 d-flex"},[i("div",{staticClass:"chargeIcon mr-2"}),t._v(" "),i("div",[t._v(t._s(0==t.details_info.Charge?"無":t.chooseone(t.details_info.Charge,"無")))])]),t._v(" "),i("div",{staticClass:"col-n2 d-flex"},[i("div",{staticClass:"anchorIcon mr-2"}),t._v(" "),i("div",[t._v(t._s(t.chooseone(t.details_info.Address,"無")))])]),t._v(" "),i("div",{staticClass:"col-n2 d-flex"},[i("div",{staticClass:"phoneIcon mr-2"}),t._v(" "),i("div",[t._v(t._s(t.chooseone(t.details_info.Phone,"無")))])])])])])],1):t._e()],1)};d._withStripped=!0;var v=i(447),p=i(446),f={mixins:[v.a],components:{},data:function(){return{placeholder:p.a,details_dialog:!1,details_info:null,details_index:0}},watch:{details_dialog:function(t){this.$emit("display",t)}},mounted:function(){},methods:{open:function(t){this.details_info=t,this.details_dialog=!0,this.details_index=0}},computed:{}},u=(i(470),i(140)),_=Object(u.a)(f,d,[],!1,null,"39860013",null);_.options.__file="src/vue/pages/components/ActivityDialog.vue";var m=_.exports,h=i(464),g=i(465),x=i(459);function y(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function C(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?y(Object(i),!0).forEach((function(e){n()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var b={mixins:[v.a],components:{Header:o.a,Footer:r.a,ActivityDialog:m,Card01:h.a,Card02:g.a},data:function(){return{temp_search:"",search:"",typeInfo:{value:"",items:[{text:"全部",value:""},{text:"活動",value:"activity"},{text:"景點",value:"scenicspot"}]},cityInfo:{value:"",items:[{text:"不分縣市",value:""}].concat(l()(x.a))},placeholder:p.a,data:{activity:[],scenicspot:[]},bgBlur:!1,activity:{pageItemMax:10,pageIndex:1,pageTotal:1},scenicspot:{pageItemMax:20,pageIndex:1,pageTotal:1}}},watch:{},mounted:function(){this.updateData()},methods:{updateData:function(){var t=this,e=this.getAuthorizationHeader(),i=this.cityInfo.value,a=this.typeInfo.value,s=this.search;if(""!=i&&(i="/"+i),""==a||"activity"==a){var n={orderby:"StartTime desc",format:"JSON"};""==a&&(n.top=10),""!=s&&(n.filter="contains(Name,'".concat(s,"') or contains(Organizer,'").concat(s,"') or contains(Address,'").concat(s,"')")),fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity".concat(i,"?").concat(this.parameterToStr(n)),{headers:C({},e)}).then((function(t){return t.json()})).then((function(e){t.data.activity=e,""!=t.typeInfo.value&&(t.activity.pageIndex=1,t.activity.pageTotal=Math.ceil(t.data.activity.length/t.activity.pageItemMax))}))}if(""==a||"scenicspot"==a){var c={orderby:"SrcUpdateTime asc",format:"JSON"};""==a&&(c.top=10),""!=s&&(c.filter="contains(Keyword,'".concat(s,"') or contains(Name,'").concat(s,"') or contains(Address,'").concat(s,"')")),fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot".concat(i,"?").concat(this.parameterToStr(c)),{headers:C({},e)}).then((function(t){return t.json()})).then((function(e){t.data.scenicspot=e,""!=t.typeInfo.value&&(t.scenicspot.pageIndex=1,t.scenicspot.pageTotal=Math.ceil(t.data.scenicspot.length/t.scenicspot.pageItemMax))}))}},details_dialog:function(t){this.$refs.activityDialog.open(C({pics:this.getPicture(t.Picture)},t))},search_change:function(){this.search=this.temp_search,this.updateData()},search_click:function(){this.search=this.temp_search,this.updateData()},coordinate_click:function(){alert("尚未開放功能")},typeInfo_change:function(t){""==this.typeInfo.value&&(this.cityInfo.value=""),this.updateData()},cityInfo_change:function(t){this.updateData()},activityDialog_display:function(t){this.bgBlur=t}},computed:{scenicspotCount:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 4;case"sm":return 6;case"md":return 9;case"lg":return 8;case"xl":return 10}}}},I=(i(473),Object(u.a)(b,a,[],!1,null,"790735af",null));I.options.__file="src/vue/pages/Attractions.vue";e.default=I.exports}}]);