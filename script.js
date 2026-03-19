document.addEventListener("DOMContentLoaded", function () {

var lang = "pl";

var langBtn = document.getElementById("langToggle");
var menuBtn = document.getElementById("menuToggle");
var nav = document.querySelector("nav");

/* LANGUAGE */

langBtn.addEventListener("click", function () {

lang = lang === "pl" ? "en" : "pl";

langBtn.innerText = lang === "pl" ? "EN" : "PL";

var elements = document.querySelectorAll("[data-pl]");

elements.forEach(function(el){

var text = el.getAttribute("data-" + lang);

if(el.tagName === "INPUT" || el.tagName === "TEXTAREA"){
el.placeholder = text;
} else {
el.innerText = text;
}

});

});


/* MENU */

menuBtn.addEventListener("click", function () {
nav.classList.toggle("active");
});

var links = document.querySelectorAll("nav a");

links.forEach(function(link){
link.addEventListener("click", function(){
nav.classList.remove("active");
});
});


/* SCROLL ANIMATION */

function reveal(){

var reveals = document.querySelectorAll(".reveal");

reveals.forEach(function(section){

var windowHeight = window.innerHeight;
var elementTop = section.getBoundingClientRect().top;

if(elementTop < windowHeight - 120){
section.classList.add("active");
}

});

}

window.addEventListener("scroll", reveal);

reveal();

});
```
