const iframe = document.querySelector("#page-frame");
const tabList = Array.from(document.querySelectorAll("#tabs li"));

console.log(iframe);

tabList.forEach((el) => {
    el.addEventListener("click", () => {
        const pageName = el.dataset.name;
        iframe.src = `${pageName}.html`;
    });
});

