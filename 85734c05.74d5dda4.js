(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{67:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return c}));var r=i(2),o=i(6),n=(i(0),i(82)),a={title:"FAQ",id:"cloud-sdk-faq",sidebar_label:"FAQ"},s={unversionedId:"products/rebuild-api/cloud-sdk-faq",id:"products/rebuild-api/cloud-sdk-faq",isDocsHomePage:!1,title:"FAQ",description:"What if I send a file you do not support?",source:"@site/docs/products/rebuild-api/faq.md",slug:"/products/rebuild-api/cloud-sdk-faq",permalink:"/docs/products/rebuild-api/cloud-sdk-faq",version:"current",sidebar_label:"FAQ",sidebar:"someSidebar",previous:{title:"C# .Net Core",permalink:"/docs/products/rebuild-api/rebuild/code-samples/csharp-example"},next:{title:"Set-up of CI/CD for GitHub Repository",permalink:"/docs/how-tos/ci-cd-pipeline"}},l=[{value:"What if I send a file you do not support?",id:"what-if-i-send-a-file-you-do-not-support",children:[]},{value:"Are there files which you cannot rebuild?",id:"are-there-files-which-you-cannot-rebuild",children:[]},{value:"Do you store the original files I send?",id:"do-you-store-the-original-files-i-send",children:[]},{value:"I am receiving 429 responses, what does this mean?",id:"i-am-receiving-429-responses-what-does-this-mean",children:[]},{value:"What is the maximum size of file you support?",id:"what-is-the-maximum-size-of-file-you-support",children:[]}],u={rightToc:l};function c(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"what-if-i-send-a-file-you-do-not-support"},"What if I send a file you do not support?"),Object(n.b)("p",null,"This is fine, in fact we would reccomend it! As part of the rebuild process the Rebuild SDK is used to detect the file type of the file, this is achieved by a structural analysis of the file and not through magic number or file extension. If this analysis determines the file to be an unsuported type the Rebuild API will return a status code of ",Object(n.b)("strong",{parentName:"p"},"422 Unprocessable Entity")," with a response body indicating the file being unsupported. It is then up to the business logic of the application to decide how to proceed with this file."),Object(n.b)("p",null,"By removing the burden from your application of deciding which files to send means that your business logic can remain the same even when we add an additional supported file type. It more importantly protects you from masquerading files where the extension states a type but the file structure is actually another."),Object(n.b)("h3",{id:"are-there-files-which-you-cannot-rebuild"},"Are there files which you cannot rebuild?"),Object(n.b)("p",null,'Yes, the internal term for these files are "Humpty Dumpty" files, so broken they will never go back together again. Before the rebuild process takes place, the Rebuild SDK is used to generate an analysis report of the file. This analysis report will list (amongst other things) issues that cannot be remediated, if a file contains these issues then the Rebuild API will return a status code of ',Object(n.b)("strong",{parentName:"p"},"422 Unprocessable Entity")," with a response body indicating the file had structural issues. It is then up to the business logic of the application to decide how to proceed with this file."),Object(n.b)("h3",{id:"do-you-store-the-original-files-i-send"},"Do you store the original files I send?"),Object(n.b)("p",null,"No files are stored in the rebuild proces beyond the regenerated file being persisted to an output folder. Files may be stored as part of future calls but that would only be when there was a clear benefit or use case to do so. All of the Rebuild API code is available on our ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/filetrust"}),"GitHub"),"."),Object(n.b)("h3",{id:"i-am-receiving-429-responses-what-does-this-mean"},"I am receiving 429 responses, what does this mean?"),Object(n.b)("p",null,"On the shared platform the amount and rate of calling our API is controlled by a usage plan. By default accounts on our shared platform are limited to 50 requests per second. Exceeding these rates results in throttling and the appearance of the 429 HTTP code response. If this is an issue, you might want to consider moving to our dedicated model where the full rate can be assigned."),Object(n.b)("h3",{id:"what-is-the-maximum-size-of-file-you-support"},"What is the maximum size of file you support?"),Object(n.b)("p",null,"We have two pathways into the Rebuild functionality - file in the HTTP request supports files up to 6mb, files via input URL can go up to 30mb. The URL pathway does not formally limit the file size, whether the file is processed larger than the limit is purely down to the memory consuption of rebuilding the file + the 29 second max timeout of the API Gateway."))}c.isMDXComponent=!0},82:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return f}));var r=i(0),o=i.n(r);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(i),h=r,f=d["".concat(a,".").concat(h)]||d[h]||p[h]||n;return i?o.a.createElement(f,s(s({ref:t},u),{},{components:i})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<n;u++)a[u]=i[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,i)}h.displayName="MDXCreateElement"}}]);