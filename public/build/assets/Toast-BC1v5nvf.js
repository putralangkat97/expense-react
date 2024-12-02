import{c as n}from"./createLucideIcon-D9Jt7Kx1.js";import{j as e,r as l}from"./app-ntpWYzVZ.js";class x{formatDate(s){const[a,c,t]=s.split("/");return`${t}-${c}-${a}`}formatCurrency(s){return parseInt(s).toLocaleString("id-ID",{style:"currency",currency:"IDR"})}}/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=n("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=n("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),f=({isOpen:r,onClose:s,title:a,children:c,position:t="modal-bottom"})=>e.jsx("dialog",{className:`modal ${t} ${r?"modal-open":""}`,open:r,children:e.jsxs("div",{className:"modal-box mx-auto max-w-md",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:a}),e.jsx("button",{className:"btn btn-circle btn-sm",onClick:s,children:e.jsx(i,{})})]}),e.jsx("div",{className:"py-2",children:c})]})}),h=({message:r="Toast message",type:s="success",show:a=!1})=>{const[c,t]=l.useState(!1);l.useEffect(()=>{t(!!a)},[a]);let o=s;switch(s){case"info":o="alert-info";break;case"error":o="alert-error";break;default:o="alert-success";break}return e.jsx(e.Fragment,{children:c&&e.jsx("div",{className:"toast toast-center toast-top z-50",children:e.jsx("div",{className:`alert ${o} shadow-md`,children:e.jsx("span",{children:r})})})})};export{f as B,x as C,u as P,h as T};
