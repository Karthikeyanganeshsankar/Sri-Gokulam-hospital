_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[107],{"6Rqd":function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return r}));var a=n("q1tI"),l=n.n(a).a.createElement,i=function(e){var t=e.tabs,n=Object(a.useState)(0),i=n[0],s=n[1];return l("div",{className:"flex flex-row items-start justify-start tabs"},l("div",{className:"flex-shrink-0"},l("div",{className:"flex flex-wrap flex-col space-y-2"},t.map((function(e,t){return l("button",{key:t,onClick:function(){s(e.index)},className:"tab tab-pill ".concat(i===e.index?"tab-active":""),type:"button"},e.title)})))),l("div",{className:"ml-0"},t.map((function(e,t){return l("div",{className:"tab-content ".concat(i!==e.index?"hidden":"block")},e.content)}))))},s=function(e){var t=e.tabs,n=Object(a.useState)(0),i=n[0],s=n[1];return l("div",{className:"flex flex-wrap flex-col w-full tabs"},l("div",{className:"flex lg:flex-wrap flex-row lg:space-x-2"},t.map((function(e,t){return l("div",{key:t,className:"flex-none"},l("button",{onClick:function(){s(e.index)},className:"tab tab-pill ".concat(i===e.index?"tab-active":""),type:"button"},e.title))}))),t.map((function(e,t){return l("div",{className:"tab-content ".concat(i!==e.index?"hidden":"block")},e.content)})))},c=function(e){var t=e.tabs,n=Object(a.useState)(0),i=n[0],s=n[1];return l("div",{className:"flex flex-wrap flex-col w-full tabs"},l("div",{className:"flex lg:flex-wrap flex-row lg:space-x-2"},t.map((function(e,t){return l("div",{key:t,className:"flex-none"},l("button",{onClick:function(){s(e.index)},className:"tab rounded-lg flex flex-row items-center justify-around ".concat(i===e.index?"tab-active":""),type:"button"},e.title))}))),t.map((function(e,t){return l("div",{className:"tab-content ".concat(i!==e.index?"hidden":"block")},e.content)})))},u=function(e){var t=e.tabs,n=Object(a.useState)(0),i=n[0],s=n[1];return l("div",{className:"flex flex-wrap flex-col w-full tabs"},l("div",{className:"flex lg:flex-wrap flex-row lg:space-x-2"},t.map((function(e,t){return l("div",{key:t,className:"flex-none"},l("button",{onClick:function(){s(e.index)},className:i===e.index?"tab tab-underline tab-active":"tab tab-underline",type:"button"},e.title))}))),t.map((function(e,t){return l("div",{key:t,className:"tab-content ".concat(i!==e.index?"hidden":"block")},e.content)})))},r=function(e){var t=e.tabs,n=Object(a.useState)(0),i=n[0],s=n[1];return l("div",{className:"flex flex-wrap flex-col w-full tabs"},l("div",{className:"flex lg:flex-wrap flex-row lg:space-x-2"},t.map((function(e,t){return l("div",{key:t,className:"flex-none"},l("button",{onClick:function(){s(e.index)},className:"tab ".concat(i===e.index?"tab-active":""),type:"button"},e.title))}))),t.map((function(e,t){return l("div",{className:"tab-content ".concat(i!==e.index?"hidden":"block")},e.content)})))}},EUNP:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),i=n("L4s6"),s=n("6Rqd"),c=n("gWdR"),u=n("Tgqd"),r=l.a.createElement,o=function(){return r("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Condimentum vitae sapien pellentesque habitant morbi. Nec ullamcorper sit amet risus nullam eget felis. Dignissim sodales ut eu sem integer vitae justo eget. In pellentesque massa placerat duis ultricies.")},d=function(){return r("div",null,"Id cursus metus aliquam eleifend mi in. Etiam sit amet nisl purus in. At quis risus sed vulputate odio ut enim blandit. Aliquet enim tortor at auctor urna nunc id cursus metus. Massa enim nec dui nunc. Penatibus et magnis dis parturient montes. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Enim ut tellus elementum sagittis vitae. Quisque sagittis purus sit amet. Augue lacus viverra vitae congue eu.")},m=function(){return r("div",null,"Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Sed nisi lacus sed viverra. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Adipiscing elit pellentesque habitant morbi tristique senectus. Laoreet suspendisse interdum consectetur libero id. Tincidunt nunc pulvinar sapien et ligula.")},f=[{index:0,content:r(o,null),title:r(l.a.Fragment,null,r(u.A,{size:18,className:"stroke-current"}),r("span",{className:"mt-3"},"Favourites"))},{index:1,title:r(l.a.Fragment,null,r(u.J,{size:18,className:"stroke-current"}),r("span",{className:"mt-3"},"Options")),content:r(d,null)},{index:2,title:r(l.a.Fragment,null,r(u.S,{size:18,className:"stroke-current"}),r("span",{className:"mt-3"},"Settings")),content:r(m,null)}],b=[{index:0,content:r(o,null),title:r(l.a.Fragment,null,r(u.A,{size:18,className:"stroke-current"}),r("span",{className:"ml-2"},"Favourites"))},{index:1,title:r(l.a.Fragment,null,r(u.J,{size:18,className:"stroke-current"}),r("span",{className:"ml-2"},"Options")),content:r(d,null)},{index:2,title:r(l.a.Fragment,null,r(u.S,{size:18,className:"stroke-current"}),r("span",{className:"ml-2"},"Settings")),content:r(m,null)}],p=[{index:0,title:"Profile",active:!0,content:r(o,null)},{index:1,title:"Settings",active:!1,content:r(d,null)},{index:2,title:"Options",active:!1,content:r(m,null)}];t.default=function(){return r(l.a.Fragment,null,r(i.a,{title:"UI Elements",subtitle:"Tabs"}),r(c.a,{title:"Vertical tabs",description:r("span",null,"Use the ",r("code",null,"<VerticalTabs />")," component for vertical tabs")},r("div",{className:"flex flex-wrap"},r("div",{className:"w-full"},r(s.e,{tabs:f})))),r(c.a,{title:"Pills",description:r("span",null,"Use the ",r("code",null,"<Pills />")," component for tabs with icons aligned vertically")},r("div",{className:"flex flex-wrap"},r("div",{className:"w-full"},r(s.c,{tabs:f})))),r(c.a,{title:"Tabs with icons",description:r("span",null,"Use the ",r("code",null,"<IconTabs />")," component for tabs with icons")},r("div",{className:"flex flex-wrap"},r("div",{className:"w-full"},r(s.b,{tabs:b})))),r(c.a,{title:"Underlined tabs",description:r("span",null,"Use the ",r("code",null,"<UnderlinedTabs />")," component for underlined tabs")},r("div",{className:"flex flex-wrap"},r("div",{className:"w-full"},r(s.d,{tabs:p})))),r(c.a,{title:"Default tabs",description:r("span",null,"Use the ",r("code",null,"<DefaultTabs />")," component for underlined tabs")},r("div",{className:"flex flex-wrap"},r("div",{className:"w-full"},r(s.a,{tabs:p})))))}},L4s6:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a).a.createElement;t.a=function(e){var t=e.title,n=e.subtitle,a=e.right,i=void 0===a?null:a;return l("div",{className:"section-title w-full mb-6 pt-3"},l("div",{className:"flex flex-row items-center justify-between mb-4"},l("div",{className:"flex flex-col"},l("div",{className:"text-xs uppercase font-light text-grey-500"},t),l("div",{className:"text-xl font-bold"},n)),i))}},gWdR:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a).a.createElement;t.a=function(e){var t=e.title,n=void 0===t?null:t,a=e.description,i=void 0===a?null:a,s=e.right,c=void 0===s?null:s,u=e.children;return l("div",{className:"widget w-full p-4 mb-4 rounded-lg bg-white border border-grey-100 dark:bg-grey-895 dark:border-grey-890"},(n||i||c)&&l("div",{className:"flex flex-row items-center justify-between mb-6"},l("div",{className:"flex flex-col"},l("div",{className:"text-sm font-light text-grey-500"},n),l("div",{className:"text-sm font-bold"},i)),c),u)}},nTFx:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tabs",function(){return n("EUNP")}])}},[["nTFx",0,1,2]]]);