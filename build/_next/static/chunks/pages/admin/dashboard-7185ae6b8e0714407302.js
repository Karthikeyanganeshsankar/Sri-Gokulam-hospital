_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{Cb5i:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),n=a.n(s),r=a("gDGi"),o=(a("pjH/"),a("PgFX"),a("ePOU"),a("9/kw"),a("zyz6"),a("plI0"),a("eSU4"),a("f94/"),a("exHv"),a("3jrH"),a("qJJl"),a("TsPW")),l=a("FGyW"),i=(a("jDDT"),a("nOHt")),c=a("YFqc"),p=a.n(c),d=a("Tgqd"),u=a("ma3e"),m=n.a.createElement;t.default=function(){var e=Object(i.useRouter)(),t=Object(s.useState)(0),a=t[0],c=t[1],f=Object(s.useState)(0),_=f[0],g=f[1],b=Object(s.useState)(0),w=b[0],h=b[1],j=Object(s.useState)([]),N=(j[0],j[1]),y=Object(s.useState)([]),x=(y[0],y[1]),v=Object(s.useState)([]),O=(v[0],v[1]),k=Object(s.useState)([]),D=(k[0],k[1]);return Object(s.useEffect)((function(){Object(o.a)("/admin/get/dashboard","post",{}).then((function(t){if(t&&t.data&&"00"===String(t.data.status))return e.push("/admin/login");t&&t.data&&0===+t.data.status?t.data.errors&&t.data.errors.length>0&&Array.isArray(t.data.errors)?t.data.errors.map((function(e){return l.b.error(e.msg)})):l.b.error(t.data.response):t&&t.data&&1===+t.data.status&&(c(t.data.response&&t.data.response.total_applied_jobs?t.data.response.total_applied_jobs:0),g(t.data.response&&t.data.response.total_appointments?t.data.response.total_appointments:0),h(t.data.response&&t.data.response.total_contact_us?t.data.response.total_contact_us:0),N(t.data.response&&t.data.response.recent_applied_jobs?t.data.response.recent_applied_jobs:[]),x(t.data.response&&t.data.response.recent_appointments?t.data.response.recent_appointments:[]),O(t.data.response&&t.data.response.today_appointments?t.data.response.today_appointments:[]),D(t.data.response&&t.data.response.recent_contact_us?t.data.response.recent_contact_us:[]))})).catch((function(t){return console.log("err",t),e.push("/admin/login")}))}),[]),m(n.a.Fragment,null,m(l.a,{position:"top-right",autoClose:2500,closeOnClick:!0}),m("div",{className:"flex flex-row mb-4"},m("div",{className:"w-full"},m("nav",{className:"w-full flex"},m("ol",{className:"list-none flex flex-row items-center justify-start"},!1,[{title:"Home",url:"/admin/dashboard",last:!1},{title:"Dashboard",url:"/admin/dashboard",last:!0}].map((function(e,t){return m("li",{className:"flex items-center",key:t},m(p.a,{href:e.url},m("a",{className:"mr-2"},e.title)),!e.last&&m(d.d,{className:"h-3 w-3 mr-2 stroke-current"}),!e.last&&!1,!e.last&&!1)})))))),m("div",{className:"flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4"},m("div",{className:"w-full lg:w-1/4",style:{cursor:"pointer"},onClick:function(t){t.preventDefault(),e.push("/admin/manage-resume")}},m(r.a,{title:"Total Jobs",description:a,right:m(u.e,{size:24,className:"stroke-current text-grey-500"})})),m("div",{className:"w-full lg:w-1/4",style:{cursor:"pointer"},onClick:function(t){t.preventDefault(),e.push("/admin/appointment")}},m(r.a,{title:"Total Appointments",description:_,right:m(u.g,{size:24,className:"stroke-current text-grey-500"})})),m("div",{className:"w-full lg:w-1/4",style:{cursor:"pointer"},onClick:function(t){t.preventDefault(),e.push("/admin/contactus")}},m(r.a,{title:"Total Messgaes",description:w,right:m(u.f,{size:24,className:"stroke-current text-grey-500"})}))))}},ejgV:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard",function(){return a("Cb5i")}])},jDDT:function(e,t,a){}},[["ejgV",0,1,7,9,2,3,4,8,10,11,13,14,15,16,20]]]);