!function(){var t={body:document.querySelector("body"),start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")},e=null;function o(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.start.addEventListener("click",(function(){e=setInterval(o,1e3),t.start.setAttribute("disabled","disabled"),t.stop.removeAttribute("disabled")})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.877c4fbc.js.map
