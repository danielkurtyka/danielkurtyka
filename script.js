document.addEventListener("DOMContentLoaded", function () {

var lang = "pl";
var btn = document.getElementById("langToggle");

btn.onclick = function () {

lang = lang === "pl" ? "en" : "pl";
btn.innerText = lang === "pl" ? "EN" : "PL";

var elements = document.querySelectorAll("[data-pl]");

elements.forEach(function(el){

var text = el.getAttribute("data-" + lang);

if(el.tagName === "INPUT" || el.tagName === "TEXTAREA"){
el.placeholder = text;
} else {
el.innerText = text;
}

});

};



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
