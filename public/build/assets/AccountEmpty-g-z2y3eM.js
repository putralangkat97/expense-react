import{j as e}from"./app-BZCAro0Y.js";import{C as c}from"./modalHook-BfvNEZBx.js";import{I as a}from"./InputLabel-DClUedth.js";import{P as n}from"./PrimaryButton-DUSo9r3G.js";import{P as o}from"./AppLayout-C_cU8anx.js";const u=({data:t,triggerModal:s})=>{const r=new c;return e.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[e.jsxs("div",{children:[e.jsx(a,{value:"Transaction Name",className:"text-sm font-medium sm:text-lg"}),e.jsx("h2",{className:"-mt-1 text-gray-600",children:t.name})]}),e.jsxs("div",{children:[e.jsx(a,{value:"Transaction Date",className:"text-sm font-medium sm:text-lg"}),e.jsx("h2",{className:"-mt-1 text-gray-600",children:r.formatCurrency(t.balance)})]}),e.jsx("div",{className:"col-span-2 mt-4",children:e.jsxs(n,{type:"button",className:"btn-block",variant:"info",size:"sm",onClick:()=>s("Edit Account",t,"account-edit",!0),children:[e.jsx(o,{size:16}),"Edit"]})})]})},f=({triggerModal:t,title:s="Add Account"})=>e.jsx("button",{className:"card card-compact mx-auto h-40 w-full border-2 border-dashed border-primary bg-base-200",onClick:()=>t("Create Account",null,"account-create"),children:e.jsx("div",{className:"card-body flex flex-row items-center justify-center",children:e.jsx("div",{className:"text-lg font-normal text-neutral-500",children:s})})});export{f as A,u as a};
