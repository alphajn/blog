import{_ as u,a as m}from"./chunks/el-tag.a2d2cde6.js";import{d as g,u as b,a5 as _,l as f,k as E,a6 as v,o as F,c as d,C as t,J as y,b as B,S as k,U as q,_ as C,a as c,E as x,V as P}from"./chunks/framework.810436bc.js";import{T}from"./chunks/Kline.vue_vue_type_style_index_0_scoped_913d5e6b_lang.7ade7bd5.js";import{u as w,l as L}from"./chunks/index.88dc1bbd.js";import{E as K}from"./chunks/index.e286162c.js";import"./chunks/el-option.4ed993c7.js";import"./chunks/el-button.4ed993c7.js";import"./chunks/index.dc0a6508.js";import"./chunks/index.70f4c496.js";import"./chunks/index.b36400a7.js";const A=D=>(k("data-v-f252fcae"),D=D(),q(),D),S={class:"options pb-8px! text-12px border-b-solid border-b border-amber mb-8px!"},$=A(()=>t("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," 交易对 ",-1)),I=A(()=>t("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," 语言 ",-1)),z={class:"h-400px"},N=g({__name:"TvKline",setup(D){const{isDark:i}=b(),p=new w("wss://ws.meex.com/kline-api/ws",{name:"kline-ws-meex",retry:100,connect:!1}),s=_({symbols:{},lang:"zh-CN",theme:"light",loading:!0,interval:"60",list:[],sub_list:[],latest_data:null,page_size:1e3,library_path:"/blog/charting_library/"}),e=f(()=>{var a;return`market_${(a=s.symbols.symbol)==null?void 0:a.toLowerCase()}_kline_60min`}),l={getKline(){s.loading=!0,s.sub_list=[],s.latest_data=null,l.subKline(),p.send({event:"req",params:{channel:e.value}},a=>{var n,o;if(s.loading=!1,s.list=[],a.success&&a.channel===e.value){const r=l.formatList(a.data);if(s.sub_list.length){const h=(n=r.slice(-1)[0])==null?void 0:n.time;((o=s.sub_list[0])==null?void 0:o.timestamp)>h&&r.push(...s.sub_list),s.sub_list=[]}s.list=r}})},subKline(){p.init(),p.send({event:"sub",params:{channel:e.value}},a=>{if(a.success&&a.channel===e.value){const n=l.formatList([a.tick]);s.loading?s.sub_list=n:([s.latest_data]=n,l.updateListLastData())}})},loadMore(a,n){if(!a){n([]);return}p.send({event:"req",params:{channel:e.value,endIdx:a/1e3-1,pageSize:s.page_size}},o=>{if(o.success&&o.channel===e.value){const r=l.formatList(o.data);n(r),s.list.unshift(...r)}})},updateListLastData(){var a;if(s.latest_data){const n=s.latest_data.time,o=(a=s.list.slice(-1)[0])==null?void 0:a.time;n===o?s.list.splice(-1,1,s.latest_data):n&&(!o||n>o)&&s.list.push(s.latest_data)}},unsub(a){p.send({event:"unsub",params:{channel:e.value}},a)},changeSymbol(a){l.unsub(()=>{}),s.symbols=a,s.interval&&l.getKline()},changeLang(a){s.lang=a},formatList(a){return a.map(n=>({id:`${s.symbols.symbol}_${s.interval}`,time:n.id*1e3,open:n.open,close:n.close,high:n.high,low:n.low,volume:n.vol}))},onPlusClick(a){K({title:"点击加号返回数据",message:JSON.stringify(a,null,4),type:"info"})}};return E(()=>{s.theme=i.value?"dark":"light"}),v(()=>{l.unsub(()=>{}),p==null||p.close()}),(a,n)=>{const o=u,r=m;return F(),d("section",null,[t("ul",S,[t("li",null,[$,y(o,{onChange:l.changeSymbol},null,8,["onChange"])]),t("li",null,[I,y(r,{lang:s.lang,onChange:l.changeLang},null,8,["lang","onChange"])])]),t("div",z,[y(B(T),{interval:s.interval,loading:s.loading,theme:s.theme,lang:s.lang,symbol:s.symbols.symbol,"price-precision":s.symbols.pricePrecision,"quantity-precision":s.symbols.quantityPrecision,list:s.list,"latest-data":s.latest_data,"load-more":l.loadMore,"library-path":s.library_path,"limit-size":s.page_size,watermark:"Kline","on-plus-click":l.onPlusClick},null,8,["interval","loading","theme","lang","symbol","price-precision","quantity-precision","list","latest-data","load-more","library-path","limit-size","on-plus-click"])])])}}});const V=C(N,[["__scopeId","data-v-f252fcae"]]),os=JSON.parse('{"title":"专业版","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/kline-tv.md","lastUpdated":1703486231000}'),M={name:"npm/kline-tv.md"},U=t("h1",{id:"专业版",tabindex:"-1"},[c("专业版 "),t("a",{class:"header-anchor",href:"#专业版","aria-label":'Permalink to "专业版"'},"​")],-1),O=t("a",{href:"https://cn.tradingview.com/widget/advanced-chart/",target:"_blank",rel:"noreferrer"},"Tradingview",-1),R=t("a",{href:"https://www.tradingview.com/charting-library-docs/",target:"_blank",rel:"noreferrer"},"官方文档",-1),J=t("h2",{id:"demo",tabindex:"-1"},[c("Demo "),t("a",{class:"header-anchor",href:"#demo","aria-label":'Permalink to "Demo"'},"​")],-1),W=P(`<h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 使用 npm</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@fe/kline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用 yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@fe/kline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用 pnpm</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@fe/kline</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Tv</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fe/kline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loading</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">light</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">symbol</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">BTCUSDT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">price_precision</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">quantity_precision</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">    exchange: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bybit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">latest_data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    limit-</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> methods </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loadMore</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">ts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cb</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">KLineData</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// ::TODO</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Tv</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">interval</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">60</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:loading</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">state.loading</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:theme</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">state.theme</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">state.lang</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:symbol</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">state.symbol</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:price-precision</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">state.price_precision</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:quantity-precision</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">state.quantity_precision</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:exchange</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">state.exchange</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:list</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">state.list</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:latest-data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">state.latest_data</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:load-more</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">methods.loadMore</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">library-path</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/public/charting_library/</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:limit-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">state.limit_size</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">watermark</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Kline</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><strong>loading</strong></td><td>数据获取中展示loading样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><strong>theme</strong></td><td>主题</td><td><a href="#theme类型">string</a></td><td>&#39;dark&#39;</td></tr><tr><td><strong>lang</strong></td><td>语言</td><td><a href="#lang类型">string</a></td><td>&#39;en-US&#39;</td></tr><tr><td><strong>showMa</strong></td><td>默认展示ma指标</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><strong>showVol</strong></td><td>默认展示成交量指标</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><strong>limitSize</strong></td><td>分页条数，判断是否还有更多</td><td><code>number</code></td><td><code>1000</code></td></tr><tr><td><strong>watermark</strong></td><td>水印</td><td><code>HTMLElement | string</code></td><td>&#39;&#39;</td></tr><tr><td><strong>list</strong></td><td>初始列表</td><td>Array&lt;<a href="#klinedata类型">KlineData</a>&gt;</td><td>[]</td></tr><tr><td><strong>latestData</strong></td><td>最新数据</td><td><a href="#klinedata类型">KlineData</a></td><td><code>null</code></td></tr><tr><td><strong>loadMore</strong></td><td>加载历史数据回调</td><td><code>(ts: number | null, cb: (list: KLineData[]) =&gt; void): void</code></td><td><code>() =&gt; void</code></td></tr><tr><td><strong>pricePrecision</strong></td><td>价格精度</td><td><code>number</code></td><td>4</td></tr><tr><td><strong>quantityPrecision</strong></td><td>数量精度</td><td><code>number</code></td><td>4</td></tr><tr><td><strong>graph</strong></td><td>图表形状</td><td><code>number</code></td><td>1</td></tr><tr><td><strong>storeKey</strong></td><td>localStorage缓存key</td><td><code>string</code></td><td><code>kline_chart</code></td></tr><tr><td><strong>interval</strong></td><td>默认选中周期</td><td><code>string</code></td><td>&#39;&#39;</td></tr><tr><td><strong>exchange</strong></td><td>交易所名称</td><td><code>string</code></td><td>&#39;&#39;</td></tr><tr><td><strong>symbol</strong></td><td>当前交易对</td><td><code>string</code></td><td>&#39;&#39;</td></tr><tr><td><strong>libraryPath</strong></td><td>charting_library路径</td><td><code>string</code></td><td>&#39;&#39;</td></tr><tr><td><strong>customCssUrl</strong></td><td>自定义样式文件名</td><td><code>string</code></td><td><code>theme.css</code></td></tr><tr><td><strong>onPlusClick</strong></td><td>点击鼠标 hover 加号触发</td><td>[(plusClickParams: <a href="#plusclickparams类型">PlusClickParams</a>) =&gt; void]</td><td></td></tr></tbody></table><h3 id="theme类型" tabindex="-1">Theme类型 <a class="header-anchor" href="#theme类型" aria-label="Permalink to &quot;Theme类型&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Theme</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dark</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">light</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="lang类型" tabindex="-1">Lang类型 <a class="header-anchor" href="#lang类型" aria-label="Permalink to &quot;Lang类型&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Lang</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">en-US</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-CN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-TW</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ja-JP</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vi-VN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">es-ES</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ru-RU</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tr-TR</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pt-BR</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fr-FR</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">th-TH</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id-ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="klinedata类型" tabindex="-1">KlineData类型 <a class="header-anchor" href="#klinedata类型" aria-label="Permalink to &quot;KlineData类型&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">KlineData</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 唯一id，通常是交易对和事件周期拼接</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">time</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 时间戳，毫秒级别，必要字段</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">open</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 开盘价，必要字段</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">high</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 最高价，必要字段</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">low</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 最低价，必要字段</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">close</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 收盘价，必要字段</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volume</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 成交量，非必须字段</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="graph类型" tabindex="-1">Graph类型 <a class="header-anchor" href="#graph类型" aria-label="Permalink to &quot;Graph类型&quot;">​</a></h3><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>0</td><td>美国线</td></tr><tr><td>1</td><td>K线图</td></tr><tr><td>2</td><td>线形图</td></tr><tr><td>3</td><td>面积图</td></tr><tr><td>8</td><td>平均K线</td></tr><tr><td>9</td><td>空心K线图</td></tr><tr><td>10</td><td>基准线</td></tr><tr><td>12</td><td>高-低</td></tr><tr><td>13</td><td>柱状图</td></tr><tr><td>14</td><td>带标记线</td></tr><tr><td>15</td><td>阶梯线</td></tr><tr><td>16</td><td>HLC 区域</td></tr></tbody></table><h3 id="plusclickparams类型" tabindex="-1">PlusClickParams类型 <a class="header-anchor" href="#plusclickparams类型" aria-label="Permalink to &quot;PlusClickParams类型&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PlusClickParams</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">clientX</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">clientY</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pageX</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pageY</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">screenX</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">screenY</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">symbol</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><strong>chart</strong></td><td>图表实例</td><td><code>Chart</code></td></tr></tbody></table><h3 id="chart类型" tabindex="-1">Chart类型 <a class="header-anchor" href="#chart类型" aria-label="Permalink to &quot;Chart类型&quot;">​</a></h3><p><a href="https://www.tradingview.com/charting-library-docs/latest/api/interfaces/Charting_Library.ChartingLibraryWidgetOptions?_highlight=chartinglibrarywidgetoptions" target="_blank" rel="noreferrer">IChartingLibraryWidget</a></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Chart</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IChartingLibraryWidget</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">$addDefaultMa</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span></span></code></pre></div>`,22);function H(D,i,p,s,e,l){const a=L.ElTag,n=V;return F(),d("div",null,[U,t("p",null,[c("基于 "),O,c(),y(a,{round:"",small:""},{default:x(()=>[c("26.003")]),_:1}),c(" 开发，"),R,c("。")]),J,y(n),W])}const ps=C(M,[["render",H]]);export{os as __pageData,ps as default};