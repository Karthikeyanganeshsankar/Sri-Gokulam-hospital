_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{EhZK:function(e,t,a){"use strict";a.r(t);var r=a("KQm4"),n=a("rePB"),s=a("q1tI"),l=a.n(s),o=a("FGyW"),i=(a("jDDT"),a("gWdR")),u=a("gDGi"),c=a("TsPW"),d=a("L4s6"),m=a("/MKj"),p=a("Tgqd"),f=a("iqOp"),b=a("glTy"),g=a("YGfb"),v=a("bAGh"),y=a("TKOK"),h=a("5Ves"),N=a("nOHt"),x=a("YFqc"),w=a.n(x),S=a("ma3e"),O=l.a.createElement;function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(){var e=Object(N.useRouter)(),t=Object(s.useState)(""),a=t[0],n=t[1],x=Object(s.useState)(""),j=x[0],C=x[1],A=Object(s.useState)(!1),_=A[0],D=A[1],E=Object(s.useState)(!1),P=E[0],q=E[1],T=Object(s.useState)(!1),z=T[0],Y=T[1],K=Object(s.useState)(""),I=K[0],Z=K[1],F=Object(s.useState)(""),G=F[0],W=F[1],R=Object(s.useState)(""),V=R[0],H=R[1],J=Object(s.useState)(0),M=J[0],Q=J[1],X=Object(s.useState)(0),B=X[0],L=X[1],U=Object(s.useState)({search:"",filter:"all",page:{history:"",current:1},order:"",field:"",limit:10,skip:0,status:""}),$=U[0],ee=U[1],te=Object(s.useState)([]),ae=te[0],re=te[1],ne=Object(s.useState)({}),se=ne[0],le=ne[1],oe=Object(s.useState)(0),ie=oe[0],ue=oe[1],ce=Object(s.useState)(0),de=ce[0],me=ce[1],pe=Object(s.useState)(0),fe=pe[0],be=pe[1],ge=Object(s.useState)(!1),ve=ge[0],ye=ge[1],he=k({},Object(m.e)((function(e){return{palettes:e.palettes}}),m.c).palettes).background,Ne=function(t){Object(c.a)("/admin/category/list","post",t).then((function(t){if(t&&t.data&&"00"===String(t.data.status))return e.push("/admin/login");t&&t.data&&0===+t.data.status?t.data.errors&&t.data.errors.length>0&&Array.isArray(t.data.errors)?t.data.errors.map((function(e){return o.b.error(e.msg)})):re([]):t&&t.data&&1===+t.data.status&&(re(t.data.response&&t.data.response.result&&t.data.response.result.length>0?t.data.response.result:[]),ue(t.data.response&&t.data.response.length?t.data.response.length:0),Q(t.data.response&&t.data.response.active?t.data.response.active:0),L(t.data.response&&t.data.response.inactive?t.data.response.inactive:0),be(Math.ceil(Number(t.data.response.fullcount)/10)))})).catch((function(t){return console.log("err",t),e.push("/admin/login")}))},xe=function(e,t){String(t)===String("name")&&(e.target.value?D(!1):D(!0),n(e.target.value)),String(t)===String("status")&&(e.target.value?q(!1):q(!0),C(e.target.value))},we=function(t,a,r){(t.preventDefault(),a&&a.length>0&&String(a)!==String(void 0))&&(Z(a),Object(c.a)("/admin/category/edit","post",{_id:a}).then((function(t){if(t&&t.data&&"00"===String(t.data.status))return e.push("/admin/login");t&&t.data&&0===+t.data.status?t.data.errors&&t.data.errors.length>0&&Array.isArray(t.data.errors)?t.data.errors.map((function(e){return o.b.error(e.msg)})):le({}):t&&t.data&&1===+t.data.status&&(le(t.data.response),String(r)===String("view")?ye(!0):(window.scrollTo(0,0),n(t.data.response&&t.data.response.name?String(t.data.response.name):""),C(t.data.response&&t.data.response.status?t.data.response.status:"")))})).catch((function(t){return console.log("err",t),e.push("/admin/login")})))},Se=function(e,t){e.preventDefault(),String(t)===String(!1)&&W(""),ye(t)},Oe=function(e,t){ee(k(k({},$),{},{status:t}))},je=function(e,t,a){e.preventDefault(),ee(k(k({},$),{},{order:Number(a),field:t}))};return Object(s.useEffect)((function(){Ne($)}),[$]),O(l.a.Fragment,null,O(o.a,{position:"top-right",autoClose:2500,closeOnClick:!0}),O("div",{className:"flex flex-row mb-4"},O("div",{className:"w-full"},O("nav",{className:"w-full flex"},O("ol",{className:"list-none flex flex-row items-center justify-start"},!1,[{title:"Home",url:"/admin/dashboard",last:!1},{title:"Category",url:"/admin/category",last:!0}].map((function(e,t){return O("li",{className:"flex items-center",key:t},O(w.a,{href:e.url},O("a",{className:"mr-2"},e.title)),!e.last&&O(p.d,{className:"h-3 w-3 mr-2 stroke-current"}),!e.last&&!1,!e.last&&!1)})))))),O(d.a,{title:"",subtitle:!ve&&I&&I.length>0&&String(I)!==String(void 0)?"Edit category":"Add category"}),O(i.a,{title:""},O("form",null,O("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full lg:w-1/2"},O("div",{className:"w-full mt-3 mb-6"},O("div",{className:"form-element"},O("div",{className:"form-label"},"Name ",O("span",{className:"form-error"},"*")),O("input",{name:"name",type:"text",className:"form-input form-input-".concat(_?"invalid":"valid"),placeholder:"Enter category name",value:a,onChange:function(e){return xe(e,"name")}}),_?O("div",{className:"form-error"},"Category name is required"):null)),O("div",{className:"w-full mt-3 mb-6"},O("div",{className:"form-element"},O("div",{className:"form-label"},"Status ",O("span",{className:"form-error"},"*")," "),O("select",{name:"status",value:j,onChange:function(e){return xe(e,"status")},className:"form-input form-input-".concat(P?"invalid":"valid")},O("option",{value:""},"Select Status"),O("option",{value:"1"},"Active"),O("option",{value:"2"},"In-Active")),P?O("div",{className:"form-error"},"Status is required"):null))),O("button",{className:"btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded",onClick:function(t){return function(t){if(t.preventDefault(),!a)return D(!0),o.b.error("Category name is required");if(!j)return q(!0),o.b.error("Status is required");if(_)return o.b.error("Category name is required");if(P)return o.b.error("Status is required");Y(!0);var r={name:a,status:j,_id:I&&I.length>0&&String(I)!==String(void 0)?I:""};Object(c.a)("/admin/category/add","post",r).then((function(t){if(Y(!1),t&&t.data&&"00"===String(t.data.status))return e.push("/admin/login");t&&t.data&&0===+t.data.status?t.data.errors&&t.data.errors.length>0&&Array.isArray(t.data.errors)?t.data.errors.map((function(e){return o.b.error(e.msg)})):o.b.error(t.data.response):t&&t.data&&1===+t.data.status&&(o.b.success(t.data.response),Ne($),setTimeout((function(){n(""),C(""),D(!1),q(!1),Z("")}),1e3))})).catch((function(t){return console.log("err",t),e.push("/admin/login")}))}(t)},disabled:z},!ve&&I&&I.length>0&&String(I)!==String(void 0)?"Update":"Submit"," ")," ",O("button",{className:"btn btn-default bg-red-500 hover:bg-red-600 text-white btn-rounded",onClick:function(e){return function(e){e.preventDefault(),n(""),C(""),D(!1),q(!1),Z("")}(e)}},"Reset "))),O(i.a,{title:""},O("div",{className:"flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4"},O("div",{className:"w-full lg:w-1/4"}),O("div",{className:"w-full lg:w-1/4",style:{cursor:"pointer"},onClick:function(e){return Oe(0,1)}},O(u.a,{title:"Active",description:M,right:O(p.Z,{size:24,className:"stroke-current text-grey-500"})})),O("div",{className:"w-full lg:w-1/4",style:{cursor:"pointer"},onClick:function(e){return Oe(0,2)}},O(u.a,{title:"In-Active",description:B,right:O(p.Y,{size:24,className:"stroke-current text-grey-500"})})),O("div",{className:"w-full lg:w-1/4"})),O("div",{className:"w-full flex flex-row items-center justify-center"},O("div",{className:"relative w-full max-w-lg mb-2"},O("input",{type:"search",name:"search",value:V,onChange:function(e){return t=e.target.value,H(t),void ee(k(k({},$),{},{search:t}));var t},placeholder:"Search...",className:"w-full appearance-none h-10 pl-10 pr-5 rounded-full text-sm bg-grey-100 focus:outline-none"}),O("button",{type:"submit",className:"absolute top-0 mt-3 left-0 ml-4"},O(p.Q,{className:"stroke-current h-4 w-4"})))),O("table",{className:"table border"},O("thead",null,O("tr",null,O("th",null,"S.no"),O("th",null,O("span",{style:{display:"inline-flex"}},"Created On","createdAt"===$.field&&1===+$.order?O(S.j,{style:{margin:"0 5px",cursor:"pointer"},onClick:function(e){return je(e,"createdAt",-1)}}):O(S.i,{style:{margin:"0 5px",cursor:"pointer"},onClick:function(e){return je(e,"createdAt",1)}})),"   "),O("th",null,O("span",{style:{display:"inline-flex"}},"Name","name"===$.field&&1===+$.order?O(S.j,{style:{margin:"0 5px",cursor:"pointer"},onClick:function(e){return je(e,"name",-1)}}):O(S.i,{style:{margin:"0 5px",cursor:"pointer"},onClick:function(e){return je(e,"name",1)}}))),O("th",null,"Status"),O("th",null,"Actions"))),O("tbody",null,ae&&ae.length>0?ae.map((function(t,a){return O("tr",{key:a},O("td",null,Number($&&$.skip?$.skip:0)+a+1),O("td",null,t.createdAt),O("td",null,t.name),O("td",null,1===+t.status?"Active":"In-Active"),O("td",null,O("button",{type:"button",title:"View",id:"view".concat(a),onClick:function(e){return we(e,t._id,"view")}},O(p.v,{className:"stroke-current"}))," "," ",O("button",{type:"button",title:"Edit",id:"edit".concat(a),onClick:function(e){return we(e,t._id,"edit")}},O(p.t,{className:"stroke-current"}))," "," ",O("button",{type:"button",title:"Delete",id:"delete".concat(a),onClick:function(e){return function(e,t){e.preventDefault(),t&&t.length>0&&String(t)!==String(void 0)&&W(t)}(e,t._id)}},O(p.ab,{className:"stroke-current"}))," "," ",O(f.a,{isOpen:String(t._id)===String(G),placement:"left",target:"delete".concat(a)},O(b.a,null,"Confirmation"),O(g.a,null,O("h6",null,"Are You Sure, You Want To Delete ?"),O("button",{type:"button",title:"Yes",className:"btn btn-default btn-outlined bg-transparent text-red-500 hover:text-red-700 border-red-500 hover:border-red-700 btn-rounded",color:"success",onClick:function(t){!function(t){t.preventDefault(),G&&G.length>0&&String(G)!==String(void 0)&&Object(c.a)("/admin/category/soft_delete","post",{_id:G}).then((function(e){if(e&&e.data&&0===+e.data.status){if(!(e.data.errors&&e.data.errors.length>0&&Array.isArray(e.data.errors)))return o.b.error(e.data.response);e.data.errors.map((function(e){return o.b.error(e.msg)}))}else e&&e.data&&1===+e.data.status&&(o.b.success(e.data.response),Ne($),W(""))})).catch((function(t){return console.log("err",t),e.push("/admin/login")}))}(t)}},"Yes ")," "," ",O("button",{type:"button",title:"No",className:"btn btn-default btn-outlined bg-transparent text-blue-500 hover:text-blue-700 border-blue-500 hover:border-blue-700 btn-rounded",color:"secondary",onClick:function(e){e.preventDefault(),W("")}},"No ")))))})):O("tr",null,O("td",{style:{textAlign:"center"},colSpan:11},O("h5",null,"No record available"))))),O("div",{className:"flex flex-row items-center justify-between my-4"},O("div",{style:{wordSpacing:"30px"}},O(v.a,{"aria-label":"Page navigation example",className:"pagination-primary",style:{justifyContent:"flex-end",display:"flex"}},O(y.a,{disabled:!0,style:{padding:"15px 20px",border:"1px solid #ddd",fontSize:"14px",color:"#0006b5"}},O(h.a,{first:!0})),O(y.a,{disabled:!0,style:{padding:"15px 20px",border:"1px solid #ddd",fontSize:"14px",color:"#0006b5"}},O(h.a,{previous:!0})),Object(r.a)(Array(fe)).map((function(e,t){return O(y.a,{active:t===de,key:t,style:{padding:"15px 20px",border:"1px solid #ddd",fontSize:"14px",color:"#0006b5"}},O(h.a,{onClick:function(e){return function(e,t){e.preventDefault(),me(t);var a=$.limit;(t=Number(t)+1)&&ee(k(k({},$),{},{skip:t*a-a,"page.current":t,"page.history":t}))}(e,t)},style:t===de?{color:"#4caf50"}:{color:"#0006b5"}},t+1))})),O(y.a,{disabled:!0,style:{padding:"15px 20px",border:"1px solid #ddd",fontSize:"14px",color:"#0006b5"}},O(h.a,{next:!0})),O(y.a,{disabled:!0,style:{padding:"15px 20px",border:"1px solid #ddd",fontSize:"14px",color:"#0006b5"}},O(h.a,{last:!0})))),O("span",null,"Page"," ",O("b",null,$&&$.skip?$.skip+1:1," of ",ie)," "),O("select",{className:"form-select text-sm bg-white dark:bg-grey-800 dark:border-grey-800 outline-none shadow-none focus:shadow-none",value:$.limit,onChange:function(e){var t;t=Number(e.target.value),ee(k(k({},$),{},{limit:t}))}},[10,25,50,100].map((function(e){return O("option",{key:e,value:e}," Show ",e," ")})))),ve?O(l.a.Fragment,null,O("div",{className:"modal-backdrop fade-in"}),O("div",{className:"modal show ".concat("dark"===he?"dark-mode":""),"data-background":he},O("div",{className:"relative min-w-sm w-auto mx-auto lg:max-w-5xl"},O("div",{className:"modal-content"},O("div",{className:"modal-header"},O("h3",{className:"text-xl font-semibold"},"View category"),O("button",{className:"modal-close btn btn-transparent",onClick:function(e){return Se(e,!1)}},O(p.fb,{size:18,className:"stroke-current"}))),O("div",{className:"relative p-4 flex-auto",style:{width:"600px"}},O("div",{className:"form-element"},O("div",{className:"form-label"},"Category :",O("input",{className:"form-control",style:{float:"right"},disabled:!0,value:se&&se.name?se.name:""})),O("div",{className:"form-label"},"Status :",O("input",{className:"form-control",disabled:!0,style:{float:"right"},value:se&&1===+se.status?"Active":"In-active"})))),O("div",{className:"modal-footer space-x-2"},O("button",{className:"btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white",type:"button",onClick:function(e){return Se(e,!1)}},"Close ")))))):null))}},"lZC+":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/category",function(){return a("EhZK")}])}},[["lZC+",0,1,7,2,3,4,5,10,12]]]);