"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,f=u["".concat(i,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"Plotting FAQ",slug:"/plotting-faq"},l=void 0,s={unversionedId:"plotting/plotting-faq",id:"plotting/plotting-faq",title:"Plotting FAQ",description:"If power goes out what happens?",source:"@site/docs/plotting/plotting-faq.md",sourceDirName:"plotting",slug:"/plotting-faq",permalink:"/plotting-faq",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/plotting/plotting-faq.md",tags:[],version:"current",frontMatter:{title:"Plotting FAQ",slug:"/plotting-faq"},sidebar:"tutorialSidebar",previous:{title:"Moving Plots",permalink:"/moving-plots"},next:{title:"Farming Basics",permalink:"/farming-basics"}},i={},c=[{value:"If power goes out what happens?",id:"if-power-goes-out-what-happens",level:2},{value:"Can I use USB 3.0 cable connected to SSD/NVME running the Temp files?",id:"can-i-use-usb-30-cable-connected-to-ssdnvme-running-the-temp-files",level:2},{value:"Once a hash is used from a plot does the plot need deleted?",id:"once-a-hash-is-used-from-a-plot-does-the-plot-need-deleted",level:2},{value:"Farmer vs Harvester?",id:"farmer-vs-harvester",level:2},{value:"How can I Get Synced and stay Synced?",id:"how-can-i-get-synced-and-stay-synced",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"if-power-goes-out-what-happens"},"If power goes out what happens?"),(0,r.kt)("p",null,"Any pots that were partially made will be invalid. This will likely leave many ",(0,r.kt)("inlineCode",{parentName:"p"},".tmp")," files that can be removed. In many cases, temp files will be automatically deleted, but this is one case where you'll likely need to remove the files manually. This does not harm any existing plots that have already been completed."),(0,r.kt)("h2",{id:"can-i-use-usb-30-cable-connected-to-ssdnvme-running-the-temp-files"},"Can I use USB 3.0 cable connected to SSD/NVME running the Temp files?"),(0,r.kt)("p",null,"Although the answer is ",(0,r.kt)("strong",{parentName:"p"},"yes"),", the more practical answer is ",(0,r.kt)("strong",{parentName:"p"},"it depends"),". Often times, the communication speed is slower than expected, the usb device turns off, or connection is inconsistent. A preferred option for desktops would be to install a PCIe to NVME adapter."),(0,r.kt)("h2",{id:"once-a-hash-is-used-from-a-plot-does-the-plot-need-deleted"},"Once a hash is used from a plot does the plot need deleted?"),(0,r.kt)("p",null,"No. A plot has a significant number of hashes. If one is used, there is still plenty to last for the upcoming years."),(0,r.kt)("h2",{id:"farmer-vs-harvester"},"Farmer vs Harvester?"),(0,r.kt)("p",null,"A harvester can be thought of as a node that is an extension of your farmer. The harvester checks the plots and reports the results to the farmer, the farmer then submits the results to the blockchain."),(0,r.kt)("h2",{id:"how-can-i-get-synced-and-stay-synced"},"How can I Get Synced and stay Synced?"),(0,r.kt)("p",null,"Every user has copy of the blockchain on their PC and the goal is that everyone is in sync or very close. Click on the ",(0,r.kt)("strong",{parentName:"p"},"Full Node")," tab, scroll down to see the connected Nodes/PCs. It can take some time on initial start up to collect peers, but if you're not getting peers automatically you'll have no way of getting synced."),(0,r.kt)("p",null,"You can check if you are synced by seeing a ",(0,r.kt)("strong",{parentName:"p"},"synced")," message in the top right of the wallet or on the full node tab. Additionally, the ",(0,r.kt)("strong",{parentName:"p"},"Peak Heiht")," should match closely to that of your peers. You can also confirm against a well-sycned block explorer."),(0,r.kt)("p",null,"You can also try to force reload (top menu bar --\x3e ",(0,r.kt)("strong",{parentName:"p"},"Force Reload"),"). This may help get things syncing again after waiting 5-10 minutes. This should not affect your plotting."))}d.isMDXComponent=!0}}]);