import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-BZISi7jw.js";import{c as j}from"./index-FGJkmGnF.js";import{B as n}from"./index-Tk35KJ-3.js";import{X as v}from"./x-a1LHkvv1.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cd8YSTGk.js";import"./createLucideIcon-CF0hrkcB.js";const l=({showModal:i,onClose:s,title:a,children:h,footer:x,size:r="lg"})=>{if(i)return e.jsx("div",{className:"flex items-center justify-center absolute inset-0 bg-black bg-opacity-30",children:e.jsxs("div",{className:j("flex flex-col gap-4 bg-white shadow-sm rounded p-3",{"w-1/2":r==="lg","w-1/3":r==="md","w-1/4":r==="sm"}),children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-lg",children:a}),e.jsx(v,{onClick:s,className:"cursor-pointer"})]}),e.jsx("hr",{}),e.jsx("div",{className:"text-sm",children:h}),e.jsx("div",{children:x&&e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx(n,{label:"Cancel",onClick:s,className:"bg-blue-500 text-white px-3 py-1 rounded"}),e.jsx(n,{label:"OK",onClick:s,className:"bg-red-500 text-white px-3 py-1 rounded"})]})})]})})};l.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"lg"',computed:!1}}}};const k={title:"block/Modal",component:l,tags:["autodocs"]},g=i=>{const[s,a]=b.useState(!1);return e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:[e.jsx(n,{label:"Open Modal",onClick:()=>a(!0),variant:"outlined",rounded:"medium"}),e.jsx(l,{...i,title:"Modal Title",showModal:s,onClose:()=>a(!1)})]})},t={args:{showModal:!0,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa molestias sapiente fugiat, eius, obcaecati voluptates sint omnis, iure et dolorem placeat accusamus. Animi ab hic quod accusantium non fugiat?",onClose:()=>{},footer:!1},render:g},o={args:{showModal:!0,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa molestias sapiente fugiat, eius, obcaecati voluptates sint omnis, iure et dolorem placeat accusamus. Animi ab hic quod accusantium non fugiat?",onClose:()=>{},footer:!0},render:g};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    showModal: true,
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa molestias sapiente fugiat, eius, obcaecati voluptates sint omnis, iure et dolorem placeat accusamus. Animi ab hic quod accusantium non fugiat?",
    onClose: () => {},
    footer: false
  },
  render: Template
} as {
  args: ModalProps;
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    showModal: true,
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa molestias sapiente fugiat, eius, obcaecati voluptates sint omnis, iure et dolorem placeat accusamus. Animi ab hic quod accusantium non fugiat?",
    onClose: () => {},
    footer: true
  },
  render: Template
} as {
  args: ModalProps;
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const R=["Default","WithFooter"];export{t as Default,o as WithFooter,R as __namedExportsOrder,k as default};
