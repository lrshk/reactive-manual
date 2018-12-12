webpackJsonp([0xd3f970656589],{502:function(n,s){n.exports={data:{markdownRemark:{html:'<p>ReactiveSearch components also allow <code>className</code> injections to overwrite the default styles for any component at a more granular level. This can be achieved with the <code>innerClass</code> prop.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>The <code>innerClass</code> prop accepts an object with keys as defined in the <strong>Styles</strong> section of each component. You can add the desired <code>className</code> value for each key and refer to them in your CSS.</p>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>Here’s an example of how to use <code>innerClass</code> with a <a href="base-components/textfield.html">TextField</a> component:</p>\n<p><img src="https://imgur.com/f20AvrZ.png" alt="TextField annotated image"></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextField</span>\n    <span class="token attr-name">...</span>\n    <span class="token attr-name">innerClass</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        title<span class="token punctuation">:</span> <span class="token string">\'text-title\'</span><span class="token punctuation">,</span>\n        input<span class="token punctuation">:</span> <span class="token string">\'text-input\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>Then refer to them in your stylesheet.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code><span class="token selector">.text-title</span> <span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.text-input</span> <span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="css-specificity"><a href="#css-specificity" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CSS Specificity</h2>\n<p>While writing styles using <code>innerClass</code>, it’s important to keep <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity">CSS specificity</a> in mind in order to get the desired results.</p>\n<p>In order for your classes to overwrite the default classes of ReactiveSearch components we recommend combining the <code>innerClass</code> classes with a container class. This will also give the correct results without depending on the order of loading of the stylesheets in production. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextField</span>\n    <span class="token attr-name">...</span>\n    <span class="token attr-name">innerClass</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        title<span class="token punctuation">:</span> <span class="token string">\'text-title\'</span><span class="token punctuation">,</span>\n        input<span class="token punctuation">:</span> <span class="token string">\'text-input\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-field<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>Then refer to them in your stylesheet with the container class as:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code><span class="token selector">.text-field .text-title</span> <span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.text-field .text-input</span> <span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Note</p>\n<p>Here we’re using the <code>className</code> prop in the component to act as the container class, however, depending on your needs, this can also be acheived by surrounding the ReactiveSearch component in a container <code>&#x3C;div className="container-class">...&#x3C;/div></code></p>\n</blockquote>',frontmatter:{title:"ClassName Injection",next:"advanced/mapping.html",prev:"theming/style.html",nextTitle:"Advanced: Custom Queries",prevTitle:"Style"},fields:{path:"docs/theming/class.md",slug:"theming/class.html"}}},pathContext:{slug:"theming/class.html"}}}});
//# sourceMappingURL=path---theming-class-html-4c007ff68bdfdc86fde7.js.map