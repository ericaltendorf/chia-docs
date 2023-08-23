"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[9230],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),u=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(a),c=n,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?r.createElement(k,o(o({ref:e},p),{},{components:a})):r.createElement(k,o({ref:e},p))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[m]="string"==typeof t?t:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:a,className:o}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},e)}},4866:(t,e,a)=>{a.d(e,{Z:()=>w});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),p=a(12);function m(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:r,default:n}}=t;return{value:e,label:a,attributes:r,default:n}}))}function d(t){const{values:e,children:a}=t;return(0,n.useMemo)((()=>{const t=e??m(a);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function k(t){let{queryString:e=!1,groupId:a}=t;const r=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(r.location.search);e.set(l,t),r.replace({...r.location,search:e.toString()})}),[l,r])]}function f(t){const{defaultValue:e,queryString:a=!1,groupId:r}=t,l=d(t),[o,i]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=a.find((t=>t.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:l}))),[s,u]=k({queryString:a,groupId:r}),[m,f]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:r}),h=(()=>{const t=s??m;return c({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),u(t),f(t)}),[u,f,l]),tabValues:l}}var h=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(t){let{className:e,block:a,selectedValue:i,selectValue:s,tabValues:u}=t;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=t=>{const e=t.currentTarget,a=p.indexOf(e),r=u[a].value;r!==i&&(m(e),s(r))},c=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const a=p.indexOf(t.currentTarget)+1;e=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(t.currentTarget)-1;e=p[a]??p[p.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e)},u.map((t=>{let{value:e,label:a,attributes:o}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>p.push(t),onKeyDown:c,onClick:d},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===e})}),a??e)})))}function N(t){let{lazy:e,children:a,selectedValue:r}=t;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const t=l.find((t=>t.props.value===r));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==r}))))}function y(t){const e=f(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(b,(0,r.Z)({},t,e)),n.createElement(N,(0,r.Z)({},t,e)))}function w(t){const e=(0,h.Z)();return n.createElement(y,(0,r.Z)({key:String(e)},t))}},5790:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));a(4866),a(5162);const l={sidebar_label:"Hardware",title:"Plotting Hardware",slug:"/plotting-hardware"},o=void 0,i={unversionedId:"plotting/plotting-hardware",id:"plotting/plotting-hardware",title:"Plotting Hardware",description:"Cost/time tradeoffs",source:"@site/docs/plotting/plotting-hardware.md",sourceDirName:"plotting",slug:"/plotting-hardware",permalink:"/plotting-hardware",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/plotting/plotting-hardware.md",tags:[],version:"current",frontMatter:{sidebar_label:"Hardware",title:"Plotting Hardware",slug:"/plotting-hardware"},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/plotting-basics"},next:{title:"Software",permalink:"/plotting-software"}},s={},u=[{value:"Cost/time tradeoffs",id:"costtime-tradeoffs",level:2},{value:"Temporary storage",id:"temporary-storage",level:2},{value:"Processor type",id:"processor-type",level:2},{value:"Compressed plotting systems",id:"compressed-plotting-systems",level:2},{value:"Required",id:"required",level:3},{value:"Hardware",id:"hardware",level:5},{value:"Software",id:"software",level:5},{value:"Most tested",id:"most-tested",level:3},{value:"Recommended plotting systems",id:"recommended-plotting-systems",level:2},{value:"Budget",id:"budget",level:3},{value:"Workstation",id:"workstation",level:3},{value:"Uncompressed plotters",id:"uncompressed-plotters",level:2}],p={toc:u},m="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"costtime-tradeoffs"},"Cost/time tradeoffs"),(0,n.kt)("p",null,"Plotting requires compute - the more compute, the faster the plot time. With that in mind, it may be tempting to run out and buy the fastest computer you can find for plotting. But first, you should consider a few important points, and answer some related questions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Most computers made within the last decade can be used to create Chia plots.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Do you already own a computer that is not being heavily used?"))),(0,n.kt)("li",{parentName:"ul"},"Plotting is a one-time activity.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"What will you do with your plotting machine after you have finished plotting?"))),(0,n.kt)("li",{parentName:"ul"},"Farming is a long-term endeavor.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you do buy a plotting computer, will the time saved on plotting justify its cost?")))),(0,n.kt)("p",null,"Everyone needs to decide for themselves what makes the most economic sense. With plotting, often it comes down a simple tradeoff of either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Spend money on a computer, plot faster, and earn rewards sooner, or"),(0,n.kt)("li",{parentName:"ul"},"Don't spend money, plot slower, and earn rewards later")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://chiacalculator.com/"},"ChiaCalculator.com")," will help you to understand this tradeoff, along with more nuanced factors. Many farmers find that they will make more money by using the equipment they already own. "),(0,n.kt)("p",null,"If you do decide to buy hardware, this page will help you to decide what might work best for your farm."),(0,n.kt)("p",null,"When looking for a plotting machine, the main components to consider are the temporary storage and the processor type (CPU or GPU)."),(0,n.kt)("h2",{id:"temporary-storage"},"Temporary storage"),(0,n.kt)("p",null,"While a Chia plot is being created, a significant amount of temporary data must be written, either entirely in memory, or mostly on disk (HDD or SSD). There are tradeoffs to using RAM, HDDs, and SSDs for plotting, including durability, speed, and cost:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RAM"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Doesn't wear out from Chia plotting"),(0,n.kt)("li",{parentName:"ul"},"Faster than SSDs; significantly faster than HDDs"),(0,n.kt)("li",{parentName:"ul"},"Requires a high-end workstation or a server"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Typically only makes economic sense for large farms (>1 PiB)"),(0,n.kt)("br",null),(0,n.kt)("br",null)))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HDD"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Doesn't wear out from Chia plotting"),(0,n.kt)("li",{parentName:"ul"},"Significantly slower than RAM and SSDs"),(0,n.kt)("li",{parentName:"ul"},"Works on most computers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cheap and effective for small farms (<100 TiB), but typically too slow for larger farms"),(0,n.kt)("br",null),(0,n.kt)("br",null)))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SSD"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Does wear out over time; a high-endurance enterprise NVMe SSD is recommended"),(0,n.kt)("li",{parentName:"ul"},"Slower than RAM, but much faster than HDDs"),(0,n.kt)("li",{parentName:"ul"},"Works on most computers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A good option for farms of most sizes, especially if it means you don't have to buy a high-end workstation"))))),(0,n.kt)("h2",{id:"processor-type"},"Processor type"),(0,n.kt)("p",null,"CPUs and GPUs are both supported for plotting, with GPUs typically being faster. "),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"BladeBit CUDA")," plotter requires an NVIDIA GPU with CUDA capability 5.2 and up, with at least 8GB of vRAM. It is supported on ",(0,n.kt)("strong",{parentName:"p"},"Windows and Linux only.")," MacOS support may be added in the future, but is not guaranteed."),(0,n.kt)("p",null,"The following table lists the general plotter types, along with their requirements, for creating k32 plots:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Processor +",(0,n.kt)("br",null),"Storage"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Plotter ",(0,n.kt)("br",null)," Name(s)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Chia ",(0,n.kt)("br",null)," Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Comp.",(0,n.kt)("br",null),"Plots"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Compute"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Temp",(0,n.kt)("br",null),"Disk",(0,n.kt)("br",null),"(GB)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"RAM",(0,n.kt)("br",null),"(GB)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Plot",(0,n.kt)("br",null),"Times",(0,n.kt)("br",null),"(min.)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"GPU +",(0,n.kt)("br",null)," RAM")),(0,n.kt)("td",{parentName:"tr",align:"left"},"BladeBit CUDA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"None"),(0,n.kt)("td",{parentName:"tr",align:"left"},"256"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1-3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"GPU +",(0,n.kt)("br",null)," SSD")),(0,n.kt)("td",{parentName:"tr",align:"left"},"BladeBit CUDA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"180"),(0,n.kt)("td",{parentName:"tr",align:"left"},"64, ",(0,n.kt)("br",null)," 128"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3-5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"CPU +",(0,n.kt)("br",null)," RAM")),(0,n.kt)("td",{parentName:"tr",align:"left"},"BladeBit RAM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"None"),(0,n.kt)("td",{parentName:"tr",align:"left"},"416"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2-5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"CPU +",(0,n.kt)("br",null)," SSD")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bladebit Disk ",(0,n.kt)("br",null)," madMAx ",(0,n.kt)("br",null)," ChiaPoS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"512"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"15-60")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"CPU +",(0,n.kt)("br",null)," HDD")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bladebit Disk ",(0,n.kt)("br",null)," madMAx ",(0,n.kt)("br",null)," ChiaPoS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"512"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"> 60")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"GPU + HDD")," is not recommended. The HDD is already the bottleneck, even with CPU plotting. Using a GPU with an HDD is not likely to improve plotting speed versus ",(0,n.kt)("inlineCode",{parentName:"p"},"CPU + HDD"),".")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/madMAx43v3r/chia-gigahorse"},"Gigahorse")," from madMAx is a third-party plotter capable of creating compressed plots.\nDepending on your setup, it may be a viable option, but do keep in mind that this plotter carries a dev fee, as explained in the link.")),(0,n.kt)("p",null,"If you want to create compressed plots, you will need to choose either ",(0,n.kt)("inlineCode",{parentName:"p"},"GPU + RAM"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"GPU + SSD"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"CPU + RAM"),". At some point, ",(0,n.kt)("inlineCode",{parentName:"p"},"CPU + SSD")," might become capable of creating compressed plots as well, but for now this is not an option."),(0,n.kt)("p",null,"The rest of this page will list a few decent configurations, depending on your budget and goals."),(0,n.kt)("h2",{id:"compressed-plotting-systems"},"Compressed plotting systems"),(0,n.kt)("h3",{id:"required"},"Required"),(0,n.kt)("p",null,"The following hardware and software components are required for creating compressed plots:"),(0,n.kt)("h5",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,"For BladeBit CUDA plotting:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NVIDIA GPU with CUDA capability 5.2 and up"),(0,n.kt)("li",{parentName:"ul"},"At least 8GB of vRAM"),(0,n.kt)("li",{parentName:"ul"},"At least 256 GB of system RAM"),(0,n.kt)("li",{parentName:"ul"},"A 64-bit CPU (Intel x86, AMD x86, or arm64)")),(0,n.kt)("p",null,"For BladeBit Disk plotting:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"At least 416 GB of system RAM"),(0,n.kt)("li",{parentName:"ul"},"A 64-bit CPU (Intel x86, AMD x86, or arm64)")),(0,n.kt)("h5",{id:"software"},"Software"),(0,n.kt)("p",null,"64-bit Linux or Windows (MacOS is not supported)"),(0,n.kt)("h3",{id:"most-tested"},"Most tested"),(0,n.kt)("p",null,"A wide range of hardware and software configurations that meet the above requirements could potentially be used for creating compressed plots.\nThe following setups have received the most testing scruitiny. The further your system strays from these setups, the more likely you are to encounter problems.\nUnfortunately, we may not be able to offer support if your machine does not fall within these parameters."),(0,n.kt)("p",null,"Operating Systems"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ubuntu 20.04.6 LTS"),(0,n.kt)("li",{parentName:"ul"},"Ubuntu 22.04.02 LTS"),(0,n.kt)("li",{parentName:"ul"},"Ubuntu 23.04"),(0,n.kt)("li",{parentName:"ul"},"RHEL 7.4"),(0,n.kt)("li",{parentName:"ul"},"RHEL 8.7"),(0,n.kt)("li",{parentName:"ul"},"RHEL 9.1"),(0,n.kt)("li",{parentName:"ul"},"Windows 10 version 22H2"),(0,n.kt)("li",{parentName:"ul"},"Windows 11 version 21H2"),(0,n.kt)("li",{parentName:"ul"},"Windows 11 version 22H2"),(0,n.kt)("li",{parentName:"ul"},"Windows Server 2022"),(0,n.kt)("li",{parentName:"ul"},"Windows Server 2019 (version 1809)")),(0,n.kt)("p",null,"Systems"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Intel x86"),(0,n.kt)("li",{parentName:"ul"},"AMD x86"),(0,n.kt)("li",{parentName:"ul"},"arm64")),(0,n.kt)("p",null,"Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Desktop"),(0,n.kt)("li",{parentName:"ul"},"Workstation"),(0,n.kt)("li",{parentName:"ul"},"Server")),(0,n.kt)("p",null,"GPUs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1060"),(0,n.kt)("li",{parentName:"ul"},"2060"),(0,n.kt)("li",{parentName:"ul"},"3060 Ti"),(0,n.kt)("li",{parentName:"ul"},"3090"),(0,n.kt)("li",{parentName:"ul"},"4060"),(0,n.kt)("li",{parentName:"ul"},"Tesla P4"),(0,n.kt)("li",{parentName:"ul"},"A4000")),(0,n.kt)("h2",{id:"recommended-plotting-systems"},"Recommended plotting systems"),(0,n.kt)("p",null,"JM has created an excellent ",(0,n.kt)("a",{parentName:"p",href:"https://chiadecentral.com/gpu-plotting-build-guide/"},"plotting build guide")," with advice on which equipment provides the best performance for the money.\nThis guide is well worth a visit if you are interested in creating compressed plots with BladeBit CUDA."),(0,n.kt)("p",null,"We'll also list two recommendations here, which assume you will use pre-owned components wherever possible. eBay and Amazon are good places to shop around."),(0,n.kt)("h3",{id:"budget"},"Budget"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Model: HPE Z440"),(0,n.kt)("li",{parentName:"ul"},"CPU: Xeon v4"),(0,n.kt)("li",{parentName:"ul"},"RAM: 256 GB DDR4 ECC 2133"),(0,n.kt)("li",{parentName:"ul"},"GPU: 2070")),(0,n.kt)("p",null,"Total Cost: $500-600"),(0,n.kt)("p",null,"Estimated plot times (k32): 170-200 seconds"),(0,n.kt)("p",null,"Daily plot capability: 40-50 TB"),(0,n.kt)("h3",{id:"workstation"},"Workstation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Model: Lenovo P620"),(0,n.kt)("li",{parentName:"ul"},"CPU: Threadripper Pro 5945 WX"),(0,n.kt)("li",{parentName:"ul"},"GPU: 3080"),(0,n.kt)("li",{parentName:"ul"},"Bus: PCIe 4.0 x 16"),(0,n.kt)("li",{parentName:"ul"},"RAM: 256 GB DDR4 ECC 3200")),(0,n.kt)("p",null,"Total Cost: $1300-1500 "),(0,n.kt)("p",null,"Estimated plot times: 90-150 seconds"),(0,n.kt)("p",null,"Daily plot capacity: 60-95 TB"),(0,n.kt)("h2",{id:"uncompressed-plotters"},"Uncompressed plotters"),(0,n.kt)("p",null,"Most Chia farmers will want to create compressed plots. However, some will opt for uncompressed plots, including those who:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Intend to keep their farm small"),(0,n.kt)("li",{parentName:"ul"},"Are not be primarily motivated by profit"),(0,n.kt)("li",{parentName:"ul"},"Do not want to spend any money on plotting hardware"),(0,n.kt)("li",{parentName:"ul"},"Pay a high amount for electricity, such that creating compressed plots is not economically justifiable")),(0,n.kt)("p",null,"In these cases, and potentially others, most hardware running the ChiaPoS, madMAx, and BladeBit plotters will also work."))}d.isMDXComponent=!0}}]);