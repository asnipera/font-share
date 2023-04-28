import{d as m,i as _,a as p,u as h,b as u,c as d,e as f,f as n,g as t,t as s,h as a,F as v,r as g,n as x,j as y,o as l,k as b,l as k,m as N,p as w,q as P,_ as S}from"./index-f64ee3cc.js";import{N as V}from"./NoteDisplay-e1fa7688.js";const j={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},q={class:"text-lg"},z={class:"font-bold flex gap-2"},B={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),H={key:0,class:"border-gray-400/50 mb-8"},F=m({__name:"PresenterPrint",setup(M){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${d.title}`});const r=f(()=>y.slice(0,-1).map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(l(),n("div",{id:"page-root",style:x(a(P))},[t("div",j,[t("div",D,[t("h1",L,s(a(d).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(l(!0),n(v,null,g(a(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",q,[t("div",z,[t("div",B,s(e==null?void 0:e.no)+"/"+s(a(b)),1),k(" "+s(e==null?void 0:e.title)+" ",1),C])]),N(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(l(),n("hr",H)):w("v-if",!0)]))),128))])],4))}}),R=S(F,[["__file","D:/slidev-ppt/font-end-develop-share/node_modules/.pnpm/@slidev+client@0.40.14_pdwqs4n5odznkblgh3qs4cvyx4/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
