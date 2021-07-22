const btn = document.querySelector(".nav-socialmedia");
const list = document.querySelector(".nav-socialmedia_list");

btn.addEventListener("click", (e) => {
    const state = window.getComputedStyle(list).display;
    if (state == "none") {
        list.style.cssText = "display:block; visibility:visible;";
    } else {
        list.style.cssText = "display:none; visibility:hidden;";
    }
});
