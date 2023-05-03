"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[9513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>y});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,y=c["".concat(l,".").concat(p)]||c[p]||d[p]||a;return n?o.createElement(y,s(s({ref:t},h),{},{components:n})):o.createElement(y,s({ref:t},h))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:i,s[1]=r;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const a={slug:"/coin-set-security",title:"Security"},s=void 0,r={unversionedId:"coin-set-model/security",id:"coin-set-model/security",title:"Security",description:"When creating smart coins, security concerns should be at the front of your mind. The language is specifically designed to secure money on a network with no centralized authority to enforce rules. The only thing standing in the way of attackers and potentially large sums of money is how you design smart coins.",source:"@site/docs/coin-set-model/security.md",sourceDirName:"coin-set-model",slug:"/coin-set-security",permalink:"/zh/coin-set-security",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/coin-set-model/security.md",tags:[],version:"current",frontMatter:{slug:"/coin-set-security",title:"Security"},sidebar:"tutorialSidebar",previous:{title:"Addresses",permalink:"/zh/addresses"},next:{title:"Coin Set vs UTXO Model",permalink:"/zh/coin-set-vs-utxo"}},l={},u=[{value:"Signing the Solution",id:"signing",level:2},{value:"Asserting Coin Information",id:"asserting",level:2},{value:"Replay Attacks",id:"replay",level:2},{value:"&quot;Flash Loan from God&quot; Attack",id:"flash-loans",level:2},{value:"Puzzle and Solution Reveals",id:"reveals",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When creating smart coins, security concerns should be at the front of your mind. The language is specifically designed to secure money on a network with ",(0,i.kt)("em",{parentName:"p"},"no centralized authority")," to enforce rules. The only thing standing in the way of attackers and potentially large sums of money is how you design smart coins."),(0,i.kt)("h2",{id:"signing"},"Signing the Solution"),(0,i.kt)("p",null,"When you push a transaction, it gets gossiped to other nodes until it finds one who will put it into a block. Every node chooses what will be passed on to the next node. If it likes, it can change some data before it forwards it."),(0,i.kt)("p",null,"This is why the aggregated signature is part of the spend bundle. It allows you to mark data as valid only if there is also a signature that vouches for its correctness. Signatures are how you prevent nodes from changing your transaction in malicious ways. If they do, the spend will no longer be valid."),(0,i.kt)("p",null,"Signing is especially important when looking at solution values. The puzzle reveal is secured by the puzzle hash on the coin. The solution, however, can be anything. Most of the time when you are spending a coin, the output conditions are passed in somehow through the solution. If you don't sign those conditions (or the delegated puzzle that generates them) you must assume that an attacker is going to notice and attempt to substitute their own values."),(0,i.kt)("p",null,"Sometimes, it is necessary to have solution values that logistically cannot be signed, but also should not be changed. In scenarios like these, you should try to have a signed coin use announcements to assert that the coin is being spent with the correct information."),(0,i.kt)("h2",{id:"asserting"},"Asserting Coin Information"),(0,i.kt)("p",null,"Signing is how you prevent nodes from messing with your own spends, but sometimes you want to create coins that will be traded around with specific rules. As a result, you don't know who will be spending the coin, and you don't know if they will be honest."),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"/guides/chialisp-inner-puzzles"},"inner puzzles"),", you can enforce rules on your child coins by ",(0,i.kt)("a",{parentName:"p",href:"/guides/chialisp-currying"},"currying")," and wrapping tree hashes. However, there are times when you also want to enforce truths about yourself or your parent."),(0,i.kt)("p",null,"This is where the ",(0,i.kt)("inlineCode",{parentName:"p"},"ASSERT_MY_*")," family of condition opcodes comes in. When you need information (",(0,i.kt)("inlineCode",{parentName:"p"},"parent_coin_info"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"puzzle_hash"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"amount"),") about your coin to use in the puzzle, it cannot always be curried in by an honest party. Sometimes, it will need to be passed in through the solution."),(0,i.kt)("p",null,"The solution should always be treated as if it is being solved by malicious or careless parties. If any coin information is being passed in, it should be asserted with opcodes to ensure that the network, who can see that information, can confirm it."),(0,i.kt)("p",null,"Keep in mind that ",(0,i.kt)("inlineCode",{parentName:"p"},"ASSERT_MY_COIN_ID")," will actually implicitly assert all three of the pieces of information in a coin. The same is true of ",(0,i.kt)("inlineCode",{parentName:"p"},"ASSERT_MY_PARENT_ID")," for parent coins, which is particularly useful since there is no such thing as ",(0,i.kt)("inlineCode",{parentName:"p"},"ASSERT_MY_PARENT_PUZZLE_HASH"),", for example."),(0,i.kt)("h2",{id:"replay"},"Replay Attacks"),(0,i.kt)("p",null,"Another huge concern when creating your spends is whether they will be valid if parts of them are excluded or reused. This kind of attack is the reason why ",(0,i.kt)("inlineCode",{parentName:"p"},"AGG_SIG_UNSAFE")," is labeled the way it is."),(0,i.kt)("p",null,"If you sign something with ",(0,i.kt)("inlineCode",{parentName:"p"},"AGG_SIG_UNSAFE"),", the only data that is being signed is the message you are trying to sign. Once you sign and push it, that signature lives on the blockchain forever. If you later create a puzzle that is locked up with the need for the same signature, an attacker can find the signature you used last time and reuse it."),(0,i.kt)("p",null,"This is why you should try to always use ",(0,i.kt)("inlineCode",{parentName:"p"},"AGG_SIG_ME")," if possible. Not only does it make you commit to the coin ID in the signature (something that is unique to every spend), but it also commits to the genesis challenge of the network you are on. A revealed signature for a coin on testnet could be replayed in mainnet otherwise."),(0,i.kt)("p",null,"Exclusion should also be a concern at the forefront of your mind. Oftentimes, you will be spending multiple coins in the same bundle, and they should all be tied together into one aggregated signature. If you have good reason not to sign one of them, make sure you know what happens if it gets excluded from the bundle."),(0,i.kt)("p",null,"Furthermore, aggregated signatures can't be disaggregated into smaller signatures ",(0,i.kt)("em",{parentName:"p"},"unless")," you have previously signed one of the smaller combinations of public key-message pairs in the bundle. The attacker can exclude the rest of the transactions that contain ",(0,i.kt)("inlineCode",{parentName:"p"},"AGG_SIG")," conditions and reuse the smaller signature again on the remaining transactions. They can also calculate the remaining aggregated signature and perhaps sign every spend except the one the exclude. This is known as ",(0,i.kt)("strong",{parentName:"p"},"signature subtraction")," and is another great reason to use ",(0,i.kt)("inlineCode",{parentName:"p"},"AGG_SIG_ME")," as much as possible."),(0,i.kt)("h2",{id:"flash-loans"},'"Flash Loan from God" Attack'),(0,i.kt)("p",null,"An interesting angle that also has to be considered during the building of your coins is how their security holds up if a party that is spending them has infinite money. This may seem ridiculous except that cryptocurrency enables ",(0,i.kt)("strong",{parentName:"p"},"flash loans")," to exist which are instant loans of money with no conditions except that they are returned to the owner within the same block."),(0,i.kt)("p",null,"Take for example, a piggybank coin that only allows you to withdraw funds once the amount of the piggybank has grown to a determined savings goal. If a person wants to retrieve their funds early, they can borrow money equal to their savings goal, cash out the piggybank, and then return the money that they borrowed."),(0,i.kt)("p",null,"There's also potential to use vast sums of borrowed money to influence the price of something, if that price is calculated programmatically. If you have enough money, you can singularly simulate a bunch of trades to influence the price calculation to the price you desire, make a transaction at that price, and then return all of the money you borrowed to simulate trading while keeping the profits."),(0,i.kt)("p",null,"Fortunately, this attack has a relatively easy fix, and that is to add an ",(0,i.kt)("inlineCode",{parentName:"p"},"(ASSERT_HEIGHT_RELATIVE 1)")," condition to prevent the money from being returned in the same block."),(0,i.kt)("h2",{id:"reveals"},"Puzzle and Solution Reveals"),(0,i.kt)("p",null,"Remember to think about when puzzles and solutions are revealed. They are revealed only at spend time of the coin that is committed to them. The only thing that the network sees prior to that is the parent coin and the puzzle hash. This can be an advantage, since you can hide sensitive information for spending the coin inside the puzzle hash before it is ever revealed. However, once the puzzle is revealed, it's revealed forever, so that sensitive information cannot be considered sensitive again."),(0,i.kt)("p",null,"Also keep in mind that if a parent coin is currying information to its child coin before it creates it, that will be public before the child coin is spent. For some wallets, this is an advantage since you may want certain data about a coin's puzzle to calculate whether or not it's yours. However, if you were trying to use a plain-text password, that won't be very secure.\nInstead, make sure to pre-commit to things with hashes and then assert that they are revealed correctly later."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Hopefully you have a better idea of what risks are involved when creating a smart coin. It's very worth your time to try and exploit your puzzles by passing in dangerous solutions or leaving out transactions/signatures."),(0,i.kt)("p",null,"You're not just trying to protect against bad actors, but also against people accidentally bricking their coins. Puzzles are usually pretty permanent, so it's worth the extra time."))}d.isMDXComponent=!0}}]);