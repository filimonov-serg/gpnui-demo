import{d as $,u as S,h as u,o as _,c as y,a as h,b as o,e,y as d,F as g,r as a,G as v,A as U,T as I,p as z,g as B}from"./index-C-vlKC-n.js";import{_ as E}from"./lim_plugin-vuelim_export-helper-DlAUqK2U.js";const w=c=>(z("data-v-a759c092"),c=c(),B(),c),G=w(()=>h("h2",null,"Sidebar",-1)),N={class:"grid"},O={style:{display:"flex",gap:"8px"}},T={style:{display:"flex",gap:"8px"}},F=w(()=>h("div",{style:{"padding-bottom":"50px","border-bottom":"1px solid #ccc",width:"100%"}},"Some fixed head",-1)),L={style:{width:"100%"}},A=$({__name:"Sidebar",setup(c){const l=S(),r=u(!1),p=u(!1),b=u(!1),k=u(!1),f=u(null),C=u([]),V=u([]);for(let i=0;i<40;i++)C.value.push({id:i,name:`Значение в списке №${i}`});function x(){var i;(i=f.value)==null||i.show()}return(i,n)=>(_(),y(g,null,[G,h("div",N,[o(e(a),{theme:e(l).theme,label:"Open",onClick:n[0]||(n[0]=t=>r.value=!0)},null,8,["theme"]),o(e(a),{theme:e(l).theme,label:"Open left",onClick:n[1]||(n[1]=t=>k.value=!0)},null,8,["theme"]),o(e(a),{theme:e(l).theme,label:"Open from code",onClick:x},null,8,["theme"]),o(e(v),{modelValue:r.value,"onUpdate:modelValue":n[3]||(n[3]=t=>r.value=t),theme:e(l).theme,title:"Заголовок модального окна №1"},{buttons:d(({ok:t,cancel:s})=>[h("div",O,[o(e(a),{label:"Сохранить",theme:e(l).theme,onClick:m=>t("some val")},null,8,["theme","onClick"]),o(e(a),{label:"Открыть еще...",theme:e(l).theme,onClick:n[2]||(n[2]=m=>p.value=!0)},null,8,["theme"])]),o(e(a),{label:"Отмена",view:"secondary",theme:e(l).theme,onClick:m=>s("cancel val")},null,8,["theme","onClick"])]),_:1},8,["modelValue","theme"]),o(e(v),{modelValue:p.value,"onUpdate:modelValue":n[5]||(n[5]=t=>p.value=t),width:300,theme:e(l).theme,title:"Заголовок внутреннего сайдокна №1"},{buttons:d(({ok:t,cancel:s})=>[h("div",T,[o(e(a),{label:"Сохранить",theme:e(l).theme,onClick:m=>t("some val")},null,8,["theme","onClick"]),o(e(a),{label:"Открыть еще...",theme:e(l).theme,onClick:n[4]||(n[4]=m=>b.value=!0)},null,8,["theme"])]),o(e(a),{label:"Отмена",view:"ghost",theme:e(l).theme,onClick:m=>s("cancel val")},null,8,["theme","onClick"])]),_:1},8,["modelValue","theme"]),o(e(v),{modelValue:b.value,"onUpdate:modelValue":n[6]||(n[6]=t=>b.value=t),width:300,theme:e(l).theme,title:"Заголовок внутреннего сайдокна №2"},{buttons:d(({ok:t,cancel:s})=>[o(e(a),{size:"xl",label:"Сохранить",theme:e(l).theme,onClick:m=>t("some val")},null,8,["theme","onClick"]),o(e(a),{size:"xl",label:"Отмена",theme:e(l).theme,view:"ghost",onClick:m=>s("cancel val")},null,8,["theme","onClick"])]),_:1},8,["modelValue","theme"]),o(e(v),{modelValue:k.value,"onUpdate:modelValue":n[7]||(n[7]=t=>k.value=t),side:"left",theme:e(l).theme,title:"Заголовок модального окна №1"},{buttons:d(({ok:t,cancel:s})=>[o(e(a),{label:"Сохранить",theme:e(l).theme,onClick:m=>t("some val")},null,8,["theme","onClick"]),o(e(a),{label:"Отмена",theme:e(l).theme,view:"secondary",onClick:m=>s("cancel val")},null,8,["theme","onClick"])]),_:1},8,["modelValue","theme"]),o(e(v),{ref_key:"sideElem",ref:f,theme:e(l).theme,title:"Заголовок модального окна №2"},{head:d(()=>[F]),footer:d(()=>[U(" Some fixed footer ")]),buttons:d(({ok:t,cancel:s})=>[o(e(a),{label:"Сохранить",theme:e(l).theme,onClick:m=>t("some val")},null,8,["theme","onClick"]),o(e(a),{label:"Отмена",theme:e(l).theme,view:"secondary",onClick:m=>s("cancel val")},null,8,["theme","onClick"])]),default:d(()=>[h("div",L,[o(e(I),{modelValue:V.value,"onUpdate:modelValue":n[8]||(n[8]=t=>V.value=t),multiple:"",items:C.value,"is-clickable":"",theme:e(l).theme,size:"m"},null,8,["modelValue","items","theme"])])]),_:1},8,["theme"])])],64))}}),D=E(A,[["__scopeId","data-v-a759c092"]]);export{D as default};
