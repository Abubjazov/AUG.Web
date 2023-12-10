import{u as R,j as t,c as x,B as z,a as V,E as F,n as I,b as p,d as y,S as w,T as D,e as $,s as A,f as W,g as Y,r as k,h as L,i as O,M as K,k as N,l as Q,m as X,o as Z,p as f,q as J,t as B,v as E,w as tt,x as et,y as st}from"./index-8ce080e4.js";import{u as q,g as nt}from"./dapplets-c2a56149.js";const ot="_root_hdffr_1",at="_title_hdffr_13",it="_button_hdffr_20",S={root:ot,"menu-closed":"_menu-closed_hdffr_9",title:at,button:it,"input-wrapper":"_input-wrapper_hdffr_25"},U=({userStyles:o="",inputValidators:n,menuOpened:e,loading:s,placeholder:i,title:d,onClick:m})=>{const r=R("",{...n}),c=()=>{r.onBlur(),!r.errors.length&&m&&(m(r.value),r.onChange({target:{value:""}}),r.setIsDirty(!1))};return t.jsxs("div",{className:x([S.root,e?"":S["menu-closed"],o]),children:[t.jsx("span",{className:S.title,children:d}),t.jsxs("div",{className:S["input-wrapper"],children:[t.jsx(z,{dataTestId:"create-name-input",type:"text",name:"tag-name-input",placeholder:i,value:r.value,onChange:r.onChange,onBlur:r.onBlur,errors:r.errors,isDirty:r.isDirty}),t.jsx(V,{userStyles:S.button,label:"Create",mode:F.CONTAINED_BLUE,onClick:c,loading:s})]})]})},lt="_root_1iq6g_1",rt="_title_1iq6g_11",ct="_list_1iq6g_18",dt="_circle_1iq6g_23",j={root:lt,"ds-closed":"_ds-closed_1iq6g_7",title:rt,list:ct,circle:dt,"list-item":"_list-item_1iq6g_30","list-item-text":"_list-item-text_1iq6g_40"},ut=[{text:"telegram.org",href:"https://telegram.org/"},{text:"whatsapp.com",href:"https://www.whatsapp.com/"},{text:"facebook.com",href:"https://www.facebook.com/"},{text:"twitter.com",href:"https://twitter.com/"}],mt=({dsOpened:o,userStyles:n=""})=>t.jsxs("div",{className:x([j.root,o?"":j["ds-closed"],n]),children:[t.jsx("span",{className:j.title,children:"Working on"}),t.jsx("div",{className:j.list,children:ut.map(e=>t.jsxs("div",{className:j["list-item"],children:[t.jsx("div",{className:j.circle}),t.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:e.href,className:j["list-item-text"],children:e.text})]},I()))})]}),pt="_root_kslqv_1",_t="_title_kslqv_8",g={root:pt,title:_t,"arrow-button":"_arrow-button_kslqv_20","ds-closed":"_ds-closed_kslqv_31","ds-inner-closed":"_ds-inner-closed_kslqv_35","title-ds-closed":"_title-ds-closed_kslqv_39","margin-top-30":"_margin-top-30_kslqv_51","margin-top-60":"_margin-top-60_kslqv_55"},H=({windowInner:o})=>{const n=q(),{dappletSettingsOpened:e}=p(a=>a.layout),{isAddingUserList:s,isAddingUserTag:i,tagOperationGoing:d}=p(a=>a.userData),{userTags:m}=p(a=>a.userData),r=p(a=>a.dapplets.tags),c=y(),l=()=>{c(A(!e))},u=a=>{const b=I();c(W({tagId:b,tagName:a}))},M=a=>{const b=I();c(Y({listId:b,listName:a}))};return t.jsxs("div",{className:x([g.root]),children:[!o&&t.jsx("div",{className:x([g["arrow-button"],e?"":g["ds-closed"]]),onClick:l,"data-testid":"dapplet-settings-arrow-button",children:t.jsx(w,{icon:"arrowLeft"})}),n>880&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:x([g.title,e?"":g["title-ds-closed"]]),children:"Dapplet Settings"}),t.jsx(U,{userStyles:g["margin-top-30"],title:"Create new list",placeholder:"List Name",menuOpened:e,onClick:M,loading:s,inputValidators:{isEmpty:{value:!0,message:"List name required"},minLength:{value:3,message:"Minimum list name length 3 symbols"},maxLength:{value:25,message:"Maximum list name length 25 symbols"}}})]}),t.jsx(U,{userStyles:g["margin-top-60"],title:"New tag",placeholder:"Tag Name",menuOpened:e,onClick:u,loading:i,inputValidators:{isEmpty:{value:!0,message:"Tag name required"},minLength:{value:3,message:"Minimum tag name length 3 symbols"},maxLength:{value:13,message:"Maximum tag name length 13 symbols"}}}),t.jsx(D,{userStyles:g["margin-top-60"],menuOpened:e,tags:m,title:"My tags",tagMode:$.MY_TAG,titleUppercase:!0,tagOperationGoing:d}),n>880&&t.jsxs(t.Fragment,{children:[t.jsx(D,{userStyles:g["margin-top-60"],menuOpened:e,tags:r,title:"Community tags",tagMode:$.COMMUNITY_TAG,titleUppercase:!0}),t.jsx(mt,{dsOpened:e,userStyles:g["margin-top-60"]})]})]})},gt=()=>{const{loadFilter:o}=p(i=>i.dapplets),{userDapplets:n}=p(i=>i.userData),{menuButtonsState:e}=p(i=>i.layout),s=y();k.useEffect(()=>{switch(e){case 0:s(L({...o,withWhere:void 0,withStartAfter:void 0}));break;case 1:s(L({...o,withWhere:{field:"__name__",operator:O.IN,comparisonValue:n.map(i=>i.dappletId)},withStartAfter:void 0}));break;case 2:s(L({...o,withWhere:{field:"communityTags",operator:O.ARRAY_CONTAINS,comparisonValue:"g7ZHnpKPDr3y6O9ufaAa"},withStartAfter:void 0}));break;case 3:s(L({...o,withWhere:{field:"communityTags",operator:O.ARRAY_CONTAINS,comparisonValue:"3LYUFQTbdNULwBgCkfXx"},withStartAfter:void 0}));break}},[e])},ht="_root_1t4mf_1",xt="_text_1t4mf_6",jt="_active_1t4mf_14",bt="_connection_1t4mf_21",T={root:ht,text:xt,active:jt,connection:bt},vt=()=>{const[o,n]=k.useState(!1),{isInProgress:e}=p(u=>u.auth),{isLoadingDapplets:s}=p(u=>u.dapplets),{isAddingUserTag:i,isAddingUserList:d,isLoadingUserData:m,tagOperationGoing:r,dappletOperationGoing:c,listOperationGoing:l}=p(u=>u.userData);return k.useEffect(()=>{s||i||d||m||r.length||c.length||l.length||e?n(!0):n(!1)},[c.length,d,i,s,m,l.length,e,r.length]),t.jsxs("div",{className:T.root,children:[t.jsx(w,{icon:"cloudNetwork"}),t.jsxs("span",{className:T.text,children:["Extension state:"," ",o?t.jsx("span",{className:T.connection,children:"Connection..."}):t.jsx("span",{className:T.active,children:"Active"})]})]})},ft="_root_1cynp_1",Nt="_text_1cynp_7",G={root:ft,text:Nt},yt=()=>t.jsxs("div",{className:G.root,children:[t.jsx(w,{icon:"settings"}),t.jsx("span",{className:G.text,children:"Settings"})]}),wt="_root_f2y7h_1",St="_wrapper_f2y7h_10",Ct="_burger_f2y7h_30",C={root:wt,wrapper:St,"logo-text":"_logo-text_f2y7h_15","red-dot":"_red-dot_f2y7h_25",burger:Ct},It=({windowInnerWidth:o})=>{const{menuOpened:n,dappletSettingsOpened:e}=p(m=>m.layout),s=y(),i=()=>{s(N(!n)),o<=880&&s(A(!1))},d=()=>{s(A(!e)),o<=880&&s(N(!1))};return gt(),t.jsxs("div",{className:C.root,children:[t.jsxs("div",{className:C.wrapper,children:[o<=1300&&t.jsx("div",{className:C.burger,onClick:i,"data-testid":"header-burger-button",children:t.jsx(w,{icon:"burger"})}),o<=880&&t.jsxs("span",{className:C["logo-text"],children:["Dapplets Project",t.jsx("span",{className:C["red-dot"],children:"."})]}),o>880&&t.jsx(vt,{})]}),t.jsx("div",{onClick:d,"data-testid":"header-settings-button",children:t.jsx(yt,{})}),t.jsx(K,{})]})},kt="_root_hbjxq_1",Lt="_title_hbjxq_11",Tt="_list_hbjxq_17",At="_button_hbjxq_45",v={root:kt,"menu-closed":"_menu-closed_hbjxq_7",title:Lt,list:Tt,"list-item":"_list-item_hbjxq_22",button:At},Mt=({menuOpened:o,userStyles:n=""})=>{const{userLists:e,listOperationGoing:s}=p(l=>l.userData),i=y(),[d,m]=k.useState(""),r=l=>!!s.filter(u=>u.listId===l&&u.operation===X.REMOVE).length,c=(l,u)=>{l.stopPropagation(),i(Z(u))};return e.length?t.jsxs("div",{className:x([v.root,o?"":v["menu-closed"],n]),children:[t.jsx("span",{className:v.title,children:"My Lists"}),t.jsx("div",{className:v.list,children:e&&e.map(l=>t.jsxs("div",{"data-testid":"list-"+l.listId,className:v["list-item"],onMouseEnter:()=>m(l.listId),onMouseLeave:()=>m(""),children:[t.jsxs("span",{children:[l.listName," (",t.jsx("a",{href:"#",children:"Me"}),")"]}),!r(l.listId)&&d===l.listId&&t.jsx("button",{"data-list-id":l.listId,"aria-label":`Delete list ${l.listName}`,type:"button","data-testid":"delet-list-cross-button",className:v.button,onClick:u=>c(u,l.listId),children:t.jsx(w,{icon:"redcross"})}),r(l.listId)&&t.jsx(Q,{width:20,height:20,strokeWidth:8,strokeColor:"#0085ff"})]},l.listId))})]}):null},Ot="_root_18xbd_1",_={root:Ot,"menu-header":"_menu-header_18xbd_10","menu-closed":"_menu-closed_18xbd_16","margin-top-40":"_margin-top-40_18xbd_21","arrow-button":"_arrow-button_18xbd_25","logo-text":"_logo-text_18xbd_38","logo-wrapper":"_logo-wrapper_18xbd_62","menu-buttons":"_menu-buttons_18xbd_71","logout-button":"_logout-button_18xbd_78","menu-logo":"_menu-logo_18xbd_85","red-dot":"_red-dot_18xbd_89"},Et=[{text:"All Dapplets",icon:f.ALL_DAPPLETS},{text:"Editor’s Choice",icon:f.EDITOR_CHOICE},{text:"Essential Dapplets",icon:f.ESSENTIAL_DAPPLETS},{text:"Financial Dapplets",icon:f.FINANCIAL_DAPPLETS},{text:"Social Networks",icon:f.SOCIAL_NETWORKS}],P=({windowInner:o})=>{const n=J(),e=q(),{menuOpened:s,menuButtonsState:i}=p(a=>a.layout),{isLoadingDapplets:d}=p(a=>a.dapplets),{userTags:m,tagOperationGoing:r}=p(a=>a.userData),c=y(),l=a=>{a!==4&&c(tt(a)),a===4&&n("/AUGWeb/social"),e<=1300&&c(N(!1))},u=()=>{c(N(!s))},M=()=>{e<=1300&&c(N(!1)),c(et())};return t.jsxs("div",{className:_.root,children:[t.jsxs("div",{children:[t.jsxs("div",{className:x([_["menu-header"],s?"":_["menu-closed"]]),children:[e>880&&t.jsxs("div",{className:_["logo-wrapper"],children:[t.jsx("div",{onClick:u,className:_["menu-logo"],"data-testid":"menu-logo-button",children:t.jsx("img",{width:"40px",height:"40px",src:"images/logo.png",alt:"Logo"})}),t.jsxs("span",{className:_["logo-text"],children:["Dapplets Project",t.jsx("span",{className:_["red-dot"],children:"."})]})]}),!o&&t.jsx("div",{className:_["arrow-button"],onClick:u,"data-testid":"menu-arrow-button",children:t.jsx(w,{icon:"arrowRight"})})]}),t.jsx("nav",{className:_["menu-buttons"],children:Et.map((a,b)=>t.jsx(B,{menuOpened:s,text:a.text,icon:a.icon,mode:i===b?E.ACTIVE:E.INACTIVE,onClick:()=>l(b),disabled:d},I()))}),e>880&&t.jsxs(t.Fragment,{children:[t.jsx(Mt,{userStyles:_["margin-top-40"],menuOpened:s}),t.jsx(D,{userStyles:_["margin-top-40"],menuOpened:s,tags:m,title:"My tags",tagMode:$.MY_TAG,tagOperationGoing:r})]})]}),t.jsx("div",{className:_["logout-button"],children:t.jsx(B,{menuOpened:s,text:"SignOut",icon:f.SIGN_OUT,mode:E.INACTIVE,onClick:M},I())})]})},Dt="_root_1uzll_1",$t="_menu_1uzll_10",qt="_header_1uzll_19",Bt="_children_1uzll_36",h={root:Dt,menu:$t,header:qt,"dapplet-settings":"_dapplet-settings_1uzll_27",children:Bt,"menu-1300":"_menu-1300_1uzll_40","dapplet-settings-1600":"_dapplet-settings-1600_1uzll_52","main-bg":"_main-bg_1uzll_63"},Ut=({children:o})=>{const n=q(),{modalState:e,menuOpened:s,dappletSettingsOpened:i}=p(c=>c.layout),d=y(),m=c=>c<=1300?{gridTemplateColumns:"1fr"}:c<=1600?{gridTemplateColumns:`${s?325:100}px 1fr`}:{gridTemplateColumns:`${s?325:100}px 1fr ${i?325:55}px`},r=()=>{n<=1300&&(d(A(!1)),d(N(!1)))};return k.useEffect(()=>{d(nt())},[d]),t.jsxs("div",{className:h.root,style:m(n),children:[n>1300&&t.jsx("div",{className:h.menu,children:t.jsx(P,{})}),t.jsxs("div",{children:[t.jsxs("div",{className:h.header,children:[t.jsx(It,{windowInnerWidth:n}),n<=1600&&i&&t.jsx("div",{className:x([h["dapplet-settings"],h["dapplet-settings-1600"]]),children:t.jsx(H,{windowInner:!0})}),n<=1300&&s&&t.jsx("div",{className:x([h.menu,h["menu-1300"]]),children:t.jsx(P,{windowInner:!0})})]}),t.jsx("div",{className:h.children,onClick:r,children:o})]}),n>1600&&t.jsx("div",{className:h["dapplet-settings"],children:t.jsx(H,{})}),t.jsx("img",{className:h["main-bg"],width:"100%",height:"100%",src:"images/mainBg.svg",alt:"background"}),e&&t.jsx(st,{})]})},Pt=Ut;export{Pt as default};
