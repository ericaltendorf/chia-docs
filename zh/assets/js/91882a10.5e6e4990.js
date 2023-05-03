"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>_});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,_=d["".concat(i,".").concat(u)]||d[u]||h[u]||r;return n?o.createElement(_,s(s({ref:t},c),{},{components:n})):o.createElement(_,s({ref:t},c))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"Peer Protocol",slug:"/peer-protocol"},s=void 0,l={unversionedId:"protocol/peer-protocol",id:"protocol/peer-protocol",title:"Peer Protocol",description:"This protocol is a bidirectional protocol for communication between full nodes in the Chia system.",source:"@site/docs/protocol/peer-protocol.md",sourceDirName:"protocol",slug:"/peer-protocol",permalink:"/zh/peer-protocol",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/protocol/peer-protocol.md",tags:[],version:"current",frontMatter:{title:"Peer Protocol",slug:"/peer-protocol"},sidebar:"tutorialSidebar",previous:{title:"Harvester Protocol",permalink:"/zh/harvester-protocol"},next:{title:"Summary",permalink:"/zh/pool-protocol"}},i={},p=[{value:"new_peak",id:"new_peak",level:2},{value:"new_transaction",id:"new_transaction",level:2},{value:"request_transaction",id:"request_transaction",level:2},{value:"respond_transaction",id:"respond_transaction",level:2},{value:"request_proof_of_weight",id:"request_proof_of_weight",level:2},{value:"respond_proof_of_weight",id:"respond_proof_of_weight",level:2},{value:"request_block",id:"request_block",level:2},{value:"respond_block",id:"respond_block",level:2},{value:"reject_block",id:"reject_block",level:2},{value:"request_blocks",id:"request_blocks",level:2},{value:"respond_blocks",id:"respond_blocks",level:2},{value:"reject_blocks",id:"reject_blocks",level:2},{value:"new_unfinished_block",id:"new_unfinished_block",level:2},{value:"request_unfinished_block",id:"request_unfinished_block",level:2},{value:"respond_unfinished_block",id:"respond_unfinished_block",level:2},{value:"new_signage_point_or_end_of_sub_slot",id:"new_signage_point_or_end_of_sub_slot",level:2},{value:"request_signage_point_or_end_of_sub_slot",id:"request_signage_point_or_end_of_sub_slot",level:2},{value:"respond_signage_point",id:"respond_signage_point",level:2},{value:"respond_end_of_sub_slot",id:"respond_end_of_sub_slot",level:2},{value:"request_mempool_transactions",id:"request_mempool_transactions",level:2},{value:"new_compact_vdf",id:"new_compact_vdf",level:2},{value:"request_compact_vdf",id:"request_compact_vdf",level:2},{value:"respond_compact_vdf",id:"respond_compact_vdf",level:2},{value:"request_peers",id:"request_peers",level:2},{value:"respond_peers",id:"respond_peers",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This protocol is a bidirectional protocol for communication between full nodes in the Chia system.\nThe sender is the full node sending the message, and the recipient is the full node that is receiving the message."),(0,a.kt)("h2",{id:"new_peak"},"new_peak"),(0,a.kt)("p",null,"Sent to peers whenever our node's peak weight advances (whenever the blockchain moves forward).\nThe fork point allows peers to detect how deep of a reorg happened, and fetch the correct blocks.\nThe unfinished reward block hash allows the receiving peer to use their cache for unfinished blocks,\nsince they most likely already have the unfinished\nversion of the same block, and therefore don't need to re-request the block transactions generator."),(0,a.kt)("p",null,"Usually, during normal operation, peers will ask for just the latest block, or\nignore this message if they have already received it from another peer. If we are a few blocks behind, blocks are\nfetched one by one in reverse order up to the fork."),(0,a.kt)("p",null,"If we are far behind this peak, we will start a batch sync (download a few tens of blocks in batches) or a long sync,\nwhere we download a weight proof and then download many blocks in batches."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class NewPeak(Streamable):\n    header_hash: bytes32    # header_hash of new block\n    height: uint32          # height of new block\n    weight: uint128         # weight of new block\n    fork_point_with_previous_peak: uint32\n    unfinished_reward_block_hash: bytes32\n")),(0,a.kt)("h2",{id:"new_transaction"},"new_transaction"),(0,a.kt)("p",null,"Sent to peers when a new spend bundle has been added to the mempool. The receiving peer can then choose to ignore\nit, or request the whole transaction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class NewTransaction(Streamable):\n    transaction_id: bytes32  # hash of the spend bundle\n    cost: uint64             # cost of the transaction, used to see if fees are sufficient for mempool inclusion\n    fees: uint64             # fees in mojo of transaction, used to see if fees are sufficient for mempool inclusion\n")),(0,a.kt)("h2",{id:"request_transaction"},"request_transaction"),(0,a.kt)("p",null,"Request for a full transaction (spend bundle) from a peer by its id. If a peer does not respond, other peers are contacted\nfor the same transaction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestTransaction(Streamable):\n    transaction_id: bytes32  # hash of the spendbundle\n")),(0,a.kt)("h2",{id:"respond_transaction"},"respond_transaction"),(0,a.kt)("p",null,"Response for a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_transaction")," message. Sends a spend bundle to a peer. To see the contents of a ",(0,a.kt)("inlineCode",{parentName:"p"},"SpendBundle"),", see the ",(0,a.kt)("a",{parentName:"p",href:"/spend-bundles"},"Spend Bundles page"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondTransaction(Streamable):\n    transaction: SpendBundle\n")),(0,a.kt)("h2",{id:"request_proof_of_weight"},"request_proof_of_weight"),(0,a.kt)("p",null,"Request a weight proof from a peer. This is done right before starting a long sync. The weight proof allows our\nnode to validate whether a ",(0,a.kt)("inlineCode",{parentName:"p"},"new_peak"),' that we received from a peer corresponds to an actual valid blockchain. It is\nproof that a certain amount of "weight", or space and time, has been used on that blockchain.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestProofOfWeight(Streamable):\n    total_number_of_blocks: uint32  # Height of the peak block\n    tip: bytes32                    # The header_hash of the peak block\n")),(0,a.kt)("h2",{id:"respond_proof_of_weight"},"respond_proof_of_weight"),(0,a.kt)("p",null,"Response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_proof_of_weight")," message. Note that weight proofs can be quite large, in the tens of MB range.\nIf the chain VDFs are compressed (aka blueboxed), then they weight proofs will be smaller.\nThis is the V1 version of weight proofs, more efficient versions might be added in the future."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondProofOfWeight(Streamable):\n    wp: WeightProof\n    tip: bytes32\n")),(0,a.kt)("h2",{id:"request_block"},"request_block"),(0,a.kt)("p",null,"Request for a block at a certain height from a peer. Called after receiving a ",(0,a.kt)("inlineCode",{parentName:"p"},"new_peak")," message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestBlock(Streamable):\n    height: uint32                   # Height of the block to request\n    include_transaction_block: bool  # Whether to include transaction data\n")),(0,a.kt)("h2",{id:"respond_block"},"respond_block"),(0,a.kt)("p",null,"Response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_block")," message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondBlock(Streamable):\n    block: FullBlock\n")),(0,a.kt)("h2",{id:"reject_block"},"reject_block"),(0,a.kt)("p",null,"Rejection to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_block")," message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RejectBlock(Streamable):\n    height: uint32\n")),(0,a.kt)("h2",{id:"request_blocks"},"request_blocks"),(0,a.kt)("p",null,"Request multiple blocks at once from a peer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestBlocks(Streamable):\n    start_height: uint32\n    end_height: uint32               # Inclusive\n    include_transaction_block: bool  # Whether to include transaction data\n")),(0,a.kt)("h2",{id:"respond_blocks"},"respond_blocks"),(0,a.kt)("p",null,"Response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_blocks")," message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondBlocks(Streamable):\n    start_height: uint32\n    end_height: uint32\n    blocks: List[FullBlock]\n")),(0,a.kt)("h2",{id:"reject_blocks"},"reject_blocks"),(0,a.kt)("p",null,"Rejection to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_blocks")," message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RejectBlocks(Streamable):\n    start_height: uint32\n    end_height: uint32\n")),(0,a.kt)("h2",{id:"new_unfinished_block"},"new_unfinished_block"),(0,a.kt)("p",null,'Notification to another peer that a new unfinished block was added to the cache. These unfinished blocks are kept\naround temporarily, until the infusion point VDF is released, and the block can be "finished" and added to the blockchain.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class NewUnfinishedBlock(Streamable):\n    unfinished_reward_hash: bytes32\n")),(0,a.kt)("h2",{id:"request_unfinished_block"},"request_unfinished_block"),(0,a.kt)("p",null,"Request for an unfinished block from a peer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestUnfinishedBlock(Streamable):\n    unfinished_reward_hash: bytes32\n")),(0,a.kt)("h2",{id:"respond_unfinished_block"},"respond_unfinished_block"),(0,a.kt)("p",null,"Response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_unfinished_block")," message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondUnfinishedBlock(Streamable):\n    unfinished_block: UnfinishedBlock\n")),(0,a.kt)("h2",{id:"new_signage_point_or_end_of_sub_slot"},"new_signage_point_or_end_of_sub_slot"),(0,a.kt)("p",null,"Sent when the node adds a new signage point or a new end of sub slot to the full node store. The receiver can choose\nto request the object, or potentially request the previous sub slot, if they are far behind. For example, recently\nsynced up to the peak of the blockchain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class NewSignagePointOrEndOfSubSlot(Streamable):\n    prev_challenge_hash: Optional[bytes32]  # Challenge hash at the start of the previous sub slot, if present\n    challenge_hash: bytes32                 # Challenge hash at the start of the sub slot\n    index_from_challenge: uint8             # Index from the start, 0 for end of sub slot\n    last_rc_infusion: bytes32               # Last reward chain infusion hash\n")),(0,a.kt)("h2",{id:"request_signage_point_or_end_of_sub_slot"},"request_signage_point_or_end_of_sub_slot"),(0,a.kt)("p",null,"Request for a signage point or end of slot."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestSignagePointOrEndOfSubSlot(Streamable):\n    challenge_hash: bytes32\n    index_from_challenge: uint8\n    last_rc_infusion: bytes32\n")),(0,a.kt)("h2",{id:"respond_signage_point"},"respond_signage_point"),(0,a.kt)("p",null,"Response for ",(0,a.kt)("inlineCode",{parentName:"p"},"request_signage_point_or_end_of_sub_slot"),". After receiving this message, the recipient will check that\nall VDFs are correct, and forward it to other full nodes and potentially farmers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondSignagePoint(Streamable):\n    index_from_challenge: uint8       # Which index out of the 64 signage points, cannot be 0 since that is the EOS\n    challenge_chain_vdf: VDFInfo\n    challenge_chain_proof: VDFProof\n    reward_chain_vdf: VDFInfo\n    reward_chain_proof: VDFProof\n")),(0,a.kt)("h2",{id:"respond_end_of_sub_slot"},"respond_end_of_sub_slot"),(0,a.kt)("p",null,"Another response for ",(0,a.kt)("inlineCode",{parentName:"p"},"request_signage_point_or_end_of_sub_slot")," in the case where ",(0,a.kt)("inlineCode",{parentName:"p"},"index_from_challenge")," is zero.\nThis is also verified and forwarded by the full node, similar to signage points."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondEndOfSubSlot(Streamable):\n    end_of_slot_bundle: EndOfSubSlotBundle\n")),(0,a.kt)("h2",{id:"request_mempool_transactions"},"request_mempool_transactions"),(0,a.kt)("p",null,"This is a request for transactions in the mempool. The filter corresponds to a BIP158 Compact Block Filter, which\nallows the recipient to see what transactions the sender already has (with some small chance for false positives),\nwithout sending all transaction IDs. The recipient can then respond using ",(0,a.kt)("inlineCode",{parentName:"p"},"respond_transction")," directly, but should\nnot send a very large number of transactions, to not overwhelm the original sending peer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestMempoolTransactions(Streamable):\n    filter: bytes\n")),(0,a.kt)("h2",{id:"new_compact_vdf"},"new_compact_vdf"),(0,a.kt)("p",null,"A notification to a peer that a new compact VDF has been added to the blockchain. Compact VDFs\nare smaller versions of VDF proofs present in blocks. They do not change the block itself, they just\ncompress the block data to keep the DB smaller and sync time lower. The actual proof"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class NewCompactVDF(Streamable):\n    height: uint32           # Height of the block which has a new VDF\n    header_hash: bytes32     # Header hash of that block\n    field_vdf: uint8         # Which VDF in that block was updated (blocks have multiple VDFs)\n    vdf_info: VDFInfo        # Info of the VDF that was updated\n")),(0,a.kt)("h2",{id:"request_compact_vdf"},"request_compact_vdf"),(0,a.kt)("p",null,"A request to a peer for a compact VDf."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestCompactVDF(Streamable):\n    height: uint32\n    header_hash: bytes32\n    field_vdf: uint8\n    vdf_info: VDFInfo\n")),(0,a.kt)("h2",{id:"respond_compact_vdf"},"respond_compact_vdf"),(0,a.kt)("p",null,"A response to a peer that requested a compact VDF."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondCompactVDF(Streamable):\n    height: uint32\n    header_hash: bytes32\n    field_vdf: uint8\n    vdf_info: VDFInfo\n    vdf_proof: VDFProof\n")),(0,a.kt)("h2",{id:"request_peers"},"request_peers"),(0,a.kt)("p",null,"Request a list of peers. There is no body in this message. This is usually sent when connecting\nto a peer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class RequestPeers(Streamable):\n    """\n    Return full list of peers\n    """\n')),(0,a.kt)("h2",{id:"respond_peers"},"respond_peers"),(0,a.kt)("p",null,"A response to ",(0,a.kt)("inlineCode",{parentName:"p"},"request_peers"),", containing a list of ip and port for each peer. Must be no larger than 1000.\nThe timestamp corresponds to the last time this peer's record was updated, based on the peer DB update rules."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondPeers(Streamable):\n    peer_list: List[TimestampedPeerInfo]\n")))}h.isMDXComponent=!0}}]);