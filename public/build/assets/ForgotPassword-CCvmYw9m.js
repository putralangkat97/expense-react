import{b as n,j as e}from"./app-BvMmz7_A.js";import{T as d,I as c}from"./TextInput-BdhBH7Pu.js";import{P as u}from"./PrimaryButton-BEWs9D_G.js";import{G as p}from"./GuestLayout-KS8u3n3Y.js";import"./createLucideIcon-Cz7D1bm9.js";const x=({status:s})=>{const{data:t,setData:r,post:o,processing:l,errors:m}=n({email:""}),i=a=>{a.preventDefault(),o(route("password.email"))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"px-4 mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:s}),e.jsxs("form",{onSubmit:i,className:"px-4",children:[e.jsx(d,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",placeholder:"Email address",isFocused:!0,onChange:a=>r("email",a.target.value)}),e.jsx(c,{message:m.email,className:"mt-2"}),e.jsx("div",{className:"mt-4 flex items-center justify-center",children:e.jsx(u,{className:"btn-block",disabled:l,children:"Email Password Reset Link"})})]})]})};x.layout=s=>e.jsx(p,{title:"Forgot Password",children:s});export{x as default};
