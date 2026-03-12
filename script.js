```javascript
let currentLang = "pl";

document.getElementById("langToggle").addEventListener("click", function() {

currentLang = currentLang === "pl" ? "en" : "pl";

this.textContent = currentLang === "pl" ? "EN" : "PL";

document.querySelectorAll("[data-pl]").forEach(el => {

el.textContent = el.getAttribute("data-" + currentLang);

});

});


window.addEventListener("scroll", function() {

let reveals = document.querySelectorAll(".reveal");

for (let i = 0; i < reveals.length; i++) {

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if (elementTop < windowHeight - elementVisible) {
reveals[i].classList.add("active");
}

}

});
```
window.dispatchEvent(new Event('scroll'));
