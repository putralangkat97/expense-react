import{j as t}from"./app-B7L1yXnD.js";import{A as x}from"./AccountCard-Bz68tcIp.js";import{A as p}from"./AccountDetail-CDJaNY2x.js";import{A as f}from"./AccountForm-D3ft_A_M.js";import{u as h,B as j}from"./modalHook-D6gKxMK8.js";import{P as A}from"./PrimaryButton-3eIpOvN_.js";import{T as y}from"./Toast-BoKXsg1P.js";import{A as M}from"./AppLayout-CYFUuTLD.js";import{c as b}from"./createLucideIcon-FOH8qvaN.js";import"./InputLabel-BGMX85W4.js";import"./TextInput-lHvWNTFB.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=b("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]),N=({triggerModal:e,title:o="Add Account"})=>t.jsx("button",{className:"card card-compact mx-auto h-40 w-full border-2 border-dashed border-neutral bg-base-200",onClick:()=>e("Create Account",null,"account-create"),children:t.jsx("div",{className:"card-body flex flex-row items-center justify-center",children:t.jsx("div",{className:"text-lg font-normal text-neutral-500",children:o})})}),g=({accounts:e})=>{const{isModalOpen:o,selectedItem:a,modalTitle:l,isForm:n,toastMessage:i,toastType:u,showToast:c,openModal:s,closeModal:r}=h({type:"account"});return t.jsxs(t.Fragment,{children:[c&&t.jsx(y,{message:i,type:u,show:c}),t.jsxs("div",{className:"px-6",children:[t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("h2",{className:"text-center text-3xl sm:text-4xl",children:"Daftar Akun"})}),t.jsx("div",{className:"mt-10 mb-4 flex justify-end",children:t.jsxs(A,{type:"button",className:"btn-block rounded-xl",variant:"neutral",onClick:()=>s("Buat Akun",null,"account-create",!0),children:[t.jsx(k,{size:16}),"Buat Akun Baru"]})}),t.jsx("div",{className:"mt-2 flex flex-col space-y-2",children:e.length>0?e.map((d,m)=>t.jsx(x,{data:d},m)):t.jsx(N,{title:"No account"})})]}),t.jsx(j,{isOpen:o,onClose:r,title:l,children:n?t.jsx(f,{accountData:a,closeModal:r}):a&&t.jsx(p,{data:a,triggerModal:s})})]})};g.layout=e=>t.jsx(M,{title:"Account",useNavHead:!1,children:e});export{g as default};
