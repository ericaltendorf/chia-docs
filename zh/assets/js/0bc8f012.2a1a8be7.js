"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4976],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,u=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?o.createElement(u,i(i({ref:t},h),{},{components:a})):o.createElement(u,i({ref:t},h))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const r={title:"Plotting Basics",slug:"/plotting-basics"},i=void 0,l={unversionedId:"plotting/plotting-basics",id:"plotting/plotting-basics",title:"Plotting Basics",description:"Keep it simple. Focus on learning what Chia is and how to make one plot. Once you do that, move on to doing more. It's easier to start simple than to do too much and get confused about what went wrong.",source:"@site/docs/plotting/plotting-basics.md",sourceDirName:"plotting",slug:"/plotting-basics",permalink:"/zh/plotting-basics",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/plotting/plotting-basics.md",tags:[],version:"current",frontMatter:{title:"Plotting Basics",slug:"/plotting-basics"},sidebar:"tutorialSidebar",previous:{title:"Intro to Cryptocurrencies",permalink:"/zh/cryptocurrency-intro"},next:{title:"Plotting Software",permalink:"/zh/plotting-software"}},s={},p=[{value:"The Basics of Chia to Get You Started",id:"the-basics-of-chia-to-get-you-started",level:2},{value:"Chia - Short Version",id:"chia---short-version",level:3},{value:"Chia - Long Version",id:"chia---long-version",level:3},{value:"What to do as a beginner",id:"what-to-do-as-a-beginner",level:2},{value:"The Basics of Farming",id:"the-basics-of-farming",level:3},{value:"The CLI - Command-line Interface",id:"the-cli---command-line-interface",level:3},{value:"Setting Expectations",id:"setting-expectations",level:2},{value:"The GUI - Graphical User Interface",id:"the-gui---graphical-user-interface",level:2},{value:"Full Node Tab in the GUI",id:"full-node-tab-in-the-gui",level:3},{value:"Wallet tab",id:"wallet-tab",level:3},{value:"Plots tab",id:"plots-tab",level:3},{value:"Farm tab",id:"farm-tab",level:3},{value:"Create a plot",id:"create-a-plot",level:2},{value:"How Plots are created",id:"how-plots-are-created",level:3},{value:"Proofs",id:"proofs",level:2},{value:"Computer Hardware",id:"computer-hardware",level:2},{value:"How to Get Help",id:"how-to-get-help",level:2}],h={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Keep it simple.")," Focus on learning what Chia is and how to make ",(0,n.kt)("em",{parentName:"p"},"one")," plot. Once you do that, move on to doing more. It's easier to start simple than to do too much and get confused about what went wrong."),(0,n.kt)("h2",{id:"the-basics-of-chia-to-get-you-started"},"The Basics of Chia to Get You Started"),(0,n.kt)("h3",{id:"chia---short-version"},"Chia - Short Version"),(0,n.kt)("p",null,"Chia is a new blockchain technology where your computer creates ",(0,n.kt)("em",{parentName:"p"},"plot")," files that you can ",(0,n.kt)("em",{parentName:"p"},"farm")," to potentially earn ",(0,n.kt)("em",{parentName:"p"},"chia")," (XCH) coins."),(0,n.kt)("h3",{id:"chia---long-version"},"Chia - Long Version"),(0,n.kt)("p",null,"Chia is a new type of cryptocurrency that is based on the capacity of pre-stored random-looking data that the user creates and stores in files called ",(0,n.kt)("em",{parentName:"p"},"plots"),". With Chia a very low resource-intensive process checks plot files for ",(0,n.kt)("em",{parentName:"p"},"proof of space and time"),". This makes Chia very fast and green. It is an improvement over proof of work blockchains, which rely on fast graphic cards and custom machines doing millions of calculations per second and wasting a lot of electricity. Chia also has many improvements to scripting, scripting environment, cryptography, usability, and scalability, and aims to be a simple, secure, and powerful blockchain."),(0,n.kt)("p",null,"The Chia software is made up of several parts called ",(0,n.kt)("strong",{parentName:"p"},"daemons"),". Each daemon does different things. The daemons important to beginners are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"node - This syncs your computer with the blockchain"),(0,n.kt)("li",{parentName:"ul"},"farmer - The farmer sends out proof requests to the harvester"),(0,n.kt)("li",{parentName:"ul"},"harvester - The harvester checks your plots to see if they satisfy the proof. If you have the best proof, you win coins.")),(0,n.kt)("h2",{id:"what-to-do-as-a-beginner"},"What to do as a beginner"),(0,n.kt)("p",null,"For now, focus on installing the Chia software, setting it up properly, and learning how to make plots. There are two main things to get working:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Making sure you are connecting to other nodes (other computers with the blockchain) and syncing with them."),(0,n.kt)("li",{parentName:"ul"},"Starting making plots and farming.")),(0,n.kt)("p",null,"The simplest way to start with Chia is to ",(0,n.kt)("a",{parentName:"p",href:"https://chia.net/download"},"install the Chia software")," on the operating system of your choice and run the GUI (Graphical User Interface). The Windows version automatically starts once installed, and the Mac version just needs to be opened from the Applications directory. Once the application is opened, it loads and starts to sync with the rest of the network and blockchain. Depending on your network setup, fully syncing can take over a day. Basically, you are syncing with everyone on the network, downloading the whole blockchain, which includes all transactions ever processed on the network. The Chia blockchain database copy will be stored on your computer. Everyone with Chia installed on their computer also has a copy."),(0,n.kt)("h3",{id:"the-basics-of-farming"},"The Basics of Farming"),(0,n.kt)("p",null,"Farming just means you have some plots and have the Chia software checking them periodically to see if they win a proof."),(0,n.kt)("admonition",{title:"Gigabytes (GB) vs Gibibytes (GiB)",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You are going to see the unit ",(0,n.kt)("em",{parentName:"p"},"GiB")," used a lot. Just know that 1 Gibibyte is equal to about 1.07 Gigabytes (GB). Most hard drives are talked about with GB so please keep that in mind.")),(0,n.kt)("p",null,"Once Chia is installed, users will use the Chia application to create plots. There are multiple plotting softwares. The one we recommend starting with is madMAx Plotter. Depending on the hardware used, it can take over an hour to create a plot. For some it will be faster. The user stores these plots on computer equipment and then farms the created plots for the potential to earn coins."),(0,n.kt)("p",null,"There are multiple options for the plot size. We recommend going with k=32. Larger is ok, but k=25 is not a valid plot size for farming."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{alt:"plot sizes",src:"/img/plot-sizes.png",width:"500"})),(0,n.kt)("p",null,"We also recommend you create the plot to a Plot NFT. This will allow you to join a pool, switch pools, or self pool."),(0,n.kt)("p",null,"Inside each plot is a large number of pre-formulated calculations stored in a large table (spreadsheet) of blocks called (hash) cells. You win potential coins by providing the winning pre-formulated (hash) code to allow the transaction to occur. The winning transaction is very quickly done within 2-3 seconds and the user is compensated with coins to facilitate the transaction. Plots have many (hash) cells inside so if one wins there is still many left that can win. In other words, you do not need to delete a plot if it wins you coins. Plots can keep earning you coins."),(0,n.kt)("h3",{id:"the-cli---command-line-interface"},"The CLI - Command-line Interface"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/cli"},"CLI")," is the more advanced way to use Chia. The CLI can do everything the GUI can do and more (like better utilize your hardware to optimize plotting). It is recommended you start with the GUI to understand the basics of Chia before starting to use the CLI."),(0,n.kt)("h2",{id:"setting-expectations"},"Setting Expectations"),(0,n.kt)("p",null,"Once you have completed plots and are farming, you will see ",(0,n.kt)("strong",{parentName:"p"},"Time to Win"),' in the farming tab. Whatever time it shows here is just an estimate. It might take 3 to 4 times longer than the time shown. For example, if it shows 2 days, it might take 5 or 8 days, sometimes even more to earn your first coin or partial coin. This is normal as luck plays a role over the short run. As you add more plots, the "time to win" decreases (more chances of winning).'),(0,n.kt)("p",null,"This is another reason we recommend creating your plots to a plot NFT. By doing this, you have the ability to join a pool and get consistent payouts regardless of your estimated time to win. With the pooling protocol, the estimated time to win refers to just 12.5% percent of the block reward which always goes to the farmer."),(0,n.kt)("h2",{id:"the-gui---graphical-user-interface"},"The GUI - Graphical User Interface"),(0,n.kt)("h3",{id:"full-node-tab-in-the-gui"},"Full Node Tab in the GUI"),(0,n.kt)("p",null,"This shows the blockchain movement. It shows that you are in sync with the blockchain. A copy of the blockchain is stored on your computer. You have a live copy that is continually syncing with everyone else in the network."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Blocks")," : This is the blockchain working"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Connections")," : Those are the connections to you and other users and their computer (nodes)")),(0,n.kt)("h3",{id:"wallet-tab"},"Wallet tab"),(0,n.kt)("p",null,"You will see your Chia coins here as they are won"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"History")," : you can see the time/date you earned coins or partial coins")),(0,n.kt)("h3",{id:"plots-tab"},"Plots tab"),(0,n.kt)("p",null,"This is where you create plots. The accepted plot size starts at 101 GiB each. Called a k32 - 101 GiB/109 GB plot."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"GiB")," is gibibytes and is the old school way computers measured space. The new hotness - especially from hard drive manufacturers - is to measure in gigabytes. Since gigabytes are based on 1000 and gibibytes are based on 1024, GB is always 1.074 times larger than GiB.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can think of each plot as a collection of bingo cards, which have a chance of winning blocks, and thus winning you coins. Your computer creates these large 101 ",(0,n.kt)("a",{parentName:"p",href:"https://simple.wikipedia.org/wiki/Gibibyte"},"GiB")," plot files (approx 108 GB - gigabytes). Inside are large tables (like Excel spreadsheets) where each cell has a random pointer to another cell in the table. This is what the computer is doing, and why it takes so long to create the plot. It is running calculations and putting the \u201canswers\u201d in these millions of cells. There are different sizes of plots but you only need to work with k=32 plots. k=33 and above are not necessary. You can read more about ",(0,n.kt)("a",{parentName:"p",href:"/k-sizes"},"k-sizes"),"."))),(0,n.kt)("h3",{id:"farm-tab"},"Farm tab"),(0,n.kt)("p",null,"This will show you how many plots you have created. On the top it will show how much Chia have been farmed. It also shows how many GiB of plots you have on the network. For example, you have 2 plots of 101 GiB created. Then it shows on the top left ",(0,n.kt)("strong",{parentName:"p"},"Total size of Plots")," as 0.2 ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/w/index.php?title=Tebibyte&redirect=no"},"TiB"),". This means you offer 0.2 TiB to the Chia network. It is calculated as 101 GiB x 2 = 202 GiB."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Latest Block Challenges")," : This shows the latest challenges and signage points, which can be thought of as mini lotteries. Every 9 seconds, there is a new signage point, which means there is a new opportunity for you to check your plots and see if you've won. Every other signage point will be a winner for someone on the network so there is a new block created about every 18 seconds.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Last Attempted Proof")," is important: It is a 2 step process."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1")," - Plot passes filter test.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2")," - Selected Plot is checked for winning hash. What this looks like in the GUI: In the ",(0,n.kt)("em",{parentName:"p"},"Last Attempted Proof"),' section you have a list of five lines. Suppose you have 157 plots \u2013 each of the five lines read 0/157. Once in awhile a plot might get selected. If a plot is selected or a 2nd plot is selected that is good news and the number changes to 1/157 or 2/157 maybe 3/157. After passing the filter, each selected plot will go through a "quality lookup," which does approximately 7 reads on your plot, and tells you whether the plots have won. If you won, it does not show any indication as the transaction is done quickly. Your wallet increases.'))))),(0,n.kt)("p",null,"Once that match shows on the first line, it will move down to lines 2-5, then if another plot passes step 1, it starts at the top also, and moves its way done the filter process."),(0,n.kt)("p",null,"Winning is very rare, and on average one person wins in the whole world every 18 seconds. On every signage point (9 seconds), all of your plots are checked to see which ones passes the ",(0,n.kt)("a",{parentName:"p",href:"/faq#what-is-the-plot-filter-and-why-didnt-my-plot-pass-it"},"plot filter"),". Approximately 1/512 of all plots will pass the plot filter for each challenge, so here you can see how many of your plots passed. With a new block every 18 seconds there are 4,608 chances to win XCH every day."),(0,n.kt)("p",null,"If for some reason those lines stop moving that is another indication you are not in sync with the database and need to resync\u2014see below."),(0,n.kt)("h1",{id:"using-the-gui"},"Using the GUI"),(0,n.kt)("h2",{id:"create-a-plot"},"Create a plot"),(0,n.kt)("p",null,"Start the process by clicking the green button saying ",(0,n.kt)("strong",{parentName:"p"},"Add a Plot"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will choose a plotting software. Getting started plotting with madMAx is the easiest. You can plot single plots in series fairly quick.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Starting size plot is k=32 (101 GiB). You need a temp storage location of at least 239 GiB (256 GB) to create the plot.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Chose number of plots. If you're just learning, get started by creating just a single plot.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select a temporary directory. This is where the temp space is filled and a lot of writing will be done. For many plots it is not recommended to use the same SSD as your primary."))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The suggestion is to use an added SSD to create plots and not the primary hard drive (especially for non-replaceable NVME like on some Mac or Windows laptops)\nIf for some reason a plot fails to complete, it has to be deleted by deleting all of its temp files. If plotting multiple plots at once, be careful not to delete the temp files of another plot that's being plotted."),(0,n.kt)("p",{parentName:"admonition"},"Make sure you are aware of ",(0,n.kt)("a",{parentName:"p",href:"/ssd-endurance"},"SSD Endurance"),".")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Select a final directory. This is where the final plot file will be copied to. Once the plot is created it will go to this location to be farmed to earn XCH. Storage will fill quickly due to the size of plots. Storage can be internal or usb connected drives.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Network drives can work but could congest your local network or be too slow to respond for rewards (the max is 30 seconds, but under 5 is ideal). It is recommended that you set the first ",(0,n.kt)("inlineCode",{parentName:"p"},"log_level")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"INFO")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yaml")," which will allow you to see extra information in ",(0,n.kt)("inlineCode",{parentName:"p"},"debug.log"),".")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Join a pool. This is a recommended option even if you decide to self pool.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"create")," to start process."))),(0,n.kt)("h3",{id:"how-plots-are-created"},"How Plots are created"),(0,n.kt)("p",null,"There are 4 phases that do operations in 7 tables."),(0,n.kt)("p",null,"Phases:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Computing tables 1 to 7:")," It creates the buckets (default: 128) as files on your temp directory, when the 7 tables are computed the plot time progress is about ",(0,n.kt)("strong",{parentName:"li"},"42%")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Back propagation tables 7 to 1:")," When the 7 tables are back propagated the plot time progress is about ",(0,n.kt)("strong",{parentName:"li"},"61%")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Compression of tables 1 to 7 in pairs:")," When the 7 tables are compressed the plot time progress is about ",(0,n.kt)("strong",{parentName:"li"},"98%")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Write checkpoint tables:")," Transfers your plot to your permanent drive. It will delete all the files in your temp storage and this completes the progress to ",(0,n.kt)("strong",{parentName:"li"},"100%"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Phase"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Step"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% Progress"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Computing table 1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Computing table 2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Computing table 3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Computing table 4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Computing table 5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Computing table 6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Computing table 7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"42%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Backpropagating on table 7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"43%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Backpropagating on table 6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"48%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Backpropagating on table 5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Backpropagating on table 4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"55%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Backpropagating on table 3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"58%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Backpropagating on table 2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"61%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Compressing tables 1 and 2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"66%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Compressing tables 2 and 3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"73%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Compressing tables 3 and 4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"79%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Compressing tables 4 and 5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"85%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Compressing tables 5 and 6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"92%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Compressing tables 6 and 7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"98%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Write checkpoint tables"),(0,n.kt)("td",{parentName:"tr",align:"right"},"100%")))),(0,n.kt)("h2",{id:"proofs"},"Proofs"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Proof"),': It is found inside the plot. Millions of "excel blocks" with formulas called proofs of space.\nThe Chia software is designed to work on a lottery system. A key element to winning the lottery of earning coins is that the more plots you have, the more proofs you have, and therefore the higher chances of winning. Someone with 1% of all the plotted space, will win about 1% of all the blocks. There are about 4608 blocks per day, each rewarding 2 new chia, so 9216 XCH are created per day.'),(0,n.kt)("p",null,"The Chia farming software gets a challenge, lets say 2021. It's going to look through lookup tables on the front of the plots. Find the closest to 2021 and this is where the time comes into play. That proof (excel block hash) has a certain quality, and only proofs that are of a certain quality or better are eligible for winning."),(0,n.kt)("p",null,'What makes Chia different from proof of work blockchains is the consensus algorithm called proof of space and time. Basically as after the farmer creates a proof of space and a block, other computers called timelords add proofs of time to the block, which is a cryptographic proof that says that a certain amount of time (like 30 seconds) has passed. So instead of the whole world mining at the same time, only a few computers are "mining" for each proof of space that won. Since these are all cryptographic proofs, they cannot be forged or broken, making the consensus extremely secure.'),(0,n.kt)("p",null,'In Chia, the only electricity required is the electricity to create the plots, and to run the hard drives, which is on the order of 10 watts per drive to power, plus CPU power required to run a full node (which is very light). In comparison, blockchains like Bitcoin and Ethereum rely on huge farms of GPUs (potentially up to 300W each) or ASICs (hundreds or thousands of watts per machine) to secure the blockchain. You can think of proof of work, as millions of computers "making" lottery tickets by using electricity, but each ticket can only be used once. Chia will use vastly less electricity as the only electricity required is the initial setup (plotting) and 10W for farming a drive.'),(0,n.kt)("h2",{id:"computer-hardware"},"Computer Hardware"),(0,n.kt)("p",null,"On an older computer you can purchase a PCIe adapter card-to take NVME/SSD drive as the new temp folder. This is internal to the PC. Some have tried to use a usb or firewire attached NVME/ SSD with some success."),(0,n.kt)("p",null,"One item to plan for is storage of plots as they fill storage quickly. As more plots are created, the discussions start to turn to terabytes of data storage instead of gigs of storage. Many use usb attached external drives for storage, internal drives, or external rack storage with many drives."),(0,n.kt)("h2",{id:"how-to-get-help"},"How to Get Help"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Get support on the ",(0,n.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Chia Keybase chat channels"),". ",(0,n.kt)("strong",{parentName:"p"},"#beginner")," and ",(0,n.kt)("strong",{parentName:"p"},"#support")," is where you can get help")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Get more questions answered in the ",(0,n.kt)("a",{parentName:"p",href:"/plotting-faq"},"plotting FAQ"),"."))))}d.isMDXComponent=!0}}]);