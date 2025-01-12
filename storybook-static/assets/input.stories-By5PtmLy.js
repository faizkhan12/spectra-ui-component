import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as p}from"./index-FGJkmGnF.js";import{T as R}from"./index-Cd8YSTGk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BZISi7jw.js";const j=({className:_,name:C="",label:o="",type:P="text",placeholder:F="",value:S,onChange:D,disabled:u=!1,error:m="",required:i=!1,size:d="medium",rounded:a="none"})=>e.jsx(R,{children:e.jsxs("div",{className:p(_,"flex flex-col gap-1 w-max"),children:[e.jsxs("label",{htmlFor:o,className:"text-sm",children:[o,i&&e.jsx("span",{className:"text-red-500",children:" *"})]}),e.jsx("input",{id:o,type:P,placeholder:F,value:S,onChange:z=>D(z.target.value),disabled:u,required:i,className:p("px-5 border-solid",{"cursor-not-allowed bg-gray-300":u,"border-primary":!u,"h-8":d==="small","h-10":d==="medium","h-12":d==="large","rounded-none ":a==="none","rounded-sm":a==="small","rounded-md":a==="medium","rounded-lg":a==="large","rounded-full":a==="full","border border-red-500 border-solid":m})}),m&&e.jsx("span",{className:"text-red-500 text-sm",children:m})]})});j.__docgenInfo={description:"",methods:[],displayName:"Input",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"text" | "password" | "email" | "number"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'},{name:"literal",value:'"email"'},{name:"literal",value:'"number"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1}}}};const G={title:"molecule/Input",component:j,tags:["autodocs"]},r={args:{label:"Name",placeholder:"Enter your name"}},l={args:{label:"Name",placeholder:"Enter your name",rounded:"full"}},s={args:{label:"Name",placeholder:"Enter your name",size:"large"}},n={args:{label:"Name",placeholder:"Enter your name",disabled:!0,value:"Faiz"}},t={args:{label:"Name",placeholder:"Enter your name",error:"Name is required"}};var c,g,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name"
  }
} as {
  args: InputProps;
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name",
    rounded: "full"
  }
} as {
  args: InputProps;
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,x,N;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name",
    size: "large"
  }
} as {
  args: InputProps;
}`,...(N=(x=s.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var q,E,T;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name",
    disabled: true,
    value: "Faiz"
  }
} as {
  args: InputProps;
}`,...(T=(E=n.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var w,I,V;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name",
    error: "Name is required"
  }
} as {
  args: InputProps;
}`,...(V=(I=t.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const H=["Default","Rounded_Full","Large","Disabled","Error"];export{r as Default,n as Disabled,t as Error,s as Large,l as Rounded_Full,H as __namedExportsOrder,G as default};
