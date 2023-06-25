import{r as c,j as e,F as m,a as o}from"./jsx-runtime-00d1b5d3.js";import{u}from"./MenuCtx-9b9f3d8b.js";import{u as w}from"./CartCtx-6851d5f1.js";import{b as S,d as v}from"./index.esm-a48567f3.js";import{u as C}from"./useMediaQuery-ba868550.js";import{B as _}from"./Button-3887cb91.js";import{u as y}from"./useFoodMenu-de313611.js";import{z as k}from"./QueryClientProvider-d549d0a2.js";import{S as M}from"./SectionContainer-0317890c.js";import{a as b}from"./router-cde7be48.js";import{m as R}from"./motion-7a035700.js";const f=(r,a)=>{const t=r.indexOf("limit_1");return`${r.slice(0,t)}h_${a},${r.slice(t)}`},E="/react-restaurant/assets/noImage-6f3882e0.webp",T=({src:r,alt:a})=>{const t=c.useRef(null),[l,s]=c.useState(!1);return c.useEffect(()=>{const n=p=>{p[0].isIntersecting&&s(!0)},i=new IntersectionObserver(n,{threshold:.2});return i.observe(t.current),()=>i.disconnect()},[]),e(m,{children:l?o("picture",{children:[e("source",{type:"image/webp",media:"(min-width: 1024px)",srcSet:f(r,350)}),e("source",{type:"image/webp",media:"(min-width: 0px)",srcSet:f(r,300)}),e("img",{className:"h-full w-full object-cover lg:h-[300px]",src:E,alt:a})]}):e("img",{ref:t,className:"h-full w-full object-cover"})})},A=({menuData:r})=>{const{img:a,category:t,price:l,name:s,stock:n,id:i}=r,{dispatch:p}=w(),[x,...N]=s.split(" "),g=C("(min-width: 1024px)"),h=()=>{p({type:"ADD_TO_CART",payload:{price:l,name:s,id:i,stock:n,img:a}})};return o("li",{className:"relative grid grid-cols-[auto_1fr] overflow-hidden rounded-lg border border-gray-200 duration-150 hover:-translate-y-1 hover:border-gray-400 hover:shadow-xl lg:grid-cols-1 lg:grid-rows-[auto_1fr]",children:[e("div",{className:"w-24 overflow-hidden lg:w-auto",children:e(T,{src:a,alt:s})}),o("div",{className:"grid grid-cols-[1fr_auto] content-between p-2",children:[g?o(m,{children:[o("p",{className:"flex items-center font-semibold",children:[x,e("span",{className:"badge-secondary badge ml-2",children:t})]}),o("strong",{className:"text-3xl text-primary",children:["RM ",l.toFixed(2)]}),e("p",{className:"text-lg font-semibold",children:N.join(" ")})]}):o(m,{children:[e("p",{className:"col-span-full",children:s}),e("span",{className:"badge-secondary badge col-span-full",children:t}),o("strong",{className:"text-primary",children:["RM ",l.toFixed(2)]})]}),g?e(_,{color:"secondary",className:"btn-lg col-span-full mt-3",onClick:h,children:"加入购物车"}):e("button",{type:"button",className:"grid h-6 w-6 place-items-center self-end rounded-full border border-primary bg-primary",onClick:h,children:e(S,{color:"white"})})]})]})},d=({type:r="text",classes:a})=>{let t=null;r==="img"&&(t="h-[300px]"),r==="title"&&(t="h-5 my-3"),r==="text"&&(t="h-3 my-2");const l=`bg-gray-300 rounded-md animate-pulse ${t} ${a}`;return e("div",{className:l})},O=()=>o("div",{className:"rounded-md bg-gray-500",children:[e(d,{type:"img"}),o("div",{className:"p-4",children:[e(d,{type:"title",classes:"w-full"}),e(d,{type:"text",classes:"w-3/4"}),e(d,{type:"text",classes:"w-3/4"})]})]}),F=()=>e("ul",{className:"grid grid-cols-3 gap-8",children:[...Array(12).keys()].map(r=>e(O,{},r))}),I=()=>{const{dispatch:r,filtered_menu:a,search:t}=u(),{isLoading:l}=y({onSuccess:s=>r({type:"SET_MENU",payload:s})});return l?e(F,{}):a.length<1&&t!==""?e("p",{children:"没有符合您寻找的食品，请在查询"}):e("ul",{className:"grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8",children:a.map(s=>e(A,{menuData:s},s.id))})},j=(r="",a=1e3)=>{const[t,l]=c.useState(r);return c.useEffect(()=>{const s=setTimeout(()=>{l(r)},a);return()=>clearTimeout(s)},[r,a]),t},D=({search:r,onSearchChange:a})=>{const t=c.useId(),{filtered_menu:l}=u(),s=c.useRef(null),n=()=>{a(""),s.current.focus()};return o("form",{className:"relative mb-4 rounded-md",children:[e("input",{type:"text",className:"mx-auto w-full rounded-md border border-gray-300 p-3 text-base outline-none focus:border-primary",placeholder:"搜寻",disabled:l.length<1,id:t,onChange:i=>{a(i.target.value)},value:r,ref:s}),e("label",{htmlFor:t,className:"absolute top-1/2 right-2 -translate-y-1/2 ",children:r?e("button",{type:"button",onClick:n,children:e(v,{})}):e(k,{})})]})},$=()=>{const{currentSelect:r,dispatch:a}=u(),{isLoading:t,data:l}=y();if(t)return[...Array(5).keys()].map(n=>e(d,{classes:"h-14"},n));const s=["全部",...new Set(l.map(n=>n.category))];return e(m,{children:e("ul",{className:"menu flex-row lg:flex-col",children:s.map(n=>e("li",{className:r===n?"bordered":"",children:e("button",{type:"button",onClick:()=>{a({type:"SORT_BY_CATEGORY",payload:n})},className:`${r===n?"border-b-4 border-l-0 bg-primary/20 text-black/70 enabled:hover:bg-primary/20 lg:border-l-4 lg:border-b-0":"border-b-4 border-transparent bg-transparent text-black/70 enabled:hover:bg-primary/20 lg:border-l-4 lg:border-b-0"}`,children:n})},n))})})},B=()=>{const{dispatch:r,filtered_menu:a}=u(),[t,l]=c.useState(""),s=j(t,750);return c.useEffect(()=>{r({type:"SEARCH_PRODUCTS",payload:s}),r({type:"SET_SEARCH",payload:s})},[s]),o(m,{children:[e(D,{onSearchChange:l,search:t}),s!==""&&o("p",{children:["搜寻到 ",a.length," 个菜色"]}),s===""&&e($,{})]})},K=()=>e(R.div,{variants:b,...b,children:e(M,{children:o("div",{className:"flex flex-col gap-8 lg:flex-row",children:[e("div",{className:"sticky left-0 top-16 z-[1] bg-white pb-4 lg:top-[160px] lg:h-full lg:w-1/4",children:e(B,{})}),o("div",{className:"lg:w-3/4",children:[e("h1",{className:"mb-3 text-2xl lg:mb-6 lg:text-4xl",children:"菜单列表"}),e(I,{})]})]})})});export{K as default};
