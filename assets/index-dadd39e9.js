import{b,d as w,j as t,c as D,z as R,A as Y,e as G,n as V,C as q,D as X,F as Z,G as tt,S as L,r as p,I as P,H as et,J as st,K as C,h as at,L as rt,N as ot,O as nt,l as H,P as lt,Q as g,R as it,U as ct}from"./index-1724e1ea.js";import{u as Q,a as dt}from"./dapplets-888a998d.js";const pt="_root_1pdcs_1",_t="_button_1pdcs_11",U={root:pt,"tag-root":"_tag-root_1pdcs_7",button:_t},K=({userStyles:s="",dappletId:e,dappletUserTags:n,dappletCommunityTags:a,dappletState:o,dappletOperationGoing:l=[]})=>{const i=Q(),{userTags:c}=b(d=>d.userData),m=w(),h=d=>{m(q({dappletId:e,userTagId:d}))},S=d=>{d.stopPropagation(),m(X(t.jsx(Z,{dappletId:e}))),m(tt(!0))};return t.jsxs("div",{className:D([U.root,s]),children:[n&&typeof n!="string"&&n.map(d=>{const _=!!l.filter(j=>j.dappletId===e&&j.userTagId===d.tagId&&j.operation===R.REMOVE_USER_TAG).length;return t.jsx(Y,{mode:G.MY_TAG,tagId:d.tagId,label:d.tagName,onClick:h,loading:_},V())}),a&&typeof a!="string"&&a.map(d=>t.jsx(Y,{mode:G.COMMUNITY_TAG,tagId:d.tagId,label:d.tagName},V())),i<=1366&&o&&(c!=null&&c.length)?t.jsx("button",{type:"button","data-testid":"add-tag-button",className:U.button,onClick:S,children:"+"}):null]})},mt="_root_l648f_1",ut="_title_l648f_7",gt="_text_l648f_16",B={root:mt,title:ut,text:gt},N=({userStyles:s="",title:e,text:n})=>t.jsxs("div",{className:D([B.root,s]),children:[t.jsx("span",{className:B.title,children:e}),t.jsx("span",{className:B.text,children:n})]}),v=(s,e)=>s!=="N/A"&&!isNaN(Number(s))?new Intl.NumberFormat("en-US").format(Number(s))+` ${e}`:s,ht="_root_6d3jl_1",xt="_wrapper_6d3jl_8",jt="_red_6d3jl_15",Nt="_green_6d3jl_19",bt="_title_6d3jl_23",T={root:ht,wrapper:xt,red:jt,green:Nt,title:bt},y=({userStyles:s="",title:e,value:n})=>{const a=Number(n)>=0?"green":"red";return t.jsxs("div",{className:T.root,children:[e&&t.jsx("span",{className:T.title,children:e}),t.jsxs("div",{className:D([T.wrapper,s,T[a]]),children:[t.jsx(L,{icon:`${a}Triangle`}),v(n,"%")]})]})},Dt=s=>s!=="N/A"&&!isNaN(Number(s))?new Date(Number(s)*1e3).toLocaleDateString():s,ft="_root_ndpbr_1",St="_burger_ndpbr_20",vt="_logo_ndpbr_60",r={root:ft,burger:St,"main-part":"_main-part_ndpbr_27","additional-part":"_additional-part_ndpbr_35","additional-fields":"_additional-fields_ndpbr_42","main-descriptor":"_main-descriptor_ndpbr_49","additional-descriptor":"_additional-descriptor_ndpbr_54",logo:vt,"dapplet-name-wrapper":"_dapplet-name-wrapper_ndpbr_66","dapplet-name":"_dapplet-name_ndpbr_66","dapplet-short-name":"_dapplet-short-name_ndpbr_82","dapplet-market-cap":"_dapplet-market-cap_ndpbr_87","dapplet-descriptor":"_dapplet-descriptor_ndpbr_95","dapplet-owner":"_dapplet-owner_ndpbr_104","main-part-header":"_main-part-header_ndpbr_112","main-part-logo-wrapper":"_main-part-logo-wrapper_ndpbr_119","dapplet-installbuttons-wrapper":"_dapplet-installbuttons-wrapper_ndpbr_125"},At=({userStyles:s="",dapplet:e,dappletUserTags:n,dappletCommunityTags:a,dragOver:o})=>{const l=w(),{dappletOperationGoing:i}=b(u=>u.userData),[c,m]=p.useState(!1),h=Q(),S=()=>{m(!c)},d=u=>{u.preventDefault(),o&&o()},_=u=>{const E=u.dataTransfer.getData("mode"),I=u.dataTransfer.getData("tagId"),k=e.dappletId;E===G.MY_TAG&&l(st({dappletId:k,userTagId:I}))},j=()=>!!i.filter(u=>u.dappletId===e.dappletId&&(u.operation===R.INSTALL||u.operation===R.UNINSTALL)).length,M=()=>t.jsxs("div",{className:D([r.root,s]),onClick:S,onDrop:_,onDragOver:d,"data-testid":"dapplet",children:[t.jsxs("div",{className:r["main-part"],children:[t.jsxs("div",{className:r["main-part-header"],children:[t.jsxs("div",{className:r["main-part-logo-wrapper"],children:[t.jsx("img",{className:r.logo,src:e.logo,alt:"Company`s logo"}),t.jsxs("div",{className:r["dapplet-name-wrapper"],children:[t.jsx("span",{className:r["dapplet-name"],children:e.name}),t.jsx("span",{className:r["dapplet-owner"],children:e.appOwner})]})]}),t.jsxs("div",{className:r["dapplet-installbuttons-wrapper"],children:[t.jsx(P,{mobile:!0,dappletId:e.dappletId,loading:j()}),c&&t.jsx(P,{mobile:!0,setMode:et.UNINSTALL,dappletId:e.dappletId})]})]}),t.jsx("span",{className:r["dapplet-descriptor"],children:e.shortDesc}),t.jsx(K,{dappletId:e.dappletId,dappletState:c,dappletOperationGoing:i,dappletUserTags:n,dappletCommunityTags:a})]}),c&&t.jsxs("div",{className:r["additional-part"],children:[t.jsx(N,{userStyles:r["main-descriptor"],title:"About",text:e.fullDesc}),t.jsxs("div",{className:r["additional-fields"],children:[t.jsx(y,{title:"Market cap",value:e.marketCap,userStyles:r["additional-descriptor"]}),t.jsx(y,{title:"Volume (24h)",value:e.marketCap,userStyles:r["additional-descriptor"]})]})]})]}),O=()=>t.jsxs("div",{className:D([r.root,s]),onDrop:_,onDragOver:d,"data-testid":"dapplet",children:[t.jsxs("div",{className:r["main-part"],children:[t.jsx("div",{className:r.burger,onClick:S,"data-testid":"dapplet-burger-button",children:t.jsx(L,{icon:"burger"})}),t.jsx("img",{className:r.logo,src:e.logo,alt:"Company`s logo"}),t.jsxs("div",{className:r["dapplet-name-wrapper"],children:[t.jsxs("span",{className:r["dapplet-name"],children:[e.name," ",t.jsx("span",{className:r["dapplet-short-name"],children:e.shortName})]}),t.jsx(y,{value:e.marketCap,userStyles:r["dapplet-market-cap"]})]}),t.jsx("span",{className:r["dapplet-descriptor"],children:e.shortDesc}),t.jsx("span",{className:r["dapplet-owner"],children:e.appOwner}),t.jsx(K,{dappletId:e.dappletId,dappletState:c,dappletOperationGoing:i,dappletUserTags:n,dappletCommunityTags:a}),t.jsx(P,{dappletId:e.dappletId,loading:j()})]}),c&&t.jsxs("div",{className:r["additional-part"],children:[t.jsx(N,{userStyles:r["main-descriptor"],title:"About",text:e.fullDesc}),t.jsxs("div",{className:r["additional-fields"],children:[t.jsx(y,{title:"Market cap",value:e.marketCap,userStyles:r["additional-descriptor"]}),t.jsx(y,{title:"Volume (24h)",value:e.volume,userStyles:r["additional-descriptor"]}),t.jsx(N,{userStyles:r["additional-descriptor"],title:"Volume/Market cap (24h)",text:v(e.volumePerMarketCap,"%")}),t.jsx(N,{userStyles:r["additional-descriptor"],title:"Circulating supply",text:v(e.circulatingSupply,e.shortName)}),t.jsx(N,{userStyles:r["additional-descriptor"],title:"Total supply",text:v(e.totalSupply,e.shortName)}),t.jsx(N,{userStyles:r["additional-descriptor"],title:"Max. supply",text:v(e.maxSupply,e.shortName)}),t.jsx(N,{userStyles:r["additional-descriptor"],title:"Fully diluted market cap",text:v(e.fullyDilutedMarketCap,"$")}),t.jsx(N,{userStyles:r["additional-descriptor"],title:"Launched at",text:Dt(e.date)})]})]})]});return h<=880?M():O()},yt=()=>{const{dapplets:s,searchString:e}=b(o=>o.dapplets),[n,a]=p.useState(void 0);return p.useEffect(()=>{if(s!=null&&s.length&&e!==""){const o=s.filter(l=>l.name.toLowerCase().includes(e.toLowerCase()));a(o)}else a(s)},[s,e]),{items:n}};var A=(s=>(s.WAITING="waiting",s.LOADING="loading",s.ADDING_DAPPLETS="adding dapplets",s.NO_DAPPLETS_AVAILABLE="No dapplets available",s))(A||{});const wt=()=>{const{isLoadingDapplets:s,loadFilter:e,lastVisible:n}=b(_=>_.dapplets),{isLoadingUserData:a}=b(_=>_.userData),{items:o}=yt(),[l,i]=p.useState(!1),[c,m]=p.useState("loading"),h=w(),S=async()=>{await h(dt({...e}))},d=_=>{var u,E,I,k;const j=Number((E=(u=_==null?void 0:_.target)==null?void 0:u.documentElement)==null?void 0:E.scrollHeight),M=Number((k=(I=_==null?void 0:_.target)==null?void 0:I.documentElement)==null?void 0:k.scrollTop),O=window.innerHeight;j-(M+O)===0&&i(!0)};return p.useEffect(()=>{(s||a)&&m("loading"),!s&&!a&&(o!=null&&o.length)&&m("waiting"),!s&&!a&&!(o!=null&&o.length)&&m("No dapplets available"),l&&n!==C.NO_MORE_DAPPLETS&&!s&&m("adding dapplets")},[s,a,o==null?void 0:o.length,l,n]),p.useEffect(()=>{n!==C.NO_MORE_DAPPLETS&&i(!1),n===C.NO_MORE_DAPPLETS&&i(!0)},[n]),p.useEffect(()=>{l&&n!==C.NO_MORE_DAPPLETS&&!s&&h(at({...e,withStartAfter:n}))},[l]),p.useEffect(()=>{!a&&!s&&S()},[a,e]),p.useEffect(()=>(h(rt()),document.addEventListener("scroll",d),()=>{h(ot(!0)),h(nt(void 0)),document.removeEventListener("scroll",d)}),[]),{status:c,items:o}},Et="_fallback_st6kg_1",It="_text_st6kg_9",kt="_objects_st6kg_25",x={fallback:Et,text:It,"central-body":"_central-body_st6kg_15","spin-earth-on-hover":"_spin-earth-on-hover_st6kg_20",objects:kt,"object-rocket":"_object-rocket_st6kg_30","rocket-movement":"_rocket-movement_st6kg_1","object-earth":"_object-earth_st6kg_39","object-moon":"_object-moon_st6kg_46","spin-earth":"_spin-earth_st6kg_20"},Ct=({text:s})=>t.jsx("div",{className:x.fallback,children:t.jsx("div",{className:x.stars,children:t.jsxs("div",{className:x["central-body"],children:[t.jsx("span",{className:x.text,children:s}),t.jsxs("div",{className:x.objects,children:[t.jsx("img",{className:x["object-rocket"],src:"images/rocket.svg",width:"40px"}),t.jsxs("div",{className:x["earth-moon"],children:[t.jsx("img",{className:x["object-earth"],src:"images/earth.svg",width:"100px"}),t.jsx("img",{className:x["object-moon"],src:"images/moon.svg",width:"80px"})]})]})]})})}),W=(s,e,n)=>{let a=n.filter(l=>l.dappletId===s)[0],o=[];return a&&Object.prototype.hasOwnProperty.call(a,"communityTags")&&(a=a,o=a.communityTags),a&&Object.prototype.hasOwnProperty.call(a,"userTags")&&(a=a,o=a.userTags),o.length?o.map(i=>{var m;const c=(m=e.filter(h=>h.tagId===i)[0])==null?void 0:m.tagName;return{tagId:i,tagName:c}}):[]},Tt="_root_v8hzi_1",Lt="_fallback_v8hzi_11",Mt="_spinner_v8hzi_19",$={root:Tt,fallback:Lt,spinner:Mt},Ot=()=>{const{tags:s}=b(l=>l.dapplets),{userDapplets:e,userTags:n}=b(l=>l.userData),{status:a,items:o}=wt();return t.jsxs("div",{className:$.root,children:[a===A.LOADING&&t.jsx("div",{className:$.fallback,children:t.jsx(H,{})}),(a===A.WAITING||a===A.ADDING_DAPPLETS)&&o&&o.map(l=>t.jsx(At,{dapplet:l,dappletUserTags:W(l.dappletId,n,e),dappletCommunityTags:W(l.dappletId,s,o)},V())),a===A.NO_DAPPLETS_AVAILABLE&&t.jsx(Ct,{text:"No dapplets available"}),a===A.ADDING_DAPPLETS&&t.jsx("div",{className:$.spinner,children:t.jsx(H,{width:100,height:50,strokeWidth:3})})]})},Pt="_root_xpfc3_1",Bt="_option_xpfc3_40",f={root:Pt,"span-wrapper":"_span-wrapper_xpfc3_16",option:Bt,"drop-down":"_drop-down_xpfc3_44"},$t=({userStyles:s=""})=>{const{orderBy:e}=b(c=>c.dapplets),[n,a]=p.useState(!1),o=w();p.useEffect(()=>{o(lt())},[e]);const l=()=>a(!n),i=c=>{o(it(c)),l()};return t.jsxs("div",{className:D([f.root,s]),children:[t.jsxs("div",{className:f["span-wrapper"],onClick:l,"data-testid":"open-dropdown",children:[t.jsx("span",{style:e?{padding:0}:{padding:0,color:"#7F7F7F"},children:e||"orderBy"}),t.jsx(L,{icon:"arrowDown"})]}),n&&t.jsxs("div",{className:f["drop-down"],onMouseLeave:l,children:[t.jsx("div",{className:f.option,style:{borderTopRightRadius:"10px",borderTopLeftRadius:"10px"},children:t.jsx("span",{style:e===g.ASC_BY_NAME?{color:"#7F7F7F"}:{},onClick:()=>i(g.ASC_BY_NAME),children:g.ASC_BY_NAME})}),t.jsx("span",{className:f.option,style:e===g.DESC_BY_NAME?{color:"#7F7F7F"}:{},onClick:()=>i(g.DESC_BY_NAME),children:g.DESC_BY_NAME}),t.jsx("span",{className:f.option,style:e===g.ASC_BY_MARKET_CAP?{color:"#7F7F7F"}:{},onClick:()=>i(g.ASC_BY_MARKET_CAP),children:g.ASC_BY_MARKET_CAP}),t.jsx("div",{className:f.option,style:{borderBottomRightRadius:"10px",borderBottomLeftRadius:"10px"},children:t.jsx("span",{style:e===g.DESC_BY_MARKET_CAP?{color:"#7F7F7F"}:{},onClick:()=>i(g.DESC_BY_MARKET_CAP),children:g.DESC_BY_MARKET_CAP})})]})]})};function Ft(s,e){const[n,a]=p.useState(s);return p.useEffect(()=>{const o=setTimeout(()=>{a(s)},e);return()=>{clearTimeout(o)}},[s]),n}const Rt="_root_ld61j_1",Gt="_glass_ld61j_20",z={root:Rt,glass:Gt},Vt=({userStyles:s="",placeholder:e})=>{const n=w(),[a,o]=p.useState(""),l=Ft(a,300);return p.useEffect(()=>{n(ct(l))},[l]),t.jsxs("div",{className:D([z.root,s]),children:[t.jsx(L,{userStyles:z.glass,icon:"glass"}),t.jsx("input",{type:"text",name:"searchinput",maxLength:30,placeholder:e,value:a,onChange:i=>o(i.target.value)})]})},Yt="_root_1hvr8_1",Ht="_margin_1hvr8_7",J={root:Yt,margin:Ht},Ut=({userStyles:s=""})=>t.jsxs("div",{className:D([J.root,s]),children:[t.jsx(Vt,{placeholder:"Search"}),t.jsx($t,{userStyles:J.margin})]}),Kt="_root_3eyn4_1",Wt="_divider_3eyn4_17",F={root:Kt,"root-wrapper":"_root-wrapper_3eyn4_10",divider:Wt},zt=()=>t.jsx("div",{className:F.root,children:t.jsxs("div",{className:F["root-wrapper"],children:[t.jsx(Ut,{}),t.jsx("div",{className:F.divider}),t.jsx(Ot,{})]})}),qt=zt;export{qt as default};