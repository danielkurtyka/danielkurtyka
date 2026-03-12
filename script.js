```javascript
document.addEventListener("DOMContentLoaded", function () {

let currentLang = "pl";

const langToggle = document.getElementById("langToggle");

langToggle.addEventListener("click", function () {

currentLang = currentLang === "pl" ? "en" : "pl";

langToggle.textContent = currentLang === "pl" ? "EN" : "PL";

document.querySelectorAll("[data-pl]").forEach(el => {

el.textContent = el.getAttribute("data-" + currentLang);

});

});



function revealSections() {

let reveals = document.querySelectorAll(".reveal");

for (let i = 0; i < reveals.length; i++) {

let windowHeight = window.innerHeight;

let elementTop = reveals[i].getBoundingClientRect().top;

let elementVisible = 120;

if (elementTop < windowHeight - elementVisible) {

reveals[i].classList.add("active");

}

}

}



window.addEventListener("scroll", revealSections);

revealSections();

});
```


