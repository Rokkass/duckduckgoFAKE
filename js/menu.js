const btn_menu = document.querySelector(".nav-menu_box");
const list_menu = document.querySelector(".nav-menu_aside");
const cross_menu = document.querySelector(".fa-times");
const body = document.querySelector("body");

function hide(e) {
    e.style.cssText = "display:none; visibility:hidden;";
}

function show(e) {
    e.style.cssText = "display:block; visibility:visible;";
}

btn_menu.addEventListener("click", () => {
    show(list_menu);
});

cross_menu.addEventListener("click", () => {
    hide(list_menu);
});

// TODO: Zamykanie meny po kliknięciu poza nim
let browser;
if (navigator.userAgent.includes("(KHTML, like Gecko) Chrome")) browser = "Chrome";
if (navigator.userAgent.includes("(KHTML, like Gecko) Version")) browser = "Safari";
if (navigator.userAgent.includes("Firefox")) browser = "Firefox";
if (navigator.userAgent.includes("OPR")) browser = "Opera";
document.querySelector(".main-button").append(browser);
