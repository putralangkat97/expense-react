import{j as u}from"./app-D2vGNcgZ.js";function l({className:s="",disabled:t,children:b,variant:r="default",size:n="md",...c}){let a=n;switch(n){case"sm":a="btn-sm";break;case"lg":a="btn-lg";break;default:a="btn-md";break}let e=r;switch(r){case"success":e="btn-success";break;case"info":e="btn-info";break;case"error":e="btn-error";break;case"warning":e="btn-warning";break;case"neutral":e="btn-neutral";break;case"default":e="";break;default:e="btn-primary";break}return u.jsx("button",{...c,className:`btn ${e} ${t&&"disabled"} ${a} `+s,disabled:t,children:b})}export{l as P};
