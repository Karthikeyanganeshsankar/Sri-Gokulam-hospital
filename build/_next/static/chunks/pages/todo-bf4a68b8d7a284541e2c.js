_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[110],{"1+ny":function(e){e.exports=JSON.parse('[{"id":1,"title":"Doloremque sed iste unde et.","done":false},{"id":2,"title":"Molestiae consequuntur sit impedit iusto.","done":false},{"id":3,"title":"Odit voluptas amet aliquid harum.","done":false},{"id":4,"title":"Unde quae quia eos qui.","done":false},{"id":5,"title":"Provident molestiae et et voluptas.","done":false},{"id":6,"title":"Quam amet nesciunt ullam dolor.","done":false},{"id":7,"title":"Tempore quia veniam rem nihil.","done":false},{"id":8,"title":"Autem molestiae consequuntur expedita ea.","done":false},{"id":9,"title":"Est voluptatem quos doloremque aut.","done":false},{"id":10,"title":"Ea similique sit ab unde.","done":false},{"id":11,"title":"Asperiores saepe est alias et.","done":false},{"id":12,"title":"Quia voluptate quia et est.","done":false},{"id":13,"title":"Saepe in beatae necessitatibus non.","done":false},{"id":14,"title":"Quibusdam eligendi in dignissimos at.","done":false},{"id":15,"title":"Natus animi nam ea facere.","done":false}]')},"11qr":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("gWdR"),o=n("KQm4"),l=n("Tgqd"),u=n("1+ny"),s=i.a.createElement,c=0,d=function(){var e=Object(a.useReducer)((function(e,t){switch(t.type){case"active":return e.filter((function(e){return!e.done}));case"clear":return[];case"add":return[].concat(Object(o.a)(e),[{title:t.title,done:!1,id:c++}]);case"remove":return e.filter((function(e){return e.id!==t.id}));case"toggle":return e.map((function(e){return e.id===t.id&&(e.done=!t.value),e}));default:throw new Error}}),u),t=e[0],n=e[1],r=Object(a.useState)(""),d=r[0],f=r[1];return s("div",{className:"flex flex-col w-full"},s("form",{onSubmit:function(e){e.preventDefault(),n({type:"add",title:d}),f("")}},s("div",{className:"form-element"},s("input",{value:d,onChange:function(e){return f(e.target.value)},name:"todo",type:"text",className:"form-input",placeholder:"Enter something..."}))),s(i.a.Fragment,null,t.map((function(e,t){return s("div",{className:"flex flex-row items-center justify-start",key:t},s("label",{className:"flex items-center justify-start space-x-2"},s("input",{name:t,type:"checkbox",checked:e.done,onChange:function(t){return n({type:"toggle",id:e.id,value:e.done})},className:"form-checkbox text-blue-500 h-4 w-4"}),s("span",{className:"".concat(e.done?"line-through":"")},e.title)),s("button",{className:"btn btn-default ml-auto",onClick:function(){return n({type:"remove",id:e.id})}},s(l.fb,{size:16,className:"stroke-current text-grey-500"})))}))),s("div",{className:"flex flex-row items-center justify-start"},s("div",{className:"text-sm font-bold"},t.filter((function(e){return!e.done})).length," items left"),t.length>0&&s("div",{className:"flex flex-row items-center justify-end ml-auto space-x-2"},t.filter((function(e){return e.done})).length>0&&s("button",{className:"btn btn-default bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600",onClick:function(){return n({type:"active"})}},"Remove completed"),s("button",{className:"btn btn-default bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600",onClick:function(){return n({type:"clear"})}},"Clear"))))},f=i.a.createElement;t.default=function(){return f(i.a.Fragment,null,f(r.a,{title:"To do",description:f("span",null,"Use the ",f("code",null,"<Todo>")," component for a sample todo list component.")},f(d,null)))}},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("a3WO");function i(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},KQm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("a3WO");var i=n("BsWD");function r(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},a3WO:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},gWdR:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a).a.createElement;t.a=function(e){var t=e.title,n=void 0===t?null:t,a=e.description,r=void 0===a?null:a,o=e.right,l=void 0===o?null:o,u=e.children;return i("div",{className:"widget w-full p-4 mb-4 rounded-lg bg-white border border-grey-100 dark:bg-grey-895 dark:border-grey-890"},(n||r||l)&&i("div",{className:"flex flex-row items-center justify-between mb-6"},i("div",{className:"flex flex-col"},i("div",{className:"text-sm font-light text-grey-500"},n),i("div",{className:"text-sm font-bold"},r)),l),u)}},q3Wk:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todo",function(){return n("11qr")}])}},[["q3Wk",0,1,2]]]);