import{j as e,U as n,V as o,M as i}from"./app-CuKFHMuj.js";import{c as s}from"./createLucideIcon-B8Vzwx1G.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=s("ChartNoAxesCombined",[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=s("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=s("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=s("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=s("WalletMinimal",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]),p=({user:t})=>e.jsxs(n,{href:route("profile.index"),className:"flex flex-col items-center justify-center space-y-2",prefetch:!0,children:[e.jsxs("div",{className:"avatar btn btn-circle relative h-20 w-20",children:[e.jsx("div",{className:"w-20 rounded-full border-2 border-neutral",children:e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})}),e.jsx("div",{className:"absolute bottom-0 right-0 rounded-full border-2 border-neutral bg-base-100 p-1 text-base-content",children:e.jsx(x,{size:10})})]}),e.jsx("div",{children:e.jsxs("h2",{className:"text-center text-2xl sm:text-3xl text-base-content",children:["Hello, ",e.jsx("span",{className:"text-nowrap",children:t.name})]})})]}),b=()=>{const{url:t}=o(),r=[{name:"Home",icon:e.jsx(h,{size:32}),url:route("home"),isActive:t.startsWith("/home")},{name:"Account",icon:e.jsx(m,{size:32}),url:route("account.index"),isActive:t.startsWith("/account")},{name:"Transaction",icon:e.jsx(u,{size:32}),url:route("transaction.index"),isActive:t.startsWith("/transaction")},{name:"Report",icon:e.jsx(l,{size:32}),url:route("report.index"),isActive:t.startsWith("/report")},{name:"Profile",icon:e.jsx(d,{size:32}),url:route("profile.index"),isActive:t.startsWith("/profile")}];return e.jsx("div",{className:"h-18 fixed bottom-0 left-1/2 z-50 w-full -translate-x-1/2 transform border-t-2 border-neutral bg-base-100 shadow-md transition-transform duration-300 sm:h-20",children:e.jsx("div",{className:"flex justify-around space-x-1.5 px-2 py-2 sm:-mt-0.5",children:r.map(a=>e.jsx(n,{prefetch:"click",href:a.url,className:"rounded-full border-2 p-2 transition-colors duration-200 "+(a.isActive?"border-neutral bg-neutral text-neutral-content":"border-transparent bg-transparent text-base-content"),children:a.icon},a.name))})})};function y({title:t="App",children:r,useNavHead:a=!0}){const c=o().props.auth.user;return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:t}),e.jsx("div",{className:"min-h-screen bg-base-100",children:e.jsxs("div",{className:"mx-auto w-full pb-28 pt-16 sm:max-w-md",children:[a&&e.jsx(p,{user:c}),e.jsx("main",{className:`${a?"mt-10":""}`,children:r}),e.jsx(b,{})]})})]})}export{y as A,h as H,x as P};
