document.addEventListener('DOMContentLoaded', init, false);

async function init() {

    var index = 0;

    const locations = [
        "img/locations/hegume_beach.mp4",
        "img/locations/kaelua_shore.mp4",
        "img/locations/mount_tumoko.mp4",
        "img/locations/ravakiri_falls.mp4"

    ];

    const graphic_citations = [
        "WinstonRHA. (n.d.-b). sunset-beach-pismo-beach-palm-trees-129736. pixabay.com. Retrieved June 14, 2025, from https://pixabay.com/videos/sunset-beach-pismo-beach-palm-trees-129736/.",
        "Echeverri, M. (n.d.). bike-beach-biker-mountain-bike-72566. pixabay.com. Retrieved June 14, 2025, from https://pixabay.com/videos/bike-beach-biker-mountain-bike-72566/.",
        "Lukin, A. (n.d.). costa-rica-caribbean-sea-sky-drone-139487. https://pixabay.com/videos/costa-rica-caribbean-sea-sky-drone-139487/. Retrieved June 16, 2025, from https://pixabay.com/videos/costa-rica-caribbean-sea-sky-drone-139487/.",
        "Lam, T. (n.d.). lava-volcano-lava-flow-fire-crater-219834/. https://pixabay.com/videos/lava-volcano-lava-flow-fire-crater-219834/. Retrieved June 17, 2025, from https://pixabay.com/videos/lava-volcano-lava-flow-fire-crater-219834/.",
        "Ronin Studio. (n.d.). waterfall-water-river-nature-37088. https://pixabay.com/videos/waterfall-water-river-nature-37088/. Retrieved June 17, 2025, from https://pixabay.com/videos/waterfall-water-river-nature-37088/."
    ]

    const btn_citations1 = [
        "Popov, A. (n.d.). a-group-of-people-standing-around-in-a-room-9vDdkxSCAD4. https://unsplash.com/photos/a-group-of-people-standing-around-in-a-room-9vDdkxSCAD4. Retrieved June 16, 2025, from https://unsplash.com/photos/a-group-of-people-standing-around-in-a-room-9vDdkxSCAD4.", // dance club
        "Schwarz, D. J. (n.d.). white-concrete-building-under-white-clouds-during-daytime-EhaYSYy3Zdk. https://unsplash.com/photos/white-concrete-building-under-white-clouds-during-daytime-EhaYSYy3Zdk. Retrieved June 16, 2025, from https://unsplash.com/photos/white-concrete-building-under-white-clouds-during-daytime-EhaYSYy3Zdk.", // museum
        "Wennington, J. (n.d.). dish-on-white-ceramic-plate-N_Y88TWmGwA. https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA. Retrieved June 16, 2025, from https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA." // dish
    ]
    const btn_citations2 = [
        "Elliott, T. (n.d.-a). brown-mountain-under-gray-clouds-mBXXP7ns6lM. https://unsplash.com/photos/brown-mountain-under-gray-clouds-mBXXP7ns6lM. Retrieved June 17, 2025, from https://unsplash.com/photos/brown-mountain-under-gray-clouds-mBXXP7ns6lM.",
        "Kettle, J. (n.d.). a-wooden-bridge-in-the-woods-zV4FJUo8MeE. https://unsplash.com/photos/a-wooden-bridge-in-the-woods-zV4FJUo8MeE. Retrieved June 17, 2025, from https://unsplash.com/photos/a-wooden-bridge-in-the-woods-zV4FJUo8MeE.",
        "Santos, B. (n.d.). a-body-of-water-surrounded-by-mountains-and-trees-D8h8lXjVFa4. https://unsplash.com/photos/a-body-of-water-surrounded-by-mountains-and-trees-D8h8lXjVFa4. Retrieved June 17, 2025, from https://unsplash.com/photos/a-body-of-water-surrounded-by-mountains-and-trees-D8h8lXjVFa4."
    ]

    var g_hearts = [document.querySelector("#graphic-fav")];

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

    const lbls = document.querySelectorAll(".img_btn_lbl");
    for (let x = 0; x < lbls.length; x++) {
       lbls[x].style.marginLeft = String(document.querySelector("#dance_heart").getBoundingClientRect().width) + "px";
    }

    const vid_node = document.querySelector("#homevideo");
    vid_node.addEventListener("ended", changeGraphic)
    var videos = [document.querySelector("#homevideo")];

    const graphic_div = document.querySelector("#graphicdiv");

    for(let x = 0; x < locations.length; x++) {
        const temp_vid = document.createElement("video");
        graphic_div.appendChild(temp_vid);
        temp_vid.setAttribute("width", "100%");
        temp_vid.setAttribute("src", locations[x]);
        temp_vid.style.display = "none";
        temp_vid.setAttribute("width", "99%");
        temp_vid.classList.add("h-graphic")
        videos.push(temp_vid);
        const fav = document.createElement("img");
        fav.classList.add("fav")
        fav.setAttribute("src", "img/heart-unfilled.png");
        fav.style.marginRight = "1%";
        fav.style.marginTop = "-1.5%";
        fav.style.display = "none";
        graphic_div.appendChild(fav);
        g_hearts.push(fav);
        temp_vid.addEventListener("ended", function() {
            changeGraphic();    
        });
    }

    // create citation and set event for graphic change
    const citation = document.createElement("p");
    citation.classList.add("citation");
    citation.textContent = graphic_citations[0];
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

    window.addEventListener('resize', updatemargin);

    const img_btns = document.querySelectorAll(".img_btn");
    for (let x = 0; x < 3; x++) {
        img_btns[x].addEventListener("mouseover", function() {
            document.querySelector("#btn_citation1").style.visibility = "visible";
            document.querySelector("#btn_citation1").textContent = btn_citations1[x];
        });
        img_btns[x].addEventListener("mouseleave", function() {
            document.querySelector("#btn_citation1").style.visibility = "hidden";
        });
    }
    for (let x = 3; x < 6; x++) {
        img_btns[x].addEventListener("mouseover", function() {
            document.querySelector("#btn_citation2").style.visibility = "visible";
            document.querySelector("#btn_citation2").textContent = btn_citations2[x - 3];
        });
        img_btns[x].addEventListener("mouseleave", function() {
            document.querySelector("#btn_citation2").style.visibility = "hidden";
        });
    }
    

    function changeGraphic() {
        videos[index].style.display = "none";
        g_hearts[index].style.display = "none";
        index += 1;
        if (index == videos.length) {
            index = 0;
        }
        videos[index].style.display = "block";
        g_hearts[index].style.display = "block";
        videos[index].setAttribute("muted", "muted")
        videos[index].play();
        citation.textContent = graphic_citations[index];
    }

    function updatemargin() {
        const margin = document.querySelector(".plan_text");
        if (window.outerWidth < 543) {
            document.querySelector("#cnr").style.display = "none"
            document.querySelector("#menu_btn").style.float = "none";
        }
        else if (window.outerWidth < 595) {
            document.querySelector("#overview-title").style.fontSize = "600%";
        }
        else if (window.outerWidth < 698) {
            margin.style.display = "none"
        }
        else if (window.outerWidth < 1045) {
            document.querySelector(".overview").style.maxWidth = "100%";
            const txts = document.querySelectorAll("#overview-text");
            for (let x = 0; x < txts.length; x++) {
                txts[x].style.margin = "0% 10%";
                txts[x].style.fontSize = "x-large";
            }
            txts[x].style.margin = "0%";
            txts[x].style.fontSize = "medium"
            const lbls = document.querySelectorAll(".img_btn_lbl");
            for (let x = 0; x < lbls.length; x++) {
                lbls[x].style.fontSize = "xx-small";
            }
        }
        else {
            document.querySelector(".overview").style.maxWidth = "75%"
            const txts = document.querySelectorAll("#overview-text");
            for (let x = 0; x < txts.length; x++) {
                txts[x].style.margin = "0% 10%";
                txts[x].style.fontSize = "x-large";
            }
            margin.style.display = "inline";
            document.querySelector("#overview-title").style.fontSize = "700%";
            document.querySelector("#cnr").style.display = "inline";
            document.querySelector("#menu_btn").style.float = "right";
            const lbls = document.querySelectorAll(".img_btn_lbl");
            for (let x = 0; x < lbls.length; x++) {
                lbls[x].style.fontSize = "small";
            }
        }
    }
}