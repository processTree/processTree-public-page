(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{253:function(t,e,n){"use strict";n.r(e);var l={props:["tag","title","description","last_step"]},r=n(45),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex relative pb-12"},[t.last_step?n("div",{staticClass:"h-full w-10 absolute inset-0 flex items-center justify-center"},[n("div",{staticClass:"h-full w-1 bg-gray-200 pointer-events-none"})]):t._e(),t._v(" "),n("div",{staticClass:"flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"},["finish"!=t.tag?n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}}),t._v(" "),n("circle",{attrs:{cx:"12",cy:"7",r:"4"}})]):t._e(),t._v(" "),"finish"==t.tag?n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}}),t._v(" "),n("path",{attrs:{d:"M22 4L12 14.01l-3-3"}})]):t._e()]),t._v(" "),n("div",{staticClass:"flex-grow pl-4"},[n("h2",{staticClass:"font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("p",{staticClass:"leading-relaxed"},[t._v("\n      "+t._s(t.description)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,n){"use strict";n.r(e);var l={props:["process"],data:function(){return{steps:this.process}}},r=n(45),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-gray-600 body-font"},[n("div",{staticClass:"container px-5 py-6 mx-auto flex flex-wrap"},[n("div",{staticClass:"flex flex-wrap w-full container mx-auto flex px-5 py-6 items-center justify-center flex-col"},[n("div",{staticClass:"lg:w-2/5 md:w-3/4 md:pr-10 md:py-6"},t._l(t.steps,(function(e,l){return n("div",{key:l},[n("CompanyStep",{attrs:{title:e.title,description:e.description,tag:e.tag,last_step:l!=Object.keys(t.steps).length-1}})],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CompanyStep:n(253).default})}}]);