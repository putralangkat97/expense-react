import{j as e,U as u}from"./app-Clmh4Qei.js";import{A as T}from"./AccountCard-DWL0tEJW.js";import{u as y,T as N,a as v,B as w,b as g,c as A}from"./TransactionModalHook-B_riDzEs.js";import{A as M}from"./AppLayout-DZtOMezN.js";import"./ConfigHelpers-BN2uaXig.js";import"./createLucideIcon-DCmYqXoV.js";import"./InputLabel-0DTC9UCi.js";import"./PrimaryButton-B3XWtt3z.js";import"./SecondaryButton-BH9utv6b.js";import"./TextInput-5_Lgkvnk.js";const k=({account:s,transactions:n,accounts:l,categories:c})=>{const{isModalOpen:m,selectedTransaction:t,modalTitle:x,isForm:d,categoryType:p,toastMessage:j,toastType:h,showToast:a,openModal:o,closeModal:i}=y();return e.jsxs(e.Fragment,{children:[a&&e.jsx(N,{message:j,type:h,show:a}),e.jsx("div",{className:"flex flex-col items-center justify-center space-y-2",children:e.jsx("h2",{className:"text-center text-3xl sm:text-4xl",children:s.name})}),e.jsx("div",{className:"mt-10 flex flex-col space-y-2",children:e.jsx(T,{data:s})}),e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"flex items-end justify-between",children:[e.jsx("h2",{className:"text-xl font-bold text-neutral sm:text-2xl",children:"Recent Transactions"}),e.jsx(u,{href:route("transaction.index"),className:"transition-colors duration-200 hover:link hover:link-primary",children:"View all"})]}),e.jsx("div",{className:"mt-4 flex flex-col space-y-2",children:n.map((r,f)=>e.jsx(v,{data:r,onClick:()=>o("Transaction Detail",r,"transaction-detail")},f))})]}),e.jsx(w,{isOpen:m,onClose:i,title:x,children:d?e.jsx(g,{accounts:l,categories:c,categoryType:p,transactionData:t,closeModal:i,accountView:!0}):t&&e.jsx(A,{data:t,triggerModal:o})})]})};k.layout=s=>e.jsx(M,{title:"Account View",useNavHead:!1,children:s});export{k as default};