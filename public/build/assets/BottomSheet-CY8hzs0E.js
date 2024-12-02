import{j as e}from"./app-fM8hJA1b.js";import{c}from"./createLucideIcon-BR-yruLr.js";class d{formatDate(t){const[a,o,r]=t.split("/");return`${r}-${o}-${a}`}formatCurrency(t){return parseInt(t).toLocaleString("id-ID",{style:"currency",currency:"IDR"})}}/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=c("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),i=({isOpen:s,onClose:t,title:a,children:o,position:r="modal-bottom"})=>e.jsx("dialog",{className:`modal ${r} ${s?"modal-open":""}`,open:s,children:e.jsxs("div",{className:"modal-box mx-auto max-w-md",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:a}),e.jsx("button",{className:"btn btn-circle btn-sm",onClick:t,children:e.jsx(n,{})})]}),e.jsx("div",{className:"py-2",children:o})]})});export{i as B,d as C};
