(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{404:function(t,e,o){},560:function(t,e,o){"use strict";var n=o(404);o.n(n).a},612:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{errMsg:""}},methods:{onGetGeoLocation:function(){var t=this;if("undefined"!=typeof navigator&&"geolocation"in navigator){var e,o;navigator.geolocation.getCurrentPosition(function(n){console.log(n),t.errMsg="",e=[n.coords.longitude,n.coords.latitude],o=new AMap.Map("geolocation-container",{resizeEnable:!0,zoom:15,center:e}),new AMap.Marker({position:e,map:o})},function(e){console.log(e),t.errMsg=e.message||"出错"},{enableHighAccuracy:!1,maximumAge:1e4,timeout:3e4})}else alert("您的浏览器不支持定位")}}},a=(o(560),o(12)),i=Object(a.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"geolocation-wrapper"},[o("RemoteScript",{attrs:{src:"https://webapi.amap.com/maps?v=1.4.6&key=127225798a44ffd56967d469fe90b7da"}}),t._v(" "),o("div",{staticClass:"btn"},[o("el-button",{attrs:{size:"small"},on:{click:t.onGetGeoLocation}},[t._v("获取我的位置")]),t._v(" "),o("p",{staticClass:"color-red"},[t._v(t._s(t.errMsg))])],1),t._v(" "),o("div",{attrs:{id:"geolocation-container"}})],1)},[],!1,null,null,null);e.default=i.exports}}]);