"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[626],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var l=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,l,a=function(e,t){if(null==e)return{};var o,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)o=n[l],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)o=n[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(o),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||n;return o?l.createElement(m,r(r({ref:t},c),{},{components:o})):l.createElement(m,r({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,r=new Array(n);r[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<n;p++)r[p]=o[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5162:(e,t,o)=>{o.d(t,{Z:()=>r});var l=o(7294),a=o(6010);const n={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:o,className:r}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,r),hidden:o},t)}},4866:(e,t,o)=>{o.d(t,{Z:()=>v});var l=o(7462),a=o(7294),n=o(6010),r=o(2466),i=o(6550),s=o(1980),p=o(7392),c=o(12);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:o,attributes:l,default:a}}=e;return{value:t,label:o,attributes:l,default:a}}))}function d(e){const{values:t,children:o}=e;return(0,a.useMemo)((()=>{const e=t??u(o);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function h(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:o}=e;const l=(0,i.k6)(),n=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,s._X)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(l.location.search);t.set(n,e),l.replace({...l.location,search:t.toString()})}),[n,l])]}function f(e){const{defaultValue:t,queryString:o=!1,groupId:l}=e,n=d(e),[r,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=o.find((e=>e.default))??o[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:n}))),[s,p]=m({queryString:o,groupId:l}),[u,f]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,n]=(0,c.Nk)(o);return[l,(0,a.useCallback)((e=>{o&&n.set(e)}),[o,n])]}({groupId:l}),k=(()=>{const e=s??u;return h({value:e,tabValues:n})?e:null})();(0,a.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),f(e)}),[p,f,n]),tabValues:n}}var k=o(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:o,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),d=e=>{const t=e.currentTarget,o=c.indexOf(t),l=p[o].value;l!==i&&(u(t),s(l))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;t=c[o]??c[0];break}case"ArrowLeft":{const o=c.indexOf(e.currentTarget)-1;t=c[o]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},t)},p.map((e=>{let{value:t,label:o,attributes:r}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},r,{className:(0,n.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":i===t})}),o??t)})))}function y(e){let{lazy:t,children:o,selectedValue:l}=e;const n=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,n.Z)("tabs-container",g.tabList)},a.createElement(b,(0,l.Z)({},e,t)),a.createElement(y,(0,l.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return a.createElement(w,(0,l.Z)({key:String(t)},e))}},4773:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var l=o(7462),a=(o(7294),o(3905));o(4866),o(5162);const n={sidebar_label:"How To Plot",title:"How To Plot",slug:"/plotting-how-to"},r=void 0,i={unversionedId:"plotting/plotting-how-to",id:"plotting/plotting-how-to",title:"How To Plot",description:"To create plots, you must have:",source:"@site/docs/plotting/plotting-how-to.md",sourceDirName:"plotting",slug:"/plotting-how-to",permalink:"/plotting-how-to",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/plotting/plotting-how-to.md",tags:[],version:"current",frontMatter:{sidebar_label:"How To Plot",title:"How To Plot",slug:"/plotting-how-to"},sidebar:"tutorialSidebar",previous:{title:"Choosing a Compression Level",permalink:"/plotting-compression"},next:{title:"SSD Endurance",permalink:"/ssd-endurance"}},s={},p=[{value:"Public Keys",id:"public-keys",level:2},{value:"CLI",id:"cli",level:3},{value:"GUI",id:"gui",level:3},{value:"Pool Contract Address",id:"pool-contract-address",level:2},{value:"CLI",id:"cli-1",level:3},{value:"GUI",id:"gui-1",level:3},{value:"CLI Plotting",id:"cli-plotting",level:2},{value:"BladeBit CUDA",id:"bladebit-cuda",level:4},{value:"BladeBit RAM",id:"bladebit-ram",level:4},{value:"BladeBit Disk",id:"bladebit-disk",level:4},{value:"madMAx",id:"madmax",level:4},{value:"ChiaPoS",id:"chiapos",level:4},{value:"GUI Plotting",id:"gui-plotting",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,l.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To create plots, you must have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A farmer public key")," -- created upon creating a new wallet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A pool public key")," -- created upon creating a new wallet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A pool contract address")," -- created upon creating a new plot NFT")),(0,a.kt)("p",null,"This page will give a basic overview of how to obtain these values. For a detailed description, see the ",(0,a.kt)("a",{parentName:"p",href:"/farming-guide"},"Beginner's Guide to Farming"),"."),(0,a.kt)("p",null,"If you already have a wallet with a plot NFT, feel free to skip to the section for ",(0,a.kt)("a",{parentName:"p",href:"#cli-plotting"},"CLI Plotting")," or ",(0,a.kt)("a",{parentName:"p",href:"#gui-plotting"},"GUI Plotting"),"."),(0,a.kt)("h2",{id:"public-keys"},"Public Keys"),(0,a.kt)("h3",{id:"cli"},"CLI"),(0,a.kt)("p",null,"If you do not have a key/wallet, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chia keys generate\n")),(0,a.kt)("p",null,"You will be prompted to add a human-readable name to your wallet. This name is only used locally (it is not stored on the blockchain). If you do not enter a name, a number called a ",(0,a.kt)("em",{parentName:"p"},"fingerprint")," will be used instead. It is possible to change this name later."),(0,a.kt)("p",null,"Example response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Generating private key\nEnter the label you want to assign to this key (Press Enter to skip): Test Wallet\nAdded private key with public key fingerprint 2225787457\n")),(0,a.kt)("p",null,"In order to view your farmer public key, run ",(0,a.kt)("inlineCode",{parentName:"p"},"chia keys show"),", optionally including the ",(0,a.kt)("inlineCode",{parentName:"p"},"-f <fingerprint>")," flag to show only the info for the key you just generated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chia keys show\n")),(0,a.kt)("p",null,"The result will include the farmer public key and the pool public key. Make note of them for the subsequent steps. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Showing all public keys derived from your master seed and private key:\n\nLabel: Test Wallet\nFingerprint: 2225787457\nMaster public key (m): ab895c85aea6e7339f1a021ad14eddfa3f5ef97eb37ccbdf0b30c1c88c593065e9409f7401d409c8efe17b903e7c9be1\nFarmer public key (m/12381/8444/0/0): ab9b6fda0bbd7510058559cd3b5ce297de5c009d960862b139104feb49a0fe94faace31075009599943327554574c5fc\nPool public key (m/12381/8444/1/0): 894c772c219a6d05dc7b0a51fe05f891849e1e26283387f249d7074ead5dcff2fe779ee69f4570c60d1970f0fda77eac\nFirst wallet address: xch12kqlkrgq7mkxwt64j5fsge3q84sg007wqyc8egkptyjflmazp7gqd7gh7c\n")),(0,a.kt)("h3",{id:"gui"},"GUI"),(0,a.kt)("p",null,"If you do not have a key, you will need to create one:"),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/01.png",alt:"Create a new wallet key"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"You will be presented with a list of twenty-four words. This is your wallet's recovery phrase. These words are all that are needed to recover your wallet on a new computer. Write them down and store them in a safe place. The order of the words is important."),(0,a.kt)("p",null,"You can also choose a custom name for your wallet. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"NEXT")," when you are finished."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If someone obtains a copy of these words, they can steal your entire wallet, including all of its funds. Be sure to store your recovery phrase in a safe place.")),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/02.png",alt:"Wallet seed phrase"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"You will be taken to your new wallet. In order to obtain your farmer public key, you will need to log out of the wallet. Click the icon next to the bell icon."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/03.png",alt:"Log out"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Click the three dots in the lower-right corner of your wallet, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Details"),"."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/04.png",alt:"Show details"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Among other information, your farmer public key and pool public key will be shown. If you plan to plot from the CLI, make note of these keys. If you will stick with the GUI for plotting, these keys will be obtained automatically later."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/05.png",alt:"Public keys"})),(0,a.kt)("h2",{id:"pool-contract-address"},"Pool Contract Address"),(0,a.kt)("p",null,"In order to obtain a pool contract address, you will need to create a Plot NFT."),(0,a.kt)("h3",{id:"cli-1"},"CLI"),(0,a.kt)("p",null,"First, you will need to decide whether to join a pool. For this example, we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"-s pool")," to join a pool. If you want to solo farm, use ",(0,a.kt)("inlineCode",{parentName:"p"},"-s local")," instead. (Later, you can change pools, using the plot NFT you are about to create.)"),(0,a.kt)("p",null,"If you choose to join a pool, you will need to add the URL by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"-u")," flag. For this example, we will join OpenChia, but there are many great pools to choose from. For a list of reputable pools, see ",(0,a.kt)("a",{parentName:"p",href:"https://chialinks.com/pools/"},"Chialinks.com"),". (Chia Network, Inc. does not run a pool, and is not affiliated with OpenChia or Chialinks)."),(0,a.kt)("p",null,"Finally, you have the option of adding a blockchain fee with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-m")," flag. We will add a one-mojo fee for this example, which typically is sufficient to complete your transaction within a few minutes."),(0,a.kt)("p",null,"In order to run this command, you will need to have one mojo in your wallet for the plot NFT, and one mojo for the blockchain fee."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chia plotnft create -s pool -u https://pool.openchia.io -m 0.000000000001\n")),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"---- Pool parameters fetched from https://pool.openchia.io ----\n{'authentication_token_timeout': 5,\n 'description': 'A pool you can trust. We embrace open source.',\n 'fee': '0.01',\n 'logo_url': 'https://www.chia.net/img/chia_logo.svg',\n 'minimum_difficulty': 1,\n 'name': 'OpenChia.io Pool',\n 'protocol_version': 1,\n 'relative_lock_height': 32,\n 'target_puzzle_hash': '0x55a2d443901f7655893cecf1c98e4152591e8641c64a2b0294cad1a754d02f89'}\n----------------------------------------------------------------\nWill create a plot NFT and join pool: https://pool.openchia.io.\nTransaction submitted to nodes: [{'peer_id': 'b3d9de85d29931c10050b56c7afb91c99141943fc81ff2d1a8425e52be0d08ab', 'inclusion_status': 'SUCCESS', 'error_msg': None}]\nRun 'chia wallet get_transaction -f 782655656 -tx 0x7e6f64d1858263378a66869aefee7bb27ffc2bf3cccb3cc1d89a522d24559654' to get status\n")),(0,a.kt)("p",null,"After the transaction has completed, you can obtain the plot NFT's information by running ",(0,a.kt)("inlineCode",{parentName:"p"},"chia plotnft show"),". For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chia plotnft show\n")),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Current state: FARMING_TO_POOL\nCurrent state from block height: 4099277\nLauncher ID: fc64e39395f60398532545d0e3116398e5edcdbeacd140606ec25fa36243bc9c\nTarget address (not for plotting): xch12k3dgsusram9tzfuancunrjp2fv3apjpce9zkq55etg6w4xs97ysgcrlwh\nNumber of plots: 0\nOwner public key: b571502c188db6ee65cafc9fcc9cfdcb2cff06795687a70bf8d76a48e89adb34b2d28e8d93cabc394e5779a8ae65c38e\nPool contract address (use ONLY for plotting - do not send money to this address): xch1l6tt70hrhewlyvjs37vc5tvw80c89cy8dcxcnynsqatsyf5466aq63f9mq\nCurrent pool URL: https://pool.openchia.io\nCurrent difficulty: 1\nPoints balance: 0\nPoints found (24h): 0\nPercent Successful Points (24h): 0.00%\nPayout instructions (pool will pay to this address): xch16ycs0t3cmn63wysrn8hpg93dgevy3cw9yt3mmx2anrz52dkuj9nsauzyzt\nRelative lock height: 32 blocks\n")),(0,a.kt)("p",null,'The pool contract address is listed in the middle of the output. It will begin with "xch".'),(0,a.kt)("h3",{id:"gui-1"},"GUI"),(0,a.kt)("p",null,"Open your wallet, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Pooling")," icon in the lower-left corner, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN A POOL"),":"),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/06.png",alt:"Join a pool"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Select either option:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Self pool"),' -- Select this if you are a solo farmer. Technically, you will be joining a "pool" where you are the only member.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Connect to pool")," -- You will need to enter a valid pool URL. We will use OpenChia for this example, but there are many great pools to choose from. For a list of reputable pools, see ",(0,a.kt)("a",{parentName:"li",href:"https://chialinks.com/pools/"},"Chialinks.com"),". (Chia Network, Inc. does not run a pool, and is not affiliated with OpenChia or Chialinks).")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Later, you can change pools, using the plot NFT you are about to create.")),(0,a.kt)("p",null,"Creating a plot NFT requires an on-chain transaction that will cost one mojo. You are also recommended to enter a blockchain fee. Depending on how busy the network is, a one-mojo fee is typically enough to complete your transaction within a few minutes."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/07.png",alt:"Create a plot NFT"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"If you entered a valid pool URL, the details will pop up. For example, this pool has a fee of 1%. If everything looks acceptable, click ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE"),":"),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/08.png",alt:"Pool details"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Your transaction will be pushed to the blockchain. While it is pending, a new screen will appear:"),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/09.png",alt:"Plot NFT pending"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"After the transaction has been finalized (typically 1-3 minutes), the details of your plot NFT will appear:"),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/10.png",alt:"Plot NFT details"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The pool contract address will be displayed automatically when creating a plot in the GUI."),(0,a.kt)("h2",{id:"cli-plotting"},"CLI Plotting"),(0,a.kt)("p",null,"If you are unsure which plotter to use, the ",(0,a.kt)("a",{parentName:"p",href:"/plotting-software"},"Plotting Software")," page will help you to decide."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/plotters-cli"},"plotters CLI documentation")," will guide you through using each of the plotters included with Chia. The basic commands to use are as follows:"),(0,a.kt)("h4",{id:"bladebit-cuda"},"BladeBit CUDA"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Be sure to add ",(0,a.kt)("inlineCode",{parentName:"strong"},"--disk-128")," if you have at least 128 GB of RAM, but less than 256 GB.")," See the ",(0,a.kt)("a",{parentName:"p",href:"/plotters-cli"},"plotters CLI documentation")," for more details."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"As of Chia 2.1, plotting with at least 16 GB of RAM (but less than 128 GB) is still experimental. A few notes:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"--disk-16")," option has been disabled in the Chia 2.1.0 release. It is currently only available from the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/bladebit/"},"standalone version")," of BladeBit."),(0,a.kt)("li",{parentName:"ul"},"Plots created with this option on Linux with direct I/O disabled appear to work, but more testing is still needed."),(0,a.kt)("li",{parentName:"ul"},"Plots created with this option on Windows are more likely to encounter issues."),(0,a.kt)("li",{parentName:"ul"},"Be sure to check all plots created with this option, as they could be invalid even if the plotter appeared to succeed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Use ",(0,a.kt)("inlineCode",{parentName:"strong"},"--disk-16")," at your own risk!")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chia plotters bladebit cudaplot -d <destination dir> -f <farmer key> -p <pool key> -c <contract address> -n <number of plots> --compress <compression level>\n")),(0,a.kt)("h4",{id:"bladebit-ram"},"BladeBit RAM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chia plotters bladebit ramplot -d <destination dir> -f <farmer key> -p <pool key> -c <contract address> -n <number of plots> --compress <compression level>\n")),(0,a.kt)("h4",{id:"bladebit-disk"},"BladeBit Disk"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chia plotters bladebit diskplot -t <temp dir> -d <destination dir> -f <farmer key> -p <pool key> -c <contract address> -n <number of plots> --compress 0\n")),(0,a.kt)("h4",{id:"madmax"},"madMAx"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chia plotters madmax -t <temp dir> -d <destination dir> -f <farmer key> -p <pool key> -c <contract address> -k <size> -n <number of plots>\n")),(0,a.kt)("h4",{id:"chiapos"},"ChiaPoS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chia plotters chiapos -t <temp dir> -d <destination dir> -f <farmer key> -p <pool key> -c <contract address> -k <size> -n <number of plots>\n")),(0,a.kt)("p",null,"Regardless of which plotter you choose, it's a good idea to experiment with the optional parameters in order to optimize the plotting process for your hardware."),(0,a.kt)("h2",{id:"gui-plotting"},"GUI Plotting"),(0,a.kt)("p",null,"From the Chia application, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Farm")," icon and click ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD A PLOT"),":"),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/11.png",alt:"Add a plot"})),(0,a.kt)("br",null),(0,a.kt)("p",null,'Your plot NFT will appear. In this example, it is called "Harlequin Koala". The plots you create will be associated with this NFT. It is important that you associate all of your plots to the same NFT because it will allow you to farm to a pool, as well as to change pools easily if desired. As long as your plot NFT shows up here, there is no need to change it:'),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/12.png",alt:"Plot NFT"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Next, you will need to choose a plotter. If you are unsure which one to use, see the ",(0,a.kt)("a",{parentName:"p",href:"/plotting-software"},"Plotting Software")," page for guidance."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/13.png",alt:"Choose plotter"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"For the ",(0,a.kt)("inlineCode",{parentName:"p"},"Keys")," section, you typically won't need to change anything (these are the keys you set up previously)."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/14.png",alt:"Keys"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Next, you will need to choose a ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," value and a compression level. Certain plotters only allow one or the other of these options."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/15.png",alt:"Choose K value"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Depending on which plotter you chose, you may need to select a temporary storage location."),(0,a.kt)("p",null,"The final directory is where the plot will be copied after it has been created. Most farmers will choose to use an HDD as the final directory."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/16.png",alt:"Final directory"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"You will also need to choose how many plots to create."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/17.png",alt:"Number of plots"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"After you have gone through all of these settings, click ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE"),". You will be taken to a progress panel:"),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:"/img/how_to_plot/18.png",alt:"Plot creation progress"})),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Depending on your chosen plotter, there may be many other options you can experiment with. Some of these options can greatly streamline (or slow down) your plotting process, so it's good to try a few different settings.")))}d.isMDXComponent=!0}}]);