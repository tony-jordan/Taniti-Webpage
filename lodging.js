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

    const plan_btn = document.querySelector("#plan-now");
    plan_btn.addEventListener("click", function() {
        window.location.href = "plan-now.html";
    });

    const graphic1 = document.querySelector(".h-graphic");
    graphic1.addEventListener("click", function() {
        window.location.href = "lodging-options.html#Te-Moari-Retreat"
    })

    const navbar = document.querySelector(".navbar");
    const graphic_div = document.querySelector("#graphicdiv");

    const placeholder = document.querySelector("#placeholder");
    placeholder.style.height = String(document.querySelector(".head").clientHeight) + "px";

    graphic_div.style.marginTop = String(0 - (document.querySelector(".head").clientHeight + navbar.clientHeight)) + "px";
    document.querySelector(".head").top = String(0-.5) + "%";
    
    // create citation and set event for graphic change
    const citation = document.createElement("p");
    citation.classList.add("citation");
    citation.textContent = "Dubler, S. (2018). photo-of-brown-bench-near-swimming-pool-Koei_7yYtIo. https://unsplash.com/photos/photo-of-brown-bench-near-swimming-pool-Koei_7yYtIo. Retrieved June 17, 2025, from https://unsplash.com/photos/photo-of-brown-bench-near-swimming-pool-Koei_7yYtIo.";
    graphic_div.appendChild(citation);

    const hearts = document.querySelectorAll(".fav");
    for (let x = 0; x < hearts.length; x++) {
        hearts[x].addEventListener("click", function() {
            if (hearts[x].getAttribute("src") == "img/heart-unfilled.png") {
                hearts[x].setAttribute("src", "img/heart-filled.png");
            }
            else {
                hearts[x].setAttribute("src", "img/heart-unfilled.png");
            }
        })
    }
}
