import{j as e,U as d}from"./app-D2vGNcgZ.js";import{C as w,u as m,B as C}from"./modalHook-Cv-OyolV.js";import{P as x}from"./PrimaryButton-C4iLm2X6.js";import{c as o}from"./createLucideIcon-Dv3zuZca.js";import{T as A,a as B}from"./TransactionEmpty-BgoG0fqt.js";import{B as F,T as P}from"./TransactionForm-CMFT-JDA.js";import{A as z}from"./AppLayout-C_2NOdHm.js";import{T as p}from"./Toast-Bn5QZUzs.js";import"./TextInput-YKekmGs8.js";import"./Checkbox-D67PFNFD.js";import"./InputLabel-DR-5XNdH.js";import"./loader-Bz21yhTu.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=o("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=o("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=o("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),D=({totalBalance:s})=>{const t=new w;return e.jsxs("div",{className:"flex flex-col items-start justify-center text-base-content",children:[e.jsx("h2",{className:"text-lg text-primary font-medium sm:text-xl",children:"Total Uang"}),e.jsx("h3",{className:"text-2xl font-bold sm:text-3xl",children:t.formatCurrency(s)})]})},I=({triggerModal:s})=>e.jsxs("div",{className:"flex space-x-4",id:"trx",children:[e.jsx("div",{className:"flex flex-1 flex-col items-center",children:e.jsxs(x,{variant:"default",type:"button",className:"rounded-xl w-full",onClick:()=>s("Buat Pengeluaran",null,"transaction-out"),children:["Pengeluaran",e.jsx(U,{size:22,className:"text-error"})]})}),e.jsx("div",{className:"flex flex-1 flex-col items-center",children:e.jsxs(x,{variant:"default",type:"button",className:"rounded-xl w-full",onClick:()=>s("Buat Pemasukan",null,"transaction-in"),children:["Pemasukan",e.jsx(O,{size:22,className:"text-success"})]})})]}),L=({totalBalance:s,transactions:t,categories:u,accounts:a,frequencies:h})=>{const{isModalOpen:y,selectedItem:j,modalTitle:f,isForm:T,categoryType:g,toastMessage:k,toastType:N,showToast:n,openModal:l,closeModal:i}=m({type:"transaction"}),{isModalOpen:E,selectedItem:R,modalTitle:S,isForm:q,toastMessage:M,toastType:v,showToast:c,openModal:G,closeModal:J}=m({type:"account"});return e.jsxs(e.Fragment,{children:[c&&e.jsx(p,{message:M,type:v,show:c}),n&&e.jsx(p,{message:k,type:N,show:n}),e.jsx("div",{className:"px-6",children:e.jsxs(d,{className:"relative card card-compact p-4 bg-base-200 text-base-content overflow-hidden hover:bg-base-300 transition-all duration-200",href:route("account.index"),children:[e.jsx("div",{className:"card-body z-10",children:e.jsx(D,{totalBalance:s})}),e.jsx("div",{className:"absolute -top-4 right-4",children:e.jsx(H,{size:72,className:"text-primary/10"})}),e.jsx("div",{className:"absolute -bottom-8 rotate-12 right-8",children:e.jsx(F,{size:120,className:"text-accent/10"})})]})}),e.jsx("div",{className:"px-6 mt-4",children:e.jsx(I,{triggerModal:l})}),a.length>0&&e.jsxs("div",{className:"mt-10 px-6",children:[e.jsxs("div",{className:"flex items-end justify-between",children:[e.jsx("h2",{className:"text-xl font-bold text-base-content sm:text-2xl",children:"Transaksi terakhir"}),a.length>0&&t.length>0&&e.jsx(d,{href:route("transaction.index"),className:"transition-colors duration-200 link link-primary",children:"Lihat semua"})]}),e.jsx("div",{className:"mt-3 flex flex-col space-y-2",children:t.length>0?t.map((r,b)=>e.jsx(A,{data:r,onClick:()=>l("Transaction Detail",r,"transaction-detail")},b)):e.jsx(B,{})})]}),e.jsx(C,{isOpen:y,onClose:i,title:f,children:T&&e.jsx(P,{accounts:a,categories:u,categoryType:g,transactionData:j,frequencies:h,closeModal:i})})]})};L.layout=s=>e.jsx(z,{title:"Home",children:s});export{L as default};
