import{d as f,u as g,h as p,o as x,c,a as e,b as u,e as t,G as h,F as z,P as n,r as V,n as S,p as U,g as y}from"./index-BuqtH1Xl.js";import{_ as X}from"./lim_plugin-vuelim_export-helper-DlAUqK2U.js";const o=b=>(U("data-v-f008d793"),b=b(),y(),b),w=o(()=>e("h2",null,"Tabs",-1)),C={class:"grid"},I=o(()=>e("h5",null,"Size",-1)),L=o(()=>e("div",null,"XXL",-1)),T=o(()=>e("div",null,"XL",-1)),k=o(()=>e("div",null,"L",-1)),B=o(()=>e("div",null,"M",-1)),M=o(()=>e("div",null,"S",-1)),F=o(()=>e("div",null,"XS",-1)),G=o(()=>e("h5",null,"default",-1)),N={class:"grid"},P=o(()=>e("h5",null,"Size",-1)),$=o(()=>e("div",null,"XXL",-1)),E=o(()=>e("div",null,"XL",-1)),j=o(()=>e("div",null,"L",-1)),q=o(()=>e("div",null,"M",-1)),A=o(()=>e("div",null,"S",-1)),D=o(()=>e("div",null,"XS",-1)),H=o(()=>e("h5",null,"fold",-1)),J={class:"tagbg"},K=o(()=>e("div",{style:{padding:"20px"}},"Some data",-1)),O={class:"tagbg"},Q=o(()=>e("div",{style:{padding:"20px"}},"Some data",-1)),R={class:"tagbg"},W=o(()=>e("div",{style:{padding:"20px"}},"Some data",-1)),Y={class:"tagbg"},Z=o(()=>e("div",{style:{padding:"20px"}},"Some data",-1)),ee={class:"tagbg"},le=o(()=>e("div",{style:{padding:"20px"}},"Some data",-1)),te={class:"tagbg"},se=o(()=>e("div",{style:{padding:"20px"}},"Some data",-1)),oe={class:"grid"},ae=o(()=>e("h5",null,"Size",-1)),de=o(()=>e("div",null,"closable",-1)),ue=o(()=>e("div",null,"Prefix Suffix",-1)),ne=o(()=>e("div",null,null,-1)),ie=o(()=>e("div",null,null,-1)),me=o(()=>e("div",null,null,-1)),ve=o(()=>e("div",null,null,-1)),he=o(()=>e("h5",null,"default",-1)),_e={class:"tagbg"},be=o(()=>e("div",{style:{"margin-right":"10px"}},"Some prefix",-1)),pe={style:{width:"300px",margin:"0 10px"}},Ve=f({__name:"Tabs",setup(b){const d=g(),i=p([{id:1,name:"Мероприятия",to:"/events",icon:"bi-person"},{id:2,name:"Тесты",to:"/tests",count:1450,countView:"warning"},{id:3,name:"Оценка компетенций",to:"/ca"}]),m=p([]);for(let v=0;v<10;v++)m.value.push({id:v,name:`Вкладка ${v+1}`,closable:!0,icon:"bi-person"});const a=p(2),_=p(0);function r(){const v=Math.max(...m.value.map(l=>parseInt(l.id+"")));m.value.push({id:v+1,name:`Новая вкладка ${v+1}`,closable:!0})}return(v,l)=>(x(),c(z,null,[w,e("div",C,[I,L,T,k,B,M,F,G,u(t(n),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=s=>a.value=s),tabs:i.value,size:"xxl",theme:t(d).theme},null,8,["modelValue","tabs","theme"]),u(t(n),{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=s=>a.value=s),tabs:i.value,size:"xl",theme:t(d).theme},null,8,["modelValue","tabs","theme"]),u(t(n),{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=s=>a.value=s),tabs:i.value,size:"l",theme:t(d).theme},null,8,["modelValue","tabs","theme"]),u(t(n),{modelValue:a.value,"onUpdate:modelValue":l[3]||(l[3]=s=>a.value=s),tabs:i.value,size:"m",theme:t(d).theme},null,8,["modelValue","tabs","theme"]),u(t(n),{modelValue:a.value,"onUpdate:modelValue":l[4]||(l[4]=s=>a.value=s),tabs:i.value,size:"s",theme:t(d).theme},null,8,["modelValue","tabs","theme"]),u(t(n),{modelValue:a.value,"onUpdate:modelValue":l[5]||(l[5]=s=>a.value=s),tabs:i.value,size:"xs",theme:t(d).theme},null,8,["modelValue","tabs","theme"])]),e("div",N,[P,$,E,j,q,A,D,H,e("div",J,[u(t(n),{modelValue:a.value,"onUpdate:modelValue":l[6]||(l[6]=s=>a.value=s),fold:"",tabs:i.value,size:"xxl",theme:t(d).theme},{fold:h(()=>[K]),_:1},8,["modelValue","tabs","theme"])]),e("div",O,[u(t(n),{modelValue:a.value,"onUpdate:modelValue":l[7]||(l[7]=s=>a.value=s),fold:"",tabs:i.value,size:"xl",theme:t(d).theme},{fold:h(()=>[Q]),_:1},8,["modelValue","tabs","theme"])]),e("div",R,[u(t(n),{modelValue:a.value,"onUpdate:modelValue":l[8]||(l[8]=s=>a.value=s),fold:"",tabs:i.value,size:"l",theme:t(d).theme},{fold:h(()=>[W]),_:1},8,["modelValue","tabs","theme"])]),e("div",Y,[u(t(n),{modelValue:a.value,"onUpdate:modelValue":l[9]||(l[9]=s=>a.value=s),fold:"",tabs:i.value,size:"m",theme:t(d).theme},{fold:h(()=>[Z]),_:1},8,["modelValue","tabs","theme"])]),e("div",ee,[u(t(n),{modelValue:_.value,"onUpdate:modelValue":l[10]||(l[10]=s=>_.value=s),tabs:m.value,"onUpdate:tabs":l[11]||(l[11]=s=>m.value=s),fold:"",size:"s",theme:t(d).theme},{fold:h(()=>[le]),_:1},8,["modelValue","tabs","theme"])]),e("div",te,[u(t(n),{modelValue:a.value,"onUpdate:modelValue":l[12]||(l[12]=s=>a.value=s),fold:"",tabs:i.value,size:"xs",theme:t(d).theme},{fold:h(()=>[se]),_:1},8,["modelValue","tabs","theme"])])]),e("div",oe,[ae,de,ue,ne,ie,me,ve,he,e("div",_e,[u(t(n),{modelValue:_.value,"onUpdate:modelValue":l[13]||(l[13]=s=>_.value=s),tabs:m.value,"onUpdate:tabs":l[14]||(l[14]=s=>m.value=s),size:"l",theme:t(d).theme},null,8,["modelValue","tabs","theme"])]),e("div",null,[u(t(n),{modelValue:_.value,"onUpdate:modelValue":l[15]||(l[15]=s=>_.value=s),tabs:m.value,"onUpdate:tabs":l[16]||(l[16]=s=>m.value=s),size:"l",theme:t(d).theme},{prefix:h(()=>[be,u(t(V),{label:"Click me",size:"m",theme:t(d).theme,onClick:r},null,8,["theme"])]),suffix:h(()=>[e("div",pe,[u(t(S),{"label-position":"left",label:"Поиск:",width:"full",theme:t(d).theme,size:"m"},null,8,["theme"])]),u(t(V),{label:"Найти",size:"m",theme:t(d).theme},null,8,["theme"])]),_:1},8,["modelValue","tabs","theme"])])])],64))}}),ge=X(Ve,[["__scopeId","data-v-f008d793"]]);export{ge as default};
//# sourceMappingURL=Tabs-CLax7ie4.js.map
