(()=>{const e=document.querySelector("#page-frame"),t=Array.from(document.querySelectorAll("#tabs li"));console.log(e),t.forEach((t=>{t.addEventListener("click",(()=>{const c=t.dataset.name;e.src=`${c}.html`}))}))})();