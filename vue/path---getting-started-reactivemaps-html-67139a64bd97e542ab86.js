webpackJsonp([18625123672389],{469:function(a,n){a.exports={data:{markdownRemark:{html:'<p>ReactiveMaps is a complimentary library to ReactiveSearch. Map components require ReactiveSearch architecture and its root component to begin with. If you wish to build anything on reactivemaps, you’ll need to install reactivesearch along with it.</p>\n<h3 id="step-0-create-boilerplate"><a href="#step-0-create-boilerplate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 0: Create Boilerplate</h3>\n<p>In this section, we will create a search UI based on an <em>earthquake dataset</em> with ReactiveSearch components.</p>\n<p><img src="https://i.imgur.com/LR4qyZU.png" alt="Image"></p>\n<p><strong>Caption:</strong> Final image of how the app will look.</p>\n<p>We can either add ReactiveSearch to an existing app or create a boilerplate app with <a href="https://github.com/facebookincubator/create-react-app">Create React App (CRA)</a>. For this quickstart guide, we will use the CRA.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>create-react-app my-awesome-search <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> my-awesome-search\n</code></pre>\n      </div>\n<hr>\n<h3 id="step-1-install-reactivemaps-and-reactivesearch"><a href="#step-1-install-reactivemaps-and-reactivesearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 1: Install ReactiveMaps and ReactiveSearch</h3>\n<p>We will fetch the <a href="https://www.npmjs.com/package/@appbaseio/reactivemaps"><code>reactivemaps</code></a> and <a href="https://www.npmjs.com/package/@appbaseio/reactivesearch"><code>reactivesearch</code></a> modules using yarn or npm.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>yarn add @appbaseio/reactivemaps @appbaseio/reactivesearch\n</code></pre>\n      </div>\n<p>or</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save @appbaseio/reactivemaps @appbaseio/reactivesearch\n</code></pre>\n      </div>\n<h3 id="selecting-map-library"><a href="#selecting-map-library" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Selecting Map Library</h3>\n<p>ReactiveMaps supports <a href="https://www.openstreetmap.org"><strong>OpenStreet Map</strong></a> and <a href="https://www.google.co.in/maps"><strong>Google Map</strong></a> libraries for rendering map. Depending on the Map library you choose, Following are the dependencies that you will have to add.</p>\n<h4 id="openstreet-maps"><a href="#openstreet-maps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>OpenStreet Maps</h4>\n<p><code>&#x3C;ReactiveOpenStreetMap /></code> uses <a href="https://react-leaflet.js.org/">React-Leaflet</a> for rendering Openstreet maps. For rendering maps correctly, add the following <code>stylesheet</code> in the <code>&#x3C;head></code> element of <code>public/index.html</code></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/leaflet.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h4 id="google-maps"><a href="#google-maps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Google Maps</h4>\n<p><code>&#x3C;ReactiveGoogleMap /></code> uses Google Maps JS library to render the google map and access the necessary geo-location services. For including Google Maps, add the following  <code>&#x3C;script></code> tag in the <code>&#x3C;head></code> element of <code>public/index.html</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://maps.google.com/maps/api/js?v=3.31&amp;key=YOUR_MAPS_KEY_HERE<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Note that you will need places library from google maps if you are using GeoDistance components. You can add it by appending <code>&#x26;libraries=places</code> in the above URL. This will be required in case of OpenStreetMaps as well.</p>\n</blockquote>\n<hr>\n<h3 id="step-2-adding-first-component"><a href="#step-2-adding-first-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 2: Adding first component</h3>\n<p>Lets add our first ReactiveSearch component: <a href="/getting-started/reactivebase.html">ReactiveBase</a>, it is a backend connector where we can configure the Elasticsearch index / authorization setup.</p>\n<p>We will demonstrate creating an index using <a href="https://appbase.io">appbase.io</a> service, although you can use any Elasticsearch backend within ReactiveBase.</p>\n<p><img src="https://i.imgur.com/r6hWKAG.gif" alt="create an appbase.io app"></p>\n<p><strong>Caption:</strong> For the example that we will build, the app is called <strong>earthquake</strong> and the associated read-only credentials are <strong>OrXIHcgHn:d539c6e7-ed14-4407-8214-c227b0600d8e</strong>. You can browse and clone the dataset into your own app from <a href="https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAALbAAAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsksm3uHy0SJtl-GeS5hzLniAOGDpQVx6D3EoHDw86D_nWcj3PFS3n-DeQd1AOGTWMc5BFSwDVWM1rIpc6OlpeC62Gy4w2bVXsGB02GpXZQAh7epRyt_JV9IiqJyJgzW4vnZefow_cv_nao-NILgskqGbL7TKfAlU6TNHrnj6tr0m0GfAmwInsE1EsphIl_PBW7bxGvDzAfZF13Ec1QA8dB_-a82A&#x26;editable=false">here</a>.</p>\n<p><img src="https://i.imgur.com/vKmqxdP.png" alt="Dataset"></p>\n<p>We will update our <code>src/App.js</code> file to add ReactiveBase component.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactiveBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n\t<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">(</span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span>\n\t\t\t\t<span class="token attr-name">app</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>earthquake<span class="token punctuation">"</span></span>\n\t\t\t\t<span class="token attr-name">credentials</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>OrXIHcgHn:d539c6e7-ed14-4407-8214-c227b0600d8e<span class="token punctuation">"</span></span>\n\t\t\t\t<span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>places<span class="token punctuation">"</span></span>\n\t\t\t\t<span class="token attr-name">mapKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>&lt;ADD YOUR GOOGLE MAPS KEY HERE><span class="token punctuation">"</span></span>\n\t\t\t<span class="token punctuation">></span></span>\n\t\t\t\t<span class="token comment">// other components will go here.</span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t\t\t\t\tHello ReactiveSearch<span class="token operator">!</span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span>\n\t\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This is how the app should look after running the <code>yarn start</code> command.</p>\n<p><img src="https://i.imgur.com/M7AAhTh.png"></p>\n<hr>\n<h3 id="step-3-adding-filters-and-map-components"><a href="#step-3-adding-filters-and-map-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 3: Adding Filters and Map Components</h3>\n<p>For this app, we will be using <a href="/list-components/singlelist.html">SingleList</a> component for filtering the dataset. And <a href="/map-components/reactivegooglemap.html">ReactiveGoogleMap</a> component for showing the search results.</p>\n<p>Lets add them within the ReactiveBase component. But before we do that, we will look at the important props for each.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SingleList</span>\n\t<span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Places<span class="token punctuation">"</span></span>\n\t<span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>places<span class="token punctuation">"</span></span>\n\t<span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>place.raw<span class="token punctuation">"</span></span>\n\t<span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span>\n\t<span class="token attr-name">showSearch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p><strong>SingleList</strong> creates a radio-buttons list UI component that is connected to the database field passed as <code>dataField</code> prop to the SingleList component.</p>\n<p>Next, we will look at the <a href="/map-components/reactivegooglemap.html"><strong>ReactiveGoogleMap</strong></a> component for creating a map component.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ReactiveGoogleMap\n\tcomponentId<span class="token operator">=</span><span class="token string">"map"</span>\n\tdataField<span class="token operator">=</span><span class="token string">"location"</span>\n\treact<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n\t\t<span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token string">"places"</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">}</span>\n\trenderData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\tlabel<span class="token punctuation">:</span> result<span class="token punctuation">.</span>mag\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>The <code>react</code> prop here specifies that it should construct a query based on the current selected value of the singlelist(places) component. Every time the user changes the selected value, a new query is fired — you don’t need to write a manual query for any of the UI components here, although you can override it via <code>customQuery</code> prop.  </p>\n<p><img src="https://i.imgur.com/QwFq2CP.png"></p>\n<p>This is how the map component’s UI would look like. Notice how it is rendering the magnitude values of the earthquake in place of the marker pins. We achieved this via <code>renderData</code> prop in the ReactiveGoogleMap component:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>renderData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n\tlabel<span class="token punctuation">:</span> result<span class="token punctuation">.</span>mag\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>You can also customise it to render any kind of marker pins. Refer <a href="/map-components/reactivegooglemap.html">ReactiveGoogleMap’s documentation</a> for the same.</p>\n<p>Now, we will put all three components together to create the UI view.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactiveBase<span class="token punctuation">,</span> SingleList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactiveGoogleMap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivemaps\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">\'./logo.svg\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./App.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\t<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">(</span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span>\n\t\t\t\t<span class="token attr-name">app</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>earthquake<span class="token punctuation">"</span></span>\n\t\t\t\t<span class="token attr-name">credentials</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>OrXIHcgHn:d539c6e7-ed14-4407-8214-c227b0600d8e<span class="token punctuation">"</span></span>\n\t\t\t\t<span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>places<span class="token punctuation">"</span></span>\n\t\t\t\t<span class="token attr-name">mapKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>&lt;ADD YOUR GOOGLE MAPS KEY HERE><span class="token punctuation">"</span></span>\n\t\t\t<span class="token punctuation">></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n\t\t\t\t\t<span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n\t\t\t\t\t\twidth<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span>\n\t\t\t\t\t\tdisplay<span class="token punctuation">:</span> <span class="token string">\'flex\'</span><span class="token punctuation">,</span>\n\t\t\t\t\t\tflexDirection<span class="token punctuation">:</span> <span class="token string">\'row\'</span><span class="token punctuation">,</span>\n\t\t\t\t\t\tjustifyContent<span class="token punctuation">:</span> <span class="token string">\'space-between\'</span>\n\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n\t\t\t\t<span class="token punctuation">></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SingleList</span>\n\t\t\t\t\t\t<span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Places<span class="token punctuation">"</span></span>\n\t\t\t\t\t\t<span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>places<span class="token punctuation">"</span></span>\n\t\t\t\t\t\t<span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>place.raw<span class="token punctuation">"</span></span>\n\t\t\t\t\t\t<span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span>\n\t\t\t\t\t\t<span class="token attr-name">showSearch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n\t\t\t\t\t<span class="token punctuation">/></span></span>\n\n\t\t\t\t\t<span class="token operator">&lt;</span>ReactiveGoogleMap\n\t\t\t\t\t\tcomponentId<span class="token operator">=</span><span class="token string">"map"</span>\n\t\t\t\t\t\tdataField<span class="token operator">=</span><span class="token string">"location"</span>\n\t\t\t\t\t\treact<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n\t\t\t\t\t\t\tand<span class="token punctuation">:</span> <span class="token string">"places"</span>\n\t\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">}</span>\n\t\t\t\t\t\trenderData<span class="token operator">=</span><span class="token punctuation">{</span>result <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\t\t\t\t\tlabel<span class="token punctuation">:</span> result<span class="token punctuation">.</span>mag\n\t\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n\t\t\t\t\t<span class="token operator">/</span><span class="token operator">></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span>\n\t\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>If you have followed along, this is how our app should look now.</p>\n<p><img src="https://i.imgur.com/LR4qyZU.png" alt="Image"></p>\n<p>For convenience, you can checkout the final code from the ReactiveMap starter <a href="https://github.com/appbaseio-apps/reactivemaps-starter">GitHub repo</a> and <a href="https://codesandbox.io/s/ovq0m97qy6">live codepen</a> demo.</p>\n<p>You can run it with the following commands:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code><span class="token function">git</span> clone https://github.com/appbaseio-apps/reactivemaps-starter\n<span class="token function">cd</span> reactivemaps-starter\nyarn <span class="token operator">&amp;&amp;</span> yarn start\n<span class="token comment"># open http://localhost:3000 and you should see the app.</span>\n<span class="token comment"># The magic sauce is inside **src/App.js** file.</span>\n</code></pre>\n      </div>\n<hr>\n<h3 id="step-4-reactivemaps-as-umd"><a href="#step-4-reactivemaps-as-umd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 4: ReactiveMaps as UMD</h3>\n<p>It is also possible to run ReactiveMaps without relying on a Node.JS environment tooling for the build setup.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdn.rawgit.com/appbaseio/reactivesearch/dev/packages/maps/umd/reactivemaps.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>A GZip version is also available at <a href="https://cdn.rawgit.com/appbaseio/reactivesearch/dev/packages/maps/umd/reactivemaps.js.gzip">https://cdn.rawgit.com/appbaseio/reactivesearch/dev/packages/maps/umd/reactivemaps.js.gzip</a>.</p>\n<hr>',frontmatter:{title:"ReactiveMaps Quickstart",next:"getting-started/data.html",prev:null,nextTitle:"Importing Data",prevTitle:null},fields:{path:"getting-started/reactivemaps",slug:"getting-started/reactivemaps.html"}}},pathContext:{slug:"getting-started/reactivemaps.html"}}}});
//# sourceMappingURL=path---getting-started-reactivemaps-html-67139a64bd97e542ab86.js.map