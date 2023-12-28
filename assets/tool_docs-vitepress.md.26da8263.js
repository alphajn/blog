import{d as t,u as o,o as r,c as i,C as s,t as a,b as n,V as l,a as c}from"./chunks/framework.810436bc.js";const d=l(`<h1 id="vitepress-使用" tabindex="-1">vitepress 使用 <a class="header-anchor" href="#vitepress-使用" aria-label="Permalink to &quot;vitepress 使用&quot;">​</a></h1><h2 id="运行时-api-示例" tabindex="-1">运行时 API 示例 <a class="header-anchor" href="#运行时-api-示例" aria-label="Permalink to &quot;运行时 API 示例&quot;">​</a></h2><p>本页面演示了 VitePress 提供的一些运行时 API 的用法。</p><p>查看 <a href="https://vitepress.dev/reference/runtime-api#usedata" target="_blank" rel="noreferrer">运行时 API 的完整列表</a> 的文档。</p><p>主要的 <code>useData()</code> API 可用于访问当前页面的站点、主题和页面数据。 它适用于 <code>.md</code> 和 <code>.vue</code> 文件:</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useData } from &#39;vitepress&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const { theme, page, frontmatter } = useData();</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">主题数据</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">页面数据</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">页面前言</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div><h3 id="页面数据" tabindex="-1">页面数据 <a class="header-anchor" href="#页面数据" aria-label="Permalink to &quot;页面数据&quot;">​</a></h3>`,7),h=s("h3",{id:"页面前言",tabindex:"-1"},[c("页面前言 "),s("a",{class:"header-anchor",href:"#页面前言","aria-label":'Permalink to "页面前言"'},"​")],-1),D=l(`<h2 id="markdown-扩展示例" tabindex="-1">Markdown 扩展示例 <a class="header-anchor" href="#markdown-扩展示例" aria-label="Permalink to &quot;Markdown 扩展示例&quot;">​</a></h2><p>本页面演示了 VitePress 提供的一些内置 markdown 扩展。</p><p>查看 <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">markdown 扩展的完整列表</a> 的文档。</p><h3 id="语法高亮" tabindex="-1">语法高亮 <a class="header-anchor" href="#语法高亮" aria-label="Permalink to &quot;语法高亮&quot;">​</a></h3><p>VitePress 提供由 <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a> 提供支持的语法高亮，以及行高亮等附加功能:</p><h4 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Highlighted!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Highlighted!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="自定义容器" tabindex="-1">自定义容器 <a class="header-anchor" href="#自定义容器" aria-label="Permalink to &quot;自定义容器&quot;">​</a></h3><h4 id="input-1" tabindex="-1">Input <a class="header-anchor" href="#input-1" aria-label="Permalink to &quot;Input&quot;">​</a></h4><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">::: info</span></span>
<span class="line"><span style="color:#A6ACCD;">This is an info box.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: tip</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a tip.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: warning</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a warning.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: danger</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: details</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a details block.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span></code></pre></div><h4 id="output-1" tabindex="-1">Output <a class="header-anchor" href="#output-1" aria-label="Permalink to &quot;Output&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details>`,18),b=JSON.parse('{"title":"vitepress 使用","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"tool/docs-vitepress.md","lastUpdated":1683528362000}'),y={name:"tool/docs-vitepress.md"},f=t({...y,setup(u){const{site:C,theme:F,page:e,frontmatter:p}=o();return(A,m)=>(r(),i("div",null,[d,s("pre",null,a(n(e)),1),h,s("pre",null,a(n(p)),1),D]))}});export{b as __pageData,f as default};
