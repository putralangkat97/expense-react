import{r as e,V as E,h as F}from"./app-fM8hJA1b.js";const H=(S={})=>{const{initialModalTitle:s="Modal Title",initialCategoryType:i="out"}=S,[m,u]=e.useState(!1),[M,a]=e.useState(null),[y,c]=e.useState(s),[g,o]=e.useState(!1),[h,l]=e.useState(i),[w,f]=e.useState(""),[v,T]=e.useState(""),[x,n]=e.useState(!1),{flash:t}=E().props;return e.useEffect(()=>{if(t.message){f(t.message),T(t.type),n(!0);const r=setTimeout(()=>{n(!1),F.visit(window.location.href,{preserveState:!0,preserveScroll:!0,only:["flash"],data:{flash:{message:null,type:null}}})},3e3);return()=>clearTimeout(r)}},[t]),{isModalOpen:m,selectedTransaction:M,modalTitle:y,isForm:g,categoryType:h,toastMessage:w,toastType:v,showToast:x,openModal:(r=s,p=null,d=null,C=!1)=>{u(!0),c(r),d==="transaction-detail"?(o(!1),a(p)):(o(!0),C&&a(p),l(d==="transaction-out"?"out":"in"))},closeModal:()=>{o(!1),u(!1),c(s),l(i),a(null)},setToastMessage:f,setToastType:T,setShowToast:n}};export{H as u};
