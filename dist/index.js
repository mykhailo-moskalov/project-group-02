(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();(()=>{const r=document.querySelector("[data-menu]"),t=document.querySelector("[data-bg]");document.querySelectorAll("[data-menu-open], [data-menu-close], [data-bg-open], [data-bg-close]").forEach(c=>{c.addEventListener("click",s)}),t==null||t.addEventListener("click",s);function s(){r.classList.toggle("is-open"),t==null||t.classList.toggle("is-open")}})();let i=document.querySelectorAll(".saleImgRow-item"),l=document.querySelector(".saleMainImg");i.forEach((r,t)=>{i[t].addEventListener("click",()=>a(t+1))});function a(r){l.innerHTML=`
    <img
      class="saleMainImg-item"
      srcset="
        img/sale/${r}/sale-${r}-mob-max.png 1x,
        img/sale/${r}/sale-${r}-mob@2x-max.png 2x
      "
      src="img/sale/${r}/sale-${r}-mob-max.png"
      alt="foto main"
      width="235"
    />
  `}
//# sourceMappingURL=index.js.map
