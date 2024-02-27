import{d as f,u as x,i as h,o as w,c as P,a as m,b as o,e,F as S,m as c,v as b,P as U,U as y,p as I,g as _,G as B}from"./index-wQZN7Esl.js";import{_ as G}from"./lim_plugin-vuelim_export-helper-DlAUqK2U.js";const V=r=>(I("data-v-b36bb3a0"),r=r(),_(),r),N=V(()=>m("h2",null,"Paging",-1)),k={style:{display:"flex",gap:"16px"}},F={class:"grid"},L=V(()=>m("h5",null,"size",-1)),T=V(()=>m("div",null,"XL",-1)),X=V(()=>m("div",null,"L",-1)),A=V(()=>m("div",null,"M",-1)),C=V(()=>m("div",null,"S",-1)),D=V(()=>m("div",null,"XS",-1)),E=V(()=>m("h5",null,"Default",-1)),M=V(()=>m("h5",null,"Round",-1)),O=f({__name:"Paging",setup(r){const u=x(),t=h(1),s=h(16002),v=h(7),z=B.map(g=>({id:g,name:g})),i=h({id:"clear-ghost",name:"clear-ghost"}),p=h({id:"primary",name:"primary"}),d=h(!1),n=h(!1);return(g,l)=>(w(),P(S,null,[N,m("div",null,[m("div",k,[o(e(c),{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=a=>s.value=a),type:"number",label:"Кол-во записей",theme:e(u).theme},null,8,["modelValue","theme"]),o(e(c),{modelValue:v.value,"onUpdate:modelValue":l[1]||(l[1]=a=>v.value=a),type:"number",label:"Кол-во кнопок",theme:e(u).theme},null,8,["modelValue","theme"]),o(e(b),{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=a=>i.value=a),options:e(z),style:{"flex-basis":"300px"},label:"Inactive",theme:e(u).theme},null,8,["modelValue","options","theme"]),o(e(b),{modelValue:p.value,"onUpdate:modelValue":l[3]||(l[3]=a=>p.value=a),options:e(z),style:{"flex-basis":"300px"},label:"Active",theme:e(u).theme},null,8,["modelValue","options","theme"]),o(e(U),{modelValue:d.value,"onUpdate:modelValue":l[4]||(l[4]=a=>d.value=a),label:"Показывать размер страницы",theme:e(u).theme},null,8,["modelValue","theme"]),o(e(U),{modelValue:n.value,"onUpdate:modelValue":l[5]||(l[5]=a=>n.value=a),label:"Показывать навигацию",theme:e(u).theme},null,8,["modelValue","theme"])]),m("div",F,[L,T,X,A,C,D,E,o(e(y),{modelValue:t.value,"onUpdate:modelValue":l[6]||(l[6]=a=>t.value=a),theme:e(u).theme,size:"xl",total:s.value,pills:v.value,type:i.value.id,"active-type":p.value.id,"size-select":d.value,"page-nav":n.value},null,8,["modelValue","theme","total","pills","type","active-type","size-select","page-nav"]),o(e(y),{modelValue:t.value,"onUpdate:modelValue":l[7]||(l[7]=a=>t.value=a),theme:e(u).theme,size:"l",total:s.value,pills:v.value,type:i.value.id,"active-type":p.value.id,"size-select":d.value,"page-nav":n.value},null,8,["modelValue","theme","total","pills","type","active-type","size-select","page-nav"]),o(e(y),{modelValue:t.value,"onUpdate:modelValue":l[8]||(l[8]=a=>t.value=a),theme:e(u).theme,size:"m",total:s.value,pills:v.value,type:i.value.id,"active-type":p.value.id,"size-select":d.value,"page-nav":n.value},null,8,["modelValue","theme","total","pills","type","active-type","size-select","page-nav"]),o(e(y),{modelValue:t.value,"onUpdate:modelValue":l[9]||(l[9]=a=>t.value=a),theme:e(u).theme,size:"s",total:s.value,pills:v.value,type:i.value.id,"active-type":p.value.id,"size-select":d.value,"page-nav":n.value},null,8,["modelValue","theme","total","pills","type","active-type","size-select","page-nav"]),o(e(y),{modelValue:t.value,"onUpdate:modelValue":l[10]||(l[10]=a=>t.value=a),theme:e(u).theme,size:"xs",total:s.value,pills:v.value,type:i.value.id,"active-type":p.value.id,"size-select":d.value,"page-nav":n.value},null,8,["modelValue","theme","total","pills","type","active-type","size-select","page-nav"]),M,o(e(y),{modelValue:t.value,"onUpdate:modelValue":l[11]||(l[11]=a=>t.value=a),view:"round",theme:e(u).theme,size:"xl",total:s.value,pills:v.value,type:i.value.id,"active-type":p.value.id,"size-select":d.value,"page-nav":n.value},null,8,["modelValue","theme","total","pills","type","active-type","size-select","page-nav"]),o(e(y),{modelValue:t.value,"onUpdate:modelValue":l[12]||(l[12]=a=>t.value=a),view:"round",theme:e(u).theme,size:"l",total:s.value,pills:v.value,type:i.value.id,"active-type":p.value.id,"size-select":d.value,"page-nav":n.value},null,8,["modelValue","theme","total","pills","type","active-type","size-select","page-nav"]),o(e(y),{modelValue:t.value,"onUpdate:modelValue":l[13]||(l[13]=a=>t.value=a),view:"round",theme:e(u).theme,size:"m",total:s.value,pills:v.value,type:i.value.id,"active-type":p.value.id,"size-select":d.value,"page-nav":n.value},null,8,["modelValue","theme","total","pills","type","active-type","size-select","page-nav"]),o(e(y),{modelValue:t.value,"onUpdate:modelValue":l[14]||(l[14]=a=>t.value=a),view:"round",theme:e(u).theme,size:"s",total:s.value,pills:v.value,type:i.value.id,"active-type":p.value.id,"size-select":d.value,"page-nav":n.value},null,8,["modelValue","theme","total","pills","type","active-type","size-select","page-nav"]),o(e(y),{modelValue:t.value,"onUpdate:modelValue":l[15]||(l[15]=a=>t.value=a),view:"round",theme:e(u).theme,size:"xs",total:s.value,pills:v.value,type:i.value.id,"active-type":p.value.id,"size-select":d.value,"page-nav":n.value},null,8,["modelValue","theme","total","pills","type","active-type","size-select","page-nav"])])])],64))}}),q=G(O,[["__scopeId","data-v-b36bb3a0"]]);export{q as default};
