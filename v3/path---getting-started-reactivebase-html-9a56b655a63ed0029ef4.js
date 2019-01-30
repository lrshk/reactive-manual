webpackJsonp([2842081980983],{469:function(s,a){s.exports={data:{markdownRemark:{html:'<p><strong>ReactiveBase</strong> is a container component that wraps all the <code class="gatsby-code-text">ReactiveSearch</code> components together. It binds the backend app (data source) with the UI view components (elements wrapped within ReactiveBase), allowing a UI component to be reactively updated every time there is a change in the data source or in other UI components.</p>\n<p>This is the first component you will need to add when using <code class="gatsby-code-text">ReactiveSearch</code>.</p>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span>\n  <span class="token attr-name">app</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>appname<span class="token punctuation">"</span></span>\n  <span class="token attr-name">credentials</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>abcdef123:abcdef12-ab12-ab12-ab12-abcdef123456<span class="token punctuation">"</span></span>\n<span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component1</span> <span class="token attr-name">..</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component2</span> <span class="token attr-name">..</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h3 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h3>\n<ul>\n<li><strong>app</strong> <code class="gatsby-code-text">String</code><br>\napp name as it appears on the dashboard. Refers to an index if you’re using your own Elasticsearch cluster. (Multiple indexes can be connected to by specifiying comma separated index names)</li>\n<li><strong>type</strong> <code class="gatsby-code-text">String</code> [optional]<br>\ntypes on which the queries should run on. Multiple types can be passed as comma separated values. The default behavior here is to search on all the app types.</li>\n<li><strong>credentials</strong> <code class="gatsby-code-text">String</code> [optional]<br>\napp credentials as they appear on the dashboard. It should be a string of the format “username:password” and is used for authenticating the app. If you are not using an appbase.io app, credentials may not be necessary - although having an open-access Elasticsearch cluster is not recommended.</li>\n<li><strong>url</strong> <code class="gatsby-code-text">String</code> [optional]<br>\nURL where Elasticsearch cluster is hosted, only needed if your app uses a non appbase.io URL.</li>\n<li><strong>headers</strong> <code class="gatsby-code-text">Object</code> [optional]<br>\nset custom headers to be sent with each server request as key/value pairs. For example:</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span>\n  <span class="token attr-name">app</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>appname<span class="token punctuation">"</span></span>\n  <span class="token attr-name">credentials</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>abcdef123:abcdef12-ab12-ab12-ab12-abcdef123456<span class="token punctuation">"</span></span>\n<span class="gatsby-highlight-code-line">  <span class="token attr-name">headers</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      secret<span class="token punctuation">:</span> <span class="token string">\'reactivesearch-is-awesome\'</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component1</span> <span class="token attr-name">..</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component2</span> <span class="token attr-name">..</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<ul>\n<li>\n<p><strong>analytics</strong> <code class="gatsby-code-text">Boolean</code> [optional]  <br>\nallows recording search analytics (and click analytics) when set to <code class="gatsby-code-text">true</code> and appbase.io is used as a backend. Defaults to <code class="gatsby-code-text">false</code>. Check the <a href="/reactive-manual/v3/advanced/analytics.html">analytics recipe</a> for click analytics implementation.</p>\n</li>\n<li>\n<p><strong>theme</strong> <code class="gatsby-code-text">Object</code> [optional]  <br>\nallows over-writing of default styles by providing the respective key/values. You can read more about its usage <a href="/reactive-manual/v3/theming/themes.html">here</a></p>\n</li>\n<li>\n<p><strong>themePreset</strong> <code class="gatsby-code-text">String</code> [optional]  <br>\nallows over-writing of default styles by providing a preset value. Supported values are <code class="gatsby-code-text">light</code> (default) and <code class="gatsby-code-text">dark</code>. You can read more about its usage <a href="/reactive-manual/v3/theming/themes.html">here</a></p>\n</li>\n<li>\n<p><strong>transformRequest</strong> <code class="gatsby-code-text">Function</code> [optional]<br>\nEnables transformation of network request before execution. This function will give you the the request object as the param and expect an updated request in return, for execution. Note that this is an experimental API and will likely change in the future.</p>\n</li>\n<li>\n<p><strong>graphQLUrl</strong> <code class="gatsby-code-text">String</code> [optional]\nAllows user to query from GraphqQL server instead of <code class="gatsby-code-text">ElasticSearch</code> REST api. <a href="https://github.com/graphql-compose/graphql-compose-elasticsearch">graphql-compose-elasticsearch</a> helps in transforming <code class="gatsby-code-text">GraphQL</code> queries into <code class="gatsby-code-text">ElasticSearch</code> rest api. Here is an example of <code class="gatsby-code-text">GraphQL</code> server which acts as proxy for <code class="gatsby-code-text">ElasticSearch</code>. </p>\n<ul>\n<li><a href="https://github.com/appbaseio-apps/graphql-elasticsearch-server">GraphQL Server for books application</a></li>\n</ul>\n</li>\n<li>\n<p><strong>tranformResponse</strong> <code class="gatsby-code-text">Function</code> [optional]\nEnables transformation of search network response before rendering them. This asynchronous function will give you elasticsearch response object as params and expects an updated response in return in similar structure of elasticsearch, for execution.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token operator">&lt;</span>ReactiveBase\n    app<span class="token operator">=</span><span class="token string">"appname"</span>\n    credentials<span class="token operator">=</span><span class="token string">"abcdef123:abcdef12-ab12-ab12-ab12-abcdef123456"</span>\n    headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        secret<span class="token punctuation">:</span> <span class="token string">\'reactivesearch-is-awesome\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span>\n<span class="gatsby-highlight-code-line">    transformResponse<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> <span class="token punctuation">(</span>elasticsearchResponse<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token keyword">const</span> ids <span class="token operator">=</span> elasticsearchResponse<span class="token punctuation">.</span>responses<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>hits<span class="token punctuation">.</span>hits<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>\n</span><span class="gatsby-highlight-code-line">            item <span class="token operator">=></span> item<span class="token punctuation">.</span>_id\n</span><span class="gatsby-highlight-code-line">        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token keyword">const</span> extraInformation <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getExatraInformation</span><span class="token punctuation">(</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token keyword">const</span> hits <span class="token operator">=</span> elasticsearchResponse<span class="token punctuation">.</span>responses<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>hits<span class="token punctuation">.</span>hits<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>\n</span><span class="gatsby-highlight-code-line">            <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">                <span class="token keyword">const</span> extraInformationItem <span class="token operator">=</span> extraInformation<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>\n</span><span class="gatsby-highlight-code-line">                    otherItem <span class="token operator">=></span> otherItem<span class="token punctuation">.</span>_id <span class="token operator">===</span> item<span class="token punctuation">.</span>_id\n</span><span class="gatsby-highlight-code-line">                <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">                <span class="token keyword">return</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">                    <span class="token operator">...</span>item<span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">                    <span class="token operator">...</span>extraInformationItem\n</span><span class="gatsby-highlight-code-line">                <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">            <span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">\n</span><span class="gatsby-highlight-code-line">        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">            response<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n</span><span class="gatsby-highlight-code-line">                <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">                    <span class="token operator">...</span>elasticsearchResponse<span class="token punctuation">.</span>responses<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">                    hits<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">                        <span class="token operator">...</span>elasticsearchResponse<span class="token punctuation">.</span>responses<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>hits<span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">                        hits\n</span><span class="gatsby-highlight-code-line">                    <span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">                <span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">            <span class="token punctuation">]</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span>    <span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component1</span> <span class="token attr-name">..</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component2</span> <span class="token attr-name">..</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<blockquote>\n<p>Note</p>\n<p><code class="gatsby-code-text">transformResponse</code> function is expected to return data in following structure.</p>\n</blockquote>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsxon"><code class="gatsby-code-jsxon">{\n    response: [\n        {\n            hits: {\n                hits: [...],\n                total: 100\n            },\n            took: 1\n        }\n    ]\n}</code></pre>\n      </div>\n<h3 id="connect-to-elasticsearch"><a href="#connect-to-elasticsearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Connect to Elasticsearch</h3>\n<blockquote>\n<p>Note</p>\n<p>An <strong>app</strong> within ReactiveSearch’s context refers to an <strong>index</strong> in Elasticsearch.</p>\n</blockquote>\n<p>ReactiveSearch works out of the box with an Elasticsearch index hosted anywhere. You can use the <code class="gatsby-code-text">url</code> prop of the <strong>ReactiveBase</strong> component to connect the child ReactiveSearch components to your own index. For example,</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span>\n  <span class="token attr-name">app</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>your-elasticsearch-index<span class="token punctuation">"</span></span>\n  <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://your-elasticsearch-cluster<span class="token punctuation">"</span></span>\n<span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component1</span> <span class="token attr-name">..</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component2</span> <span class="token attr-name">..</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>It’s also possible to secure your Elasticsearch cluster’s access with a middleware proxy server that is connected to ReactiveSearch. This allows you to set up custom authorization rules, prevent misuse, only pass back non-sensitive data, etc. Here’s an example app where we show this using a Node.JS / Express middleware:</p>\n<ul>\n<li><a href="https://github.com/appbaseio-apps/reactivesearch-proxy-server">Proxy Server</a></li>\n<li><a href="https://github.com/appbaseio-apps/reactivesearch-proxy-client">Proxy Client</a></li>\n</ul>\n<blockquote>\n<p>Note</p>\n<p>If you are using the <strong>url</strong> prop for an Elasticsearch cluster, ensure that your ReactiveSearch app can access the cluster. Typically, you will need to configure CORS in <strong>elasticsearch.yml</strong> to enable access.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-yaml"><code class="gatsby-code-yaml"><span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token key atrule">http.cors.allow-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token string">"http://reactive-search-app-domain.com:port"</span>\n<span class="token key atrule">http.cors.allow-headers</span><span class="token punctuation">:</span> X<span class="token punctuation">-</span>Requested<span class="token punctuation">-</span>With<span class="token punctuation">,</span> X<span class="token punctuation">-</span>Auth<span class="token punctuation">-</span>Token<span class="token punctuation">,</span> Content<span class="token punctuation">-</span>Type<span class="token punctuation">,</span> Content<span class="token punctuation">-</span>Length<span class="token punctuation">,</span> Authorization<span class="token punctuation">,</span> Access<span class="token punctuation">-</span>Control<span class="token punctuation">-</span>Allow<span class="token punctuation">-</span>Headers<span class="token punctuation">,</span> Accept</code></pre>\n      </div>\n<blockquote>\n<p>Note</p>\n<p>If you are using Elasticsearch on AWS, then the recommended approach is to connect via the middleware proxy as they don’t allow setting the Elasticsearch configurations.</p>\n</blockquote>\n<h3 id="next-steps"><a href="#next-steps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Next Steps</h3>\n<p>Once you have added the <strong>ReactiveBase</strong> component, you can get started with adding other components as its children.</p>\n<ul>\n<li>List specific components can be found  <a href="/reactive-manual/v3/list-components/singlelist.html">here</a>.</li>\n<li>Range specific components can be found  <a href="/reactive-manual/v3/list-components/singlerange.html">here</a>.</li>\n<li>Search specific components can be found <a href="/reactive-manual/v3/search-components/datasearch.html">here</a>.</li>\n<li>Result specific components can be found\n<a href="/reactive-manual/v3/result-components/resultlist.html">here</a>.</li>\n</ul>\n<p>You can read more about when to use which components in the overview guide <a href="/reactive-manual/v3/getting-started/ComponentsIndex.html">here</a>.</p>',frontmatter:{title:"ReactiveBase",next:"getting-started/componentsindex.html",prev:"getting-started/data.html",nextTitle:"Components Overview",prevTitle:"Importing Data"},fields:{path:"getting-started/ReactiveBase",slug:"getting-started/reactivebase.html"}}},pathContext:{slug:"getting-started/reactivebase.html"}}}});
//# sourceMappingURL=path---getting-started-reactivebase-html-9a56b655a63ed0029ef4.js.map