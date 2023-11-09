import"./chunks/el-button.c04f78af.js";import{u as cs,l as Z}from"./chunks/index.47678fbe.js";import"./chunks/el-loading.4ed993c7.js";import{d as rs,u as hs,a5 as ys,q as Fs,a6 as ds,w as Ds,o as es,c as os,C as B,J as f,E as b,a as D,a7 as Cs,_ as is,V as us}from"./chunks/framework.7bc26fef.js";import{p as P,l as g,y as ss,N as ts,w as T,a as F,m as Y,f as E,s as S,S as as}from"./chunks/index.7e71f9e5.js";import"./chunks/index.467f35b1.js";import"./chunks/index.88e0cb06.js";const ls=(p="dark")=>{const a=p==="light";return{grid:{top:0,bottom:50,gap:4,poition:"left"},buy:"#20b26c",sell:"#ef454a",lineWidth:2,buyGradient:["rgba(32, 178, 108, 0)","rgba(32, 178, 108, 0.2)"],sellGradient:["rgba(239, 69, 74, 0)","rgba(239, 69, 74, 0.2)"],tooltip:{padding:10,size:20,color:a?"black":"white",bg:a?"#fff":"#16171A",maskColor:"rgba(0, 0, 0, 0.02)"},separator:{size:2,color:a?"black":"white"},axis:{size:20,color:a?"black":"white",lineColor:a?"black":"white"}}},ns=p=>{const a=[];return p.forEach((s,t)=>{let n=s[1];t>0&&(n=F(n,a[t-1].total)),a.push({price:String(s[0]),quantity:String(s[1]),total:String(n)})}),a},$=(p,a,s,t,n,l=!1)=>{p.beginPath(),p.lineWidth=a,p.strokeStyle=s,l&&p.setLineDash([6,6]),p.moveTo(t[0],t[1]),p.lineTo(n[0],n[1]),p.stroke(),p.closePath()},x=(p,a,s,t,n=8)=>{p.beginPath(),p.fillStyle=t,p.arc(a,s,n,0,2*Math.PI,!0),p.fill(),p.closePath()},W=(p,a,s,t,n,l,o=20,i=8)=>{p.beginPath(),p.fillStyle=a,o&&(p.shadowBlur=o,p.shadowColor="rgba(0, 0, 0, 0.2)"),p.roundRect(s,t,n,l,i),p.fill(),p.closePath()},q=(p,a)=>p.measureText(a).width||0;class ms{constructor(a,s){if(this.ready=!1,this.canvas=null,this.tooltip=null,this.ratio=2,this.ctx=null,this.tooltipCtx=null,this.pricePrecision=2,this.quantityPrecision=4,this.style=ls(),this.middle=0,this.max="",this.cW=0,this.cH=0,this.xTickWidth=120,this.left=120,this.buyList=[],this.sellList=[],this.lastPrice="0",this.requestAnimation=0,this.showTooltip=!1,this.tooltipAnimation=0,this.clientX=0,this.clientY=0,this.texts={buy:"Buy",sell:"Sell"},typeof a=="string"?this.el=document.querySelector(a):this.el=a,!this.el)throw new Error("el 获取出错~!~");s!=null&&s.theme&&this.setTheme(s.theme,!1),s!=null&&s.style&&this.setStyle(s.style,!1),this.init()}init(){const a=this.el.querySelectorAll("canvas");a!=null&&a.length&&a.forEach(s=>{this.el.removeChild(s)}),this.el.style.position="relative",this.canvas=document.createElement("canvas"),this.el.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.tooltip=document.createElement("canvas"),this.el.appendChild(this.tooltip),this.tooltipCtx=this.tooltip.getContext("2d"),this.tooltip.style.position="absolute",this.tooltip.style.left="0",this.tooltip.style.top="0",this.resizeObserver(),this.listenMove()}resizeObserver(){new ResizeObserver(()=>{this.resize()}).observe(this.el)}setData(a,s){this.requestAnimation&&cancelAnimationFrame(this.requestAnimation),this.requestAnimation=requestAnimationFrame(()=>{const t=Math.min(a.length,s.length),n=a.slice(0,t).sort((o,i)=>Number(P(i[0],o[0]))),l=s.slice(0,t).sort((o,i)=>Number(P(o[0],i[0])));this.buyList=ns(n).reverse(),this.sellList=ns(l),this.ready&&this.updateDraw()})}draw(){if(!this.canvas||!this.ctx)return;const{ctx:a,style:s}=this;if(a.clearRect(0,0,this.canvas.width,this.canvas.height),!this.buyList.length)return;a.font=`${s.axis.size}px Verdana, Arial, Helvetica, sans-serif`,this.max=g(ss(this.buyList[0].total,this.sellList.slice(-1)[0].total),1.35);const t=this.getTickPrecision();this.xTickWidth=q(a,`${ts(this.max,t)} -`)+18,this.left=this.style.grid.poition==="right"?0:this.xTickWidth,this.cW=this.canvas.width-this.xTickWidth-s.grid.gap*2-s.separator.size,this.middle=(this.canvas.width-this.xTickWidth)/2;const n=T(this.cW,2*this.buyList.length);this.drawBuy(n),this.drawSell(n),this.drawGrid(),this.drawXTick(t),this.drawYTick()}drawBuy(a){const{ctx:s,style:t}=this,n=this.left+t.lineWidth/2;s&&(s.beginPath(),s.moveTo(n,this.cH),s.strokeStyle=t.buy,s.lineWidth=t.lineWidth,this.buyList.forEach((l,o)=>{const i=F(n,g(a,o)),e=Number(F(i,a)),r=this.matchX(this.buyList[o].total);s.lineTo(Number(i),r),s.lineTo(e,r),o===this.buyList.length-1&&s.lineTo(e,this.cH)}),s.stroke(),this.drawArea(n,n,t.buyGradient),s.closePath())}drawSell(a){const{ctx:s,style:t}=this,n=F(this.middle,this.left),l=Number(F(n,t.grid.gap));s&&(s.beginPath(),s.moveTo(l,this.cH),s.strokeStyle=t.sell,s.lineWidth=t.lineWidth,this.sellList.forEach((o,i)=>{const e=F(l,g(a,i)),r=Number(F(e,a)),c=this.matchX(this.sellList[i].total);s.lineTo(Number(e),c),s.lineTo(r,c),i===this.sellList.length-1&&s.lineTo(r,this.cH)}),s.stroke(),this.drawArea(l,l,t.sellGradient),s.closePath())}drawGrid(){const{ctx:a,style:s}=this,{top:t}=s.grid;if(!a||!this.canvas)return;const n=this.left+s.lineWidth/2;let l=n;const o=s.grid.poition==="right";o&&(l=this.canvas.width-this.xTickWidth),[{color:s.axis.lineColor,width:s.lineWidth,from:[l,this.cH],to:[l,t]},{color:s.separator.color,width:s.separator.size,from:[this.middle+this.left,this.cH],to:[this.middle+this.left,t]},{color:s.axis.lineColor,width:s.lineWidth,from:[n,this.cH],to:[o?l:this.canvas.width,this.cH]}].forEach(i=>{$(a,i.width,i.color,i.from,i.to)})}drawXTick(a){const{ctx:s,canvas:t,style:n,xTickWidth:l}=this;if(!s||!t)return;const o=Y(T(this.max,6),a+2,0),i=n.grid.poition==="right",e=i?t.width-l:l;let r=1;for(s.fillStyle=n.axis.color,s.textAlign=i?"left":"right";r<6;){const c=g(o,r),h=this.matchX(c),d=ts(c,a),C=i?`- ${d}`:`${d} -`;s.fillText(C,e,h),r+=1}}drawYTick(a=!1){const{ctx:s,canvas:t,style:n,left:l}=this;if(!s||!t||!this.buyList.length)return;const o=this.middle/2,i=n.lineWidth/2;let e=[{x:l+i,side:"buy",align:"left"},{x:o+l,side:"buy",align:"center"},{x:this.middle+l,price:E(this.lastPrice,0)?this.lastPrice:this.buyList.slice(-1)[0].price,side:"buy",align:"center"},{x:o*3+l,side:"sell",align:"center"},{x:t.width-(n.grid.poition==="right"?this.xTickWidth:i),side:"sell",align:"right"}];s.fillStyle=n.axis.color;const r=q(s,S(this.sellList[0].price,this.pricePrecision));a?(e=e.filter((c,h)=>h===2),s.clearRect(this.middle+l-r/2,this.cH+12,r,n.axis.size)):(r*1.7>this.cW/4||this.buyList.length<2)&&(e=e.filter((c,h)=>![1,3].includes(h))),e.forEach(c=>{var C,k;const h=this.matchY(c.x,c.side);let d=c.price||"0.00";s.textAlign=c.align,!c.price&&h>=0&&(d=c.side==="buy"?(C=this.buyList[h])==null?void 0:C.price:(k=this.sellList[h])==null?void 0:k.price),s.fillText(`${S(d||"0.00",this.pricePrecision)}`,c.x,this.cH+10+n.axis.size),$(s,2,n.axis.lineColor,[c.x,this.cH+2],[c.x,this.cH+10])})}drawArea(a,s,t){if(this.ctx){const n=this.ctx.createLinearGradient(a,this.cH,s,170);n.addColorStop(1,t[1]),n.addColorStop(0,t[0]),this.ctx.fillStyle=n,this.ctx.fill()}}drawTooltip(){const{tooltip:a,tooltipAnimation:s,tooltipCtx:t,showTooltip:n,clientX:l,clientY:o,middle:i,style:e,left:r,buyList:c,sellList:h,quantityPrecision:d,texts:C,xTickWidth:k}=this;s&&cancelAnimationFrame(s),this.tooltipAnimation=requestAnimationFrame(()=>{if(!t||!a||(t.clearRect(0,0,a.width,a.height),!n))return;const y=l<i+r-e.grid.gap,v=l>i+r+e.grid.gap,w=this.matchY(l,y?"buy":"sell");if(!y&&!v||!c[w])return;t.font=`${e.tooltip.size}px Verdana, Arial, Helvetica, sans-serif`;const u=8,L=y?c[w]:c[c.length-w-1],z=v?h[w]:h[c.length-w-1];let H="0.00";const X=`${C.buy}: ${S(L.total,d)}`,N=`${C.sell}: ${S(z.total,d)}`,ps=ss(q(t,X),q(t,N)),M=Number(F(F(ps,e.tooltip.padding*2),u*2+10)),G=e.tooltip.padding*2+e.tooltip.size*3+24,V=y?this.clientX+20:this.clientX-M-20,I=o>this.cH-G-e.lineWidth?this.cH-G-e.lineWidth:o,O=e.grid.poition==="left"?k:-k,m=y?l:a.width-l+O,A=v?l:a.width-l+O,J=this.matchX(L.total),U=this.matchX(z.total);y&&(H=Y(g(T(as(P(L.price,this.lastPrice)),this.lastPrice),100),2)),v&&(H=Y(g(T(as(P(z.price,this.lastPrice)),this.lastPrice),100),2)),x(t,m,J,e.buyGradient[1],12),x(t,m,J,e.buy),$(t,e.lineWidth,e.buy,[m,e.grid.top],[m,this.cH+10],!0),W(t,e.tooltip.maskColor,r,e.grid.top,m-r,this.cH,0,0),this.drawPriceRect(m,L.price),x(t,A,U,e.sellGradient[1],12),x(t,A,U,e.sell),$(t,e.lineWidth,e.sell,[A,e.grid.top],[A,this.cH+10],!0),W(t,e.tooltip.maskColor,A,e.grid.top,m-r,this.cH,0,0),this.drawPriceRect(A,z.price),W(t,e.tooltip.bg,V,I,M,G);const j=I+e.tooltip.padding+e.tooltip.size/2,R=j+e.tooltip.size+12,K=R+e.tooltip.size+12,_=V+e.tooltip.padding,Q=y?e.buy:e.sell;t.textAlign="left",t.textBaseline="middle",t.fillStyle=Q,t.fillText(`${H}%`,_,j),x(t,_+u,R-1,Q,u),t.fillStyle=e.tooltip.color,t.fillText(y?X:N,_+u*2+10,R),x(t,_+u,K-1,v?e.buy:e.sell,u),t.fillStyle=e.tooltip.color,t.fillText(y?N:X,_+u*2+10,K)})}drawPriceRect(a,s){if(!this.tooltipCtx||!this.tooltip)return;const t=S(s,this.pricePrecision),n=q(this.tooltipCtx,t)+10;let l=a-n/2;const o=this.style.axis.size+8,i=this.tooltip.width-n/2,e=this.style.grid.poition==="right";l<this.left?l=this.left:a>(e?i-this.xTickWidth:i)&&(l=this.tooltip.width-n,e&&(l-=this.xTickWidth)),W(this.tooltipCtx,"rgb(76, 82, 94)",l,this.cH+10,n,o,0,4),this.tooltipCtx.fillStyle="#fff",this.tooltipCtx.fillText(t,l+5,this.cH+10+o/2)}matchY(a,s){const{gap:t}=this.style.grid,n=this.left+this.middle+t+this.style.separator.size,l=s==="sell"?n:this.left;return Math.floor((a-l)*this.buyList.length/(this.cW/2))}matchX(a){const s=g(T(a,this.max),this.cH);return Math.round(Number(P(this.cH,s)))}updateDraw(){this.draw(),this.showTooltip&&this.drawTooltip()}getTickPrecision(){let a=this.quantityPrecision;return E(this.max,1e3)?a=2:E(this.max,10)?a=0:E(this.max,1)?a=1:E(this.max,.1)&&(a=2),a}listenMove(){this.tooltip&&(this.tooltip.addEventListener("mousemove",this.mousemove.bind(this),!1),this.tooltip.addEventListener("mouseout",this.mouseout.bind(this),!1))}mousemove(a){if(!this.tooltip)return;this.clientX=a.offsetX*this.ratio,this.clientY=a.offsetY*this.ratio;const s=this.style.grid.poition==="right"?this.tooltip.width-this.xTickWidth:this.tooltip.width;this.showTooltip=this.clientX>this.left&&this.clientX<s,this.drawTooltip()}mouseout(){this.showTooltip=!1,this.clientX=0,this.clientY=0,this.drawTooltip()}updateLastPrice(a){this.lastPrice=a,this.drawYTick(!0)}setPrecision(a=2,s=4){this.pricePrecision=a,this.quantityPrecision=s,this.buyList.length&&this.updateDraw()}setTheme(a,s=!0){this.style=ls(a||"dark"),s&&this.updateDraw()}getStyle(){return this.style}setStyle(a,s=!0){this.style={...this.style,...a},s&&this.updateDraw()}resize(){if(this.ready=!0,this.canvas){const{width:a,height:s}=this.el.getBoundingClientRect();[this.canvas,this.tooltip].forEach(t=>{t&&(t.style.width=`${a}px`,t.style.height=`${s}px`,t.width=a*this.ratio,t.height=s*this.ratio)}),this.cH=this.canvas.height-this.style.grid.bottom}this.buyList.length&&this.updateDraw()}setLang(a){this.texts=a,this.drawTooltip()}}const gs={class:"flex flex-row flex-wrap mb-12px gap-10px"},fs=rs({__name:"Depth",setup(p){const{isDark:a}=hs(),s=new cs("wss://ws.meex.com/kline-api/ws"),t=ys({el:null,chart:null,loading:!1,active:0,buys:[],sells:[],change_style:!1}),n={send(){t.loading=!0,s.send({event:"sub",params:{channel:"market_btcusdt_depth_step0"}},l=>{t.loading=!1,l.success&&(t.sells=l.tick.asks,t.buys=l.tick.buys,n.updateData())})},unSend(l){s==null||s.send({event:"unsub",params:{channel:"market_btcusdt_depth_step0"}},o=>{o.success&&(l==null||l())})},updateData(){var l;n.updateLastPrice(),(l=t.chart)==null||l.setData(t.buys,t.sells)},setBig(){t.active=1,n.unSend(()=>{t.buys=[[200000.69,1000.0004],[300000.72,2000.0006],[400000.3,60.999]],t.sells=[[200001.6329,1000.0005],[300001.72,200.0006],[400001.3,60.999]],n.updateData()})},onSend(){t.active=0,n.send()},changeStyle(){var l;t.change_style=!0,(l=t.chart)==null||l.setStyle({buy:"#713f12",sell:"#701a75",buyGradient:["#fef08a","#a16207"],sellGradient:["#f5d0fe","#a21caf"],grid:{poition:"right",top:0,bottom:50,gap:4},separator:{size:2,color:"#15803d"},axis:{size:20,color:"#15803d",lineColor:"#15803d"}})},updateLastPrice(){var l;(l=t.chart)==null||l.updateLastPrice(String(Math.random()*1e4))}};return Fs(()=>{t.chart=new ms(t.el,{theme:"light"}),n.send()}),ds(()=>{n.unSend()}),Ds(()=>a.value,l=>{var o;(o=t.chart)==null||o.setTheme(l?"dark":"light")},{immediate:!0}),(l,o)=>{const i=Z.ElButton,e=Z.ElLoadingDirective;return es(),os("section",null,[B("div",gs,[f(i,{size:"small",type:"primary",disabled:t.active===0,onClick:n.onSend},{default:b(()=>[D(" 获取ws数据 ")]),_:1},8,["disabled","onClick"]),f(i,{size:"small",type:"success",disabled:t.active===1,onClick:n.setBig},{default:b(()=>[D(" 测试大数 ")]),_:1},8,["disabled","onClick"]),f(i,{size:"small",type:"warning",disabled:t.change_style,onClick:n.changeStyle},{default:b(()=>[D(" 修改主题 ")]),_:1},8,["disabled","onClick"]),f(i,{size:"small",type:"danger",onClick:n.updateLastPrice},{default:b(()=>[D(" 更新成交价 ")]),_:1},8,["onClick"]),f(i,{size:"small",type:"info",onClick:o[0]||(o[0]=r=>{var c;return(c=t.chart)==null?void 0:c.setPrecision(8,8)})},{default:b(()=>[D(" 设置精度 ")]),_:1}),f(i,{size:"small",type:"info",class:"bg-fuchsia! border-color-fuchsia!",onClick:o[1]||(o[1]=r=>{var c;return(c=t.chart)==null?void 0:c.setLang({buy:"买",sell:"卖"})})},{default:b(()=>[D(" 更新tooltip买/卖文本 ")]),_:1})]),Cs(B("div",{ref:r=>t.el=r,class:"bg-gray-400/10 h-300px rd-10px"},null,512),[[e,t.loading]])])}}});const As=is(fs,[["__scopeId","data-v-4570bfa6"]]),Ls=JSON.parse('{"title":"深度图","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/depth.md","lastUpdated":1698228376000}'),bs={name:"npm/depth.md"},xs=B("h1",{id:"深度图",tabindex:"-1"},[D("深度图 "),B("a",{class:"header-anchor",href:"#深度图","aria-label":'Permalink to "深度图"'},"​")],-1),Bs=B("h2",{id:"demo",tabindex:"-1"},[D("Demo "),B("a",{class:"header-anchor",href:"#demo","aria-label":'Permalink to "Demo"'},"​")],-1),ks=us("",39);function vs(p,a,s,t,n,l){const o=As;return es(),os("div",null,[xs,Bs,f(o),ks])}const zs=is(bs,[["render",vs]]);export{Ls as __pageData,zs as default};