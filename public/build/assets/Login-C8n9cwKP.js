import{b as h,j as e,U as l}from"./app-DYsoxiYW.js";import{C as j}from"./Checkbox-BLlf4sDN.js";import{T as o,I as i}from"./TextInput-DFtQziHz.js";import{I as c}from"./InputLabel-BTZ-v3Yx.js";import{P as f}from"./PrimaryButton-drkTnVDe.js";import{G as b}from"./GuestLayout-j8a7y1jQ.js";import{A as w}from"./arrow-left-oOn2j9iG.js";import"./createLucideIcon-DdcoQB7Q.js";const g=({status:a,canResetPassword:n})=>{const{data:r,setData:t,post:d,processing:x,errors:m,reset:p}=h({email:"",password:"",remember:!1}),u=s=>{s.preventDefault(),d(route("login"),{onFinish:()=>p("password")})};return e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{className:"text-success mb-4 text-sm font-medium",children:a}),e.jsx("div",{className:"fixed left-4 top-6",children:e.jsx(l,{href:route("welcome"),as:"button",className:"-ml-4 btn btn-ghost",children:e.jsx(w,{size:44})})}),e.jsxs("form",{onSubmit:u,className:"w-full px-6 sm:max-w-md",children:[e.jsxs("div",{children:[e.jsx(c,{htmlFor:"email",value:"Email"}),e.jsx(o,{id:"email",type:"email",name:"email",value:r.email,className:"mt-2 block w-full",autoComplete:"username",placeholder:"Email address",isFocused:!0,onChange:s=>t("email",s.target.value)}),e.jsx(i,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(c,{htmlFor:"password",value:"Password"}),e.jsx(o,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",placeholder:"Password",onChange:s=>t("password",s.target.value)}),e.jsx(i,{message:m.password,className:"mt-2"})]}),e.jsx("div",{className:"mt-4 block",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(j,{name:"remember",checked:r.remember,onChange:s=>t("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-gray-600",children:"Remember me"})]})}),e.jsx("div",{className:"mt-6 flex flex-col items-center justify-center",children:e.jsx(f,{className:"btn-block",size:"lg",disabled:x,children:"Log in"})})]}),n&&e.jsx("div",{className:"fixed bottom-6",children:e.jsx(l,{href:route("password.request"),className:"link text-primary text-sm",children:"Forgot your password?"})})]})};g.layout=a=>e.jsx(b,{title:"Log In",children:a});export{g as default};