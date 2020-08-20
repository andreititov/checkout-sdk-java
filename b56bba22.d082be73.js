(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"Highlight",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),o=(n(0),n(157)),c={id:"sources",title:"Sources"},s={id:"sources",isDocsHomePage:!1,title:"Sources",description:"export const Highlight = ({children, color}) => (",source:"@site/docs/sources.md",permalink:"/checkout-sdk-java/sources",sidebar:"someSidebar",previous:{title:"Payments",permalink:"/checkout-sdk-java/payments"},next:{title:"Tokens",permalink:"/checkout-sdk-java/tokens"}},i=[{value:'Add a <Highlight color="#25c2a0">SEPA source</Highlight>',id:"add-a-sepa-source",children:[]},{value:'Add a <Highlight color="#25c2a0">ACH source</Highlight>',id:"add-a-ach-source",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{color:n,padding:"0.2rem"}},t)},d={rightToc:i,Highlight:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can find a list of request body parameters and possible outcomes ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-reference.checkout.com/#tag/Sources"}),"here"),"."),Object(o.b)("h2",{id:"add-a-sepa-source"},"Add a ",Object(o.b)(u,{color:"#25c2a0",mdxType:"Highlight"},"SEPA source")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"SEPA is not enabled by default, so please let your account manager know if you want to use it."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'Address billingAddress = new Address();\nbillingAddress.setAddressLine1("Checkout.com");\nbillingAddress.setAddressLine2("90 Tottenham Court Road");\nbillingAddress.setCity("London");\nbillingAddress.setState("London");\nbillingAddress.setZip("W1T 4TJ");\nbillingAddress.setCountry("GB");\n\nPhone phone = new Phone();\nphone.setCountryCode("+1");\nphone.setNumber("415 555 2671");\n\nSourceData sourceData = new SourceData();\nsourceData.put("first_name", "Marcus");\nsourceData.put("last_name", "Barrilius Maximus");\nsourceData.put("account_iban", "DE68100100101234567895");\nsourceData.put("bic", "PBNKDEFFXXX");\nsourceData.put("billing_descriptor", "SEPA Test");\nsourceData.put("mandate_type", "single");\n\nSourceRequest sourceRequest = new SourceRequest("sepa", billingAddress);\nsourceRequest.setPhone(phone);\nsourceRequest.setReference("Java SDK test");\nsourceRequest.setSourceData(sourceData);\nSourceResponse response = api.sourcesClient().requestAsync(sourceRequest).get();\n\nSourceProcessed source = response.getSource();\n')),Object(o.b)("h2",{id:"add-a-ach-source"},"Add a ",Object(o.b)(u,{color:"#25c2a0",mdxType:"Highlight"},"ACH source")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"ACH is not enabled by default, so please let your account manager know if you want to use it."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'Address billingAddress = new Address();\nbillingAddress.setAddressLine1("Checkout.com");\nbillingAddress.setAddressLine2("90 Tottenham Court Road");\nbillingAddress.setCity("London");\nbillingAddress.setState("London");\nbillingAddress.setZip("W1T 4TJ");\nbillingAddress.setCountry("GB");\n\nPhone phone = new Phone();\nphone.setCountryCode("+1");\nphone.setNumber("415 555 2671");\n\nSourceData sourceData = new SourceData();\nsourceData.put("account_type", "Checking");\nsourceData.put("account_number", "0123456789");\nsourceData.put("routing_number", "211370545");\nsourceData.put("account_holder_name", "Bruce Wayne");\nsourceData.put("billing_descriptor", "ACH Test");\nsourceData.put("company_name", "Wayne Enterprises");\n\nSourceRequest sourceRequest = new SourceRequest("ach", billingAddress);\nsourceRequest.setPhone(phone);\nsourceRequest.setReference("Java SDK test");\nsourceRequest.setSourceData(sourceData);\nSourceResponse response = api.sourcesClient().requestAsync(sourceRequest).get();\n\nSourceProcessed source = response.getSource();\n')))}l.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,m=l["".concat(c,".").concat(b)]||l[b]||p[b]||o;return n?a.a.createElement(m,s(s({ref:t},u),{},{components:n})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);