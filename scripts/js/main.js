(()=>{const e=document.querySelectorAll(".shopall a");function t(e,t,c){const l=t.querySelectorAll("ul li.is-hidden");Array.from(l).slice(0,e).forEach((e=>{e.classList.remove("is-hidden")})),0==t.querySelectorAll("ul li.is-hidden").length&&c.parentElement.classList.add("is-hide")}document.getElementById("e4"),document.getElementById("e8"),e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const c=e.target,l=e.target.closest("section");t(c.getAttribute("data-count"),l,c)}))})),t(4,document.querySelector("section.our-products")),t(8,document.querySelector("section.product_list"))})();