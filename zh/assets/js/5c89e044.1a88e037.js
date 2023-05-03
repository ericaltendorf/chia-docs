"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[9771],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var s=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=s.createContext({}),d=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return s.createElement(l.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},h=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(t),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return t?s.createElement(m,i(i({ref:n},u),{},{components:t})):s.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[p]="string"==typeof e?e:a,i[1]=r;for(var d=2;d<o;d++)i[d]=t[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6666:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(7462),a=(t(7294),t(3905));const o={title:"Spend Bundles",slug:"/spend-bundles"},i=void 0,r={unversionedId:"coin-set-model/spend-bundles",id:"coin-set-model/spend-bundles",title:"Spend Bundles",description:"A spend bundle is a set of spends of multiple coins, which is usually submitted to full nodes for inclusion into the blockchain. In Bitcoin, the equivalent data structure would be the transaction.",source:"@site/docs/coin-set-model/spend-bundles.md",sourceDirName:"coin-set-model",slug:"/spend-bundles",permalink:"/zh/spend-bundles",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/coin-set-model/spend-bundles.md",tags:[],version:"current",frontMatter:{title:"Spend Bundles",slug:"/spend-bundles"},sidebar:"tutorialSidebar",previous:{title:"Conditions",permalink:"/zh/conditions"},next:{title:"Addresses",permalink:"/zh/addresses"}},l={},d=[{value:"Aggregate Signatures",id:"aggregate-signatures",level:2},{value:"Coins vs Spend Bundles",id:"coins-vs-spend-bundles",level:2},{value:"Additions and Removals",id:"additions-and-removals",level:2},{value:"What do full nodes store on-chain?",id:"what-do-full-nodes-store-on-chain",level:2}],u={toc:d},p="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A spend bundle is a set of spends of multiple coins, which is usually submitted to full nodes for inclusion into the blockchain. In Bitcoin, the equivalent data structure would be the transaction."),(0,a.kt)("p",null,"Here is the spend bundle's basic construction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class CoinSpend:\n    coin: Coin\n    puzzle_reveal: SerializedProgram\n    solution: SerializedProgram\n\nclass SpendBundle:\n    coin_spends: List[CoinSpend]\n    aggregated_signature: G2Element\n")),(0,a.kt)("p",null,"As you can see in the code sample above, a spend bundle is a group of coin spends, where each coin spend includes the coin being spent, the puzzle program, and the solution program. Each solution is passed into each puzzle and run through the CLVM, where it outputs conditions. Two of the conditions -- ",(0,a.kt)("inlineCode",{parentName:"p"},"AGG_SIG_ME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AGG_SIG_UNSAFE")," -- require\nthat a signature be present in order for the spend to be valid."),(0,a.kt)("p",null,"Usually when making a transaction, a user would combine multiple spends, to achieve the desired value of the transaction. Users can also combine coins that represent ",(0,a.kt)("a",{parentName:"p",href:"https://chialisp.com/cats"},"CATs")," (Chia Asset Tokens), and send different types of values in the same spend bundle."),(0,a.kt)("h2",{id:"aggregate-signatures"},"Aggregate Signatures"),(0,a.kt)("p",null,"In Bitcoin, each spend has its own signature or signatures, one for each ",(0,a.kt)("inlineCode",{parentName:"p"},"(public key, message)")," combination. Then, each signature ",(0,a.kt)("inlineCode",{parentName:"p"},"s_i")," is passed through a signature verification algorithm: ",(0,a.kt)("inlineCode",{parentName:"p"},"V(s, m, pk) -> T/F"),", with the message ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," and public key ",(0,a.kt)("inlineCode",{parentName:"p"},"pk"),", and would be valid if and only if ",(0,a.kt)("inlineCode",{parentName:"p"},"V")," returns true."),(0,a.kt)("p",null,"In Chia, BLS signatures are used. These signatures can be combined (added) together to produce an aggregate signature of the same size as the originals. Let's say we have three spend bundles, each with its own pair:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"s1 m1 pk1\ns2 m2 pk2\ns3 m3 pk3\n")),(0,a.kt)("p",null,"With BLS signatures, farmers combine all three signatures ",(0,a.kt)("inlineCode",{parentName:"p"},"s1, s2, and s3")," into one signature ",(0,a.kt)("inlineCode",{parentName:"p"},"s_agg"),". The BLS signature verification can take multiple public keys and messages: ",(0,a.kt)("inlineCode",{parentName:"p"},"V(s, [m1, m2, ... mx], [pk1, pk2, ... pkx]) -> T/F"),"."),(0,a.kt)("p",null,"This allows the farmer to combine all three spend bundles into one spend bundle, with only one signature, which means less data is transmitted and stored on chain and disk."),(0,a.kt)("p",null,"Another benefit of these aggregate signatures is that when spending multiple coins, users will only transmit one signature, instead of one or more per spend. More information can be found in the ",(0,a.kt)("a",{parentName:"p",href:"/bls-keys"},"BLS Keys page"),". You can also read the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/bls-signatures"},"code for BLS signatures"),"."),(0,a.kt)("h2",{id:"coins-vs-spend-bundles"},"Coins vs Spend Bundles"),(0,a.kt)("p",null,"One major difference between Chia and other UTXO-based blockchain systems is that spend bundles are not a first-class object in the block database. Each block in Chia contains a list of removals and additions, where removals are the coins spent in that block, and additions are the coins added in that block."),(0,a.kt)("p",null,"Let's say a farmer wants to include 1000 spend bundles into a block. First, they can combine all spend bundles into one, and then they can make the block. Each block will have exactly one signature for all spends. Full nodes that verify and store this block do not need to know the original information of which spends were bundled with which other spends."),(0,a.kt)("h2",{id:"additions-and-removals"},"Additions and Removals"),(0,a.kt)("p",null,"In the figure below, you can see a spend bundle that was created by a user. The removals in the spend bundle are coins A, B, and C, and the additions are coins D and E. This is very similar to how the standard transaction script works in ",(0,a.kt)("inlineCode",{parentName:"p"},"chia-blockchain"),"."),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/spend-bundle.png",alt:"drawing"})),(0,a.kt)("p",null,"Let's go through the different components in the image. First, let's say Alice wants to send 13 XCH to Bob. Alice looks at her coin database, and selects 3 unspent coins (A, B, and C) that add up to at least 13 XCH. Each one of these coins has an associated CLVM puzzle, which has a public key encoded inside of it. Let's denote these public keys as ",(0,a.kt)("inlineCode",{parentName:"p"},"pkA"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pkB"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"pkC"),". Alice needs to generate the puzzle and solution for each of the\nspends, in order to create the spend bundle."),(0,a.kt)("p",null,"Each puzzle, when run with the solutions, returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"AGG_SIG")," condition (either AGG_SIG_ME or AGG_SIG_UNSAFE). This means that a signature is required from the respective public key, in order for this spend to be valid."),(0,a.kt)("p",null,"Instead of providing 3 signatures, we can use BLS signature arithmetic to combine all three into one signature. There are two benefits to doing this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The resulting spend bundle will be smaller in bytes."),(0,a.kt)("li",{parentName:"ol"},"The spend bundle can not be unbundled (the signature cannot be de-aggregated).")),(0,a.kt)("p",null,"That is, an attacker who obtains Alice's spend bundle is not able to pull apart the spend bundle in order to spend just one of the coins. When Alice sends this spend bundle to the Chia network, other full nodes will run the CLVM programs, collect all the ",(0,a.kt)("inlineCode",{parentName:"p"},"AGG_SIG")," conditions, and then verify them using the aggregate signature provided in the spend bundle."),(0,a.kt)("p",null,"The first puzzle here for coin A also returns two ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE_COIN")," conditions. This means that two coins must be added to the coin database in order for spend A to be valid:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Coin D is for Bob (puzzle hash 0x1b54f and 13 XCH)."),(0,a.kt)("li",{parentName:"ol"},"Coin E is Alice's change. She spent 14 XCH, but only wanted to send 13 XCH to Bob. Each coin's value must be spent entirely, so Alice needs to send 1 XCH to herself as change.")),(0,a.kt)("p",null,"Note that the puzzle hash of coin E is the same as that of coin A. Puzzle hashes can be reused. When spending coin E, Alice would sign with the same key as before, but would most likely use a different message that spends to another recipient."),(0,a.kt)("p",null,"Also note that only the first spend is creating the coins. This is the normal way to combine spends, since each coin must have exactly one parent. Spend A, by itself, would not be valid, since it creates more value (14 XCH) than it spends (5 XCH). However, the spend becomes valid when combined with spends B and C."),(0,a.kt)("p",null,"Full nodes receive, validate, and store the spend bundle in memory. However, when creating a new block, farming nodes will combine many spend bundles from different users. This creates one large spend bundle with one signature. When looking at just the block, it is not always clear which spends were bundled together initially. However, we can see the net additions and removals in the whole block."),(0,a.kt)("h2",{id:"what-do-full-nodes-store-on-chain"},"What do full nodes store on-chain?"),(0,a.kt)("p",null,"Puzzles are only revealed when coins are spent; the puzzles are saved on-chain afterward for record-keeping purposes."),(0,a.kt)("p",null,"Full nodes, therefore, store the history of the blockchain, which includes all revealed puzzles and solutions, for all spent coins. Full nodes also store a list of unspent coins, which only contains puzzle hashes, and not puzzles."),(0,a.kt)("p",null,"Users are responsible for remembering and storing their own puzzles in order to spend their coins. Usually these are regenerated on the fly by wallet software, based on templates."))}c.isMDXComponent=!0}}]);