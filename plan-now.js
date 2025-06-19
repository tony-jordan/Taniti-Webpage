document.addEventListener('DOMContentLoaded', init, false);

async function init() {
    const title_btn = document.querySelector(".title");
    title_btn.addEventListener("click", function() {
        window.location.href = "home.html"
    });
    const lodge_btn = document.querySelector("#lodging_btn");
    lodge_btn.addEventListener("click", function() {
        window.location.href = "lodging-options.html"
    });
    const nature_btn = document.querySelector("#nature_btn");
    nature_btn.addEventListener("click", function() {
        window.location.href = "places-to-go.html"
    });

    const fun_btn = document.querySelector("#fun_btn");
    fun_btn.addEventListener("click", function() {
        window.location.href = "things-to-do.html"
    });
}