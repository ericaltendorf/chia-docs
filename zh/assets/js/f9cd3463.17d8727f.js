"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?l.createElement(m,o(o({ref:t},p),{},{components:n})):l.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(7294),a=n(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var l=n(7462),a=n(7294),r=n(6010),o=n(2466),i=n(6550),c=n(1980),s=n(7392),p=n(12);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:a}}=e;return{value:t,label:n,attributes:l,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const l=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,r=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[c,s]=m({queryString:n,groupId:l}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,p.Nk)(n);return[l,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),w=(()=>{const e=c??u;return h({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{w&&i(w)}),[w]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),k(e)}),[s,k,r]),tabValues:r}}var w=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),l=s[n].value;l!==i&&(u(t),c(l))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},o,{className:(0,r.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function y(e){const t=k(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},a.createElement(g,(0,l.Z)({},e,t)),a.createElement(b,(0,l.Z)({},e,t)))}function N(e){const t=(0,w.Z)();return a.createElement(y,(0,l.Z)({key:String(t)},e))}},6575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=n(7462),a=(n(7294),n(3905));n(4866),n(5162);const r={slug:"/walletconnect-user-guide",title:"WalletConnect User Guide"},o=void 0,i={unversionedId:"guides/walletconnect/walletconnect-user-guide",id:"guides/walletconnect/walletconnect-user-guide",title:"WalletConnect User Guide",description:"Intro",source:"@site/docs/guides/walletconnect/walletconnect-user-guide.md",sourceDirName:"guides/walletconnect",slug:"/walletconnect-user-guide",permalink:"/zh/walletconnect-user-guide",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/walletconnect/walletconnect-user-guide.md",tags:[],version:"current",frontMatter:{slug:"/walletconnect-user-guide",title:"WalletConnect User Guide"},sidebar:"guides",previous:{title:"Prefarm Audit Tutorial",permalink:"/zh/custody/prefarm-audit-tutorial"},next:{title:"WalletConnect Developer Guide",permalink:"/zh/walletconnect-developer-guide"}},c={},s=[{value:"Intro",id:"intro",level:2},{value:"Install the sample dApp",id:"install-the-sample-dapp",level:2},{value:"Configure WalletConnect",id:"configure-walletconnect",level:2},{value:"Call dApp functions",id:"call-dapp-functions",level:2},{value:"Configure WalletConnect",id:"configure-walletconnect-1",level:2},{value:"FAQ",id:"faq",level:2},{value:"What is the main use case for WalletConnect?",id:"what-is-the-main-use-case-for-walletconnect",level:3},{value:"What WalletConnect functionality might be enabled in the future?",id:"what-walletconnect-functionality-might-be-enabled-in-the-future",level:3},{value:"What is the difference between WalletConnect and CHIP-2?",id:"what-is-the-difference-between-walletconnect-and-chip-2",level:3},{value:"How can WalletConnect connect to remote wallets?",id:"how-can-walletconnect-connect-to-remote-wallets",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"This guide will show you how to use ",(0,a.kt)("a",{parentName:"p",href:"https://walletconnect.com/"},"WalletConnect")," to connect a sample dApp to your Chia reference wallet."),(0,a.kt)("admonition",{title:"a few notes",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Generally speaking, you only need to have a synced light wallet to use WalletConnect. A full node is not required. However, depending on your dApp, a full node may be required to run certain commands."),(0,a.kt)("li",{parentName:"ul"},"WalletConnect is supported on every operating system supported by the Chia reference wallet, including Windows, Linux, and MacOS."),(0,a.kt)("li",{parentName:"ul"},"WalletConnect is supported on Chia's testnet, as well as its mainnet."),(0,a.kt)("li",{parentName:"ul"},"This guide will use Chia's reference wallet, but WalletConnect integration for other wallets will eventually be supported as well."))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"install-the-sample-dapp"},"Install the sample dApp"),(0,a.kt)("p",null,"In order to help you get started with WalletConnect, we have created a sample dApp to run Chia wallet RPCs.\nIn this section, we'll install and run the dApp locally. We'll also obtain a link to connect the dApp to a Chia reference wallet."),(0,a.kt)("p",null,"If you would like to connect your Chia reference wallet to a different dApp, then feel free to skip ahead to the ",(0,a.kt)("a",{parentName:"p",href:"#configure-walletconnect"},"next section"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run this command to clone the sample dApp's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/walletconnect-rpcs-dapp"},"GitHub repo"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/walletconnect-rpcs-dapp -b main\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change to the sample dApp's directory:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd walletconnect-rpcs-dapp\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the sample dApp using NPM:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the sample dApp:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,a.kt)("p",{parentName:"li"},"Example result:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  Local:   http://127.0.0.1:5173/\n  \u279c  Network: use --host to expose\n  \u279c  press h to show help\n")),(0,a.kt)("p",{parentName:"li"},"In this example, the dApp was started locally on port 5173. This is the default port; your dApp may need to use a different port if 5173 is already being used for something else.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access the sample dApp:"),(0,a.kt)("p",{parentName:"li"},"Open a browser and navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:5173/"},"http://127.0.0.1:5173/")," (unless a different port was used)"),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you see an error message such as ",(0,a.kt)("inlineCode",{parentName:"p"},"An error as occurred"),", the most likely cause is that you are running an ad blocker that is interfering with the dApp.\nEither disable the ad blocker or try a different browser."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WalletConnect Example")," screen should be displayed. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Link Wallet"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/01_dapp.png",alt:"Click Connect"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'A QR code will be displayed. Click the "Copy" button:'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/02_dapp.png",alt:"Click Copy to clipboard"})),(0,a.kt)("br",null),(0,a.kt)("p",{parentName:"li"},"The link has been copied, so you are ready to set up WalletConnect in Chia's reference wallet. Keep this browser window open in case you need to copy the link again."))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configure-walletconnect"},"Configure WalletConnect"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.chia.net/downloads/"},"Download and install")," the latest version of Chia's reference wallet")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set up Chia's testnet"),(0,a.kt)("p",{parentName:"li"},"While it's possible to use WalletConnect on Chia's mainnet, this example will use the testnet.\nThe primary command to convert your system to use the testnet is ",(0,a.kt)("inlineCode",{parentName:"p"},"chia configure -t true"),".\nSee our ",(0,a.kt)("a",{parentName:"p",href:"/guides/chialisp-testnet-setup"},"testnet setup guide")," for more info."),(0,a.kt)("p",{parentName:"li"},"After your system has been configured to use the testnet, you can start your Chia reference wallet.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the WalletConnect icon"),(0,a.kt)("p",{parentName:"li"},"The icon is located on the upper-right side of the reference wallet GUI, as shown here:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/01_walletconnect.png",alt:"Click the WalletConnect icon"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"ENABLE WALLETCONNECT")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/02_walletconnect.png",alt:"Click ENABLE WALLETCONNECT"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD CONNECTION")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/03_walletconnect.png",alt:"Click ADD CONNECTION"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the link to your sample dApp and click ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTINUE")),(0,a.kt)("p",{parentName:"li"},"If you used this guide to set up the sample dApp, this was the link you obtained with the last step of the previous section:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/03_dapp.png",alt:"Paste and click CONTINUE"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By default, the wallet that is currently synced will be selected (in the red circle below). Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Select Keys")," dropdown if you want to connect other wallets, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTINUE"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/04_walletconnect.png",alt:"Select wallets and click CONTINUE"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Confirm your connection"),(0,a.kt)("p",{parentName:"li"},"You will be shown the key(s) to connect to the dApp. If this looks OK, click ",(0,a.kt)("inlineCode",{parentName:"p"},"CLOSE"),". To start over, click ",(0,a.kt)("inlineCode",{parentName:"p"},"DISCONNECT"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/05_walletconnect.png",alt:"Click CLOSE"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Show more info"),(0,a.kt)("p",{parentName:"li"},"To show info on which dApp(s) are paired to which keys(s), click the WalletConnect icon, click the three dots, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"More Info"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/06_walletconnect.png",alt:"Click More Info"})),(0,a.kt)("br",null),(0,a.kt)("p",{parentName:"li"},"You will be shown the Pair Information for your dApp:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/07_walletconnect.png",alt:"Paired keys are showing"})),(0,a.kt)("br",null),(0,a.kt)("p",{parentName:"li"},"Your wallet has been successfully paired with the sample dApp. In the next section, we'll show you how to interact with your wallet from the dApp."))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"call-dapp-functions"},"Call dApp functions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"View the sample dApp in a web browser"),(0,a.kt)("p",{parentName:"li"},"Recall that by default, the dApp will run on ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:5173"},"http://127.0.0.1:5173"),"."),(0,a.kt)("p",{parentName:"li"},"You will be shown a dropdown list of available methods. The default method is ",(0,a.kt)("inlineCode",{parentName:"p"},"chia_logIn"),", but we'll call a different method for this example."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/04_dapp.png",alt:"Dropdown menu"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"chia_getNextAddress"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/05_dapp.png",alt:"Run chia_getNextAddress"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For this example, we will choose wallet ID ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," (the XCH wallet), and select ",(0,a.kt)("inlineCode",{parentName:"p"},"New Address"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/06_dapp.png",alt:"Wallet ID 1"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Confirm the request"),(0,a.kt)("p",{parentName:"li"},"Switch back to your Chia reference wallet. You should now see a confirmation dialog with the requested method. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIRM"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/08_walletconnect.png",alt:"Confirm request"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"View the response"),(0,a.kt)("p",{parentName:"li"},"Returning to the sample dApp, a new dialog with the response will appear. In this example, a new address will be shown:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/07_dapp.png",alt:"Showing next address"})),(0,a.kt)("br",null),(0,a.kt)("p",{parentName:"li"},"You have now installed, configured, and used the sample dApp. Feel free to test the other functions, as well as create your own!"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configure-walletconnect-1"},"Configure WalletConnect"),(0,a.kt)("p",null,"By default, you can only run dApp methods against the wallet key that is currently synced.\nThis was not an issue in the above example because we only selected one public key to pair with the sample dApp.\nHowever, if you want your dApp to be able to interact with multiple keys, you will need to enable an additional setting in the reference wallet."),(0,a.kt)("p",null,"Click the gear icon in the lower left corner of the reference wallet, then click the ",(0,a.kt)("inlineCode",{parentName:"p"},"INTEGRATION")," tab. Two switches will appear at the top of this panel:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Enable WalletConnect")," -- This setting was activated when you enabled WalletConnect earlier in the guide.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Key Switching")," -- If you activate this setting, your dApp will be able to switch between multiple wallet keys. The selected wallet will need to sync whenever you switch between keys."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/09_walletconnect.png",alt:"Allow requests that require switching keys"})),(0,a.kt)("br",null))),(0,a.kt)("p",null,"To configure the commands that are provided to dApps, you can edit (locally) ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain-gui/blob/main/packages/gui/src/constants/WalletConnectCommands.tsx"},"chia-blockchain-gui/blob/main/packages/gui/src/constants/WalletConnectCommands.tsx"),".\nThis file acts as a middle layer between the wallet and the dApp. It can also be used to control privacy settings."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"what-is-the-main-use-case-for-walletconnect"},"What is the main use case for WalletConnect?"),(0,a.kt)("p",null,"WalletConnect allows end users to connect their wallet to a dApp."),(0,a.kt)("h3",{id:"what-walletconnect-functionality-might-be-enabled-in-the-future"},"What WalletConnect functionality might be enabled in the future?"),(0,a.kt)("p",null,"WalletConnect is currently supported in Chia's reference wallet.\nIt is also used in ",(0,a.kt)("a",{parentName:"p",href:"https://www.chiatcg.com"},"Chia TCG"),", a trading card game that uses Chia NFTs."),(0,a.kt)("p",null,"In the future, it could also be supported in other Chia wallets, as well as in other mobile- and web-based dApps. For example, mobile wallet providers will be able to integrate with WalletConnect to connect directly to dApp providers."),(0,a.kt)("p",null,"WalletConnect will aslo be used for initiating signing requests from within a dApp. This will enable interactions with all types of assets on Chia, including XCH, CATs, and NFTs. It will aslo enable using Chia Offers."),(0,a.kt)("h3",{id:"what-is-the-difference-between-walletconnect-and-chip-2"},"What is the difference between WalletConnect and CHIP-2?"),(0,a.kt)("p",null,"WalletConnect is generalized to allow any dApp to connect to any Chia wallet. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chips/blob/main/CHIPs/chip-0002.md"},"CHIP-2")," (dApp protocol) is specific to browser extensions."),(0,a.kt)("h3",{id:"how-can-walletconnect-connect-to-remote-wallets"},"How can WalletConnect connect to remote wallets?"),(0,a.kt)("p",null,"In the example from this tutorial, both the reference wallet and WalletConnect were running on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,a.kt)("p",null,"To connect to a mobile phone, you can scan the provided QR code. To connect to remote browser-based dapps, simply navigate to the remote URI from a web browser."),(0,a.kt)("p",null,"Also note that all connections (local and remote) between wallets and dApps are end-to-end encrypted."))}d.isMDXComponent=!0}}]);