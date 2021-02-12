_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[99],{"0vNg":function(e,r,n){"use strict";n.r(r);var t=n("q1tI"),a=n.n(t),o=n("YFqc"),s=n.n(o),l=n("ubuU"),u=n("cNuv"),c=a.a.createElement;r.default=function(){return c(l.a,{title:"Reset password",subtitle:"Please enter your new password to reset your account"},c(u.a,{message:"Thanks for your message. We'll get back to you as soon as possible"}),c("div",{className:"flex flex-row w-full mt-3"},c("span",{className:"mr-1"},"New user?"),c("span",null,c(s.a,{href:"/create-account"},c("a",{className:"link"},"Sign up here")))),c("div",{className:"flex flex-row w-full"},c("span",{className:"mr-1"},"Already have an account?"),c("span",null,c(s.a,{href:"/login"},c("a",{className:"link"},"Login here")))))}},X9eL:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reset-password",function(){return n("0vNg")}])},YFqc:function(e,r,n){e.exports=n("cTJO")},cNuv:function(e,r,n){"use strict";var t=n("q1tI"),a=n.n(t),o=n("JGYP"),s=n("JrXF"),l=a.a.createElement;r.a=function(e){var r=e.message,n=void 0===r?null:r,u=Object(t.useState)(null),c=u[0],i=u[1];return l(a.a.Fragment,null,l("div",{className:"flex flex-col"},c&&n&&l("div",{className:"w-full mb-4"},l(s.a,{color:"bg-transparent border-green-500 text-green-500",borderLeft:!0,raised:!0},n)),l(o.a,{items:[{label:"New password",error:{required:"New password is required",minLength:{value:4,message:"Your password should have at least 4 characters"},maxLength:{value:8,message:"Your password should have no more than 8 characters"}},name:"new-password",type:"password",placeholder:"Enter your new password"},{label:"Confirm new password",error:{required:"Password confirmation is required",minLength:{value:4,message:"Your password should have at least 4 characters"},maxLength:{value:8,message:"Your password should have no more than 8 characters"}},name:"confirm-new-password",type:"password",placeholder:"Enter your new password confirmation"}],onSubmit:i})))}},cTJO:function(e,r,n){"use strict";var t=n("J4zp"),a=n("284h");r.__esModule=!0,r.default=void 0;var o=a(n("q1tI")),s=n("elyg"),l=n("nOHt"),u=n("vNVm"),c={};function i(e,r,n,t){if((0,s.isLocalURL)(r)){e.prefetch(r,n,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[r+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var r=!1!==e.prefetch,n=(0,l.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var r=(0,s.resolveHref)(a,e.href,!0),n=t(r,2),o=n[0],l=n[1];return{href:o,as:e.as?(0,s.resolveHref)(a,e.as):l||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,w=e.shallow,h=e.scroll,g=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var b=o.Children.only(v),y=b&&"object"===typeof b&&b.ref,N=(0,u.useIntersection)({rootMargin:"200px"}),x=t(N,2),E=x[0],L=x[1],_=o.default.useCallback((function(e){E(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,E]);(0,o.useEffect)((function(){var e=L&&r&&(0,s.isLocalURL)(d),t="undefined"!==typeof g?g:n&&n.locale,a=c[d+"%"+p+(t?"%"+t:"")];e&&!a&&i(n,d,p,{locale:t})}),[p,d,L,g,r,n]);var q={ref:_,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,r,n,t,a,o,l,u){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=t.indexOf("#")<0),r[a?"replace":"push"](n,t,{shallow:o,locale:u}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,m,w,h,g)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),i(n,d,p,{priority:!0}))}};return(e.passHref||"a"===b.type&&!("href"in b.props))&&(q.href=(0,s.addBasePath)((0,s.addLocale)(p,"undefined"!==typeof g?g:n&&n.locale,n&&n.defaultLocale))),o.default.cloneElement(b,q)};r.default=f},ubuU:function(e,r,n){"use strict";var t=n("q1tI"),a=n.n(t).a.createElement;r.a=function(e){var r=e.title,n=e.subtitle,t=e.children;return a("div",{className:"flex flex-col bg-white border border-grey-200 p-8 w-full max-w-xl"},a("div",{className:"flex flex-col w-full mb-4"},a("div",{className:"text-xs uppercase"},r),a("div",{className:"text-lg font-bold"},n)),t)}},vNVm:function(e,r,n){"use strict";var t=n("J4zp"),a=n("TqRt");r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!l,a=(0,o.useRef)(),c=(0,o.useState)(!1),i=t(c,2),f=i[0],d=i[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=u.get(r);if(n)return n;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return u.set(r,n={id:r,observer:a,elements:t}),n}(n),a=t.id,o=t.observer,s=t.elements;return s.set(e,r),o.observe(e),function(){o.unobserve(e),0===s.size&&(o.disconnect(),u.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[n,r,f]);return(0,o.useEffect)((function(){l||f||(0,s.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("q1tI"),s=a(n("0G5g")),l="undefined"!==typeof IntersectionObserver;var u=new Map}},[["X9eL",0,1,2,3,4,6]]]);