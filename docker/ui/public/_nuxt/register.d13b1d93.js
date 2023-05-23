import{_ as P}from"./nuxt-link.892bd1c3.js";import{k as i,o as k,c as C,w as r,q as s,x as w,b8 as S,u as e,a5 as g,a7 as _,s as M,t as V}from"./entry.92238b29.js";import{u as N,a as p}from"./vee-validate.esm.43869241.js";import{_ as T}from"./_plugin-vue_export-helper.c27b6911.js";import{w as U,e as $,x as z,f as B,g as F,h as m,V as R}from"./VTextField.34c7c77b.js";const A={class:"to-login"},I={__name:"register",setup(J){const y=i(null),n=i("phone"),{handleSubmit:b,handleReset:Y}=N({validationSchema:{phone(a){return n.value!="phone"||(a==null?void 0:a.length)>0?!0:"Must input phone number."},email(a){return n.value!="email"||/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(a)?!0:"Must be a valid e-mail."},newPassword(a){return(a==null?void 0:a.length)>=6?!0:"Password needs to be at least 6 digits."},retypePwd(a){return(a==null?void 0:a.length)>=6&&a==l.value.value?!0:"The retype password and the new password do not match!"}}}),f=p("phone"),c=p("email"),l=p("newPassword"),v=p("retypePwd"),u=i(!1),d=i(!1),x=b(a=>{alert(JSON.stringify(a,null,2))});return(a,t)=>{const h=P;return k(),C(U,null,{default:r(()=>[s(R,{justify:"center"},{default:r(()=>[s($,{class:"card-body"},{default:r(()=>[s(z,{class:"card-title"},{default:r(()=>[w(" Create Your Account ")]),_:1}),s(B,null,{default:r(()=>[s(F,{ref_key:"form",ref:y,onSubmit:S(e(x),["prevent"])},{default:r(()=>[g(s(m,{modelValue:e(f).value.value,"onUpdate:modelValue":t[0]||(t[0]=o=>e(f).value.value=o),counter:50,label:"Phone Number.","error-messages":e(f).errorMessage.value,"append-icon":"mdi-email","onClick:append":t[1]||(t[1]=o=>n.value="email")},null,8,["modelValue","error-messages"]),[[_,e(n)=="phone"]]),g(s(m,{modelValue:e(c).value.value,"onUpdate:modelValue":t[2]||(t[2]=o=>e(c).value.value=o),counter:100,label:"Email Address.","error-messages":e(c).errorMessage.value,"append-icon":"mdi-phone","onClick:append":t[3]||(t[3]=o=>n.value="phone")},null,8,["modelValue","error-messages"]),[[_,e(n)=="email"]]),s(m,{modelValue:e(l).value.value,"onUpdate:modelValue":t[4]||(t[4]=o=>e(l).value.value=o),"append-icon":e(u)?"mdi-eye":"mdi-eye-off",type:e(u)?"text":"password",label:"Your Password.",counter:50,"onClick:append":t[5]||(t[5]=o=>u.value=!e(u)),"error-messages":e(l).errorMessage.value},null,8,["modelValue","append-icon","type","error-messages"]),s(m,{modelValue:e(v).value.value,"onUpdate:modelValue":t[6]||(t[6]=o=>e(v).value.value=o),"append-icon":e(d)?"mdi-eye":"mdi-eye-off",type:e(d)?"text":"password",label:"Retype Password.",counter:50,"onClick:append":t[7]||(t[7]=o=>d.value=!e(d)),"error-messages":e(v).errorMessage.value},null,8,["modelValue","append-icon","type","error-messages"]),M("div",A,[s(h,{to:"/login"},{default:r(()=>[s(V,{variant:"text",size:"small",ripple:!1,active:!1},{default:r(()=>[w("SignIn now ")]),_:1})]),_:1})]),s(V,{color:"success",block:"",type:"submit"},{default:r(()=>[w(" Join Us ")]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}},O=T(I,[["__scopeId","data-v-77e39c14"]]);export{O as default};