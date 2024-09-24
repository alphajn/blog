import{d as D,a6 as m,G as B,y as _,a1 as f,o as p,c as k,j as n,n as c,k as E,t as r,a8 as v,al as x,F as y,E as w,e as F,a as S,p as T,l as q,_ as C,I as U,a5 as b}from"./chunks/framework.VWMa53FW.js";import{I as N,w as P}from"./chunks/config.C3IDp1Hm.js";import{b as u}from"./chunks/index.BbVwo5FL.js";const o=d=>(T("data-v-e25e6c79"),d=d(),q(),d),I={class:"flex flex-row flex-wrap gap-10px fw-bold"},O=o(()=>n("span",{class:"c-#F56C6C"}," ws状态: ",-1)),V=["innerHTML"],W=o(()=>n("span",{class:"ml-24px c-#E6A23C"}," 连接耗时: ",-1)),$={class:"ml-auto select-none flex items-center gap-x-4px"},j=o(()=>n("label",{for:"binary",class:"c-#909399 cursor-pointer"},"返回二进制数据",-1)),R={class:"mt-8px flex flex-col gap-y-16px"},M={class:"flex justify-between items-center pb-6px gap-x-6px sticky top-64px pt-6px bg-[var(--vp-c-bg)] b-b-solid b-b-#909399 b-b-0.5px"},L={class:"c-#67C23A fw-bold"},H={class:"flex gap-x-8px shrink-0"},z=["onClick"],J=["disabled","onClick"],K={key:0,class:"i-svg-spinners:tadpole c-#F56C6C mr-4px"},G={class:"py-6px fw-500"},Q=o(()=>n("summary",{class:"c-#409EFF cursor-pointer !my-0"}," 发送数据: ",-1)),X={class:"c-#909399 lh-[1.4] my-0 indent-0"},Y={class:"py-6px fw-500"},Z=o(()=>n("summary",{class:"c-#E6A23C cursor-pointer !my-0"}," 接收数据: ",-1)),ss={class:"c-#909399 lh-[1.4] my-0 overflow-auto max-h-800px"},is=D({__name:"Ws",setup(d){let g=0;const s=m({status:"关闭",connect_time:"--",binary:!1,sends:{overview:{title:"订阅所有交易对行情",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",topic:"slowBroker",id:"sub_slowBroker"}},ticker:{title:"订阅当前交易对最新行情（会产生多条，最后一条为最新）",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",topic:"realtimes",symbol:"BTCUSDT",id:"sub_realtimes_BTCUSDT"}},order_book:{title:"订阅盘口挂单列表（精度2, 20条）",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",topic:"mergedDepth",symbol:"BTCUSDT",id:"sub_mergedDepth_BTCUSDT",limit:20,params:{dumpScale:2}}},deal:{title:"订阅最新成交（40条）",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",topic:"trade",id:"sub_trade_BTCUSDT",symbol:"BTCUSDT",limit:40}},kline:{title:"订阅 kline 1 小时数据（最新1条）",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",topic:"kline_1h",symbol:"BTCUSDT",id:"sub_kline_1h_BTCUSDT",params:{limit:1}}},depth:{title:"订阅深度图数据",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",topic:"depth",symbol:"BTCUSDT",id:"sub_depth_BTCUSDT"}}}}),h=B(null),e={init(){h.value=new N(P,{retry:100,heart:!0,binary:s.binary,onCreate:i=>{s.connect_time="--",s.status=i===0?'<span class="c-#409EFF">正在连接</span>':'<span class="c-#E6A23C">正在重连</span>',g=Date.now()},onOpen:()=>{s.status='<span class="c-#67C23A">已连接</span>',s.connect_time=String(Date.now()-g)},onClose:()=>{s.status='<span class="c-#F56C6C">关闭</span>'}})},send(i){var l;const a=s.sends[i];a.loading=!0,(l=h.value)==null||l.send(a.send,t=>{a.data=t,a.loading=!1,a.send.event==="sub"&&(a.subing=!0),this.setUpdateStyle(a)})},unSub(i){var l;const a=s.sends[i];a.send.event==="sub"&&(a.subing=!1),(l=h.value)==null||l.send({...a.send,event:"cancel"},()=>{a.data=null})},setUpdateStyle(i){i.data&&(i.update=!0,i.timer&&clearTimeout(i.timer),setTimeout(()=>{i.update=!1},300))},onChangeBinary(){var i;Object.keys(s.sends).forEach(e.unSub),(i=h.value)==null||i.close(),e.init()}};return _(()=>{e.init()}),f(()=>{var i;Object.keys(s.sends).forEach(e.unSub),(i=h.value)==null||i.close()}),(i,a)=>(p(),k(y,null,[n("div",I,[O,n("span",{class:"c-#909399",innerHTML:s.status},null,8,V),W,n("span",{class:c([s.connect_time==="--"?"c-#909399":E(u)(s.connect_time,500)?"c-#67C23A":E(u)(s.connect_time,1e3)?"c-#E6A23C":"c-#F56C6C"])},r(s.connect_time)+" ms ",3),n("span",$,[v(n("input",{id:"binary","onUpdate:modelValue":a[0]||(a[0]=l=>s.binary=l),type:"checkbox",class:"m-0 w-16px h-16px",onChange:a[1]||(a[1]=(...l)=>e.onChangeBinary&&e.onChangeBinary(...l))},null,544),[[x,s.binary]]),j])]),n("div",R,[(p(!0),k(y,null,w(Object.entries(s.sends),([l,t])=>(p(),k("div",{key:l,class:c(["p-10px rd-10px transition-duration-300",{"has-update":t.update}])},[n("div",M,[n("span",L,r(t.title),1),n("div",H,[t.send.event==="sub"&&t.subing?(p(),k("button",{key:0,type:"button",class:"bg-#F56C6C c-white rd-4px px-10px transition-duration-300 hover:opacity-80",onClick:A=>e.unSub(l)}," 取消 ",8,z)):F("",!0),n("button",{disabled:t.loading||t.subing,type:"button",class:c(["bg-#67C23A c-white rd-4px px-10px flex items-center transition-duration-300 hover:opacity-80",{"opacity-50 cursor-progress":t.loading,"opacity-50 cursor-not-allowed":t.subing}]),onClick:A=>e.send(l)},[t.loading?(p(),k("div",K)):F("",!0),S(" "+r(t.send.event==="sub"?"订阅":"取消"),1)],10,J)])]),n("details",G,[Q,n("pre",X,r(JSON.stringify(t.send,null,4)),1)]),n("details",Y,[Z,n("pre",ss,r(JSON.stringify(t.data,null,4)),1)])],2))),128))])],64))}}),as=C(is,[["__scopeId","data-v-e25e6c79"]]),ds=JSON.parse('{"title":"Socket","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/ws.md","filePath":"npm/ws.md","lastUpdated":1721378222000}'),ns={name:"npm/ws.md"},ts=b("",4),ls=b("",23);function es(d,g,s,h,e,i){const a=as;return p(),k("div",null,[ts,U(a),ls])}const rs=C(ns,[["render",es]]);export{ds as __pageData,rs as default};