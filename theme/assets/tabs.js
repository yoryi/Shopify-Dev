var I,c,ee,He,w,K,_e,M,Pe,T={},te=[],Ne=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,O=Array.isArray;function k(e,_){for(var t in _)e[t]=_[t];return e}function ne(e){var _=e.parentNode;_&&_.removeChild(e)}function x(e,_,t){var r,i,o,a={};for(o in _)o=="key"?r=_[o]:o=="ref"?i=_[o]:a[o]=_[o];if(arguments.length>2&&(a.children=arguments.length>3?I.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return D(e,a,r,i,null)}function D(e,_,t,r,i){var o={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++ee:i};return i==null&&c.vnode!=null&&c.vnode(o),o}function V(e){return e.children}function U(e,_){this.props=e,this.context=_}function E(e,_){if(_==null)return e.__?E(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?E(e):null}function oe(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return oe(e)}}function Q(e){(!e.__d&&(e.__d=!0)&&w.push(e)&&!A.__r++||K!==c.debounceRendering)&&((K=c.debounceRendering)||_e)(A)}function A(){var e,_,t,r,i,o,a,f;for(w.sort(M);e=w.shift();)e.__d&&(_=w.length,r=void 0,i=void 0,a=(o=(t=e).__v).__e,(f=t.__P)&&(r=[],(i=k({},o)).__v=o.__v+1,R(f,o,i,t.__n,f.ownerSVGElement!==void 0,o.__h!=null?[a]:null,r,a==null?E(o):a,o.__h),ce(r,o),o.__e!=a&&oe(o)),w.length>_&&w.sort(M));A.__r=0}function re(e,_,t,r,i,o,a,f,s,d){var n,h,u,l,p,C,v,y=r&&r.__k||te,g=y.length;for(t.__k=[],n=0;n<_.length;n++)if((l=t.__k[n]=(l=_[n])==null||typeof l=="boolean"||typeof l=="function"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?D(null,l,null,null,l):O(l)?D(V,{children:l},null,null,null):l.__b>0?D(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l)!=null){if(l.__=t,l.__b=t.__b+1,(u=y[n])===null||u&&l.key==u.key&&l.type===u.type)y[n]=void 0;else for(h=0;h<g;h++){if((u=y[h])&&l.key==u.key&&l.type===u.type){y[h]=void 0;break}u=null}R(e,l,u=u||T,i,o,a,f,s,d),p=l.__e,(h=l.ref)&&u.ref!=h&&(v||(v=[]),u.ref&&v.push(u.ref,null,l),v.push(h,l.__c||p,l)),p!=null?(C==null&&(C=p),typeof l.type=="function"&&l.__k===u.__k?l.__d=s=ie(l,s,e):s=le(e,l,u,y,p,s),typeof t.type=="function"&&(t.__d=s)):s&&u.__e==s&&s.parentNode!=e&&(s=E(u))}for(t.__e=C,n=g;n--;)y[n]!=null&&(typeof t.type=="function"&&y[n].__e!=null&&y[n].__e==t.__d&&(t.__d=ue(r).nextSibling),ae(y[n],y[n]));if(v)for(n=0;n<v.length;n++)se(v[n],v[++n],v[++n])}function ie(e,_,t){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,_=typeof r.type=="function"?ie(r,_,t):le(t,r,r,i,r.__e,_));return _}function le(e,_,t,r,i,o){var a,f,s;if(_.__d!==void 0)a=_.__d,_.__d=void 0;else if(t==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),a=null;else{for(f=o,s=0;(f=f.nextSibling)&&s<r.length;s+=1)if(f==i)break e;e.insertBefore(i,o),a=o}return a!==void 0?a:i.nextSibling}function ue(e){var _,t,r;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(_=e.__k.length-1;_>=0;_--)if((t=e.__k[_])&&(r=ue(t)))return r}return null}function De(e,_,t,r,i){var o;for(o in t)o==="children"||o==="key"||o in _||F(e,o,null,t[o],r);for(o in _)i&&typeof _[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===_[o]||F(e,o,_[o],t[o],r)}function X(e,_,t){_[0]==="-"?e.setProperty(_,t==null?"":t):e[_]=t==null?"":typeof t!="number"||Ne.test(_)?t:t+"px"}function F(e,_,t,r,i){var o;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||X(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||X(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")o=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=t,t?r||e.addEventListener(_,o?Z:Y,o):e.removeEventListener(_,o?Z:Y,o);else if(_!=="dangerouslySetInnerHTML"){if(i)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="width"&&_!=="height"&&_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_!=="rowSpan"&&_!=="colSpan"&&_ in e)try{e[_]=t==null?"":t;break e}catch(a){}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,t))}}function Y(e){return this.l[e.type+!1](c.event?c.event(e):e)}function Z(e){return this.l[e.type+!0](c.event?c.event(e):e)}function R(e,_,t,r,i,o,a,f,s){var d,n,h,u,l,p,C,v,y,g,H,S,J,P,L,b=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(s=t.__h,f=_.__e=t.__e,_.__h=null,o=[f]),(d=c.__b)&&d(_);try{e:if(typeof b=="function"){if(v=_.props,y=(d=b.contextType)&&r[d.__c],g=d?y?y.props.value:d.__:r,t.__c?C=(n=_.__c=t.__c).__=n.__E:("prototype"in b&&b.prototype.render?_.__c=n=new b(v,g):(_.__c=n=new U(v,g),n.constructor=b,n.render=Te),y&&y.sub(n),n.props=v,n.state||(n.state={}),n.context=g,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),b.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=k({},n.__s)),k(n.__s,b.getDerivedStateFromProps(v,n.__s))),u=n.props,l=n.state,n.__v=_,h)b.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==u&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,g),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,g)===!1||_.__v===t.__v){for(_.__v!==t.__v&&(n.props=v,n.state=n.__s,n.__d=!1),n.__e=!1,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(N){N&&(N.__=_)}),H=0;H<n._sb.length;H++)n.__h.push(n._sb[H]);n._sb=[],n.__h.length&&a.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,g),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(u,l,p)})}if(n.context=g,n.props=v,n.__P=e,S=c.__r,J=0,"prototype"in b&&b.prototype.render){for(n.state=n.__s,n.__d=!1,S&&S(_),d=n.render(n.props,n.state,n.context),P=0;P<n._sb.length;P++)n.__h.push(n._sb[P]);n._sb=[]}else do n.__d=!1,S&&S(_),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++J<25);n.state=n.__s,n.getChildContext!=null&&(r=k(k({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(p=n.getSnapshotBeforeUpdate(u,l)),re(e,O(L=d!=null&&d.type===V&&d.key==null?d.props.children:d)?L:[L],_,t,r,i,o,a,f,s),n.base=_.__e,_.__h=null,n.__h.length&&a.push(n),C&&(n.__E=n.__=null),n.__e=!1}else o==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=Ue(t.__e,_,t,r,i,o,a,s);(d=c.diffed)&&d(_)}catch(N){_.__v=null,(s||o!=null)&&(_.__e=f,_.__h=!!s,o[o.indexOf(f)]=null),c.__e(N,_,t)}}function ce(e,_){c.__c&&c.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){c.__e(r,t.__v)}})}function Ue(e,_,t,r,i,o,a,f){var s,d,n,h=t.props,u=_.props,l=_.type,p=0;if(l==="svg"&&(i=!0),o!=null){for(;p<o.length;p++)if((s=o[p])&&"setAttribute"in s==!!l&&(l?s.localName===l:s.nodeType===3)){e=s,o[p]=null;break}}if(e==null){if(l===null)return document.createTextNode(u);e=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,u.is&&u),o=null,f=!1}if(l===null)h===u||f&&e.data===u||(e.data=u);else{if(o=o&&I.call(e.childNodes),d=(h=t.props||T).dangerouslySetInnerHTML,n=u.dangerouslySetInnerHTML,!f){if(o!=null)for(h={},p=0;p<e.attributes.length;p++)h[e.attributes[p].name]=e.attributes[p].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(De(e,u,h,i,f),n)_.__k=[];else if(re(e,O(p=_.props.children)?p:[p],_,t,r,i&&l!=="foreignObject",o,a,o?o[0]:t.__k&&E(t,0),f),o!=null)for(p=o.length;p--;)o[p]!=null&&ne(o[p]);f||("value"in u&&(p=u.value)!==void 0&&(p!==e.value||l==="progress"&&!p||l==="option"&&p!==h.value)&&F(e,"value",p,h.value,!1),"checked"in u&&(p=u.checked)!==void 0&&p!==e.checked&&F(e,"checked",p,h.checked,!1))}return e}function se(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){c.__e(r,t)}}function ae(e,_,t){var r,i;if(c.unmount&&c.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||se(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){c.__e(o,_)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&ae(r[i],_,t||typeof e.type!="function");t||e.__e==null||ne(e.__e),e.__=e.__e=e.__d=void 0}function Te(e,_,t){return this.constructor(e,t)}function fe(e,_,t){var r,i,o;c.__&&c.__(e,_),i=(r=typeof t=="function")?null:t&&t.__k||_.__k,o=[],R(_,e=(!r&&t||_).__k=x(V,null,[e]),i||T,T,_.ownerSVGElement!==void 0,!r&&t?[t]:i?null:_.firstChild?I.call(_.childNodes):null,o,!r&&t?t:i?i.__e:_.firstChild,r),ce(o,e)}I=te.slice,c={__e:function(e,_,t,r){for(var i,o,a;_=_.__;)if((i=_.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),a=i.__d),a)return i.__E=i}catch(f){e=f}throw e}},ee=0,He=function(e){return e!=null&&e.constructor===void 0},U.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},t),this.props)),e&&k(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),Q(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Q(this))},U.prototype.render=V,w=[],_e=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,M=function(e,_){return e.__v.__b-_.__v.__b},A.__r=0,Pe=0;var z,m,q,pe,$=0,ge=[],W=[],de=c.__b,he=c.__r,ve=c.diffed,me=c.__c,ye=c.unmount;function Ae(e,_){c.__h&&c.__h(m,e,$||_),$=0;var t=m.__H||(m.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:W}),t.__[e]}function ke(e){return $=1,Fe(xe,e)}function Fe(e,_,t){var r=Ae(z++,2);if(r.t=e,!r.__c&&(r.__=[t?t(_):xe(void 0,_),function(f){var s=r.__N?r.__N[0]:r.__[0],d=r.t(s,f);s!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=m,!m.u)){var i=function(f,s,d){if(!r.__c.__H)return!0;var n=r.__c.__H.__.filter(function(u){return u.__c});if(n.every(function(u){return!u.__N}))return!o||o.call(this,f,s,d);var h=!1;return n.forEach(function(u){if(u.__N){var l=u.__[0];u.__=u.__N,u.__N=void 0,l!==u.__[0]&&(h=!0)}}),!(!h&&r.__c.props===f)&&(!o||o.call(this,f,s,d))};m.u=!0;var o=m.shouldComponentUpdate,a=m.componentWillUpdate;m.componentWillUpdate=function(f,s,d){if(this.__e){var n=o;o=void 0,i(f,s,d),o=n}a&&a.call(this,f,s,d)},m.shouldComponentUpdate=i}return r.__N||r.__}function Ie(){for(var e;e=ge.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(B),e.__H.__h.forEach(j),e.__H.__h=[]}catch(_){e.__H.__h=[],c.__e(_,e.__v)}}c.__b=function(e){m=null,de&&de(e)},c.__r=function(e){he&&he(e),z=0;var _=(m=e.__c).__H;_&&(q===m?(_.__h=[],m.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=W,t.__N=t.i=void 0})):(_.__h.forEach(B),_.__h.forEach(j),_.__h=[],z=0)),q=m},c.diffed=function(e){ve&&ve(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(ge.push(_)!==1&&pe===c.requestAnimationFrame||((pe=c.requestAnimationFrame)||Ve)(Ie)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==W&&(t.__=t.__V),t.i=void 0,t.__V=W})),q=m=null},c.__c=function(e,_){_.some(function(t){try{t.__h.forEach(B),t.__h=t.__h.filter(function(r){return!r.__||j(r)})}catch(r){_.some(function(i){i.__h&&(i.__h=[])}),_=[],c.__e(r,t.__v)}}),me&&me(e,_)},c.unmount=function(e){ye&&ye(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{B(r)}catch(i){_=i}}),t.__H=void 0,_&&c.__e(_,t.__v))};var be=typeof requestAnimationFrame=="function";function Ve(e){var _,t=function(){clearTimeout(r),be&&cancelAnimationFrame(_),setTimeout(e)},r=setTimeout(t,100);be&&(_=requestAnimationFrame(t))}function B(e){var _=m,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),m=_}function j(e){var _=m;e.__c=e.__(),m=_}function xe(e,_){return typeof _=="function"?_(e):_}var We=({settings:e,blocks:_})=>{let[t,r]=ke(-1);return e.show_tabs?x("div",{class:"tabs-container"},x("ul",{class:"tabs tw-list-none tw-flex tw-px-0 tw-py-1 tw-mx-2 tw-my-10 tw-border-0 tw-border-b tw-border-b-black tw-border-opacity-20 tw-border-solid tw-cursor-pointer"},_.map((i,o)=>x("li",{style:"font-size: "+e.tab_font_size+"px; color: "+e.tab_text_color,class:"tw-text-center tw-w-[100px]",onClick:()=>{r(o)}},i.tab_title))),x("div",{class:"tab-content tw-pl-10"},_.map((i,o)=>x("div",{class:o===t?"":" hidden"},"Content for ",i.tab_title)))):null},G="tab-render-area",we,Ce,Be=JSON.parse(((Ce=(we=document.getElementById(G))==null?void 0:we.dataset)==null?void 0:Ce.section)||""),Se,Ee,Le=JSON.parse(((Ee=(Se=document.getElementById(G))==null?void 0:Se.dataset)==null?void 0:Ee.blocks)||"");console.log("before render");fe(x(We,{settings:Be,blocks:Le}),document.getElementById(G)||document);