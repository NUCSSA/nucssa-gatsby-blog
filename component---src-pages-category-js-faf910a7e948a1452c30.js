(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{296:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return f});t(67),t(159),t(160);var n=t(2),c=t.n(n),s=t(21),i=t(1),l=t.n(i),r=t(0),o=t.n(r),m=t(154),d=t(302),p=t(301),y=t(309),u=function(e){var a=e.data.posts.edges,t={};a.forEach(function(e){var a=e.node.frontmatter.category;a&&null!=a&&(t[a]||(t[a]=[]),t[a].push(e))});var n=[];for(var i in t)n.push([i,t[i]]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.ThemeContext.Consumer,null,function(e){return o.a.createElement(d.a,{theme:e},o.a.createElement("header",{className:c.a.dynamic([["3401059523",[e.color.brand.primary]]])},o.a.createElement(p.a,{title:"Posts by categories",theme:e})),n.map(function(a){return o.a.createElement("section",{key:a[0],className:c.a.dynamic([["3401059523",[e.color.brand.primary]]])},o.a.createElement("h2",{className:c.a.dynamic([["3401059523",[e.color.brand.primary]]])},o.a.createElement(s.f,null)," ",a[0]),o.a.createElement(y.a,{edges:a[1],theme:e}))}),o.a.createElement(c.a,{styleId:"3401059523",css:["h2.__jsx-style-dynamic-selector{margin:0 0 0.5em;}","h2.__jsx-style-dynamic-selector svg{height:0.8em;fill:"+e.color.brand.primary+";}"],dynamic:[e.color.brand.primary]}))}))};u.propTypes={data:l.a.object.isRequired},a.default=u;var f="1772607610"},301:function(e,a,t){"use strict";var n=t(2),c=t.n(n),s=t(0),i=t.n(s),l=t(1),r=t.n(l),o=function(e){var a=e.title,t=e.children,n=e.theme;return i.a.createElement(i.a.Fragment,null,a?i.a.createElement("h1",{className:c.a.dynamic([["1826841480",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},a):i.a.createElement("h1",{className:c.a.dynamic([["1826841480",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},t),i.a.createElement(c.a,{styleId:"1826841480",css:["h1.__jsx-style-dynamic-selector{font-size:"+n.font.size.xxl+";margin:"+n.space.stack.l+";-webkit-animation-name:headlineEntry;-webkit-animation-name:headlineEntry-__jsx-style-dynamic-selector;animation-name:headlineEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:"+n.time.duration.long+";-webkit-animation-duration:"+n.time.duration.long+";animation-duration:"+n.time.duration.long+";}","h1.__jsx-style-dynamic-selector span{font-weight:"+n.font.weight.standard+";display:block;font-size:0.5em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;margin:"+n.space.stack.xs+";}","h1.__jsx-style-dynamic-selector svg{height:0.75em;fill:"+n.color.brand.primary+";}","@-webkit-keyframes headlineEntry{from.__jsx-style-dynamic-selector{opacity:0.5;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@media screen and (min-width:600px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.2);}}","@media screen and (min-width:1024px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.4);}}"],dynamic:[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]}))};o.propTypes={title:r.a.string,children:r.a.node,theme:r.a.object.isRequired},a.a=o},302:function(e,a,t){"use strict";var n=t(2),c=t.n(n),s=t(0),i=t.n(s),l=t(1),r=t.n(l),o=function(e){var a=e.children,t=e.theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement("article",{className:c.a.dynamic([["2846578189",[t.space.inset.default,"calc("+t.space.default+") calc("+t.space.default+" * 2)",t.text.maxWidth.tablet,"calc("+t.space.default+" * 2 + 90px) 0 calc("+t.space.default+" * 2)",t.text.maxWidth.desktop]]])+" article"},a),i.a.createElement(c.a,{styleId:"2846578189",css:[".article.__jsx-style-dynamic-selector{padding:"+t.space.inset.default+";margin:0 auto;}","@media screen and (min-width:600px){.article.__jsx-style-dynamic-selector{padding:calc("+t.space.default+") calc("+t.space.default+" * 2);max-width:"+t.text.maxWidth.tablet+";}}","@media screen and (min-width:1024px){.article.__jsx-style-dynamic-selector{padding:calc("+t.space.default+" * 2 + 90px) 0 calc("+t.space.default+" * 2);max-width:"+t.text.maxWidth.desktop+";}}"],dynamic:[t.space.inset.default,"calc("+t.space.default+") calc("+t.space.default+" * 2)",t.text.maxWidth.tablet,"calc("+t.space.default+" * 2 + 90px) 0 calc("+t.space.default+" * 2)",t.text.maxWidth.desktop]}))};o.propTypes={children:r.a.node.isRequired,theme:r.a.object.isRequired};var m=o;t.d(a,"a",function(){return m})},309:function(e,a,t){"use strict";t(67);var n=t(2),c=t.n(n),s=t(0),i=t.n(s),l=t(1),r=t.n(l),o=t(16),m=function(e){var a=e.edges,t=e.theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:c.a.dynamic([["132031231",[t.space.stack.m,t.space.m,t.space.xs,t.font.size.s,t.font.lineHeight.l]]])},a.map(function(e){var a=e.node,n=a.frontmatter.title,s=a.fields.slug;return i.a.createElement("li",{key:s,className:c.a.dynamic([["132031231",[t.space.stack.m,t.space.m,t.space.xs,t.font.size.s,t.font.lineHeight.l]]])},i.a.createElement(o.Link,{to:s},n))})),i.a.createElement(c.a,{styleId:"132031231",css:["ul.__jsx-style-dynamic-selector{margin:"+t.space.stack.m+";padding:"+t.space.m+";list-style:circle;}","li.__jsx-style-dynamic-selector{padding:"+t.space.xs+" 0;font-size:"+t.font.size.s+";line-height:"+t.font.lineHeight.l+";}"],dynamic:[t.space.stack.m,t.space.m,t.space.xs,t.font.size.s,t.font.lineHeight.l]}))};m.propTypes={edges:r.a.array.isRequired,theme:r.a.object.isRequired};var d=m;t.d(a,"a",function(){return d})}}]);
//# sourceMappingURL=component---src-pages-category-js-faf910a7e948a1452c30.js.map