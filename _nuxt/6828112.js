(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{249:function(t,e,n){"use strict";n.r(e);var o={CALL:"CALL WITH RECRUITER",ONLINECODING:"ONLINE CODING CHALLENGE",SYSTEMDESIGN:"ON-SITE SYSTEM DESIGN",PAIRPROGRAM:"PAIR PROGRAMMING",FINISH:"THAT'S IT!"},r={name:"CompanyCard",props:["company","hovering"],methods:{goToCompany:function(t){console.log("pushing to company: ".concat(t.slug)),this.$router.push({path:t.slug})}},beforeCreate:function(){this.PROCESS_STEPS=o}},l=n(45),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hovering?n("div",{staticClass:"h-80 bg-gray-100 p-6 text-center rounded-lg overflow-hidden border-2 border-indigo-500 relative",on:{mouseover:function(e){t.hovering=!0},mouseleave:function(e){t.hovering=!1},click:function(e){return t.goToCompany(t.company)}}},[n("span",{staticClass:"bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"},[t._v("LEARN MORE")]),t._v(" "),n("div",{staticClass:"p-2"},[n("h1",{staticClass:"group-hover:text-white title-font text-lg font-medium text-gray-900 mb-3"},[t._v("\n      "+t._s(t.company.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"my-4 inline-flex flex-wrap"},t._l(t.company.tags,(function(e){return n("span",{key:e,staticClass:"inline-block py-1 px-2 rounded text-xs font-medium tracking-widest"},[t._v(t._s(t.PROCESS_STEPS[e.toUpperCase()]))])})),0)])]):n("div",{staticClass:"h-80 m-1 bg-gray-100 p-6 text-center rounded-lg overflow-hidden",on:{mouseover:function(e){t.hovering=!0},mouseleave:function(e){t.hovering=!1},click:function(e){return t.goToCompany(t.company)}}},[n("img",{staticClass:"w-32 h-32 object-cover object-center rounded-full inline-block",attrs:{src:t.company.logo,alt:t.company.title}}),t._v(" "),n("div",{staticClass:"p-2"},[n("h1",{staticClass:"group-hover:text-white title-font text-lg font-medium text-gray-900 mb-3"},[t._v("\n      "+t._s(t.company.title)+"\n    ")]),t._v(" "),n("p",{staticClass:"group-hover:text-white leading-relaxed mb-3"},[t._v("\n      "+t._s(t.company.subtitle)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports}}]);