alert("JavaScript działa!");
document.addEventListener("DOMContentLoaded", () => {

let lang = "pl";

const btn = document.getElementById("langToggle");

btn.addEventListener("click", () => {

lang = lang === "pl" ? "en" : "pl";

btn.textContent = lang === "pl" ? "EN" : "PL";

document.querySelectorAll("[data-pl]").forEach(el => {

const text = el.getAttribute("data-" + lang);

if(el.tagName === "INPUT" || el.tagName === "TEXTAREA"){
el.placeholder = text;
} else {
el.innerText = text;
}

});

});

});
```

