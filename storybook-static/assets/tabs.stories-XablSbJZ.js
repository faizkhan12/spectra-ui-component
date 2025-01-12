import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-BZISi7jw.js";import{c as n}from"./index-FGJkmGnF.js";import"./_commonjsHelpers-CqkleIqs.js";const b=({tabs:s,activeTab:r,onTabChange:p,disabledTabs:u,orientation:t="horizontal",icon:g,iconPosition:E="left"})=>e.jsxs("div",{className:n("flex",{"flex-col gap-2":t==="horizontal","flex-row justify-start gap-6":t==="vertical"}),children:[e.jsx("div",{className:n("flex gap-5 border-0 border-solid border-gray-300 ",{"flex-col border-r":t==="vertical","flex-row border-b":t==="horizontal"}),children:s.map((S,a)=>e.jsxs("div",{className:n(" flex  items-center p-1 cursor-pointer",{"border-primary border-solid border-0 ":r===a,"opacity-50 cursor-not-allowed pointer-events-none":u==null?void 0:u.includes(a),"border-r":t==="vertical","border-b":t==="horizontal"}),onClick:()=>p(a),children:[g&&g,e.jsx("span",{className:n("font-[0.8rem]",{"text-primary transition-all":r===a,"text-gray-700":r!==a}),children:S.title})]},a))}),e.jsx("div",{className:"text-sm",children:s[r].content})]});b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  content: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"string",required:!0}}]}}],raw:`Array<{
  title: string;
  content: string;
}>`},description:""},activeTab:{required:!0,tsType:{name:"number"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},disabledTabs:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};const A={title:"block/Tabs",component:b,tags:["autodocs"]},m=[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],d=s=>{const[r,p]=C.useState(0);return e.jsx(b,{...s,activeTab:r,onTabChange:p})},o={args:{tabs:m},render:d},i={args:{tabs:m,disabledTabs:[1]},render:d},l={args:{tabs:m,orientation:"vertical"},render:d},c={args:{tabs:m,icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-heart",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M8 14s-4-3.5-4-6a3.5 3.5 0 0 1 7 0c0 2.5-4 6-4 6z"})})},render:d};var h,f,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tabs: tabsData
  },
  render: Template
} as {
  args: TabsProps;
  render: () => JSX.Element;
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,T,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    tabs: tabsData,
    disabledTabs: [1]
  },
  render: Template
} as {
  args: TabsProps;
  render: () => JSX.Element;
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var y,j,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tabs: tabsData,
    orientation: "vertical"
  },
  render: Template
} as {
  args: TabsProps;
  render: () => JSX.Element;
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var q,z,D;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    tabs: tabsData,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
        <path d="M8 14s-4-3.5-4-6a3.5 3.5 0 0 1 7 0c0 2.5-4 6-4 6z" />
      </svg>
  },
  render: Template
} as {
  args: TabsProps;
  render: () => JSX.Element;
}`,...(D=(z=c.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const J=["Default","Disabled","Vertical","WithIcon"];export{o as Default,i as Disabled,l as Vertical,c as WithIcon,J as __namedExportsOrder,A as default};
