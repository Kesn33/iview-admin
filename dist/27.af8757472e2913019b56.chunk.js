webpackJsonp([27],{240:function(e,t,r){r(767);var o=r(1)(r(444),r(835),null,null);o.options.__file="/Users/lizhigang/Documents/TD/iview-admin/src/views/advanced-router/mutative-router.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] mutative-router.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},444:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"mutative-router",data:function(){var e=this;return{orderColumns:[{type:"index",title:"序号",width:60},{title:"订单号",key:"order_id",align:"center"},{title:"用户",key:"user_name"},{title:"详情",key:"show_more",align:"center",render:function(t,r){return t("Button",{props:{type:"text",size:"small"},on:{click:function(){var t={order_id:r.row.order_id};e.$router.push({name:"order_info",params:t})}}},"了解详情")}}],orderData:[{order_id:"1000001",user_name:"Aresn"},{order_id:"1000002",user_name:"Lison"},{order_id:"1000003",user_name:"lili"},{order_id:"1000004",user_name:"lala"}]}},computed:{avatorImage:function(){return localStorage.avatorImgPath}}}},767:function(e,t){},835:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Row",[r("Col",{attrs:{span:"24"}},[r("Card",[r("p",{attrs:{slot:"title"},slot:"title"},[r("Icon",{attrs:{type:"ios-list"}}),e._v("\n                    订单详情(动态路由)\n                ")],1),e._v(" "),r("Row",{staticClass:"advanced-router",attrs:{type:"flex",justify:"center",align:"middle"}},[r("Table",{staticStyle:{width:"100%"},attrs:{columns:e.orderColumns,data:e.orderData}})],1)],1)],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});