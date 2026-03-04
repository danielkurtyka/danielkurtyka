let currentLang = "pl";

document.getElementById("langToggle").addEventListener("click", function() {
    currentLang = currentLang === "pl" ? "en" : "pl";
    this.textContent = currentLang === "pl" ? "EN" : "PL";

    document.querySelectorAll("[data-pl]").forEach(el => {
        el.textContent = el.getAttribute("data-" + currentLang);
    });
});