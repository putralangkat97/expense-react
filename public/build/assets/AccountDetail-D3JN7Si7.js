import{j as s}from"./app-CFVvTrZD.js";import{C as i}from"./modalHook-HvFyT2kf.js";import{I as e}from"./InputLabel-CvOuam4F.js";import{P as r}from"./PrimaryButton-BDSYnokA.js";import{P as m}from"./AppLayout-CVSAu6E7.js";const u=({data:t,triggerModal:a})=>{const n=new i;return s.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[s.jsxs("div",{children:[s.jsx(e,{value:"Transaction Name",className:"text-sm font-medium sm:text-lg"}),s.jsx("h2",{className:"-mt-1 text-neutral",children:t.name})]}),s.jsxs("div",{children:[s.jsx(e,{value:"Transaction Date",className:"text-sm font-medium sm:text-lg"}),s.jsx("h2",{className:"-mt-1 text-neutral",children:n.formatCurrency(t.balance)})]}),s.jsx("div",{className:"col-span-2 mt-4",children:s.jsxs(r,{type:"button",className:"btn-block",variant:"info",size:"sm",onClick:()=>a("Edit Account",t,"account-edit",!0),children:[s.jsx(m,{size:16}),"Edit"]})})]})};export{u as A};