_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[114],{HuMp:function(e,a,l){"use strict";l.r(a);var r=l("q1tI"),t=l.n(r),s=l("L4s6"),n=l("gWdR"),i=l("JGYP"),o=t.a.createElement;a.default=function(){var e=Object(r.useState)(null),a=e[0],l=e[1],u=Object(r.useState)(null),d=u[0],c=u[1],m=[{label:"Username",error:{required:"Please enter a valid username"},name:"username",type:"text",placeholder:"Enter you username"},{label:"Email",error:{required:"Please enter a valid email"},name:"email",type:"email",placeholder:"Enter you email"},{label:"Password",error:{required:"Password is required",minLength:{value:4,message:"Your password should have at least 4 characters"},maxLength:{value:8,message:"Your password should have no more than 8 characters"}},name:"password",type:"password",placeholder:"Enter your password"},{label:"Message",error:{required:"Please enter a message"},name:"message",type:"textarea",placeholder:"Enter something..."},{label:"Age",error:{required:"Age is required",min:{value:13,message:"You must be 13 or older to create an account"},max:{value:65,message:"You must be 65 or younger to create an account"}},name:"age",type:"number",placeholder:""},{label:"Pattern",error:{required:"Phone number is required",pattern:{value:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,message:"Please enter a valid phone number"}},name:"phone",type:"text",placeholder:"###-###-####"},{label:"Planet",error:{required:"Planet is required",validate:function(e){return"earth"===e||"Only users from earth can create an account"}},name:"planet",type:"text",placeholder:"Type earth"},{label:"Country",error:{required:"Country is required",validate:function(e){return["usa","canada","australia"].includes(e)||"Country is required"}},name:"country",type:"select",options:[{value:null,label:"Select country"},{value:"usa",label:"USA"},{value:"canada",label:"Canada"},{value:"australia",label:"Australia"}]},{label:"Terms of service",error:{required:"Please agree to our terms of service"},name:"terms",type:"checkbox",options:[{value:!0,label:"I agree to the terms of service"}]},{label:"Gender",error:{required:"Gender is required"},name:"gender",type:"radio",options:[{value:"male",label:"Male"},{value:"female",label:"Female"}]}];return o(t.a.Fragment,null,o(s.a,{title:"Forms",subtitle:"Validation"}),o(n.a,{title:"Validation",description:o("span",null,"Default error messages")},o("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4"},o("div",{className:"w-full lg:w-1/2 lg:p-2"},o(i.a,{items:m,onSubmit:l,alerts:!1})),o("div",{className:"w-full lg:w-1/2 lg:p-2"},a&&o("pre",null,JSON.stringify(a,null,2))))),o(n.a,{title:"Validation",description:o("span",null,"Use the ",o("code",null,"alerts")," prop to show error messages in"," ",o("code",null,"Alert")," components")},o("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4"},o("div",{className:"w-full lg:w-1/2 lg:p-2"},o(i.a,{items:m,onSubmit:c,alerts:!0})),o("div",{className:"w-full lg:w-1/2 lg:p-2"},d&&o("pre",null,JSON.stringify(d,null,2))))))}},L4s6:function(e,a,l){"use strict";var r=l("q1tI"),t=l.n(r).a.createElement;a.a=function(e){var a=e.title,l=e.subtitle,r=e.right,s=void 0===r?null:r;return t("div",{className:"section-title w-full mb-6 pt-3"},t("div",{className:"flex flex-row items-center justify-between mb-4"},t("div",{className:"flex flex-col"},t("div",{className:"text-xs uppercase font-light text-grey-500"},a),t("div",{className:"text-xl font-bold"},l)),s))}},gWdR:function(e,a,l){"use strict";var r=l("q1tI"),t=l.n(r).a.createElement;a.a=function(e){var a=e.title,l=void 0===a?null:a,r=e.description,s=void 0===r?null:r,n=e.right,i=void 0===n?null:n,o=e.children;return t("div",{className:"widget w-full p-4 mb-4 rounded-lg bg-white border border-grey-100 dark:bg-grey-895 dark:border-grey-890"},(l||s||i)&&t("div",{className:"flex flex-row items-center justify-between mb-6"},t("div",{className:"flex flex-col"},t("div",{className:"text-sm font-light text-grey-500"},l),t("div",{className:"text-sm font-bold"},s)),i),o)}},qh94:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/validation",function(){return l("HuMp")}])}},[["qh94",0,1,2,6]]]);