import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./index-BZISi7jw.js";import{c}from"./index-FGJkmGnF.js";import{T as C}from"./index-Cd8YSTGk.js";import{c as k}from"./createLucideIcon-CF0hrkcB.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=k("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),d=({className:n,value:s,onChange:u,options:t,name:U,placeholder:S,disabled:w,fullWidth:j,rounded:r="none"})=>{const[m,g]=q.useState(!1);let l=null;s&&(l=t.find(a=>a.value===s));let T=l?e.jsxs("div",{className:"flex items-center gap-2",children:[l.image&&e.jsx("img",{src:l.image,alt:l.label,className:"w-4 h-3 mr-2"}),l.label]}):S;return e.jsx(C,{children:e.jsxs("div",{className:c(n,"w-max",{"w-full":j}),children:[e.jsxs("div",{className:c("flex items-center gap-7 justify-between border border-solid p-2 border-primary cursor-pointer",{"bg-gray-200 pointer-events-none cursor-not-allowed":w,"rounded-none":r==="none","rounded-sm":r==="sm","rounded-md":r==="md","rounded-lg":r==="lg","rounded-full":r==="full"}),onClick:()=>g(!m),children:[T,e.jsx("span",{children:e.jsx(N,{size:16,className:`text-primary ${m&&"rotate-180"} transition-all`})})]}),m&&e.jsx("div",{className:"flex  flex-col gap-3 border border-solid rounded-sm p-2 cursor-pointer ",children:t.map(a=>e.jsxs("div",{className:c(`flex items-center hover:bg-gray-300 p-1 rounded-lg transition-all ${a.value===s&&"bg-gray-300"}`),onClick:()=>{u(a.value),g(!1)},children:[a.image&&e.jsx("img",{src:a.image,alt:a.label,className:"w-4 h-3 mr-2"}),a.label]},a.value))})]})})};d.__docgenInfo={description:"",methods:[],displayName:"Select",props:{className:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string | number;
  image?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"image",value:{name:"string",required:!1}}]}}],raw:`Array<{
  label: string;
  value: string | number;
  image?: string;
}>`},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1}}}};const E={title:"molecule/Select",component:d,tags:["autodocs"]},x=n=>{const[s,u]=q.useState("");return e.jsx(d,{...n,value:s,onChange:t=>u(t)})},i={args:{placeholder:"Select a country",options:[{label:"India",value:"india"},{label:"United States",value:"us"},{label:"United Kingdom",value:"uk"},{label:"Australia",value:"aus"},{label:"Canada",value:"can"}],onChange:n=>console.log(n)},render:x},o={args:{placeholder:"Select a country",options:[{label:"India",value:"india",image:"https://cdn.countryflags.com/thumbs/india/flag-square-250.png"},{label:"United States",value:"us",image:"https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png"},{label:"United Kingdom",value:"uk",image:"https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png"},{label:"Australia",value:"aus",image:"https://cdn.countryflags.com/thumbs/australia/flag-square-250.png"},{label:"Canada",value:"can",image:"https://cdn.countryflags.com/thumbs/canada/flag-square-250.png"}],onChange:n=>console.log(n)},render:x};var p,b,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: "Select a country",
    options: [{
      label: "India",
      value: "india"
    }, {
      label: "United States",
      value: "us"
    }, {
      label: "United Kingdom",
      value: "uk"
    }, {
      label: "Australia",
      value: "aus"
    }, {
      label: "Canada",
      value: "can"
    }],
    onChange: (value: string) => console.log(value)
  },
  render: Template
} as {
  args: SelectProps;
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,h,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: "Select a country",
    options: [{
      label: "India",
      value: "india",
      image: "https://cdn.countryflags.com/thumbs/india/flag-square-250.png"
    }, {
      label: "United States",
      value: "us",
      image: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png"
    }, {
      label: "United Kingdom",
      value: "uk",
      image: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png"
    }, {
      label: "Australia",
      value: "aus",
      image: "https://cdn.countryflags.com/thumbs/australia/flag-square-250.png"
    }, {
      label: "Canada",
      value: "can",
      image: "https://cdn.countryflags.com/thumbs/canada/flag-square-250.png"
    }],
    onChange: (value: string) => console.log(value)
  },
  render: Template
} as {
  args: SelectProps;
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const P=["Default","WithFlags"];export{i as Default,o as WithFlags,P as __namedExportsOrder,E as default};
