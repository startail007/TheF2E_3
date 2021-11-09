(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{467:function(t,e,n){},468:function(t,e,n){},475:function(t,e,n){"use strict";n(467)},476:function(t,e,n){"use strict";n(468)},477:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"content"},[n("Header"),t._v(" "),n("v-main",{staticClass:"main min-h-800"},[n("v-sheet",{staticClass:"section d-flex justify-center align-center pa-2 pa-md-4",attrs:{id:"section01"}},[n("v-container",{staticClass:"mb-8"},[n("div",{staticClass:"d-flex justify-center"},[n("div",{staticClass:"d-flex max-w-400"},[n("v-select",{staticClass:"flex-1 mr-2",attrs:{items:t.cityInfo.items,label:"選擇縣市",solo:"",dense:"","hide-details":""},on:{change:t.cityInfo_change},model:{value:t.cityInfo.value,callback:function(e){t.$set(t.cityInfo,"value",e)},expression:"cityInfo.value"}}),t._v(" "),n("v-select",{staticClass:"flex-1",attrs:{items:t.routeInfo.items,label:"選擇路線",solo:"",dense:"","hide-details":"","no-data-text":"無資料"},on:{change:t.routeInfo_change},model:{value:t.routeInfo.value,callback:function(e){t.$set(t.routeInfo,"value",e)},expression:"routeInfo.value"}})],1)])])],1),t._v(" "),n("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8",attrs:{id:"section02"}},[n("div",{staticClass:"w-100 mb-4",attrs:{id:"card_shadow01"}})]),t._v(" "),n("v-sheet",{staticClass:"section d-flex justify-center align-center flex-column pb-8 flex-1",attrs:{id:"section03"}},[n("v-container",t._l(t.stopOfRoute.p,(function(e){return n("div",{key:e.StopID},[t._v(t._s(e.StopName.Zh_tw))])})),0)],1)],1),t._v(" "),n("Footer")],1)};o._withStripped=!0;var r=n(448),s=n.n(r),i=n(457),a=n(458),c=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.finished?[this._t("content",null,{components:this.components})]:[e("div",{staticClass:"vh-70 d-flex align-center justify-center"},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[this._v(this._s(Math.round(100*this.progress))+"%")])],1)]],2)};function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}c._withStripped=!0;var p={components:{},data:function(){return{finished:!1,progress:0,components:{}}},mounted:function(){},methods:{load:function(t){var e=this;return this.finished=!1,this.progress=0,function(t,e){var n=0,o=t.length,r=t.map((function(t){return t.src.then((function(t){return n++,e(n,o),Promise.resolve(t)}))}));return Promise.all(r).then((function(e){return e.map((function(e,n){return f(f({},t[n]),{},{component:e.default})}))}))}(t,(function(t,n){e.progress=t/n})).then((function(t){var n={};return t.forEach((function(t){n[t.name]=t.component})),e.components=n,e.finished=!0,n}))}},computed:{}},l=(n(475),n(140)),h=Object(l.a)(p,c,[],!1,null,"1ad06cf8",null);h.options.__file="src/vue/pages/components/LoadComponents.vue";var d=h.exports,v=n(456);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={mixins:[n(444).a],components:{Header:i.a,Footer:a.a,LoadComponents:d},data:function(){return{cityInfo:{value:"",items:v.a},routeInfo:{value:"",items:[]},routeList:[],stopOfRoute:{p:[],n:[]}}},mounted:function(){this.updateRoute()},methods:{updateRoute:function(){var t=this,e=this.getAuthorizationHeader(),n=this.cityInfo.value,o={top:30,format:"JSON"};""!=n&&(o.filter="City eq '".concat(n,"'")),fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip?".concat(this.parameterToStr(o)),{headers:O({},e)}).then((function(t){return t.json()})).then((function(e){console.log(e),t.routeList=e,t.routeInfo.items=t.routeList.map((function(t,e){return{text:t.TaiwanTripName.Zh_tw,value:e}}))}))},updateStopOfRoute:function(){var t=this,e=this.getAuthorizationHeader(),n=this.itemsFindValue(this.routeInfo.items,this.routeInfo.value).text;console.log(n),fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/StopOfRoute/TaiwanTrip/".concat(n,"?").concat(this.parameterToStr({top:30,format:"JSON"})),{headers:O({},e)}).then((function(t){return t.json()})).then((function(e){t.stopOfRoute.p=e[0].Stops,t.stopOfRoute.n=e[1].Stops,console.log(t.stopOfRoute.p)}))},cityInfo_change:function(t){this.updateRoute(),this.routeInfo.value="",this.stopOfRoute.p=[],this.stopOfRoute.n=[]},routeInfo_change:function(t){this.updateStopOfRoute()}},computed:{}},g=(n(476),Object(l.a)(b,o,[],!1,null,"46e95a0e",null));g.options.__file="src/vue/pages/Transportation.vue";e.default=g.exports}}]);