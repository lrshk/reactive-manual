webpackJsonp([36733297554888],{75:function(e,t,n){!function(t,n,r){e.exports=r()}("slugify",this,function(){function e(e,n){return n="string"==typeof n?{replacement:n}:n||{},e=e.split("").reduce(function(e,r){return t[r]&&(r=t[r]),r=r.replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]/g,""),e+=r},"").replace(/^\s+|\s+$/g,"").replace(/[-\s]+/g,n.replacement||"-").replace("#{replacement}$",""),n.lower?e.toLowerCase():e}var t={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ő":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ű":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ő":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ű":"u","ý":"y","þ":"th","ÿ":"y","ẞ":"SS","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ά":"a","έ":"e","ί":"i","ό":"o","ύ":"y","ή":"h","ώ":"w","ς":"s","ϊ":"i","ΰ":"y","ϋ":"y","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ά":"A","Έ":"E","Ί":"I","Ό":"O","Ύ":"Y","Ή":"H","Ώ":"W","Ϊ":"I","Ϋ":"Y","ş":"s","Ş":"S","ı":"i","İ":"I","ç":"c","Ç":"C","ü":"u","Ü":"U","ö":"o","Ö":"O","ğ":"g","Ğ":"G","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"yo","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ё":"Yo","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","Є":"Ye","І":"I","Ї":"Yi","Ґ":"G","є":"ye","і":"i","ї":"yi","ґ":"g","č":"c","ď":"d","ě":"e","ň":"n","ř":"r","š":"s","ť":"t","ů":"u","ž":"z","Č":"C","Ď":"D","Ě":"E","Ň":"N","Ř":"R","Š":"S","Ť":"T","Ů":"U","Ž":"Z","ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z","Ą":"A","Ć":"C","Ę":"e","Ł":"L","Ń":"N","Ś":"S","Ź":"Z","Ż":"Z","ā":"a","č":"c","ē":"e","ģ":"g","ī":"i","ķ":"k","ļ":"l","ņ":"n","š":"s","ū":"u","ž":"z","Ā":"A","Č":"C","Ē":"E","Ģ":"G","Ī":"i","Ķ":"k","Ļ":"L","Ņ":"N","Š":"S","Ū":"u","Ž":"Z","€":"euro","₢":"cruzeiro","₣":"french franc","£":"pound","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","¢":"cent","¥":"yen","元":"yuan","円":"yen","﷼":"rial","₠":"ecu","¤":"currency","฿":"baht",$:"dollar","©":"(c)","œ":"oe","Œ":"OE","∑":"sum","®":"(r)","†":"+","“":'"',"”":'"',"‘":"'","’":"'","∂":"d","ƒ":"f","™":"tm","℠":"sm","…":"...","˚":"o","º":"o","ª":"a","•":"*","∆":"delta","∞":"infinity","♥":"love","&":"and","|":"or","<":"less",">":"greater"};return e.extend=function(e){for(var n in e)t[n]=e[n]},e})},49:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(8),l=o(i),s=n(1),c=(o(s),n(3)),u=function(e){var t,n=e.title;return r.createElement(l.default,{type:"header",halign:"space-between",valign:"baseline"},r.createElement("h1",{css:a({color:c.colors.blueDark,marginBottom:0,marginTop:40},c.fonts.header,(t={},t[c.media.size("medium")]={marginTop:60},t[c.media.greaterThan("large")]={marginTop:80},t))},n))};t.default=u,e.exports=t.default}).call(t,n(2))},50:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(49),a=r(o);t.default=a.default,e.exports=t.default},51:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(7),i=o(a),l=n(8),s=o(l),c=n(50),u=o(c),d=n(57),f=o(d),m=n(1),p=(o(m),n(54)),h=o(p),v=n(35),g=o(v),b=n(62),y=o(b),_=n(79),E=o(_),x=n(3),w=n(78),k=o(w),T=function(e){var t=e.authors,n=void 0===t?[]:t,o=e.createLink,a=e.date,l=e.enableScrollSync,c=e.ogDescription,d=e.location,m=e.markdownRemark,p=e.sectionList,v=e.titlePostfix,b=void 0===v?"":v,_=n.length>0,w=m.frontmatter.title||"";return r.createElement(s.default,{direction:"column",grow:"1",shrink:"0",halign:"stretch",css:{width:"100%",flex:"1 0 auto",position:"relative",zIndex:0}},r.createElement(g.default,{ogDescription:c,ogUrl:(0,k.default)(m.fields.slug),title:""+w+b}),r.createElement("div",{css:{flex:"1 0 auto"}},r.createElement(i.default,null,r.createElement("div",{css:x.sharedStyles.articleLayout.container},r.createElement(s.default,{type:"article",direction:"column",grow:"1",halign:"stretch"},r.createElement(u.default,{title:w}),(a||_)&&r.createElement("div",{css:{marginTop:15}},a," ",_&&r.createElement("span",null,"by"," ",(0,E.default)(n,function(e){return r.createElement("a",{css:x.sharedStyles.link,href:e.frontmatter.url,key:e.frontmatter.name},e.frontmatter.name)}))),r.createElement("div",{css:x.sharedStyles.articleLayout.content},r.createElement("div",{css:[x.sharedStyles.markdown],dangerouslySetInnerHTML:{__html:m.html}}),m.fields.path&&r.createElement("div",{css:{marginTop:80}},r.createElement("a",{css:x.sharedStyles.articleLayout.editLink,href:"https://github.com/appbaseio/reactive-manual/tree/v1-native/content/"+m.fields.path},"Edit this page")))),r.createElement("div",{css:x.sharedStyles.articleLayout.sidebar},r.createElement(h.default,{enableScrollSync:l,createLink:o,defaultActiveSection:(0,y.default)(d.pathname,p),location:d,sectionList:p}))))),(m.frontmatter.next||m.frontmatter.prev)&&r.createElement(f.default,{location:d,next:m.frontmatter.next,nextTitle:m.frontmatter.nextTitle,prev:m.frontmatter.prev,prevTitle:m.frontmatter.prevTitle}))};t.default=T,e.exports=t.default}).call(t,n(2))},52:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(51),a=r(o);t.default=a.default,e.exports=t.default},53:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(7),u=o(c),d=n(1),f=n(60),m=o(f),p=n(3),h=n(16),v=o(h),g=function(e){function t(n,r){a(this,t);var o=i(this,e.call(this,n,r));return o.state={open:!1},o._openNavMenu=o._openNavMenu.bind(o),o._closeNavMenu=o._closeNavMenu.bind(o),o}return l(t,e),t.prototype._openNavMenu=function(){this.setState({open:!this.state.open})},t.prototype._closeNavMenu=function(){this.setState({open:!1})},t.prototype.render=function(){var e,t,n,o,a=this.state.open,i={top:0,left:0,bottom:0,right:0,position:"fixed",backgroundColor:p.colors.white,zIndex:2,height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",pointerEvents:a?"auto":"none"},l={display:"inline-block"},c=a?8:-4,d=a?1:0,f=a?0:40;return r.createElement("div",null,r.createElement("div",{style:{opacity:d,transition:"opacity 0.5s ease"},css:(e={},e[p.media.lessThan("small")]=i,e[p.media.greaterThan("medium")]={marginRight:-999,paddingRight:999,backgroundColor:"#f7f7f7"},e[p.media.between("medium","sidebarFixed",!0)]={position:"fixed",zIndex:2,height:"100%"},e[p.media.greaterThan("small")]={position:"fixed",zIndex:2,height:"calc(100vh - 60px)",overflowY:"auto",WebkitOverflowScrolling:"touch",marginRight:-999,paddingRight:999,backgroundColor:"#f7f7f7",opacity:"1 !important"},e[p.media.size("small")]={height:"calc(100vh - 40px)"},e[p.media.between("medium","large")]={height:"calc(100vh - 50px)"},e[p.media.greaterThan("sidebarFixed")]={borderLeft:"1px solid #ececec"},e)},r.createElement("div",{style:{transform:"translate(0px, "+f+"px)",transition:"transform 0.5s ease"},css:(t={marginTop:60,marginBottom:60},t[p.media.size("xsmall")]={marginTop:40,marginBottom:40},t[p.media.between("small","medium")]={marginTop:0,marginBottom:0},t[p.media.between("medium","large")]={marginTop:50,marginBottom:50},t[p.media.greaterThan("small")]={transform:"none !important"},t)},r.createElement(m.default,s({closeParentMenu:this._closeNavMenu},this.props)))),r.createElement("div",{css:(n={backgroundColor:p.colors.darker,bottom:44,color:p.colors.brand,display:"none",cursor:"pointer",position:"fixed",right:20,zIndex:3,borderRadius:"50%",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 0 20px rgba(0, 0, 0, 0.3)"},n[p.media.lessThan("small")]=l,n),onClick:this._openNavMenu,role:"button",tabIndex:0},r.createElement(u.default,null,r.createElement("div",{css:(o={display:"flex",flexDirection:"row",alignItems:"center",height:60},o[p.media.between("medium","large")]={height:50},o[p.media.lessThan("small")]={height:60,overflow:"hidden",alignItems:"flex-start"},o)},r.createElement("div",{css:{width:20,height:20,alignSelf:"center",display:"flex",flexDirection:"column",color:p.colors.brand}},r.createElement(v.default,{size:15,cssProps:{transform:"translate(2px, "+c+"px) rotate(180deg)",transition:"transform 0.2s ease"}}),r.createElement(v.default,{size:15,cssProps:{transform:"translate(2px, "+(0-c)+"px)",transition:"transform 0.2s ease"}}))))))},t}(d.Component);t.default=g,e.exports=t.default}).call(t,n(2))},54:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(53),a=r(o);t.default=a.default,e.exports=t.default},239:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=n(4),a=r(o),i=n(1),l=(r(i),n(52)),s=r(l),c=n(61),u=function(e){return[{title:"Recent Posts",items:e.edges.map(function(e){var t=e.node;return{id:t.fields.slug,title:t.frontmatter.title}}).concat({id:"/blog/all.html",title:"All posts ..."})}]},d=function(t){var n=t.data,r=t.location;return e.createElement(s.default,{authors:n.markdownRemark.frontmatter.author,createLink:c.createLinkBlog,date:n.markdownRemark.fields.date,location:r,ogDescription:n.markdownRemark.excerpt,markdownRemark:n.markdownRemark,sectionList:u(n.allMarkdownRemark),titlePostfix:" - Reactive Manual Native Blog"})};d.propTypes={data:a.default.object.isRequired};t.pageQuery="** extracted graphql fragment **";t.default=d}).call(t,n(2))},16:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=(o(a),function(e){var t=e.size,n=void 0===t?10:t,o=e.cssProps,a=void 0===o?{}:o;return r.createElement("svg",{css:a,viewBox:"0 0 926.23699 573.74994",version:"1.1",x:"0px",y:"0px",width:n,height:n},r.createElement("g",{transform:"translate(904.92214,-879.1482)"},r.createElement("path",{d:"\n          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n          -174.68583 0.6895,0 26.281,25.03215 56.8701,\n          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n          -104.0616 -231.873,-231.248 z\n        ",fill:"currentColor"})))});t.default=i,e.exports=t.default}).call(t,n(2))},23:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=(o(a),function(e){var t=e.cssProps,n=void 0===t?{}:t;return r.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 100 100",width:15,height:15,css:n},r.createElement("path",{fill:"currentColor",d:"\n      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,\n      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\n    "}),r.createElement("polygon",{fill:"currentColor",points:"\n      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,\n      14.9 62.8,22.9 71.5,22.9\n      "}))});t.default=i,e.exports=t.default}).call(t,n(2))},56:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(7),l=o(i),s=n(8),c=o(s),u=n(9),d=o(u),f=n(4),m=o(f),p=n(1),h=(o(p),n(3)),v=function(e){var t,n=e.next,o=e.prev,a=e.location,i=e.nextTitle,s=e.prevTitle;return r.createElement("div",{css:{background:h.colors.dark,color:h.colors.white,paddingTop:50,paddingBottom:50}},r.createElement(l.default,null,r.createElement(c.default,{type:"ul",halign:"space-between",css:(t={},t[h.media.between("small","medium")]={paddingRight:240},t[h.media.between("large","largerSidebar")]={paddingRight:280},t[h.media.between("largerSidebar","sidebarFixed",!0)]={paddingRight:380},t)},r.createElement(c.default,{basis:"50%",type:"li"},o&&r.createElement("div",null,r.createElement(b,null,"Previous article"),r.createElement("div",{css:{paddingTop:10}},r.createElement(g,{location:a,to:o},s)))),n&&r.createElement(c.default,{halign:"flex-end",basis:"50%",type:"li",css:{textAlign:"right"}},r.createElement("div",null,r.createElement(b,null,"Next article"),r.createElement("div",{css:{paddingTop:10}},r.createElement(g,{location:a,to:n},i)))))))};v.propTypes={next:m.default.string,prev:m.default.string,nextTitle:m.default.string,prevTitle:m.default.string},t.default=v;var g=function(e){var t,n=e.children,o=e.to,a=e.location,i=o;return a.pathname.match(/^\/native-reactive-manual/)&&(i="/"+o),r.createElement(d.default,{css:(t={display:"inline",textTransform:"capitalize",borderColor:h.colors.subtle,transition:"border-color 0.2s ease",fontSize:30,borderBottomWidth:1,borderBottomStyle:"solid"},t[h.media.lessThan("large")]={fontSize:24},t[h.media.size("xsmall")]={fontSize:16},t[":hover"]={borderColor:h.colors.white},t),to:i},n)},b=function(e){var t=e.children;return r.createElement("div",{css:a({color:h.colors.brand},h.fonts.small)},t)};e.exports=t.default}).call(t,n(2))},57:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(56),a=r(o);t.default=a.default,e.exports=t.default},58:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(1),u=(o(c),n(17)),d=o(u),f=function(e){function t(n,r){a(this,t);var o=i(this,e.call(this,n,r));return o.state={activeItemId:"",itemTopOffsets:[]},o.calculateItemTopOffsets=o.calculateItemTopOffsets.bind(o),o.handleResize=o.handleResize.bind(o),o.handleScroll=o.handleScroll.bind(o),o}return l(t,e),t.prototype.componentDidMount=function(){this.calculateItemTopOffsets(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)},t.prototype.calculateItemTopOffsets=function(){var e=this.props.section,t=m(e.items);this.setState({itemTopOffsets:p(t)})},t.prototype.handleResize=function(){this.calculateItemTopOffsets(),this.handleScroll()},t.prototype.handleScroll=function(){var e=this.state.itemTopOffsets,t=e.find(function(t,n){var r=e[n+1];return r?window.scrollY>=t.offsetTop&&window.scrollY<r.offsetTop:window.scrollY>=t.offsetTop});this.setState({activeItemId:t?t.id:""})},t.prototype.render=function(){var e=this.state.activeItemId;return r.createElement(d.default,s({isScrollSync:!0,activeItemId:e},this.props))},t}(c.Component),m=function(e){return e.map(function(e){var t=[];return e.subitems&&(t=e.subitems.map(function(e){return e.id})),[e.id].concat(t)}).reduce(function(e,t){return e.concat(t)})},p=function(e){return e.map(function(e){var t=document.getElementById(e);return t?{id:e,offsetTop:t.offsetTop}:null}).filter(function(e){return e})};t.default=f,e.exports=t.default}).call(t,n(2))},17:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=(o(a),n(3)),l=n(63),s=o(l),c=n(55),u=o(c),d=n(16),f=o(d),m=function(e){var t,n,o,a=e.activeItemId,l=e.createLink,c=e.isActive,d=e.isScrollSync,m=e.location,p=e.onLinkClick,h=e.onSectionTitleClick,v=e.section;return r.createElement("div",null,r.createElement("button",{css:{cursor:"pointer",backgroundColor:"transparent",border:0,marginTop:10},onClick:h},r.createElement(u.default,{cssProps:(t={},t[i.media.greaterThan("small")]={color:c?i.colors.text:i.colors.subtle,":hover":{color:i.colors.text}},t)},v.title,r.createElement(f.default,{cssProps:(n={marginLeft:7,transform:c?"rotateX(180deg)":"rotateX(0deg)",transition:"transform 0.2s ease"},n[i.media.lessThan("small")]={display:"none"},n)}))),r.createElement("ul",{css:(o={marginBottom:10},o[i.media.greaterThan("small")]={display:c?"block":"none"},o)},v.items.map(function(e){return r.createElement("li",{key:e.id,css:{marginTop:8}},l({isActive:d?(0,s.default)(m,e)&&""===a:(0,s.default)(m,e),item:e,location:m,onLinkClick:p,section:v}),e.subitems&&(0,s.default)(m,e)&&r.createElement("ul",{css:{marginLeft:20}},e.subitems.map(function(t){return r.createElement("li",{key:t.id},l({isActive:d?a===t.id&&(0,s.default)(m,e):(0,s.default)(m,t),item:t,location:m,onLinkClick:p,section:v}))})))})))};t.default=m,e.exports=t.default}).call(t,n(2))},59:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),c=(o(s),n(8)),u=o(c),d=n(17),f=o(d),m=n(58),p=o(m),h=n(3),v=function(e){function t(n,r){a(this,t);var o=i(this,e.call(this,n,r));return o.state={activeSection:n.defaultActiveSection},o}return l(t,e),t.prototype.render=function(){var e,t=this,n=this.props,o=n.closeParentMenu,a=n.createLink,i=n.enableScrollSync,l=n.location,s=n.sectionList,c=this.state.activeSection,d=i?p.default:f.default;return r.createElement(u.default,{type:"nav",direction:"column",halign:"stretch",css:(e={width:"100%",paddingLeft:20,position:"relative"},e[h.media.greaterThan("largerSidebar")]={paddingLeft:40},e[h.media.lessThan("small")]={paddingBottom:100},e)},s.map(function(e,n){return r.createElement(d,{createLink:a,isActive:c===e||1===s.length,key:n,location:l,onLinkClick:o,onSectionTitleClick:function(){return t._toggleSection(e)},section:e})}))},t.prototype._toggleSection=function(e){this.setState(function(t){return{activeSection:t.activeSection===e?null:e}})},t}(s.Component);t.default=v,e.exports=t.default}).call(t,n(2))},60:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(59),a=r(o);t.default=a.default,e.exports=t.default},61:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.createLinkTutorial=t.createLinkDocs=t.createLinkCommunity=t.createLinkBlog=void 0;var o,a=n(9),i=r(a),l=n(1),s=(r(l),n(23)),c=r(s),u=n(3),d=function(t){var n=t.isActive,r=t.item;t.section;return e.createElement(i.default,{css:[g,n&&h],to:r.id},n&&e.createElement("span",{css:v}),r.title)},f=function(t){var n=t.isActive,r=t.item,o=t.section;return r.href?e.createElement("a",{css:[g],href:r.href,target:"_blank",rel:"noopener"},r.title,e.createElement(c.default,{cssProps:{verticalAlign:-2,display:"inline-block",marginLeft:5,color:u.colors.subtle}})):m({isActive:n,item:r,section:o})},m=function(t){var n=t.isActive,r=t.item,o=t.onLinkClick;t.section;return e.createElement(i.default,{css:[g,n&&h],onClick:o,to:r.href},n&&e.createElement("span",{css:v}),r.title)},p=function(t){var n=t.isActive,r=t.item,o=t.onLinkClick;t.section;return e.createElement(i.default,{css:[g,n&&h],onClick:o,to:r.href},n&&e.createElement("span",{css:v}),r.title)},h={fontWeight:700},v=(o={width:4,height:25,borderLeft:"4px solid "+u.colors.brand,paddingLeft:16,position:"absolute",left:0,marginTop:-3},o[u.media.greaterThan("largerSidebar")]={left:15},o),g={color:u.colors.text,display:"inline-block",borderBottom:"1px solid transparent",transition:"border 0.2s ease",marginTop:5,"&:hover":{color:u.colors.subtle}};t.createLinkBlog=d,t.createLinkCommunity=f,t.createLinkDocs=m,t.createLinkTutorial=p}).call(t,n(2))},62:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(18),a=r(o),i=function(e,t){var n=void 0,r=e.split("/").slice(-1)[0];return t.forEach(function(e){var t=e.items.some(function(e){return r===(0,a.default)(e.id)||e.subitems&&e.subitems.some(function(e){return r===(0,a.default)(e.id)})});t&&(n=e)}),n};t.default=i,e.exports=t.default},63:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(18),a=r(o),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.indexOf("#");return t>=0?e.substr(t):""},l=function(e,t){if(e.hash){if(t.subitems&&t.subitems.length&&e.pathname.includes(t.href))return t.subitems.some(function(t){return e.hash===i(t.href)});if(t.href)return e.hash===i(t.href)}else if(t.id.includes("html"))return e.pathname.includes(t.id);var n=e.pathname.split("/").slice(-1)[0];return n===(0,a.default)(t.id)};t.default=l,e.exports=t.default},18:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(75),a=r(o);t.default=function(e,t){var n=(0,a.default)(e)+".html";return t?"/"+t+"/"+n:n},e.exports=t.default}});
//# sourceMappingURL=component---src-templates-blog-js-72ce9de04dda9f1fece7.js.map