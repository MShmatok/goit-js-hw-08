var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var o,r,i,f,a,u,c=0,l=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(S,t),l?y(e):f}function O(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=i}function S(){var e=d();if(O(e))return h(e);a=setTimeout(S,function(e){var n=t-(e-u);return v?m(n,i-(e-c)):n}(e))}function h(e){return a=void 0,b&&o?y(e):(o=r=void 0,f)}function w(){var e=d(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return j(u);if(v)return a=setTimeout(S,t),y(u)}return void 0===a&&(a=setTimeout(S,t)),f}return t=p(t)||0,g(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},w.flush=function(){return void 0===a?f:h(d())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=r.test(e);return a||i.test(e)?f(e.slice(2),a?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form")};!function(e){if(e){const t=JSON.parse(e);b.form.email.value=t.email,b.form.message.value=t.message}}(localStorage.getItem("feedback-form-state")),b.form.addEventListener("input",t((function(e){const t={email:b.form.email.value,message:b.form.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),b.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),e.target.reset()}));
//# sourceMappingURL=03-feedback.7d57828e.js.map
