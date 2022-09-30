"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4121],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),l=a(7294),r=a(6010),o=a(2389),i=a(7392),s=a(7094),p=a(2466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:a,block:o,defaultValue:u,values:c,groupId:k,className:f}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:y}=(0,s.U)(),[v,T]=(0,l.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=k){const e=_[k];null!=e&&e!==v&&h.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,a=w.indexOf(t),n=h[a].value;n!==v&&(x(t),T(n),null!=k&&y(k,String(n)))},R=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},f)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>w.push(e),onKeyDown:R,onFocus:E,onClick:E},o,{className:(0,r.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":v===t})}),a??t)}))),a?(0,l.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function c(e){const t=(0,o.Z)();return l.createElement(u,(0,n.Z)({key:String(t)},e))}},7187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));a(5488),a(5162);const r={id:"simulator",title:"Simulator RPC Reference",sidebar_label:"12.5 Simulator RPCs",sidebar_position:5},o=void 0,i={unversionedId:"12rpcs/simulator",id:"12rpcs/simulator",title:"Simulator RPC Reference",description:"Intro",source:"@site/docs/12rpcs/simulator.mdx",sourceDirName:"12rpcs",slug:"/12rpcs/simulator",permalink:"/docs/12rpcs/simulator",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/12rpcs/simulator.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"simulator",title:"Simulator RPC Reference",sidebar_label:"12.5 Simulator RPCs",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"12.5 DataLayer RPCs",permalink:"/docs/12rpcs/datalayer_rpcs"},next:{title:"13.1 Index of Commands",permalink:"/docs/13cli/cli"}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>get_all_blocks</code>",id:"get_all_blocks",level:3},{value:"<code>farm_block</code>",id:"farm_block",level:3},{value:"<code>set_auto_farming</code>",id:"set_auto_farming",level:3},{value:"<code>get_auto_farming</code>",id:"get_auto_farming",level:3},{value:"<code>get_farming_ph</code>",id:"get_farming_ph",level:3},{value:"<code>get_all_coins</code>",id:"get_all_coins",level:3},{value:"<code>get_all_puzzle_hashes</code>",id:"get_all_puzzle_hashes",level:3},{value:"<code>revert_blocks</code>",id:"revert_blocks",level:3},{value:"<code>reorg_blocks</code>",id:"reorg_blocks",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"intro"},"Intro"),(0,l.kt)("p",null,"The simulator gives you complete control of a private Chia blockchain, including the ability to advance and revert blocks as needed."),(0,l.kt)("p",null,"This page includes a comprehensive list of Chia's Remote Procedure Calls for using the simulator."),(0,l.kt)("p",null,"For more info, see the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://devs.chia.net/guides/simulator-user-guide",title:"Simulator User Guide"},"Simulator User Guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/13cli/simulator",title:"Simulator CLI Reference"},"Simulator CLI Reference"))),(0,l.kt)("hr",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Note about Windows command escaping"),(0,l.kt)("p",null,"This document will use Linux/MacOS RPC syntax. When running rpc commands on Windows, you'll need to escape all quotes with backslashes."),(0,l.kt)("p",null,"For example, here is a typical RPC command on Linux and MacOS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{"wallet_type": "nft_wallet"}\'\n')),(0,l.kt)("p",null,"To run the same command on Windows, you need to escape the quotes with backslashes. In other words, add a \\ before each double quote, such that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'"fee" becomes \\"fee\\"'),(0,l.kt)("li",{parentName:"ul"},'"1000" becomes \\"1000\\"'),(0,l.kt)("li",{parentName:"ul"},"etc"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"get_all_blocks"},(0,l.kt)("inlineCode",{parentName:"h3"},"get_all_blocks")),(0,l.kt)("p",null,"Functionality: Return a list of all blocks in the blockhain"),(0,l.kt)("p",null,"Usage: chia rpc full_node ","[OPTIONS]"," get_all_blocks ","[REQUEST]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("p",null,"Request Parameters: None"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"chia rpc full_node get_all_blocks\n")),(0,l.kt)("p",null,"Response (abbreviated):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "blocks": [\n        {\n            "challenge_chain_ip_proof": {\n                "normalized_to_identity": false,\n                "witness": "0x04000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n                "witness_type": 0\n            },\n            "challenge_chain_sp_proof": {\n                "normalized_to_identity": false,\n                "witness": "0x02004c00010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n                "witness_type": 0\n            },\n            "finished_sub_slots":\n                {\n                    "challenge_chain": {\n                        "challenge_chain_end_of_slot_vdf": {\n                            "challenge": "0xeb8c4d20b322be8d9fddbf9412016bdffe9a2901d7edb0e364e94266d0e095f7",\n                            "number_of_iterations": 1024,\n                            "output": {\n                                "data": "0x00006100050100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"\n                            }\n                        },\n                        "infused_challenge_chain_sub_slot_hash": null,\n                        "new_difficulty": null,\n                        "new_sub_slot_iters": null,\n                        "subepoch_summary_hash": null\n                    },\n                    "infused_challenge_chain": null,\n                    "proofs": {\n                        "challenge_chain_slot_proof": {\n                            "normalized_to_identity": false,\n                            "witness": "0x00003d00020100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n                            "witness_type": 0\n                        },\n                        "infused_challenge_chain_slot_proof": null,\n                        "reward_chain_slot_proof": {\n                            "normalized_to_identity": false,\n                            "witness": "0x00003d00020100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n                            "witness_type": 0\n                        }\n                    },\n                    "reward_chain": {\n                        "challenge_chain_sub_slot_hash": "0xe44e06ed13eb06c7c2f0218945b7c62e785d6482c27ebbe69aab499ae199258c",\n                        "deficit": 12,\n                        "end_of_slot_vdf": {\n                            "challenge": "0xeb8c4d20b322be8d9fddbf9412016bdffe9a2901d7edb0e364e94266d0e095f7",\n                            "number_of_iterations": 1024,\n                            "output": {\n                                "data": "0x00006100050100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"\n                            }\n                        },\n                        "infused_challenge_chain_sub_slot_hash": null\n                    }\n                },\n\n...\n...\n\n                "reward_claims_incorporated": [\n                    {\n                        "amount": 1750000000000,\n                        "parent_coin_info": "0xeb8c4d20b322be8d9fddbf9412016bdf00000000000000000000000000000011",\n                        "puzzle_hash": "0x5fb3e0ccc23760a7f917a81e7872cc921f9ddbc86582dfb4f64eee66fad5e740"\n                    },\n                    {\n                        "amount": 250000000000,\n                        "parent_coin_info": "0xfe9a2901d7edb0e364e94266d0e095f700000000000000000000000000000011",\n                        "puzzle_hash": "0x5fb3e0ccc23760a7f917a81e7872cc921f9ddbc86582dfb4f64eee66fad5e740"\n                    }\n                ]\n            }\n        }\n    ],\n    "success": true\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"farm_block"},(0,l.kt)("inlineCode",{parentName:"h3"},"farm_block")),(0,l.kt)("p",null,"Functionality: Farm one or more blocks. Can ensure farming a transaction block if required"),(0,l.kt)("p",null,"Usage: chia rpc full_node ","[OPTIONS]"," farm_block ","[REQUEST]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("p",null,"Request Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address to use to farm the block")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"guarantee_tx_block"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},"True")," to farm a transaction block (ie, farm new blocks until a tx block is farmed); set to ",(0,l.kt)("inlineCode",{parentName:"td"},"False")," to farm the next block, which could also be a transaction block, but is not guaranteed (Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"False"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"blocks"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number of blocks to farm. If ",(0,l.kt)("inlineCode",{parentName:"td"},"guarantee_tx_block")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"True"),", then each block will be a transaction block (Default: 1)")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example 1"),(0,l.kt)("p",null,"Farm a single block:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'chia rpc full_node farm_block \'{"address": "txch1v3wjjapxvepyadvr2wgp7272md84lv6kmaxyxm4lq5le2jcc90zqkxhgv6"}\'\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "new_peak_height": 21,\n    "success": true\n}\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example 2"),(0,l.kt)("p",null,"Farm three transaction blocks:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'chia rpc full_node farm_block \'{"address": "txch1v3wjjapxvepyadvr2wgp7272md84lv6kmaxyxm4lq5le2jcc90zqkxhgv6", "guarantee_tx_block": "True", "blocks": 3}\'\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "new_peak_height": 24,\n    "success": true\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"set_auto_farming"},(0,l.kt)("inlineCode",{parentName:"h3"},"set_auto_farming")),(0,l.kt)("p",null,"Functionality: Set whether to auto farm (Boolean)"),(0,l.kt)("p",null,"Usage: chia rpc full_node ","[OPTIONS]"," set_auto_farming ","[REQUEST]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("p",null,"Request Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"auto_farm"),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean to enable or disable auto farming")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example 1"),(0,l.kt)("p",null,"Enable auto farming:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"chia rpc full_node set_auto_farming '{\"auto_farm\": true}'\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "auto_farm_enabled": true,\n    "success": true\n}\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example 2"),(0,l.kt)("p",null,"Disable auto farming:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"chia rpc full_node set_auto_farming '{\"auto_farm\": false}'\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "auto_farm_enabled": false,\n    "success": true\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"get_auto_farming"},(0,l.kt)("inlineCode",{parentName:"h3"},"get_auto_farming")),(0,l.kt)("p",null,"Functionality: Returns a Boolean to indicate whether auto farming is enabled"),(0,l.kt)("p",null,"Usage: chia rpc full_node ","[OPTIONS]"," get_auto_farming ","[REQUEST]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("p",null,"Request Parameters: None"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"chia rpc full_node get_auto_farming\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "auto_farm_enabled": true,\n    "success": true\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"get_farming_ph"},(0,l.kt)("inlineCode",{parentName:"h3"},"get_farming_ph")),(0,l.kt)("p",null,"Functionality: Get the puzzle hash used by the farmer"),(0,l.kt)("p",null,"Usage: chia rpc full_node ","[OPTIONS]"," get_farming_ph ","[REQUEST]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("p",null,"Request Parameters: None"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"chia rpc full_node get_farming_ph\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "puzzle_hash": "5fb3e0ccc23760a7f917a81e7872cc921f9ddbc86582dfb4f64eee66fad5e740",\n    "success": true\n}\n')),(0,l.kt)("p",null,"You can then use ",(0,l.kt)("inlineCode",{parentName:"p"},"cdv encode")," to convert this puzzle hash to an address:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cdv encode --prefix txch 5fb3e0ccc23760a7f917a81e7872cc921f9ddbc86582dfb4f64eee66fad5e740\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"txch1t7e7pnxzxas207gh4q08sukvjg0emk7gvkpdld8kfmhxd7k4uaqq9x4yd2\n"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"get_all_coins"},(0,l.kt)("inlineCode",{parentName:"h3"},"get_all_coins")),(0,l.kt)("p",null,"Functionality: Get all coins"),(0,l.kt)("p",null,"Usage: chia rpc full_node ","[OPTIONS]"," get_all_coins ","[REQUEST]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("p",null,"Request Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"include_spent_coins"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean, if ",(0,l.kt)("inlineCode",{parentName:"td"},"True")," then spent coins will be included in the result (Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"False"),")")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"chia rpc full_node get_all_coins\n")),(0,l.kt)("p",null,"Response (abbreviated):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "coin_records": [\n        {\n            "coin": {\n                "amount": 1750000000000,\n                "parent_coin_info": "0xeb8c4d20b322be8d9fddbf9412016bdf00000000000000000000000000000011",\n                "puzzle_hash": "0x5fb3e0ccc23760a7f917a81e7872cc921f9ddbc86582dfb4f64eee66fad5e740"\n            },\n            "coinbase": true,\n            "confirmed_block_index": 18,\n            "spent_block_index": 0,\n            "timestamp": 1664294613\n        },\n        {\n            "coin": {\n                "amount": 1750000000000,\n                "parent_coin_info": "0xeb8c4d20b322be8d9fddbf9412016bdf00000000000000000000000000000007",\n                "puzzle_hash": "0x5fb3e0ccc23760a7f917a81e7872cc921f9ddbc86582dfb4f64eee66fad5e740"\n            },\n            "coinbase": true,\n            "confirmed_block_index": 9,\n            "spent_block_index": 0,\n            "timestamp": 1664294445\n        },\n\n...\n...\n    ],\n    "success": true\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"get_all_puzzle_hashes"},(0,l.kt)("inlineCode",{parentName:"h3"},"get_all_puzzle_hashes")),(0,l.kt)("p",null,"Functionality: Get all puzzle hashes used in this blockchain"),(0,l.kt)("p",null,"Usage: chia rpc full_node ","[OPTIONS]"," get_all_puzzle_hashes ","[REQUEST]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("p",null,"Request Parameters: None"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"chia rpc full_node get_all_puzzle_hashes\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "puzzle_hashes": {\n        "000000000000000000000000000000000000000000000000000000000000dead": [\n            6000000000000,\n            6\n        ],\n        "5fb3e0ccc23760a7f917a81e7872cc921f9ddbc86582dfb4f64eee66fad5e740": [\n            21000034000000000000,\n            36\n        ],\n        "645d29742666424eb58353901f2bcadb4f5fb356df4c436ebf053f954b182bc4": [\n            6000000000000,\n            6\n        ]\n    },\n    "success": true\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"revert_blocks"},(0,l.kt)("inlineCode",{parentName:"h3"},"revert_blocks")),(0,l.kt)("p",null,"Functionality: Revert a customizable number of blocks"),(0,l.kt)("p",null,"Usage: chia rpc full_node ","[OPTIONS]"," revert_blocks ","[REQUEST]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("p",null,"Request Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"num_of_blocks"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of blocks to revert (Default: 1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delete_all_blocks"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean, set to ",(0,l.kt)("inlineCode",{parentName:"td"},"True")," to revert all blocks (Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"False"),")")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example 1"),(0,l.kt)("p",null,"Revert a single block:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"chia rpc full_node revert_blocks\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "new_peak_height": 23,\n    "success": true\n}\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example 2"),(0,l.kt)("p",null,"Delete all blocks -- this will reset the blockchain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'chia rpc full_node revert_blocks \'{"delete_all_blocks": "True"}\'\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "new_peak_height": 1,\n    "success": true\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"reorg_blocks"},(0,l.kt)("inlineCode",{parentName:"h3"},"reorg_blocks")),(0,l.kt)("p",null,"Functionality: Initiate a reorg or a customizable number of blocks"),(0,l.kt)("p",null,"Usage: chia rpc full_node ","[OPTIONS]"," reorg_blocks ","[REQUEST]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-j"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--json-file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("p",null,"Request Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"num_of_blocks_to_rev"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of blocks to go back (Default: 1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"num_of_new_blocks"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of blocks to add (Default: 1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"revert_all_blocks"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean, set to ",(0,l.kt)("inlineCode",{parentName:"td"},"True")," to fork all blocks (Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"False"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"random_seed"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String, used to randomize the seed, which will differentiate reorgs")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example 1"),(0,l.kt)("p",null,"Starting from block 11, we'll revert 3 blocks and create 5 new blocks:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'chia rpc full_node reorg_blocks \'{"num_of_blocks_to_rev": 3, "num_of_new_blocks": 5}\'\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "new_peak_height": 16,\n    "success": true\n}\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example 2"),(0,l.kt)("p",null,"Reorg with a random seed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'chia rpc full_node reorg_blocks \'{"random_seed": "aaaaaa"}\'\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "new_peak_height": 18,\n    "success": true\n}\n'))),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);