(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{319:function(t,e,a){},320:function(t,e,a){},346:function(t,e,a){"use strict";a(319)},347:function(t,e,a){"use strict";a(320)},370:function(t,e,a){"use strict";var n=a(317),i={name:"HomeFeatureItem",props:["feature"],methods:{jumpToFeature:function(){this.feature&&this.feature.actionLink&&this.$router.push(this.feature.actionLink)}}},s=(a(346),a(45)),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feature",on:{click:t.jumpToFeature}},[t.feature&&t.feature.title?a("h2",[t._v(t._s(t.feature.title))]):t._e(),t._v(" "),t.feature&&t.feature.title&&t.feature.details?a("p",[t._v("\n    "+t._s(t.feature.details)+"\n  ")]):t._e()])}),[],!1,null,"cc735936",null).exports,o={name:"Home",components:{NavLink:n.a,HomeFeatureItem:r},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}},methods:{}},u=(a(347),Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?a("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(t,e){return a("home-feature-item",{key:e,attrs:{feature:t}})})),1):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null));e.a=u.exports}}]);