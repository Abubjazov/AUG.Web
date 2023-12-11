import{b as N,d as A,j as t,c as y,z as O,A as R,e as P,n as B,C as q,D as X,F as Z,G as tt,S as k,r as p,I as C,H as et,J as st,K as E,h as at,L as ot,N as rt,O as nt,l as $,P as lt,Q as m,R as ct,U as it}from"./index-ccd7243b.js";import{u as H,a as dt}from"./dapplets-b7536b6c.js";const pt="_root_1pdcs_1",_t="_button_1pdcs_11",F={root:pt,"tag-root":"_tag-root_1pdcs_7",button:_t},G=({userStyles:s="",dappletId:e,dappletUserTags:n,dappletCommunityTags:a,dappletState:r,dappletOperationGoing:l=[]})=>{const c=H(),{userTags:i}=N(d=>d.userData),_=A(),u=d=>{_(q({dappletId:e,userTagId:d}))},f=d=>{d.stopPropagation(),_(X(t.jsx(Z,{dappletId:e}))),_(tt(!0))};return t.jsxs("div",{className:y([F.root,s]),children:[n&&typeof n!="string"&&n.map(d=>{const h=!!l.filter(v=>v.dappletId===e&&v.userTagId===d.tagId&&v.operation===O.REMOVE_USER_TAG).length;return t.jsx(R,{mode:P.MY_TAG,tagId:d.tagId,label:d.tagName,onClick:u,loading:h},B())}),a&&typeof a!="string"&&a.map(d=>t.jsx(R,{mode:P.COMMUNITY_TAG,tagId:d.tagId,label:d.tagName},B())),c<=1366&&r&&(i!=null&&i.length)?t.jsx("button",{type:"button","data-testid":"add-tag-button",className:F.button,onClick:f,children:"+"}):null]})},mt="_root_l648f_1",ut="_title_l648f_7",gt="_text_l648f_16",T={root:mt,title:ut,text:gt},j=({userStyles:s="",title:e,text:n})=>t.jsxs("div",{className:y([T.root,s]),children:[t.jsx("span",{className:T.title,children:e}),t.jsx("span",{className:T.text,children:n})]}),w=(s,e)=>s!=="N/A"&&!isNaN(Number(s))?new Intl.NumberFormat("en-US").format(Number(s))+` ${e}`:s,ht="_root_6d3jl_1",xt="_wrapper_6d3jl_8",jt="_red_6d3jl_15",Nt="_green_6d3jl_19",yt="_title_6d3jl_23",I={root:ht,wrapper:xt,red:jt,green:Nt,title:yt},S=({userStyles:s="",title:e,value:n})=>{const a=Number(n)>=0?"green":"red";return t.jsxs("div",{className:I.root,children:[e&&t.jsx("span",{className:I.title,children:e}),t.jsxs("div",{className:y([I.wrapper,s,I[a]]),children:[t.jsx(k,{icon:`${a}Triangle`}),w(n,"%")]})]})},Dt=s=>s!=="N/A"&&!isNaN(Number(s))?new Date(Number(s)*1e3).toLocaleDateString():s,ft="_root_lwcya_1",vt="_burger_lwcya_20",wt="_logo_lwcya_60",o={root:ft,burger:vt,"main-part":"_main-part_lwcya_27","additional-part":"_additional-part_lwcya_35","additional-fields":"_additional-fields_lwcya_42","main-descriptor":"_main-descriptor_lwcya_49","additional-descriptor":"_additional-descriptor_lwcya_54",logo:wt,"dapplet-name-wrapper":"_dapplet-name-wrapper_lwcya_64","dapplet-name":"_dapplet-name_lwcya_64","dapplet-short-name":"_dapplet-short-name_lwcya_80","dapplet-market-cap":"_dapplet-market-cap_lwcya_85","dapplet-descriptor":"_dapplet-descriptor_lwcya_93","dapplet-owner":"_dapplet-owner_lwcya_102","main-part-header":"_main-part-header_lwcya_110","main-part-logo-wrapper":"_main-part-logo-wrapper_lwcya_117","dapplet-installbuttons-wrapper":"_dapplet-installbuttons-wrapper_lwcya_123"},bt=({userStyles:s="",dapplet:e,dappletUserTags:n,dappletCommunityTags:a,dragOver:r})=>{const l=A(),{dappletOperationGoing:c}=N(g=>g.userData),[i,_]=p.useState(!1),u=H(),f=()=>{_(!i)},d=g=>{g.preventDefault(),r&&r()},h=g=>{const z=g.dataTransfer.getData("mode"),J=g.dataTransfer.getData("tagId"),Q=e.dappletId;z===P.MY_TAG&&l(st({dappletId:Q,userTagId:J}))},v=()=>!!c.filter(g=>g.dappletId===e.dappletId&&(g.operation===O.INSTALL||g.operation===O.UNINSTALL)).length,K=()=>t.jsxs("div",{className:y([o.root,s]),onClick:f,onDrop:h,onDragOver:d,"data-testid":"dapplet",children:[t.jsxs("div",{className:o["main-part"],children:[t.jsxs("div",{className:o["main-part-header"],children:[t.jsxs("div",{className:o["main-part-logo-wrapper"],children:[t.jsx("img",{className:o.logo,width:"50px",height:"50px",src:e.logo,alt:"Company`s logo"}),t.jsxs("div",{className:o["dapplet-name-wrapper"],children:[t.jsx("span",{className:o["dapplet-name"],children:e.name}),t.jsx("span",{className:o["dapplet-owner"],children:e.appOwner})]})]}),t.jsxs("div",{className:o["dapplet-installbuttons-wrapper"],children:[t.jsx(C,{mobile:!0,dappletId:e.dappletId,loading:v()}),i&&t.jsx(C,{mobile:!0,setMode:et.UNINSTALL,dappletId:e.dappletId})]})]}),t.jsx("span",{className:o["dapplet-descriptor"],children:e.shortDesc}),t.jsx(G,{dappletId:e.dappletId,dappletState:i,dappletOperationGoing:c,dappletUserTags:n,dappletCommunityTags:a})]}),i&&t.jsxs("div",{className:o["additional-part"],children:[t.jsx(j,{userStyles:o["main-descriptor"],title:"About",text:e.fullDesc}),t.jsxs("div",{className:o["additional-fields"],children:[t.jsx(S,{title:"Market cap",value:e.marketCap,userStyles:o["additional-descriptor"]}),t.jsx(S,{title:"Volume (24h)",value:e.volume,userStyles:o["additional-descriptor"]})]})]})]}),W=()=>t.jsxs("div",{className:y([o.root,s]),onDrop:h,onDragOver:d,"data-testid":"dapplet",children:[t.jsxs("div",{className:o["main-part"],children:[t.jsx("div",{className:o.burger,onClick:f,"data-testid":"dapplet-burger-button",children:t.jsx(k,{icon:"burger"})}),t.jsx("img",{className:o.logo,src:e.logo,width:"50px",height:"50px",alt:"Company`s logo"}),t.jsxs("div",{className:o["dapplet-name-wrapper"],children:[t.jsxs("span",{className:o["dapplet-name"],children:[e.name," ",t.jsx("span",{className:o["dapplet-short-name"],children:e.shortName})]}),t.jsx(S,{value:e.marketCap,userStyles:o["dapplet-market-cap"]})]}),t.jsx("span",{className:o["dapplet-descriptor"],children:e.shortDesc}),t.jsx("span",{className:o["dapplet-owner"],children:e.appOwner}),t.jsx(G,{dappletId:e.dappletId,dappletState:i,dappletOperationGoing:c,dappletUserTags:n,dappletCommunityTags:a}),t.jsx(C,{dappletId:e.dappletId,loading:v()})]}),i&&t.jsxs("div",{className:o["additional-part"],children:[t.jsx(j,{userStyles:o["main-descriptor"],title:"About",text:e.fullDesc}),t.jsxs("div",{className:o["additional-fields"],children:[t.jsx(S,{title:"Market cap",value:e.marketCap,userStyles:o["additional-descriptor"]}),t.jsx(S,{title:"Volume (24h)",value:e.volume,userStyles:o["additional-descriptor"]}),t.jsx(j,{userStyles:o["additional-descriptor"],title:"Volume/Market cap (24h)",text:w(e.volumePerMarketCap,"%")}),t.jsx(j,{userStyles:o["additional-descriptor"],title:"Circulating supply",text:w(e.circulatingSupply,e.shortName)}),t.jsx(j,{userStyles:o["additional-descriptor"],title:"Total supply",text:w(e.totalSupply,e.shortName)}),t.jsx(j,{userStyles:o["additional-descriptor"],title:"Max. supply",text:w(e.maxSupply,e.shortName)}),t.jsx(j,{userStyles:o["additional-descriptor"],title:"Fully diluted market cap",text:w(e.fullyDilutedMarketCap,"$")}),t.jsx(j,{userStyles:o["additional-descriptor"],title:"Launched at",text:Dt(e.date)})]})]})]});return u<=880?K():W()},St=()=>{const{dapplets:s,searchString:e}=N(r=>r.dapplets),[n,a]=p.useState(void 0);return p.useEffect(()=>{if(s!=null&&s.length&&e!==""){const r=s.filter(l=>l.name.toLowerCase().includes(e.toLowerCase()));a(r)}else a(s)},[s,e]),{items:n}};var b=(s=>(s.WAITING="waiting",s.LOADING="loading",s.ADDING_DAPPLETS="adding dapplets",s.NO_DAPPLETS_AVAILABLE="No dapplets available",s))(b||{});const At=()=>{const{isLoadingDapplets:s,loadFilter:e,lastVisible:n}=N(h=>h.dapplets),{isLoadingUserData:a}=N(h=>h.userData),{items:r}=St(),[l,c]=p.useState(!1),[i,_]=p.useState("loading"),u=A(),f=async()=>{await u(dt({...e}))},d=()=>{document.documentElement.getBoundingClientRect().bottom===document.documentElement.clientHeight&&c(!0)};return p.useEffect(()=>{(s||a)&&_("loading"),!s&&!a&&(r!=null&&r.length)&&_("waiting"),!s&&!a&&!(r!=null&&r.length)&&_("No dapplets available"),l&&n!==E.NO_MORE_DAPPLETS&&!s&&_("adding dapplets")},[s,a,r==null?void 0:r.length,l,n]),p.useEffect(()=>{n!==E.NO_MORE_DAPPLETS&&c(!1),n===E.NO_MORE_DAPPLETS&&c(!0)},[n]),p.useEffect(()=>{l&&n!==E.NO_MORE_DAPPLETS&&!s&&u(at({...e,withStartAfter:n}))},[l]),p.useEffect(()=>{!a&&!s&&f()},[a,e]),p.useEffect(()=>(u(ot()),document.addEventListener("scroll",d),()=>{u(rt(!0)),u(nt(void 0)),document.removeEventListener("scroll",d)}),[]),{status:i,items:r}},Et="_fallback_st6kg_1",It="_text_st6kg_9",kt="_objects_st6kg_25",x={fallback:Et,text:It,"central-body":"_central-body_st6kg_15","spin-earth-on-hover":"_spin-earth-on-hover_st6kg_20",objects:kt,"object-rocket":"_object-rocket_st6kg_30","rocket-movement":"_rocket-movement_st6kg_1","object-earth":"_object-earth_st6kg_39","object-moon":"_object-moon_st6kg_46","spin-earth":"_spin-earth_st6kg_20"},Ct=({text:s})=>t.jsx("div",{className:x.fallback,children:t.jsx("div",{className:x.stars,children:t.jsxs("div",{className:x["central-body"],children:[t.jsx("span",{className:x.text,children:s}),t.jsxs("div",{className:x.objects,children:[t.jsx("img",{className:x["object-rocket"],src:"images/rocket.svg",width:"40px"}),t.jsxs("div",{className:x["earth-moon"],children:[t.jsx("img",{className:x["object-earth"],src:"images/earth.svg",width:"100px"}),t.jsx("img",{className:x["object-moon"],src:"images/moon.svg",width:"80px"})]})]})]})})}),V=(s,e,n)=>{let a=n.filter(l=>l.dappletId===s)[0],r=[];return a&&Object.prototype.hasOwnProperty.call(a,"communityTags")&&(a=a,r=a.communityTags),a&&Object.prototype.hasOwnProperty.call(a,"userTags")&&(a=a,r=a.userTags),r.length?r.map(c=>{var _;const i=(_=e.filter(u=>u.tagId===c)[0])==null?void 0:_.tagName;return{tagId:c,tagName:i}}):[]},Tt="_root_v8hzi_1",Lt="_fallback_v8hzi_11",Mt="_spinner_v8hzi_19",L={root:Tt,fallback:Lt,spinner:Mt},Ot=()=>{const{tags:s}=N(l=>l.dapplets),{userDapplets:e,userTags:n}=N(l=>l.userData),{status:a,items:r}=At();return t.jsxs("div",{className:L.root,children:[a===b.LOADING&&t.jsx("div",{className:L.fallback,children:t.jsx($,{})}),(a===b.WAITING||a===b.ADDING_DAPPLETS)&&r&&r.map(l=>t.jsx(bt,{dapplet:l,dappletUserTags:V(l.dappletId,n,e),dappletCommunityTags:V(l.dappletId,s,r)},B())),a===b.NO_DAPPLETS_AVAILABLE&&t.jsx(Ct,{text:"No dapplets available"}),a===b.ADDING_DAPPLETS&&t.jsx("div",{className:L.spinner,children:t.jsx($,{width:100,height:50,strokeWidth:3})})]})},Pt="_root_xpfc3_1",Bt="_option_xpfc3_40",D={root:Pt,"span-wrapper":"_span-wrapper_xpfc3_16",option:Bt,"drop-down":"_drop-down_xpfc3_44"},Rt=({userStyles:s=""})=>{const{orderBy:e}=N(i=>i.dapplets),[n,a]=p.useState(!1),r=A();p.useEffect(()=>{r(lt())},[e]);const l=()=>a(!n),c=i=>{r(ct(i)),l()};return t.jsxs("div",{className:y([D.root,s]),children:[t.jsxs("div",{className:D["span-wrapper"],onClick:l,"data-testid":"open-dropdown",children:[t.jsx("span",{style:e?{padding:0}:{padding:0,color:"#7F7F7F"},children:e||"orderBy"}),t.jsx(k,{icon:"arrowDown"})]}),n&&t.jsxs("div",{className:D["drop-down"],onMouseLeave:l,children:[t.jsx("div",{className:D.option,style:{borderTopRightRadius:"10px",borderTopLeftRadius:"10px"},children:t.jsx("span",{style:e===m.ASC_BY_NAME?{color:"#7F7F7F"}:{},onClick:()=>c(m.ASC_BY_NAME),children:m.ASC_BY_NAME})}),t.jsx("span",{className:D.option,style:e===m.DESC_BY_NAME?{color:"#7F7F7F"}:{},onClick:()=>c(m.DESC_BY_NAME),children:m.DESC_BY_NAME}),t.jsx("span",{className:D.option,style:e===m.ASC_BY_MARKET_CAP?{color:"#7F7F7F"}:{},onClick:()=>c(m.ASC_BY_MARKET_CAP),children:m.ASC_BY_MARKET_CAP}),t.jsx("div",{className:D.option,style:{borderBottomRightRadius:"10px",borderBottomLeftRadius:"10px"},children:t.jsx("span",{style:e===m.DESC_BY_MARKET_CAP?{color:"#7F7F7F"}:{},onClick:()=>c(m.DESC_BY_MARKET_CAP),children:m.DESC_BY_MARKET_CAP})})]})]})};function $t(s,e){const[n,a]=p.useState(s);return p.useEffect(()=>{const r=setTimeout(()=>{a(s)},e);return()=>{clearTimeout(r)}},[s]),n}const Ft="_root_ld61j_1",Gt="_glass_ld61j_20",Y={root:Ft,glass:Gt},Vt=({userStyles:s="",placeholder:e})=>{const n=A(),[a,r]=p.useState(""),l=$t(a,300);return p.useEffect(()=>{n(it(l))},[l]),t.jsxs("div",{className:y([Y.root,s]),children:[t.jsx(k,{userStyles:Y.glass,icon:"glass"}),t.jsx("input",{type:"text",name:"searchinput",maxLength:30,placeholder:e,value:a,onChange:c=>r(c.target.value)})]})},Yt="_root_1hvr8_1",Ut="_margin_1hvr8_7",U={root:Yt,margin:Ut},Ht=({userStyles:s=""})=>t.jsxs("div",{className:y([U.root,s]),children:[t.jsx(Vt,{placeholder:"Search"}),t.jsx(Rt,{userStyles:U.margin})]}),Kt="_root_3eyn4_1",Wt="_divider_3eyn4_17",M={root:Kt,"root-wrapper":"_root-wrapper_3eyn4_10",divider:Wt},zt=()=>t.jsx("div",{className:M.root,children:t.jsxs("div",{className:M["root-wrapper"],children:[t.jsx(Ht,{}),t.jsx("div",{className:M.divider}),t.jsx(Ot,{})]})}),qt=zt;export{qt as default};
