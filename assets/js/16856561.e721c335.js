"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1233],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),f=i,d=h["".concat(a,".").concat(f)]||h[f]||p[f]||r;return n?o.createElement(d,s(s({ref:t},u),{},{components:n})):o.createElement(d,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5615:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],l={sidebar_position:7},a="3.7 Multiple Blocks",c={unversionedId:"03consensus/multiple_blocks",id:"03consensus/multiple_blocks",isDocsHomePage:!1,title:"3.7 Multiple Blocks",description:"Figure 7: multiple blocks. Sp1 = signage point 1",source:"@site/docs/03consensus/multiple_blocks.md",sourceDirName:"03consensus",slug:"/03consensus/multiple_blocks",permalink:"/docs/03consensus/multiple_blocks",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/03consensus/multiple_blocks.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"3.6 Harvester Algorithm",permalink:"/docs/03consensus/harvester_algorith"},next:{title:"3.8 Three VDF Chains",permalink:"/docs/03consensus/three_vdf_chains"}},u=[],p={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"37-multiple-blocks"},"3.7 Multiple Blocks"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/multiple_blocks.png",alt:"drawing"}),(0,r.kt)("figcaption",null,"Figure 7: multiple blocks. Sp1 = signage point 1")),(0,r.kt)("p",null,"As you can see in Figure 7, multiple blocks can get infused into the same sub-slot. Chia\u2019s system targets one block every 18.75 seconds on average (32 blocks per sub-slot), and this is adjusted every 4608 blocks (around 24 hours) through the work difficulty algorithm."),(0,r.kt)("p",null,"VDF proofs span:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"from the previous infusion point before the current signage point to the current signage point, and"),(0,r.kt)("li",{parentName:"ul"},"from the previous infusion point to the current infusion point.\nThis means that the VDF proofs required for each block can overlap. ")),(0,r.kt)("p",null,"In the example in Figure 7, B2 contains a VDF proof from B1 to sp2, and from B1 to B2. B3 contains a proof from B1 to sp3, and from B2 to B3. B2 does not depend at all on B3, but B3 depends on B2, since its VDF is from B2\u2019s infusion point. "),(0,r.kt)("p",null,"As discussed in ",(0,r.kt)("a",{parentName:"p",href:"/docs/03consensus/signage_points_and_infusion_points",title:"Section 3.5: Signage Points and Infusion Points"},"Section 3.5"),", the blocks get created at the signage points, but they are missing the infusion point VDF. Once this VDF is added, the block is finished, and forms part of the blockchain. "),(0,r.kt)("p",null,"The signatures get created and added by the farmers at the signage points, and broadcast to the whole network.\nThere are no signatures at the infusion point; the only things added at the infusion point are the VDFs. "),(0,r.kt)("p",null,"Finally, note that there can be multiple winners at the same signage point, all of which can be included into the blockchain. That would be the case in the diagram, if ",(0,r.kt)("inlineCode",{parentName:"p"},"sp2 == sp3"),". The one which gets included first is the one with the lower ",(0,r.kt)("inlineCode",{parentName:"p"},"required_iters"),", and thus earlier infusion point."),(0,r.kt)("p",null,"You may be wondering what happens if a farmer makes a copy of a plot and the plot becomes eligible for infusion. Do the plots each win a block reward? No -- two blocks get created, but only one will be infused. The full nodes will only propagate the first copy of the block they see. The timelord node is ultimately connected to exactly one full node, so even if multiple identical blocks make it to that full node, they will not both be sent to the timelord for infusion."),(0,r.kt)("p",null,"It is possible (albeit very unlikely) for two non-identical blocks to have the same infusion point, even though their hashes don't match. In this case, the full nodes will reject the second block they receive because each block must have total_iters > prev block total_iters."))}h.isMDXComponent=!0}}]);