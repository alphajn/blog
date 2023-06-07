import{_ as s,c as n,o as a,V as l}from"./chunks/framework.1bf78886.js";const y=JSON.parse('{"title":"编辑器统一风格 editorConfig","description":"","frontmatter":{},"headers":[],"relativePath":"tool/project-editorConfig.md","lastUpdated":1683528362000}'),o={name:"tool/project-editorConfig.md"},e=l(`<h1 id="编辑器统一风格-editorconfig" tabindex="-1">编辑器统一风格 editorConfig <a class="header-anchor" href="#编辑器统一风格-editorconfig" aria-label="Permalink to &quot;编辑器统一风格 editorConfig&quot;">​</a></h1><h2 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明&quot;">​</a></h2><p>项目根目录添加 <code>.editorconfig</code></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">告诉EditorConfig插件，这是根文件，不用继续往上查找</span></span>
<span class="line"><span style="color:#A6ACCD;">root = true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">匹配.js结尾的文件</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">*.js</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">匹配.js .scss .css 结尾的文件</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">*.{js,scss,css}</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">设置字符集</span></span>
<span class="line"><span style="color:#A6ACCD;">charset = utf-8</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">缩进风格，可选&quot;space&quot;、&quot;tab&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">indent_style = space</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">缩进空格数</span></span>
<span class="line"><span style="color:#A6ACCD;">indent_size = 4</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">结尾换行符，可选&quot;lf&quot;、&quot;cr&quot;、&quot;crlf&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">end_of_line = lf</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">删除一行中的前后空格</span></span>
<span class="line"><span style="color:#A6ACCD;">trim_trailing_whitespace = true</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">在文件结尾插入新行</span></span>
<span class="line"><span style="color:#A6ACCD;">insert_final_newline = true</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">每行最多字符数</span></span>
<span class="line"><span style="color:#A6ACCD;">max_line_length = 150</span></span></code></pre></div>`,4),p=[e];function t(c,r,i,F,d,D){return a(),n("div",null,p)}const _=s(o,[["render",t]]);export{y as __pageData,_ as default};
