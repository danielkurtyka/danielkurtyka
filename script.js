document.addEventListener("DOMContentLoaded", function () {

let currentLang = "pl";

const toggle = document.getElementById("langToggle");

toggle.addEventListener("click", function () {

currentLang = currentLang === "pl" ? "en" : "pl";

toggle.textContent = currentLang === "pl" ? "EN" : "PL";

document.querySelectorAll("[data-pl]").forEach(el => {

if(currentLang === "pl"){
el.textContent = el.dataset.pl;
} else {
el.textContent = el.dataset.en;
}

});

});

});
```

