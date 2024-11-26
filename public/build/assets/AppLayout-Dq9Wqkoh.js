import{j as r,a as t,V as o,M as l}from"./app-mLPdh8C_.js";import{c as a}from"./createLucideIcon-DKEdU797.js";const d=({user:e})=>r.jsxs(t,{href:route("profile.index"),className:"flex flex-col items-center justify-center space-y-2",prefetch:!0,children:[r.jsx("div",{className:"avatar",children:r.jsx("div",{className:"w-20 rounded-full border-x-2 border-b-4 border-t-2 border-primary",children:r.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})})}),r.jsx("div",{children:r.jsxs("h2",{className:"text-center text-2xl sm:text-3xl",children:["Hello, ",r.jsx("span",{className:"text-nowrap",children:e.name})]})})]});/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=a("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=a("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=a("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=a("WalletMinimal",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]),b=()=>{const{url:e}=o();return r.jsx("div",{className:"h-18 fixed bottom-4 left-1/2 z-50 w-[290px] -translate-x-1/2 transform rounded-full border-x-2 border-b-4 border-t-2 border-primary bg-base-100 shadow-md transition-transform duration-300 sm:w-full sm:max-w-3xl",children:r.jsxs("div",{className:"flex justify-evenly px-2 py-2",children:[r.jsx(t,{prefetch:"click",href:route("home"),className:"rounded-full border-x-2 border-b-4 border-t-2 p-3 transition-colors duration-200 "+(e.startsWith("/home")?"border-primary bg-primary/70 text-base-200":"border-transparent bg-transparent text-neutral"),children:r.jsx(x,{size:32})}),r.jsx(t,{prefetch:"click",href:route("account.index"),className:"rounded-full border-x-2 border-b-4 border-t-2 p-3 transition-colors duration-200 "+(e.startsWith("/account")?"border-primary bg-primary/70 text-base-200":"border-transparent bg-transparent text-neutral"),children:r.jsx(m,{size:32})}),r.jsx(t,{prefetch:"click",href:route("transaction.index"),className:"rounded-full border-x-2 border-b-4 border-t-2 p-3 transition-colors duration-200 "+(e.startsWith("/transaction")?"border-primary bg-primary/70 text-base-200":"border-transparent bg-transparent text-neutral"),children:r.jsx(p,{size:32})}),r.jsx(t,{prefetch:"click",href:route("profile.index"),className:"rounded-full border-x-2 border-b-4 border-t-2 p-3 transition-colors duration-200 "+(e.startsWith("/profile")?"border-primary bg-primary/70 text-base-200":"border-transparent bg-transparent text-neutral"),children:r.jsx(c,{size:32})})]})})};function f({title:e="App",children:n,useNavHead:s=!0}){const i=o().props.auth.user;return r.jsxs(r.Fragment,{children:[r.jsx(l,{title:e}),r.jsx("div",{className:"min-h-screen bg-base-100",children:r.jsxs("div",{className:"mx-auto w-full px-6 pb-36 pt-10 sm:max-w-md",children:[s&&r.jsx(d,{user:i}),r.jsx("main",{className:`${s?"mt-10":""}`,children:n}),r.jsx(b,{})]})})]})}export{f as A,x as H,p as R};
