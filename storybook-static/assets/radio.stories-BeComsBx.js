import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-BZISi7jw.js";import{c as a}from"./index-FGJkmGnF.js";import"./_commonjsHelpers-CqkleIqs.js";const m=({className:t,value:l="",onChange:o=()=>{},options:i,label:y,disabled:u,orientation:h="horizontal"})=>e.jsxs("div",{className:a(t,"flex flex-col gap-2"),children:[e.jsx("span",{className:"text-sm",children:y}),e.jsx("div",{className:a("flex gap-5 flex-wrap",{"flex-col":h==="vertical"}),children:i.map(r=>e.jsxs("div",{className:a("flex items-center gap-1 cursor-pointer",{"pointer-events-none cursor-not-allowed":u}),onClick:()=>o(r.value),children:[e.jsx("div",{className:a("w-4 h-4 border border-solid rounded-full box-border",{"border-4 border-primary":r.value===l,"border-gray-400 ":u})}),e.jsx("span",{className:a("text-sm",{"text-gray-400":u}),children:r.label})]},r.value))})]});m.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{className:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string | number;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],raw:`Array<{
  label: string;
  value: string | number;
}>`},description:""},label:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const C={title:"molecule/Radio",component:m,tags:["autodocs"]},f=t=>{const[l,o]=j.useState("");return e.jsx(m,{...t,value:l,onChange:i=>o(i)})},x=[{label:"India",value:"india"},{label:"United States",value:"us"},{label:"United Kingdom",value:"uk"},{label:"Australia",value:"aus"},{label:"Canada",value:"can"}],n={args:{label:"Select Country",options:x},render:f},s={args:{label:"Select Country",options:x,orientation:"vertical"},render:f};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Select Country",
    options: options
  },
  render: Template
} as {
  args: RadioProps;
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,v,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Select Country",
    options: options,
    orientation: "vertical"
  },
  render: Template
} as {
  args: RadioProps;
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const S=["Default","Vertical"];export{n as Default,s as Vertical,S as __namedExportsOrder,C as default};
