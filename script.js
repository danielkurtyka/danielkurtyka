document.addEventListener("DOMContentLoaded", () => {

let lang = "pl";

const langBtn = document.getElementById("langToggle");

langBtn.addEventListener("click", () => {

lang = lang === "pl" ? "en" : "pl";

langBtn.textContent = lang === "pl" ? "EN" : "PL";

document.querySelectorAll("[data-pl]").forEach(el => {

const text = el.getAttribute("data-" + lang);

if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
el.placeholder = text;
} else {
el.innerText = text;
}

});

});

function reveal() {

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(section => {

const windowHeight = window.innerHeight;
const elementTop = section.getBoundingClientRect().top;
const visible = 120;

if (elementTop < windowHeight - visible) {
section.classList.add("active");
}

});

}

window.addEventListener("scroll", reveal);

reveal();

});

const menuBtn = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
nav.classList.toggle("active");
});

// zamykanie menu po kliknięciu linku (mobile)
document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", () => {
nav.classList.remove("active");
});
});

const menuBtn = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
nav.classList.toggle("active");
});

// zamykanie po kliknięciu
document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", () => {
nav.classList.remove("active");
});
});
