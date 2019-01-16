webpackJsonp([54],{2035:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(3744),s=a(n),v=r(3747),o=a(v),i={cn:"# ConfigProvider 全局化配置\n为组件提供统一的全局化配置。",us:"# ConfigProvider\n`ConfigProvider` provides a uniform configuration support for components.\n"};e.default={category:"Components",subtitle:"全局化配置",cols:1,type:"其他",title:"ConfigProvider",render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{cn:i.cn,us:i.us}}),t("api",[t("template",{slot:"cn"},[t(s.default)]),t(o.default)])])}}},3744:function(t,e,r){t.exports=r(3745)},3745:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(3746),n=r(59),s=n(null,a.a,!1,null,null,null);e.default=s.exports},3746:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{attrs:{id:"使用"}},[t._v("使用 "),r("a",{staticClass:"anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),r("p",[t._v("ConfigProvider 使用 Vue 的 "),r("a",{attrs:{href:"https://vuejs.org/v2/api/#provide-inject"}},[t._v("provide / inject")]),t._v(" 特性，只需在应用外围包裹一次即可全局生效。")]),t._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-config-provider")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":getPopupContainer")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"getPopupContainer"')]),t._v(">")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("app")]),t._v(" />")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-config-provider")]),t._v(">")]),t._v("\n")])]),t._v(" "),r("h2",{attrs:{id:"API"}},[t._v("API "),r("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("getPopupContainer")]),t._v(" "),r("td",[t._v("弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。")]),t._v(" "),r("td",[t._v("Function(triggerNode)")]),t._v(" "),r("td",[t._v("() => document.body")])])])])])}],s={render:a,staticRenderFns:n};e.a=s},3747:function(t,e,r){t.exports=r(3748)},3748:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(3749),n=r(59),s=n(null,a.a,!1,null,null,null);e.default=s.exports},3749:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{attrs:{id:"Usage"}},[t._v("Usage "),r("a",{staticClass:"anchor",attrs:{href:"#Usage","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),r("p",[t._v("This component provides a configuration to all Vue components underneath itself via the "),r("a",{attrs:{href:"https://vuejs.org/v2/api/#provide-inject"}},[t._v("provide / inject")]),t._v(", In the render tree all components will have access to the provided config.")]),t._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-config-provider")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":getPopupContainer")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"getPopupContainer"')]),t._v(">")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("app")]),t._v(" />")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-config-provider")]),t._v(">")]),t._v("\n")])]),t._v(" "),r("h2",{attrs:{id:"API"}},[t._v("API "),r("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Property")]),t._v(" "),r("th",[t._v("Description")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Default")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("getPopupContainer")]),t._v(" "),r("td",[t._v("to set the container of the popup element. The default is to create a "),r("code",{pre:!0},[t._v("div")]),t._v(" element in "),r("code",{pre:!0},[t._v("body")]),t._v(".")]),t._v(" "),r("td",[t._v("Function(triggerNode)")]),t._v(" "),r("td",[r("code",{pre:!0},[t._v("() => document.body")])])])])])])}],s={render:a,staticRenderFns:n};e.a=s},675:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(2035),n=r.n(a);for(var s in a)"default"!==s&&function(t){r.d(e,t,function(){return a[t]})}(s);var v=r(59),o=v(n.a,null,!1,null,null,null);e.default=o.exports}});