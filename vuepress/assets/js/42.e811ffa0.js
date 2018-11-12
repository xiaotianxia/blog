(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{282:function(e,t,o){"use strict";o.r(t);var i=window.CustomEvent;function n(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function a(e){e&&e.blur&&e!==document.body&&e.blur()}function r(e,t){for(var o=0;o<e.length;++o)if(e[o]===t)return!0;return!1}function l(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function s(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,o=!1,i=function(){o?this.downgradeModal():this.maybeHideModal(),o=!1}.bind(this),n=function(n){if(n.target===e){var a="DOMNodeRemoved";o|=n.type.substr(0,a.length)===a,window.clearTimeout(t),t=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(t){e.addEventListener(t,n)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}i&&"object"!=typeof i||((i=function(e,t){t=t||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),o}).prototype=window.Event.prototype),s.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),d.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var o=document.createEvent("MouseEvents");o.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(o),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}a(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!d.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),o=function(e,o){return!(void 0===t[e]||t[e]===o)};if(t.opacity<1||o("zIndex","auto")||o("transform","none")||o("mixBlendMode","normal")||o("filter","none")||o("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,d.needsCentering(this.dialog_)?(d.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new i("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(t)}};var d={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,o=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,o)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var o=document.styleSheets[t],i=null;try{i=o.cssRules}catch(e){}if(i)for(var n=0;n<i.length;++n){var a=i[n],l=null;try{l=document.querySelectorAll(a.selectorText)}catch(e){}if(l&&r(l,e)){var s=a.style.getPropertyValue("top"),d=a.style.getPropertyValue("bottom");if(s&&"auto"!==s||d&&"auto"!==d)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!d.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new s(e)},registerDialog:function(e){e.showModal||d.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var o=[];t.forEach(function(e){for(var t,i=0;t=e.removedNodes[i];++i)t instanceof Element&&("dialog"===t.localName&&o.push(t),o=o.concat(t.querySelectorAll("dialog")))}),o.length&&e(o)}))}};if(d.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},d.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},d.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,o=0;e=this.pendingDialogStack[o];++o)e.updateZIndex(--t,--t),0===o&&(this.overlay.style.zIndex=--t);var i=this.pendingDialogStack[0];i?(i.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},d.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=n(e);){for(var t,o=0;t=this.pendingDialogStack[o];++o)if(t.dialog===e)return 0===o;e=e.parentElement}return!1},d.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),a(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},d.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new i("cancel",{bubbles:!1,cancelable:!0}),o=this.pendingDialogStack[0];o&&o.dialog.dispatchEvent(t)&&o.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},d.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach(function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()})},d.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},d.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},d.dm=new d.DialogManager,d.formSubmitter=null,d.useValue=null,void 0===window.HTMLDialogElement){var c=document.createElement("form");if(c.setAttribute("method","dialog"),"dialog"!==c.method){var u=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(u){var h=u.get;u.get=function(){return l(this)?"dialog":h.call(this)};var g=u.set;u.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):g.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",u)}}document.addEventListener("click",function(e){if(d.formSubmitter=null,d.useValue=null,!e.defaultPrevented){var t=e.target;if(t&&l(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if("input"!==t.localName||"image"!==t.type)return;d.useValue=e.offsetX+","+e.offsetY}n(t)&&(d.formSubmitter=t)}}},!1);var p=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!l(this))return p.call(this);var e=n(this);e&&e.close()},document.addEventListener("submit",function(e){var t=e.target;if(l(t)){e.preventDefault();var o=n(t);if(o){var i=d.formSubmitter;i&&i.form===t?o.close(d.useValue||i.value):o.close(),d.formSubmitter=null}}},!0)}t.default=d}}]);