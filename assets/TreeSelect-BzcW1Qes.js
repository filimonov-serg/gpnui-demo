import{d as X,u as B,h as r,v as w,o as F,c as $,a as o,b as u,e as t,F as A,V as m,x as G}from"./index-BuqtH1Xl.js";const P=o("h2",null,"TreeSelect",-1),j={class:"grid"},q=o("h5",null,"View - default",-1),D=o("div",null,"XL",-1),H=o("div",null,"L",-1),J=o("div",null,"M",-1),K=o("div",null,"S",-1),Q=o("div",null,"XS",-1),W=o("h5",null,"Single",-1),Y=o("h5",null,"Multiple",-1),Z=o("h5",null,"Single search",-1),ee=o("div",null,null,-1),le=o("h5",null,"Tree async",-1),te=o("h5",null,"Value out",-1),ae={style:{display:"flex",gap:"20px","margin-bottom":"20px"}},oe={style:{width:"300px"}},ne={style:{width:"90px"}},ie={style:{width:"300px"}},se=X({__name:"TreeSelect",setup(de){const d=B(),c=r(null),p=r([{id:121,name:"Node 2.1",parent_id:12,has_children:!1}]),z=r(null),U=r([]),v=r(null),S=r(!1),V=r([]),N=r(null),_=r(!1),f=r(""),x=r(""),b=r(""),n=r([{id:0,name:"Root node",parent_id:null,has_children:!0},{id:1,name:"Node 1 with long title text which must be truncated",parent_id:0,has_children:!1},{id:12,name:"Node 2",parent_id:0,has_children:!0},{id:121,name:"Node 2.1",parent_id:12,has_children:!1},{id:13,name:"Node 3",parent_id:0,has_children:!1},{id:2,name:"Root 2",parent_id:null,has_children:!0},{id:3,name:"Root 3",parent_id:null,has_children:!0}]),L=r([{id:0,name:"Root node async",parent_id:null,has_children:!0},{id:2,name:"Root 2 async",parent_id:null,has_children:!0},{id:3,name:"Root 3 async",parent_id:null,has_children:!0}]),C=r([{id:"xl",name:"XL"},{id:"l",name:"L"},{id:"m",name:"M"},{id:"s",name:"S"},{id:"xs",name:"XS"}]),g=r({id:"m",name:"M"}),R=w(()=>{if(f.value=="")return n.value;{const a=[];return n.value.filter(i=>i.name.toLocaleLowerCase().indexOf(f.value.toLocaleLowerCase())>=0).forEach(i=>{a.push(i);let e=i.parent_id;for(;e!=null&&a.findIndex(s=>s.id===e)===-1;){const s=n.value.find(h=>h.id===e);if(!s)break;a.push(s),e=s.parent_id}}),a}}),y=w(()=>{if(x.value=="")return n.value;{const a=[];return n.value.filter(i=>i.name.toLocaleLowerCase().indexOf(x.value.toLocaleLowerCase())>=0).forEach(i=>{a.push({...i,_is_expanded:!0});let e=i.parent_id;for(;e!=null&&a.findIndex(s=>s.id===e)===-1;){const s=n.value.find(h=>h.id===e);if(!s)break;a.push({...s,_is_expanded:!0}),e=s.parent_id}}),a}}),T=w(()=>{if(b.value=="")return n.value;{const a=[];return n.value.filter(i=>i.name.toLocaleLowerCase().indexOf(b.value.toLocaleLowerCase())>=0).forEach(i=>{a.push({...i,_is_expanded:!0});let e=i.parent_id;for(;e!=null&&a.findIndex(s=>s.id===e)===-1;){const s=n.value.find(h=>h.id===e);if(!s)break;a.push({...s,_is_expanded:!0}),e=s.parent_id}}),a}});function k(a){f.value=a}function E(a){x.value=a}function M(a){S.value=!0,setTimeout(()=>{b.value=a,S.value=!1},1e3)}const I=a=>new Promise(l=>setTimeout(l,a)),O=async a=>{console.log("start async"),_.value=!0,await I(2e3),_.value=!1,L.value.find(i=>i.id===a)&&L.value.push({id:`${a}-${Math.random()}`,name:`Random loaded node ${Math.random()}`,parent_id:a,has_children:!1})};return I(1e3).then(()=>{p.value.push({id:12,name:"Node 2",parent_id:0,has_children:!0})}),(a,l)=>{var i;return F(),$(A,null,[P,o("div",j,[q,D,H,J,K,Q,W,o("div",null,[u(t(m),{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value=e),size:"xl",clearable:"",options:n.value,label:"Select one item",caption:"caption text",placeholder:"Select one item...",theme:t(d).theme},null,8,["modelValue","options","theme"])]),o("div",null,[u(t(m),{modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=e=>c.value=e),size:"l",clearable:"",options:n.value,label:"Select one item",caption:"caption text",placeholder:"Select one item...",theme:t(d).theme},null,8,["modelValue","options","theme"])]),o("div",null,[u(t(m),{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=e=>c.value=e),size:"m",clearable:"",options:n.value,label:"Select one item",caption:"caption text",placeholder:"Select one item...",theme:t(d).theme},null,8,["modelValue","options","theme"])]),o("div",null,[u(t(m),{modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=e=>c.value=e),size:"s",clearable:"",options:n.value,disabled:"",label:"Select one item",caption:"caption text",placeholder:"Select one item...",theme:t(d).theme},null,8,["modelValue","options","theme"])]),o("div",null,[u(t(m),{modelValue:c.value,"onUpdate:modelValue":l[4]||(l[4]=e=>c.value=e),size:"xs",clearable:"",options:n.value,label:"Select one item",caption:"caption text",placeholder:"Select one item...",theme:t(d).theme},null,8,["modelValue","options","theme"])]),Y,u(t(m),{modelValue:p.value,"onUpdate:modelValue":l[5]||(l[5]=e=>p.value=e),size:"xl",multiple:"",options:n.value,label:"Select many item",caption:"caption text",placeholder:"Select many item...",theme:t(d).theme},null,8,["modelValue","options","theme"]),u(t(m),{modelValue:p.value,"onUpdate:modelValue":l[6]||(l[6]=e=>p.value=e),size:"l",multiple:"",options:n.value,label:"Select many item",caption:"caption text",placeholder:"Select many item...",theme:t(d).theme},null,8,["modelValue","options","theme"]),u(t(m),{modelValue:p.value,"onUpdate:modelValue":l[7]||(l[7]=e=>p.value=e),size:"m",multiple:"",options:n.value,label:"Select many item",caption:"caption text",placeholder:"Select many item...",theme:t(d).theme},null,8,["modelValue","options","theme"]),u(t(m),{modelValue:p.value,"onUpdate:modelValue":l[8]||(l[8]=e=>p.value=e),size:"s",multiple:"",options:n.value,label:"Select many item",caption:"caption text",placeholder:"Select many item...",theme:t(d).theme},null,8,["modelValue","options","theme"]),u(t(m),{modelValue:p.value,"onUpdate:modelValue":l[9]||(l[9]=e=>p.value=e),size:"xs",multiple:"",options:n.value,label:"Select many item",caption:"caption text",placeholder:"Select many item...",theme:t(d).theme},null,8,["modelValue","options","theme"]),Z,u(t(m),{modelValue:z.value,"onUpdate:modelValue":l[10]||(l[10]=e=>z.value=e),search:"",size:"m",clearable:"",options:R.value,label:"Select one item",caption:"caption text",placeholder:"Select one item...",theme:t(d).theme,onSearch:k},null,8,["modelValue","options","theme"]),u(t(m),{modelValue:U.value,"onUpdate:modelValue":l[11]||(l[11]=e=>U.value=e),search:"",multiple:"",size:"m",clearable:"",options:y.value,label:"Select many items",caption:"caption text",placeholder:"Select some items...",theme:t(d).theme,onSearch:E},null,8,["modelValue","options","theme"]),u(t(m),{modelValue:v.value,"onUpdate:modelValue":l[12]||(l[12]=e=>v.value=e),search:"",size:"m",clearable:"",options:T.value,"max-height":100,label:"Select one item",caption:"loading state & max-height",placeholder:"Select one item...",loading:S.value,theme:t(d).theme,onSearch:M},null,8,["modelValue","options","loading","theme"]),u(t(m),{modelValue:v.value,"onUpdate:modelValue":l[13]||(l[13]=e=>v.value=e),search:"",form:"clear-clear",size:"m",clearable:"",options:T.value,"max-height":100,label:"Select one item",caption:"loading state & max-height",placeholder:"Select one item...",loading:S.value,theme:t(d).theme,onSearch:M},null,8,["modelValue","options","loading","theme"]),ee,le,u(t(m),{modelValue:N.value,"onUpdate:modelValue":l[14]||(l[14]=e=>N.value=e),onLoadNode:O,"node-loading":_.value,"is-async":"",size:"l",clearable:"",options:L.value,label:"Select one item",caption:"caption text",placeholder:"Select one item...",theme:t(d).theme},null,8,["modelValue","node-loading","options","theme"])]),te,o("div",ae,[o("div",oe,[u(t(m),{modelValue:V.value,"onUpdate:modelValue":l[15]||(l[15]=e=>V.value=e),"value-out":"",bold:"",multiple:"",size:String((i=g.value)==null?void 0:i.id)||"m",clearable:"",options:y.value,label:"Select many items",caption:"caption text",placeholder:"Select some items...",theme:t(d).theme},null,8,["modelValue","size","options","theme"])]),o("div",ne,[u(t(G),{modelValue:g.value,"onUpdate:modelValue":l[16]||(l[16]=e=>g.value=e),bold:"",options:C.value,label:"Select size",theme:t(d).theme},null,8,["modelValue","options","theme"])])]),o("div",ie,[u(t(m),{modelValue:V.value,"onUpdate:modelValue":l[17]||(l[17]=e=>V.value=e),"value-out":"","out-type":"row",multiple:"",size:"m",clearable:"",options:y.value,label:"Select many items",caption:"caption text",theme:t(d).theme,placeholder:"Select some items..."},null,8,["modelValue","options","theme"])])],64)}}});export{se as default};
//# sourceMappingURL=TreeSelect-BzcW1Qes.js.map
