```javascript
document.addEventListener("DOMContentLoaded", function () {

let currentLang = "pl";

const toggle = document.getElementById("langToggle");

toggle.addEventListener("click", function () {

currentLang = currentLang === "pl" ? "en" : "pl";

toggle.textContent = currentLang === "pl" ? "EN" : "PL";

document.querySelectorAll("[data-pl]").forEach(el => {

if (el.placeholder !== undefined && el.tagName === "INPUT" || el.tagName === "TEXTAREA") {

el.placeholder = currentLang === "pl" ? el.dataset.pl : el.dataset.en;

} else {

el.textContent = currentLang === "pl" ? el.dataset.pl : el.dataset.en;

}

});

});

});
```



