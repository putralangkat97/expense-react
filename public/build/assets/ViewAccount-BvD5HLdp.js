import{j as e,U as g}from"./app-BZCAro0Y.js";import{A as F,a as w}from"./AccountForm-xMryWM1u.js";import{u as r,B as m}from"./modalHook-BfvNEZBx.js";import{P as C}from"./PrimaryButton-DUSo9r3G.js";import{T as O}from"./Toast-D_NyMON5.js";import{T as k,a as D}from"./TransactionEmpty-DutqAt1q.js";import{T as P,a as b}from"./TransactionForm-Ckw-iJ3O.js";import{P as B,A as E}from"./AppLayout-C_cU8anx.js";import"./TextInput--bxZV3p6.js";import"./createLucideIcon-DK6LtmIy.js";import"./InputLabel-DClUedth.js";const V=({account:s,transactions:t,accounts:d,categories:x})=>{const{isModalOpen:p,selectedItem:a,modalTitle:j,isForm:u,categoryType:f,toastMessage:h,toastType:T,showToast:o,openModal:n,closeModal:l}=r({type:"transaction"}),{isModalOpen:M,modalTitle:y,isForm:A,openModal:N,closeModal:i}=r({type:"account"});return e.jsxs(e.Fragment,{children:[o&&e.jsx(O,{message:h,type:T,show:o}),e.jsx("div",{className:"flex flex-col items-center justify-center space-y-2",children:e.jsx("h2",{className:"text-center text-3xl sm:text-4xl",children:s.name})}),e.jsx("div",{className:"mt-10 flex justify-end",children:e.jsx(C,{type:"button",className:"",variant:"info",size:"sm",onClick:()=>N("Edit Account",s,"account-edit",!0),children:e.jsx(B,{size:16})})}),e.jsx("div",{className:"mt-2 flex flex-col space-y-2",children:e.jsx(F,{data:s})}),e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"flex items-end justify-between",children:[e.jsx("h2",{className:"text-xl font-bold text-neutral sm:text-2xl",children:"Recent Transactions"}),t.length>0&&e.jsx(g,{href:route("transaction.index"),className:"transition-colors duration-200 hover:link hover:link-primary",children:"View all"})]}),e.jsx("div",{className:"mt-4 flex flex-col space-y-2",children:t.length>0?t.map((c,v)=>e.jsx(k,{data:c,onClick:()=>n("Transaction Detail",c,"transaction-detail")},v)):e.jsx(D,{})})]}),e.jsx(m,{isOpen:M,onClose:i,title:y,children:A&&e.jsx(w,{closeModal:i,accountData:s})}),e.jsx(m,{isOpen:p,onClose:l,title:j,children:u?e.jsx(P,{accounts:d,categories:x,categoryType:f,transactionData:a,closeModal:l}):a&&e.jsx(b,{data:a,triggerModal:n})})]})};V.layout=s=>e.jsx(E,{title:"Account View",useNavHead:!1,children:s});export{V as default};