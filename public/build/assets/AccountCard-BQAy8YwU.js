import{j as e,U as r}from"./app-B7F1S45r.js";import{C as t}from"./modalHook-Druhr6wu.js";const c=({data:s})=>{const a=new t;return e.jsx(r,{as:"button",href:route("account.view",s.id),className:"card card-compact mx-auto h-40 w-full border-2 border-base-300 bg-base-200 hover:bg-base-300 duration-300 transition-all text-base-content",children:e.jsxs("div",{className:"card-body flex w-full flex-row justify-between",children:[e.jsxs("div",{className:"flex flex-col items-start justify-end",children:[e.jsx("div",{className:"text-sm",children:"Total Balance"}),e.jsx("div",{className:"mb-2 text-xl font-bold",children:a.formatCurrency(s.balance)})]}),e.jsx("div",{className:"font-bold",children:s.name})]})})};export{c as A};
