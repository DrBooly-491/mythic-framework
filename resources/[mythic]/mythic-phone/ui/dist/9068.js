"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[9068],{19068:(e,n,r)=>{r.r(n),r.d(n,{GetMessages:()=>c,JoinChannel:()=>o,LeaveChannel:()=>i,SendMessage:()=>s});var t=r(21447);function a(e,n,r,t,a,u,c){try{var s=e[u](c),o=s.value}catch(e){return void r(e)}s.done?n(o):Promise.resolve(o).then(t,a)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,u){var c=e.apply(n,r);function s(e){a(c,t,u,s,o,"next",e)}function o(e){a(c,t,u,s,o,"throw",e)}s(void 0)}))}}var c=function(){var e=u(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.Z.send("GetMessages",{channel:n,joined:r});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Array());case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n,r){return e.apply(this,arguments)}}(),s=function(){var e=u(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,e.next=7;break;case 3:return e.prev=3,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e,null,[[0,3]])})));return function(n,r){return e.apply(this,arguments)}}(),o=function(){var e=u(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""),e.next=4,t.Z.send("JoinChannel",r);case 4:return e.next=6,e.sent.json();case 6:if(!e.sent){e.next=11;break}dispatch({type:"ADD_DATA",payload:{type:"ircChannels",data:{_id:r,name:n,joined:Date.now(),pinned:!1}}}),e.next=12;break;case 11:return e.abrupt("return",!1);case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),i=function(e){return function(){var n=u(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.Z.send("LeaveChannel",e);case 3:return n.next=5,n.sent.json();case 5:if(!n.sent){n.next=10;break}r({type:"REMOVE_DATA",payload:{type:"ircChannels",id:e}}),n.next=11;break;case 10:return n.abrupt("return",!1);case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",!1);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}()}}}]);