import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BZISi7jw.js";import{c}from"./index-FGJkmGnF.js";import{T as f}from"./index-Cd8YSTGk.js";import"./_commonjsHelpers-CqkleIqs.js";const o=({className:s,label:t,checked:a,onChange:n,disabled:l=!1,orientation:i="horizontal"})=>e.jsx(f,{children:e.jsxs("div",{className:c(s,"flex gap-1",{"flex-row ":i==="horizontal","flex-col":i==="vertical"}),children:[e.jsx("span",{className:"text-sm",children:t}),e.jsx("div",{className:c("flex bg-gray-400 w-10 p-1 rounded-full cursor-pointer ",{"bg-primary justify-end":a,"opacity-50 pointer-events-none cursor-not-allowed":l}),onClick:()=>!l&&n(!a),children:e.jsx("div",{className:"w-4 h-4 rounded-full bg-white transition-all"})})]})});o.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const b={title:"molecule/Switch",component:o,tags:["autodocs"]},h=s=>{const[t,a]=u.useState(!1);return e.jsx(o,{...s,checked:t,onChange:n=>a(n)})},r={args:{label:"Basic"},render:h};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Basic"
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,b as default};
