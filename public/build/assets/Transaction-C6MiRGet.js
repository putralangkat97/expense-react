import{j as a}from"./app-BZCAro0Y.js";import{u as f,B as h}from"./modalHook-BfvNEZBx.js";import{T as y}from"./Toast-D_NyMON5.js";import{T as M,a as u}from"./TransactionEmpty-DutqAt1q.js";import{T as g,a as F}from"./TransactionForm-Ckw-iJ3O.js";import{A as N}from"./AppLayout-C_cU8anx.js";import"./createLucideIcon-DK6LtmIy.js";import"./InputLabel-DClUedth.js";import"./TextInput--bxZV3p6.js";import"./PrimaryButton-DUSo9r3G.js";const v=({transactions:t,categories:i,accounts:l})=>{const{isModalOpen:c,selectedItem:s,modalTitle:m,isForm:p,categoryType:d,toastMessage:x,toastType:T,showToast:o,openModal:e,closeModal:n}=f({type:"transaction"});return a.jsxs(a.Fragment,{children:[o&&a.jsx(y,{message:x,type:T,show:o}),a.jsx("div",{className:"flex items-center justify-center",children:a.jsx("h2",{className:"text-center text-3xl sm:text-4xl",children:"Transactions History"})}),a.jsx("div",{className:"mt-10 flex flex-col space-y-2",children:t.length>0?t.map((r,j)=>a.jsx(M,{data:r,onClick:()=>e("Transaction Detail",r,"transaction-detail")},j)):a.jsx(u,{})}),a.jsx(h,{isOpen:c,onClose:n,title:m,children:p?a.jsx(g,{accounts:l,categories:i,categoryType:d,transactionData:s,closeModal:n}):s&&a.jsx(F,{data:s,triggerModal:e})})]})};v.layout=t=>a.jsx(N,{title:"Transactions",useNavHead:!1,children:t});export{v as default};
