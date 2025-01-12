import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-BZISi7jw.js";import{c as B}from"./index-FGJkmGnF.js";import{c}from"./createLucideIcon-CF0hrkcB.js";import{X as V}from"./x-a1LHkvv1.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=c("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=c("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=c("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=c("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),C=({className:S,message:q,description:l,type:s="info",closable:z=!1,showIcon:P=!1})=>{const[W,E]=_.useState(!0);return W?e.jsxs("div",{className:B(S,"p-5 border border-solid rounded",{"bg-blue-500 bg-opacity-20 border-blue-500 ":s==="info","bg-green-500 bg-opacity-20 border-green-500 ":s==="success","bg-red-500 bg-opacity-20 border-red-500 ":s==="error","bg-yellow-500 bg-opacity-20 border-yellow-500 ":s==="warning"}),children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{className:"text-sm flex gap-2",children:[P&&e.jsxs("span",{children:[s==="info"&&e.jsx(O,{size:20,className:"text-blue-500"}),s==="success"&&e.jsx(M,{size:20,className:"text-green-500"}),s==="error"&&e.jsx(L,{size:20,className:"text-red-500"}),s==="warning"&&e.jsx(X,{size:20,className:"text-yellow-500"})]}),q]}),z&&e.jsx(V,{size:20,onClick:()=>E(!1),className:"text-gray-500 cursor-pointer"})]}),l&&e.jsx("p",{className:"text-xs mt-1",children:l})]}):null};C.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{className:{required:!1,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const J={component:C,title:"molecule/Alert",tags:["autodocs"]},r={args:{message:"This is an info Alert",description:"This is a description",type:"info"}},a={args:{message:"This is a success Alert",description:"This is a description",type:"success"}},i={args:{message:"This is an error Alert",description:"This is a description",type:"error"}},n={args:{message:"This is a warning Alert",description:"This is a description",type:"warning"}},o={args:{message:"This is an Alert with Icon",description:"This is a description",showIcon:!0}},t={args:{message:"This is an Alert with Close Button",description:"This is a description",closable:!0}};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    message: "This is an info Alert",
    description: "This is a description",
    type: "info"
  }
} as {
  args: AlertProps;
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    message: "This is a success Alert",
    description: "This is a description",
    type: "success"
  }
} as {
  args: AlertProps;
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    message: "This is an error Alert",
    description: "This is a description",
    type: "error"
  }
} as {
  args: AlertProps;
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var T,b,A;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: "This is a warning Alert",
    description: "This is a description",
    type: "warning"
  }
} as {
  args: AlertProps;
}`,...(A=(b=n.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var w,k,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    message: "This is an Alert with Icon",
    description: "This is a description",
    showIcon: true
  }
} as {
  args: AlertProps;
}`,...(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var I,v,N;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    message: "This is an Alert with Close Button",
    description: "This is a description",
    closable: true
  }
} as {
  args: AlertProps;
}`,...(N=(v=t.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const K=["Info","Success","Error","Warning","WithIcon","WithCloseButton"];export{i as Error,r as Info,a as Success,n as Warning,t as WithCloseButton,o as WithIcon,K as __namedExportsOrder,J as default};
