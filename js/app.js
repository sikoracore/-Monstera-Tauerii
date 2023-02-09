(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle"), navClose = document.getElementById("nav-close"), navBody = document.querySelector("body");
    if (navToggle) navToggle.addEventListener("click", (() => {
        navMenu.classList.add("show-menu"), navBody.classList.add("lock");
    }));
    if (navClose) navClose.addEventListener("click", (() => {
        navMenu.classList.remove("show-menu"), navBody.classList.remove("lock");
    }));
    const navLink = document.querySelectorAll(".nav__link");
    const linkAction = () => {
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("show-menu");
    };
    navLink.forEach((n => n.addEventListener("click", linkAction)));
    const scrollHeader = () => {
        const header = document.getElementById("header");
        if (scrollY >= 50) header.classList.add("bg-header"); else header.classList.remove("bg-header");
    };
    window.addEventListener("scroll", scrollHeader);
    const scrollUp = () => {
        const scrollUp = document.getElementById("scroll-up");
        if (scrollY >= 350) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll");
    };
    window.addEventListener("scroll", scrollUp);
    window["FLS"] = true;
    isWebp();
})();