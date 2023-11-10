import{_ as n}from"./chunks/SimpleKline.19067f41.js";import{_ as l,c as o,J as p,V as s,o as e}from"./chunks/framework.7a17cef1.js";import"./chunks/index.79f11430.js";import"./chunks/index.4b8145e4.js";import"./chunks/el-option.4ed993c7.js";import"./chunks/index.7e71f9e5.js";const B=JSON.parse('{"title":"基础版","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/kline-simple.md","lastUpdated":1699580780000}'),t={name:"npm/kline-simple.md"},r=s('<h1 id="基础版" tabindex="-1">基础版 <a class="header-anchor" href="#基础版" aria-label="Permalink to &quot;基础版&quot;">​</a></h1><p>基础版kline,基于 <a href="https://klinecharts.com/" target="_blank" rel="noreferrer">KlineChart</a> 二次开发。</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2>',3),c=s(`<h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 使用 npm</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@fe/kline</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@fe/number</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">klinecharts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用 yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@fe/kline</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@fe/number</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">klinecharts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用 pnpm</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@fe/kline</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@fe/number</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">klinecharts</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">simpleInit</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fe/kline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">simpleInit</span><span style="color:#A6ACCD;">(el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><h3 id="simpleinit" tabindex="-1">simpleInit() <a class="header-anchor" href="#simpleinit" aria-label="Permalink to &quot;simpleInit()&quot;">​</a></h3><p>初始化图表。</p><ul><li><p>类型</p><ul><li><code>KlineOptions</code>: <a href="https://klinecharts.com/guide/chart-api.html" target="_blank" rel="noreferrer">https://klinecharts.com/guide/chart-api.html</a></li><li><code>KlineChart</code>: <a href="https://klinecharts.com/guide/instance-api.html" target="_blank" rel="noreferrer">https://klinecharts.com/guide/instance-api.html</a></li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Theme</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dark</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">light</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">KlineOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Theme</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">showMa</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">showVol</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Chart</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">KlineChart</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">$updateTooltip</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 更新tooltip</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">$setTheme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#FFCB6B;">Theme</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 更新主题</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">$addDefaultMa</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 手动添加ma指标</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">$addVol</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 手动添加成交量</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> simpleInit </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Options</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Chart</span></span></code></pre></div></li></ul><h3 id="klinechart" tabindex="-1">klinechart <a class="header-anchor" href="#klinechart" aria-label="Permalink to &quot;klinechart&quot;">​</a></h3><p><a href="https://klinecharts.com/guide/chart-api.html" target="_blank" rel="noreferrer">klinechart</a> 支持的所有api。</p><h2 id="实例函数" tabindex="-1">实例函数 <a class="header-anchor" href="#实例函数" aria-label="Permalink to &quot;实例函数&quot;">​</a></h2><p><a href="https://klinecharts.com/guide/chart-api.html" target="_blank" rel="noreferrer">klinechart</a> 支持的所有api。</p><h2 id="导出类型" tabindex="-1">导出类型 <a class="header-anchor" href="#导出类型" aria-label="Permalink to &quot;导出类型&quot;">​</a></h2><h3 id="simpleoptions" tabindex="-1">SimpleOptions <a class="header-anchor" href="#simpleoptions" aria-label="Permalink to &quot;SimpleOptions&quot;">​</a></h3><p>导出类型 <code>Options</code>。</p><h3 id="simplechart" tabindex="-1">SimpleChart <a class="header-anchor" href="#simplechart" aria-label="Permalink to &quot;SimpleChart&quot;">​</a></h3><p>导出类型 <code>Chart</code>。</p>`,17);function i(C,y,D,A,F,h){const a=n;return e(),o("div",null,[r,p(a),c])}const b=l(t,[["render",i]]);export{B as __pageData,b as default};