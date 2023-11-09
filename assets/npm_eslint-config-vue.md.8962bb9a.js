import{_ as s,c as a,o as n,V as e}from"./chunks/framework.7bc26fef.js";const u=JSON.parse('{"title":"@fe/eslint-config-vue","description":"","frontmatter":{},"headers":[],"relativePath":"npm/eslint-config-vue.md","lastUpdated":1683948444000}'),l={name:"npm/eslint-config-vue.md"},o=e(`<h1 id="fe-eslint-config-vue" tabindex="-1">@fe/eslint-config-vue <a class="header-anchor" href="#fe-eslint-config-vue" aria-label="Permalink to &quot;@fe/eslint-config-vue&quot;">​</a></h1><p>eslint 格式化扩展</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eslint</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@fe/eslint-config-vue</span></span></code></pre></div><h2 id="添加配置-eslintrc-js" tabindex="-1">添加配置 <code>.eslintrc.js</code> <a class="header-anchor" href="#添加配置-eslintrc-js" aria-label="Permalink to &quot;添加配置 \`.eslintrc.js\`&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">extends</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fe/eslint-config-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div>`,6),t=[o];function p(c,r,i,d,C,D){return n(),a("div",null,t)}const h=s(l,[["render",p]]);export{u as __pageData,h as default};