!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6748592c-95ec-4fef-9bc6-9f674d7944fe",e._sentryDebugIdIdentifier="sentry-dbid-6748592c-95ec-4fef-9bc6-9f674d7944fe")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"83fc2cd4"};"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1798],{54971:function(e,n,t){t.d(n,{H:function(){return r},K:function(){return a}});var o=t(94486),s=t(99399),l=t(40330),i=t(49500);let a=new WeakMap;function r(e,n,t){let{shouldFocusWrap:r=!0,onKeyDown:d,onKeyUp:c,...u}=e;e["aria-label"]||e["aria-labelledby"]||i.warn("An aria-label or aria-labelledby prop is required for accessibility.");let p=(0,o.z)(e,{labelable:!0}),{listProps:y}=(0,l._)({...u,ref:t,selectionManager:n.selectionManager,collection:n.collection,disabledKeys:n.disabledKeys,shouldFocusWrap:r,linkBehavior:"override"});return a.set(n,{onClose:e.onClose,onAction:e.onAction}),{menuProps:(0,s.d)(p,{onKeyDown:d,onKeyUp:c},{role:"menu",...y,onKeyDown:e=>{"Escape"!==e.key&&y.onKeyDown(e)}})}}},78584:function(e,n,t){t.d(n,{i:function(){return g}});var o=t(54971),s=t(33471),l=t(67935),i=t(94486),a=t(99399),r=t(77577),d=t(49365),c=t(44817),u=t(18510),p=t(30345),y=t(10635),f=t(33396);function g(e,n,t){var g,b;let{key:h,closeOnSelect:K,isVirtualized:v,"aria-haspopup":k,onPressStart:m,onPressUp:w,onPress:M,onPressChange:P,onPressEnd:S,onHoverStart:x,onHoverChange:C,onHoverEnd:E,onKeyDown:D,onKeyUp:I,onFocus:F,onFocusChange:A,onBlur:_}=e,H=!!k,N=null!==(g=e.isDisabled)&&void 0!==g?g:n.selectionManager.isDisabled(h),z=null!==(b=e.isSelected)&&void 0!==b?b:n.selectionManager.isSelected(h),U=(0,o.K).get(n),B=n.collection.getItem(h),T=e.onClose||U.onClose,V=(0,s.tv)(),W=n=>{var t;!H&&((null==B?void 0:null===(t=B.props)||void 0===t?void 0:t.onAction)&&B.props.onAction(),e.onAction?e.onAction(h):U.onAction&&U.onAction(h),n.target instanceof HTMLAnchorElement&&V.open(n.target,n,B.props.href,B.props.routerOptions))},L="menuitem";H||("single"===n.selectionManager.selectionMode?L="menuitemradio":"multiple"!==n.selectionManager.selectionMode||(L="menuitemcheckbox"));let O=(0,l.mp)(),q=(0,l.mp)(),R=(0,l.mp)(),Y={"aria-disabled":N||void 0,role:L,"aria-label":e["aria-label"],"aria-labelledby":O,"aria-describedby":[q,R].filter(Boolean).join(" ")||void 0,"aria-controls":e["aria-controls"],"aria-haspopup":k,"aria-expanded":e["aria-expanded"]};"none"===n.selectionManager.selectionMode||H||(Y["aria-checked"]=z),v&&(Y["aria-posinset"]=null==B?void 0:B.index,Y["aria-setsize"]=(0,r.i)(n.collection));let{itemProps:j,isFocused:X}=(0,f.C)({selectionManager:n.selectionManager,key:h,ref:t,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none"}),{pressProps:Z,isPressed:G}=(0,d.r)({onPressStart:e=>{"keyboard"===e.pointerType&&W(e),null==m||m(e)},onPress:M,onPressUp:e=>{"keyboard"!==e.pointerType&&(W(e),!H&&T&&(null!=K?K:"multiple"!==n.selectionManager.selectionMode||n.selectionManager.isLink(h))&&T()),null==w||w(e)},onPressChange:P,onPressEnd:S,isDisabled:N}),{hoverProps:J}=(0,c.X)({isDisabled:N,onHoverStart(e){(0,u.E)()||(n.selectionManager.setFocused(!0),n.selectionManager.setFocusedKey(h)),null==x||x(e)},onHoverChange:C,onHoverEnd:E}),{keyboardProps:Q}=(0,p.v)({onKeyDown:e=>{if(e.repeat){e.continuePropagation();return}switch(e.key){case" ":N||"none"!==n.selectionManager.selectionMode||H||!1===K||!T||T();break;case"Enter":N||!1===K||H||!T||T();break;default:H||e.continuePropagation(),null==D||D(e)}},onKeyUp:I}),{focusProps:$}=(0,y.K)({onBlur:_,onFocus:F,onFocusChange:A}),ee=(0,i.z)(B.props);delete ee.id;let en=(0,s.eY)(B.props);return{menuItemProps:{...Y,...(0,a.d)(ee,en,H?{onFocus:j.onFocus,"data-key":j["data-key"]}:j,Z,J,Q,$),tabIndex:null!=j.tabIndex?-1:void 0},labelProps:{id:O},descriptionProps:{id:q},keyboardShortcutProps:{id:R},isFocused:X,isSelected:z,isPressed:G,isDisabled:N}}},55090:function(e,n,t){t.d(n,{c:function(){return i}});var o=t(75271),s=t(49500);function l(e){return null}l.getCollectionNode=function*(e,n){let{childItems:t,title:l,children:i}=e,a=e.title||e.children,r=e.textValue||("string"==typeof a?a:"")||e["aria-label"]||"";r||(null==n?void 0:n.suppressTextValueWarning)||s.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:a,textValue:r,"aria-label":e["aria-label"],hasChildNodes:null!=e.hasChildItems?e.hasChildItems:!!(e.childItems||e.title&&o.Children.count(e.children)>0),*childNodes(){if(t)for(let e of t)yield{type:"item",value:e};else if(l){let e=[];o.Children.forEach(i,n=>{e.push({type:"item",element:n})}),yield*e}}}};let i=l},51442:function(e,n,t){t.d(n,{W:function(){return l}});var o=t(68333),s=t(75271);function l(e){let n=(0,o.d)(e),[t,l]=(0,s.useState)(null),[i,a]=(0,s.useState)([]),r=()=>{a([]),n.close()};return{focusStrategy:t,...n,open(e=null){l(e),n.open()},toggle(e=null){l(e),n.toggle()},close(){r()},expandedKeysStack:i,openSubmenu:(e,n)=>{a(t=>n>t.length?t:[...t.slice(0,n),e])},closeSubmenu:(e,n)=>{a(t=>t[n]===e?t.slice(0,n):t)}}}},95549:function(e,n,t){t.d(n,{D:function(){return d}});class o{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let n=this.keyMap.get(e);return n?n.prevKey:null}getKeyAfter(e){let n=this.keyMap.get(e);return n?n.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let n=[...this.getKeys()];return this.getItem(n[e])}constructor(e,{expandedKeys:n}={}){let t;this.keyMap=new Map,this.iterable=e,n=n||new Set;let o=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&("section"===e.type||n.has(e.key)))for(let n of e.childNodes)o(n)};for(let n of e)o(n);let s=0;for(let[e,n]of this.keyMap)t?(t.nextKey=e,n.prevKey=t.key):(this.firstKey=e,n.prevKey=void 0),"item"===n.type&&(n.index=s++),(t=n).nextKey=void 0;this.lastKey=null==t?void 0:t.key}}var s=t(24464),l=t(60259),i=t(75271),a=t(60916),r=t(50892);function d(e){let{onExpandedChange:n}=e,[t,d]=(0,r.z)(e.expandedKeys?new Set(e.expandedKeys):void 0,e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,n),c=(0,s.q)(e),u=(0,i.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),p=(0,a.K)(e,(0,i.useCallback)(e=>new o(e,{expandedKeys:t}),[t]),null);return(0,i.useEffect)(()=>{null==c.focusedKey||p.getItem(c.focusedKey)||c.setFocusedKey(null)},[p,c.focusedKey]),{collection:p,expandedKeys:t,disabledKeys:u,toggleKey:e=>{let n;d(((n=new Set(t)).has(e)?n.delete(e):n.add(e),n))},setExpandedKeys:d,selectionManager:new l.Z(p,c)}}}}]);
//# sourceMappingURL=1798-4baf1b25f2c2a2c1.js.map