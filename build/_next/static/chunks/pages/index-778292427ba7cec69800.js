_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[77],{Cb5i:function(t,e,a){"use strict";a.r(e);var s=a("q1tI"),n=a.n(s),r=a("gDGi"),o=(a("pjH/"),a("PgFX"),a("ePOU"),a("9/kw"),a("zyz6"),a("plI0"),a("eSU4"),a("f94/"),a("exHv"),a("3jrH"),a("qJJl"),a("TsPW")),l=a("FGyW"),i=(a("jDDT"),a("nOHt")),c=a("YFqc"),u=a.n(c),d=a("Tgqd"),p=a("ma3e"),m=n.a.createElement;e.default=function(){var t=Object(i.useRouter)(),e=Object(s.useState)(0),a=e[0],c=e[1],f=Object(s.useState)(0),g=f[0],_=f[1],b=Object(s.useState)(0),h=b[0],w=b[1],j=Object(s.useState)([]),v=(j[0],j[1]),N=Object(s.useState)([]),O=(N[0],N[1]),y=Object(s.useState)([]),x=(y[0],y[1]),k=Object(s.useState)([]),D=(k[0],k[1]);return Object(s.useEffect)((function(){Object(o.a)("/admin/get/dashboard","post",{}).then((function(e){if(e&&e.data&&"00"===String(e.data.status))return t.push("/admin/login");e&&e.data&&0===+e.data.status?e.data.errors&&e.data.errors.length>0&&Array.isArray(e.data.errors)?e.data.errors.map((function(t){return l.b.error(t.msg)})):l.b.error(e.data.response):e&&e.data&&1===+e.data.status&&(c(e.data.response&&e.data.response.total_applied_jobs?e.data.response.total_applied_jobs:0),_(e.data.response&&e.data.response.total_appointments?e.data.response.total_appointments:0),w(e.data.response&&e.data.response.total_contact_us?e.data.response.total_contact_us:0),v(e.data.response&&e.data.response.recent_applied_jobs?e.data.response.recent_applied_jobs:[]),O(e.data.response&&e.data.response.recent_appointments?e.data.response.recent_appointments:[]),x(e.data.response&&e.data.response.today_appointments?e.data.response.today_appointments:[]),D(e.data.response&&e.data.response.recent_contact_us?e.data.response.recent_contact_us:[]))})).catch((function(e){return console.log("err",e),t.push("/admin/login")}))}),[]),m(n.a.Fragment,null,m(l.a,{position:"top-right",autoClose:2500,closeOnClick:!0}),m("div",{className:"flex flex-row mb-4"},m("div",{className:"w-full"},m("nav",{className:"w-full flex"},m("ol",{className:"list-none flex flex-row items-center justify-start"},!1,[{title:"Home",url:"/admin/dashboard",last:!1},{title:"Dashboard",url:"/admin/dashboard",last:!0}].map((function(t,e){return m("li",{className:"flex items-center",key:e},m(u.a,{href:t.url},m("a",{className:"mr-2"},t.title)),!t.last&&m(d.d,{className:"h-3 w-3 mr-2 stroke-current"}),!t.last&&!1,!t.last&&!1)})))))),m("div",{className:"flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4"},m("div",{className:"w-full lg:w-1/4",style:{cursor:"pointer"},onClick:function(e){e.preventDefault(),t.push("/admin/manage-resume")}},m(r.a,{title:"Total Jobs",description:a,right:m(p.e,{size:24,className:"stroke-current text-grey-500"})})),m("div",{className:"w-full lg:w-1/4",style:{cursor:"pointer"},onClick:function(e){e.preventDefault(),t.push("/admin/appointment")}},m(r.a,{title:"Total Appointments",description:g,right:m(p.g,{size:24,className:"stroke-current text-grey-500"})})),m("div",{className:"w-full lg:w-1/4",style:{cursor:"pointer"},onClick:function(e){e.preventDefault(),t.push("/admin/contactus")}},m(r.a,{title:"Total Messgaes",description:h,right:m(p.f,{size:24,className:"stroke-current text-grey-500"})}))))}},RXBc:function(t,e,a){"use strict";a.r(e);var s=a("q1tI"),n=a.n(s),r=(a("gDGi"),a("pjH/"),a("PgFX"),a("ePOU"),a("9/kw"),a("zyz6"),a("plI0"),a("eSU4"),a("f94/"),a("exHv"),a("3jrH"),a("qJJl")),o=a("nOHt"),l=a("TsPW"),i=a("Cb5i"),c=n.a.createElement;e.default=function(t){var e=Object(o.useRouter)();return Object(s.useEffect)((function(){Object(l.a)("/admin/get/dashboard","post",{}).then((function(t){return t&&t.data&&"00"===String(t.data.status)||t&&t.data&&0===+t.data.status?e.push("/admin/login"):t&&t.data&&1===+t.data.status?e.push("/admin/dashboard"):void 0})).catch((function(t){return console.log("err",t),e.push("/admin/login")}))}),[]),c(n.a.Fragment,null,c(r.a,null),c(i.default,null))}},jDDT:function(t,e,a){},vlRD:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RXBc")}])}},[["vlRD",0,1,7,9,2,3,4,8,10,11,13,14,15,16,20]]]);