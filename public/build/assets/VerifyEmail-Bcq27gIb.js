import{a as r,j as e,U as a}from"./app-D2vGNcgZ.js";import{P as d}from"./PrimaryButton-C4iLm2X6.js";import{G as l}from"./GuestLayout-CGCxzFD1.js";const m=({status:t})=>{const{post:i,processing:s}=r({}),n=o=>{o.preventDefault(),i(route("verification.send"))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:n,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(d,{disabled:s,children:"Resend Verification Email"}),e.jsx(a,{href:route("logout"),method:"post",as:"button",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Log Out"})]})})]})};m.layout=t=>e.jsx(l,{title:"Email Verification",children:t});export{m as default};
