import{j as a}from"./app-B7L1yXnD.js";import{u as j,B as u}from"./modalHook-D6gKxMK8.js";import{P as f}from"./PrimaryButton-3eIpOvN_.js";import{T as y}from"./Toast-BoKXsg1P.js";import{a as h,T as M}from"./TransactionForm-D0ONtkoB.js";import{P as N,A as v}from"./AppLayout-CYFUuTLD.js";import"./createLucideIcon-FOH8qvaN.js";import"./InputLabel-BGMX85W4.js";import"./TextInput-lHvWNTFB.js";import"./Checkbox-X08R-iY-.js";const g=({transactions:s,accounts:o,categories:i,frequencies:r})=>{const{isModalOpen:n,selectedItem:l,modalTitle:c,isForm:m,categoryType:d,toastMessage:p,toastType:x,showToast:e,openModal:T,closeModal:t}=j({type:"transaction"});return a.jsxs(a.Fragment,{children:[e&&a.jsx(y,{message:p,type:x,show:e}),a.jsxs("div",{className:"px-6",children:[a.jsx("div",{className:"flex flex-col items-center justify-center space-y-2",children:a.jsx("h2",{className:"text-center text-3xl sm:text-4xl",children:s.name})}),a.jsxs("div",{className:"mt-10 flex flex-col space-y-2",children:[a.jsx(h,{data:s}),a.jsxs(f,{type:"button",className:"rounded-xl",variant:"neutral",onClick:()=>T("Edit Transaction",s,`transaction-${s.transactionType}`,!0),children:[a.jsx(N,{size:16}),"edit transaksi"]})]})]}),a.jsx(u,{isOpen:n,onClose:t,title:c,children:m&&a.jsx(M,{accounts:o,categories:i,categoryType:d,transactionData:l,frequencies:r,closeModal:t})})]})};g.layout=s=>a.jsx(v,{title:"Detail Transaksi",useNavHead:!1,children:s});export{g as default};
