import{j as f,r}from"./app-D2vGNcgZ.js";function l({message:e,className:n="",...u}){return e?f.jsx("p",{...u,className:"text-sm text-error "+n,children:e}):null}const x=r.forwardRef(function({type:n="text",className:u="",isFocused:o=!1,...c},a){const s=r.useRef(null);return r.useImperativeHandle(a,()=>({focus:()=>{var t;return(t=s.current)==null?void 0:t.focus()}})),r.useEffect(()=>{var t;o&&((t=s.current)==null||t.focus())},[o]),f.jsx("input",{...c,type:n,className:"input input-bordered rounded-xl input-md "+u,ref:s})});export{l as I,x as T};
