(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{466:function(t,e,n){},467:function(t,e,n){},468:function(t,e,n){},476:function(t,e,n){},477:function(t,e,n){},478:function(t,e,n){},485:function(t,e,n){"use strict";n(466)},486:function(t,e,n){"use strict";n(467)},487:function(t,e,n){"use strict";n(468)},502:function(t,e,n){"use strict";n(476)},503:function(t,e,n){"use strict";n(477)},504:function(t,e,n){"use strict";n(478)},505:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"content d-flex flex-column w-100 h-100"},[n("Header"),t._v(" "),n("v-main",{staticClass:"main w-100 h-100 pb-8"},[n("div",{staticClass:"d-flex flex-column flex-md-row w-100 h-100"},[n("l-map",{ref:"myMap",staticClass:"w-100 h-100",attrs:{zoom:t.zoom,center:t.center,options:t.options},on:{"update:zoom":function(e){t.zoom=e},"update:center":function(e){t.center=e}}},[n("l-tilelayer",{attrs:{url:t.url,attribution:t.attribution}}),t._v(" "),"nearbyStation"===t.state?t._l(t.stationList,(function(e,o){return n("l-marker",{key:"station"+o,attrs:{"lat-lng":e.latlng,icon:t.stationIcon}},[n("l-popup",[n("div",{staticClass:"d-flex flex-column align-center"},[n("div",{staticClass:"d-flex text-body-1 pa-2 text-bold"},[n("div",[t._v(t._s(e.name))])])])])],1)})):"route"===t.state?t._l(t.stopList,(function(e,o){return n("l-marker",{key:"route"+o,attrs:{"lat-lng":t.changePos(e.StopPosition)}},[n("l-icon",{attrs:{iconSize:[0,0],iconAnchor:[0,0],"class-name":"stopIcon"}},[n("div",{staticClass:"iconBox"}),t._v(" "),n("div",{staticClass:"brand"},[n("div",{staticClass:"brandTitle"},[t._v(t._s(e.StopName.Zh_tw))]),t._v(" "),n("div",{staticClass:"arrow"})])])],1)})):t._e(),t._v(" "),n("l-marker",{key:"center",attrs:{"lat-lng":t.center,icon:t.centerIcon}}),t._v(" "),n("l-geojson",{attrs:{geojson:t.geojson,options:t.geooptions}})],2),t._v(" "),n("div",{staticClass:"search pa-4"},[n("div",{staticClass:"d-flex justify-center"},[n("v-btn",{staticClass:"ma-2",attrs:{depressed:"",color:"primary"},on:{click:t.search_click}},[t._v("附近站牌")]),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{depressed:"",color:"primary"},on:{click:t.currentPosition_click}},[t._v("目前位置")])],1),t._v(" "),t.state?n("div",["nearbyStation"===t.state?t._l(t.stationList,(function(e,o){return n("div",{key:o},[n("Card01",{attrs:{item:e},on:{route:t.card01_route}})],1)})):"route"===t.state?[n("div",{staticClass:"text-h6 d-flex align-center"},[n("v-btn",{staticClass:"mr-2 text-h6",attrs:{depressed:"",color:"#3ec3a4","x-small":"",fab:""},on:{click:t.routeBack_click}},[t._v("←")]),t._v(" "),n("div",[t._v(t._s(t.currentRoute.name))])],1),t._v(" "),t.stopList.length?n("div",[n("v-item-group",{staticClass:"d-flex w-100",attrs:{mandatory:""},on:{change:t.route_change},model:{value:t.routeIndex,callback:function(e){t.routeIndex=e},expression:"routeIndex"}},[t.destinationStopName?n("v-item",{staticClass:"routeItem flex-1 text-center py-2 text-bold text-body-2",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.toggle;return[n("div",{on:{click:o}},[t._v("\n                    往 "),n("span",{staticClass:"stopName"},[t._v(t._s(t.destinationStopName))])])]}}],null,!1,1103491401)}):t._e(),t._v(" "),t.departureStopName?n("v-item",{staticClass:"routeItem flex-1 text-center py-2 text-bold text-body-2",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.toggle;return[n("div",{on:{click:o}},[t._v("\n                    往 "),n("span",{staticClass:"stopName"},[t._v(t._s(t.departureStopName))])])]}}],null,!1,2489233665)}):t._e()],1),t._v(" "),n("div",t._l(t.stopList,(function(e,o){return n("div",{key:o},[n("Card02",{attrs:{item:e,dynamic:t.stopDynamicList[o]}})],1)})),0)],1):t._e()]:t._e()],2):t._e()])],1)]),t._v(" "),n("Footer")],1)};o._withStripped=!0;var a=n(479),i=n.n(a),s=n(484),r=n.n(s),c=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-app-bar",{staticClass:"bar",attrs:{app:"","elevate-on-scroll":""}},[e("v-container",{staticClass:"pa-0 fill-height"},[e("div",{staticClass:"d-flex flex-md-column align-center px-4"},[e("router-link",{attrs:{to:{path:"/"}}},[e("img",{staticClass:"logo",attrs:{src:this.logo}})])],1),this._v(" "),e("v-spacer")],1)],1)],1)};c._withStripped=!0;var u=function(){var t=this.$createElement;return(this._self._c||t)("div")};u._withStripped=!0;var l={components:{},data:function(){return{}},mounted:function(){},methods:{pageItem_click:function(t){this.$route.path===t&&window.scroll({top:0,left:0,behavior:"smooth"})}},computed:{}},d=(n(485),n(143)),p=Object(d.a)(l,u,[],!1,null,"3111d13b",null);p.options.__file="src/vue/pages/components/Menu.vue";var m=p.exports,v=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{attrs:{right:"",app:"",temporary:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[t._t("content")],2)};v._withStripped=!0;var f={components:{},props:{},watch:{},data:function(){return{isOpen:!1,resizeID:void 0}},mounted:function(){window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){var t=this;clearTimeout(this.resizeID),this.resizeID=setTimeout((function(){t.isOpen&&t.$vuetify.breakpoint.mdAndUp&&(t.isOpen=!1)}),300)}},computed:{}},h=Object(d.a)(f,v,[],!1,null,"2e4a0ea0",null);h.options.__file="src/vue/pages/components/Sidebar.vue";var _=h.exports,y=n.p+"img/logo.9ce45d0e33c1728d4d7085970bdfffa0.png",x={components:{Menu:m,Sidebar:_},data:function(){return{logo:y}},mounted:function(){},methods:{},computed:{}},g=(n(486),Object(d.a)(x,c,[],!1,null,"023c3669",null));g.options.__file="src/vue/pages/components/Header.vue";var b=g.exports,C=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer px-3"},[e("v-container",{staticClass:"pa-0 d-flex align-center justify-center"},[e("div",{staticClass:"rightsReserved text-start my-1 text-caption text-md-body-2"},[this._v("\n      © Code: "),e("a",{attrs:{href:"https://github.com/virtools",target:"_blank"}},[this._v("Wei")]),this._v(" / Design:\n      "),e("a",{attrs:{href:"https://2021.thef2e.com/users/6296432819610583727",target:"_blank"}},[this._v("鹽酥G")])])])],1)};C._withStripped=!0;var S={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},w=(n(487),Object(d.a)(S,C,[],!1,null,"3dec5b12",null));w.options.__file="src/vue/pages/components/Footer.vue";var O=w.exports,D=n(144),N=n(1),k=n.p+"img/center-marker-icon.94a5cbb486bc8f8efe082634a76de106.png",I=n.p+"img/station-marker-icon.b03e4e333e64451bec3f73fccf74cbe1.png",j=n.p+"img/station-marker-shadow.a0c6cc1401c107b501efee6477816891.png",L=n(488),P=[{text:"臺北市",value:"Taipei",code:"TPE"},{text:"新北市",value:"NewTaipei",code:"NWT"},{text:"桃園市",value:"Taoyuan",code:"TAO"},{text:"臺中市",value:"Taichung",code:"TXG"},{text:"臺南市",value:"Tainan",code:"TNN"},{text:"高雄市",value:"Kaohsiung",code:"KHH"},{text:"基隆市",value:"Keelung",code:"KEE"},{text:"新竹市",value:"Hsinchu",code:"HSZ"},{text:"新竹縣",value:"HsinchuCounty",code:"HSQ"},{text:"苗栗縣",value:"MiaoliCounty",code:"MIA"},{text:"彰化縣",value:"ChanghuaCounty",code:"CHA"},{text:"南投縣",value:"NantouCounty",code:"NAN"},{text:"雲林縣",value:"YunlinCounty",code:"YUN"},{text:"嘉義縣",value:"ChiayiCounty",code:"CYQ"},{text:"嘉義市",value:"Chiayi",code:"CYI"},{text:"屏東縣",value:"PingtungCounty",code:"PIF"},{text:"宜蘭縣",value:"YilanCounty",code:"ILA"},{text:"花蓮縣",value:"HualienCounty",code:"HUA"},{text:"臺東縣",value:"TaitungCounty",code:"TTT"},{text:"金門縣",value:"KinmenCounty",code:"KIN"},{text:"澎湖縣",value:"PenghuCounty",code:"PEN"},{text:"連江縣",value:"LienchiangCounty",code:"LIE"}],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("v-card",{staticClass:"d-flex flex-column w-100",attrs:{flat:""}},[n("v-card-title",{staticClass:"pa-0 mb-2 align-start mt-2"},[n("div",{staticClass:"title text-body-1 text-bold",attrs:{title:t.item.name}},[t._v(t._s(t.item.name))])]),t._v(" "),n("v-card-text",{staticClass:"pa-0 mb-2"},t._l(t.item.Routes,(function(e,o){return n("div",{key:o,staticClass:"my-2 w-100 route d-flex text-bold",on:{click:function(n){return t.route_click(e)}}},[n("div",{staticClass:"mr-2"},[t._v(t._s(e.name))]),t._v(" "),n("div",[t._v(t._s(e.departureStopName)+"-"+t._s(e.destinationStopName))])])})),0)],1):t._e()};T._withStripped=!0;var E={mixins:[D.a],components:{},props:{item:{type:Object,default:null}},data:function(){return{menu:!1}},mounted:function(){},methods:{route_click:function(t){this.$emit("route",t)}},computed:{}},R=(n(502),Object(d.a)(E,T,[],!1,null,"73aa6eed",null));R.options.__file="src/vue/pages/components/Card01.vue";var z=R.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("v-card",{staticClass:"d-flex flex-column w-100",attrs:{flat:""}},[n("v-card-title",{staticClass:"pa-0 mb-2 align-start mt-2"},[n("div",{staticClass:"title text-body-1 text-bold d-flex"},[n("div",[t._v(t._s(t.item.StopID))]),t._v(" "),n("div",[t._v(t._s(t.item.StopName.Zh_tw))])])]),t._v(" "),n("v-card-text",{staticClass:"pa-0 mb-2"},[n("div",[t.dynamic?[t.dynamic.Estimates?t._l(t.dynamic.Estimates,(function(e,o){return n("div",{key:o,staticClass:"bus d-flex my-1"},[n("div",{staticClass:"base d-flex flex-1 align-center"},[n("div",{staticClass:"mx-1 flex-1 text-center"},[t._v("車牌 "+t._s(e.PlateNumb))]),t._v(" "),void 0!==e.VehicleStopStatus?[e.VehicleStopStatus?n("div",{staticClass:"mx-1 state inDeparture text-center flex-1"},[t._v("進站")]):n("div",{staticClass:"mx-1 state outDeparture text-center flex-1"},[t._v("離站")])]:[n("div",{staticClass:"mx-1 flex-1 text-center"},[t._v("剩 "+t._s(Math.round(e.EstimateTime/60))+" 分鐘")])],t._v(" "),n("div",{staticClass:"mx-1 flex-1 text-center"},[e.IsLastBus?[t._v("末班車")]:t._e()],2)],2)])})):[n("div",{staticClass:"state overDeparture text-center"},[t._v("末班已過")])]]:[n("div",{staticClass:"state noDeparture text-center"},[t._v("未發車")])]],2)])],1):t._e()};A._withStripped=!0;var $={mixins:[D.a],components:{},props:{item:{type:Object,default:null},dynamic:{type:Object,default:null}},data:function(){return{menu:!1}},mounted:function(){},methods:{},computed:{}},H=(n(503),Object(d.a)($,A,[],!1,null,"73b8866e",null));H.options.__file="src/vue/pages/components/Card02.vue";var M=H.exports;function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var U={mixins:[D.a],components:{Header:b,Footer:O,Card01:z,Card02:M},data:function(){return{centerIcon:N.icon({className:"centerIcon",iconUrl:k,iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,0]}),stationIcon:N.icon({className:"stationIcon",iconUrl:I,shadowUrl:j,iconSize:[25,41],shadowSize:[41,41],iconAnchor:[12.5,41],shadowAnchor:[12.5,41],popupAnchor:[0,-32]}),zoom:9,center:N.latLng(23.673875,120.982024),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',options:{minZoom:8,maxZoom:18,zoomControl:!1,animate:!0},mapPopupText:{StationName:"名稱",latLng:"經緯度",BikesCapacity:"可容納自行車總數",ServiceType:"服務類型"},geojson:[],geooptions:{style:{color:"#355f8b",weight:8,opacity:.8}},stationList:[],route:[],routeDynamic:[],stopList:[],stopDynamicList:[],destinationStopName:"",departureStopName:"",routeIndex:0,state:"",dynamicID:null,currentRoute:null}},mounted:function(){},methods:{setState:function(t){if(this.state!==t){var e=this.state;this.state=t,"nearbyStation"===e&&""===t&&(this.stationList=[]),"route"===e&&"nearbyStation"===t&&(this.routeIndex=0,this.stopList=[],this.stopDynamicList=[],this.route=[],this.routeDynamic=[],this.geojson=[],this.destinationStopName="",this.departureStopName="",this.currentRoute=null,this.updateDynamicOff())}},changePos:function(t){return[t.PositionLat,t.PositionLon]},do_something:function(t,e){this.map.setView([t,e],16)},currentPosition_click:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){var n=e.coords;t.do_something(n.latitude,n.longitude)}),(function(t){}))},search_click:function(){var t=this,e=this.getAuthorizationHeader(),n={$format:"JSON",$spatialFilter:"nearby(".concat(this.center.lat,", ").concat(this.center.lng,",500)")},o=[];o.push(Object(L.o)("https://ptx.transportdata.tw/MOTC/v2/Bus/Station/NearBy/",{headers:B({},e)}).get().query(n)),o.push(Object(L.o)("https://ptx.transportdata.tw/MOTC/v2/Bus/Route/NearBy/",{headers:B({},e)}).get().query(n));var a=[];Promise.all(o).then((function(e){e[0].forEach((function(e){var n=e.LocationCityCode,o=e.StationName.Zh_tw,i=a.find((function(t){return t.name===o}));if(i)e.Stops.forEach((function(t){return i.Routes.add(t.RouteName.Zh_tw)}));else{var s=new Set;e.Stops.forEach((function(t){return s.add(t.RouteName.Zh_tw)})),a.push({name:o,latlng:t.changePos(e.StationPosition),Routes:s,city:P.find((function(t){return t.code===n})).value,cityCode:e.LocationCityCode})}})),a.forEach((function(t){t.Routes=i()(t.Routes),t.Routes=t.Routes.map((function(n){var o,a=e[1].find((function(t){return t.RouteName.Zh_tw===n}));return{name:a.RouteName.Zh_tw,id:a.RouteID,uid:a.RouteUID,city:null!==(o=a.City)&&void 0!==o?o:t.city,departureStopName:a.DepartureStopNameZh,destinationStopName:a.DestinationStopNameZh}}))})),t.stationList=a,t.map.setView(t.center,16),t.setState("nearbyStation")}))},card01_route:function(t){var e=this,n=this.getAuthorizationHeader(),o={$format:"JSON",$filter:"RouteUID eq '".concat(t.uid,"'")};Object(L.o)("https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/",{headers:B({},n)}).get("".concat(t.city,"/").concat(t.name)).query(o).then((function(n){e.currentRoute=t,e.routeIndex=0,n.length?(e.route=n,e.route_change(e.routeIndex)):(e.route=[],e.stopList=[],e.geojson=[]),e.setState("route"),e.destinationStopName=t.destinationStopName,e.departureStopName=t.departureStopName,e.routeStateData(t),e.updateDynamicOn()}))},routeStateData:function(t){var e=this;if(this.routeDynamic=[],this.route.length){var n=this.getAuthorizationHeader(),o={$format:"JSON",$filter:"RouteUID eq '".concat(t.uid,"'")};Object(L.o)("https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/",{headers:B({},n)}).get("".concat(t.city,"/").concat(t.name)).query(o).then((function(t){e.routeDynamic=e.route.map((function(e){var n=t.filter((function(t){return t.Direction===e.Direction}));return e.Stops.map((function(t){return n.find((function(e){return e.StopUID===t.StopUID}))}))})),e.stopDynamicList=e.routeDynamic[e.routeIndex]}))}},route_change:function(t){var e=this;t=Math.min(t,this.route.length-1),this.stopList=this.route[t].Stops,this.routeDynamic.length&&(this.stopDynamicList=this.routeDynamic[t]),this.geojson=[{type:"LineString",coordinates:this.stopList.map((function(t){return e.changePos(t.StopPosition).reverse()}))}]},updateDynamicOn:function(){var t=this;clearInterval(this.dynamicID),this.dynamicID=setInterval((function(){t.routeStateData(t.currentRoute)}),15e3)},updateDynamicOff:function(){clearInterval(this.dynamicID)},routeBack_click:function(){this.setState("nearbyStation")}},computed:{map:function(){return this.$refs.myMap.mapObject}}},q=(n(504),Object(d.a)(U,o,[],!1,null,"6c01d306",null));q.options.__file="src/vue/pages/Main.vue";e.default=q.exports}}]);