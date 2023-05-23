import{Q as x,aw as g,aJ as M,ao as j,aA as z,f as B,m as T,G as I,ai as _,i as o,Z as H,ar as J,X as i,L as A,q as m,bd as K,a0 as N,k,b1 as Q,a5 as X,a6 as Z,V as W,z as h,a1 as Y,aG as p,b0 as D,a2 as ee,be as G,K as le}from"./entry.92238b29.js";import{d as te}from"./VTextField.34c7c77b.js";const $=Symbol.for("vuetify:selection-control-group"),O=x({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:g,trueIcon:g,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:M},...j(),...z()},"v-selection-control-group");B()({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...T(),...O()},emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:c}=u;const l=I(e,"modelValue"),t=_(),d=o(()=>e.id||`v-selection-control-group-${t}`),r=o(()=>e.name||d.value),a=new Set;return H($,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),K(()=>{a.delete(n)})}}),J({[e.defaultsTarget]:{color:i(e,"color"),disabled:i(e,"disabled"),density:i(e,"density"),error:i(e,"error"),inline:i(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:r,falseIcon:i(e,"falseIcon"),trueIcon:i(e,"trueIcon"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),type:i(e,"type"),valueComparator:i(e,"valueComparator")}}),A(()=>{var n;return m("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=c.default)==null?void 0:n.call(c)])}),{}}});const R=x({label:String,trueValue:null,falseValue:null,value:null,...T(),...O()},"v-selection-control");function ae(e){const u=Y($,void 0),{densityClasses:c}=p(e),l=I(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),d=o(()=>e.falseValue!==void 0?e.falseValue:!1),r=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const f=u?u.modelValue.value:l.value;return r.value?f.some(s=>e.valueComparator(s,t.value)):e.valueComparator(f,t.value)},set(f){if(e.readonly)return;const s=f?t.value:d.value;let v=s;r.value&&(v=f?[...D(l.value),s]:D(l.value).filter(V=>!e.valueComparator(V,t.value))),u?u.modelValue.value=v:l.value=v}}),{textColorClasses:n,textColorStyles:b}=ee(o(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),S=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:c,trueValue:t,falseValue:d,model:a,textColorClasses:n,textColorStyles:b,icon:S}}const ne=B()({name:"VSelectionControl",directives:{Ripple:N},inheritAttrs:!1,props:R(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:c,slots:l}=u;const{group:t,densityClasses:d,icon:r,model:a,textColorClasses:n,textColorStyles:b,trueValue:S}=ae(e),f=_(),s=o(()=>e.id||`input-${f}`),v=k(!1),V=k(!1),C=k();t==null||t.onForceUpdate(()=>{C.value&&(C.value.checked=a.value)});function P(y){v.value=!0,(!G||G&&y.target.matches(":focus-visible"))&&(V.value=!0)}function F(){v.value=!1,V.value=!1}function E(y){e.readonly&&t&&le(()=>t.forceUpdate()),a.value=y.target.checked}return A(()=>{var U,w;const y=l.label?l.label({label:e.label,props:{for:s.value}}):e.label,[L,q]=Q(c);return m("div",h({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":v.value,"v-selection-control--focus-visible":V.value,"v-selection-control--inline":e.inline},d.value,e.class]},L,{style:e.style}),[m("div",{class:["v-selection-control__wrapper",n.value],style:b.value},[(U=l.default)==null?void 0:U.call(l),X(m("div",{class:["v-selection-control__input"]},[r.value&&m(W,{key:"icon",icon:r.value},null),m("input",h({ref:C,checked:a.value,disabled:e.disabled,id:s.value,onBlur:F,onFocus:P,onInput:E,"aria-disabled":e.readonly,type:e.type,value:S.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},q),null),(w=l.input)==null?void 0:w.call(l,{model:a,textColorClasses:n,textColorStyles:b,props:{onFocus:P,onBlur:F,id:s.value}})]),[[Z("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),y&&m(te,{for:s.value,clickable:!0},{default:()=>[y]})])}),{isFocused:v,input:C}}}),oe=x({indeterminate:Boolean,indeterminateIcon:{type:g,default:"$checkboxIndeterminate"},...R({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),ce=B()({name:"VCheckboxBtn",props:oe(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:c}=u;const l=I(e,"indeterminate"),t=I(e,"modelValue");function d(n){l.value&&(l.value=!1)}const r=o(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),a=o(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return A(()=>m(ne,h(e,{modelValue:t.value,"onUpdate:modelValue":[n=>t.value=n,d],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",inline:!0,falseIcon:r.value,trueIcon:a.value,"aria-checked":e.indeterminate?"mixed":void 0}),c)),{}}});export{ce as V,oe as m};