document.addEventListener('DOMContentLoaded', init, false);

async function init() {

    var index = 0;

    const locations = [
        "img/locations/hegume_beach.mp4",
        "img/locations/kaelua_shore.mp4"
    ];

    const graphic_citations = [
        "WinstonRHA. (n.d.-b). sunset-beach-pismo-beach-palm-trees-129736. pixabay.com. Retrieved June 14, 2025, from https://pixabay.com/videos/sunset-beach-pismo-beach-palm-trees-129736/.",
        "Echeverri, M. (n.d.). bike-beach-biker-mountain-bike-72566. pixabay.com. Retrieved June 14, 2025, from https://pixabay.com/videos/bike-beach-biker-mountain-bike-72566/.",
        "Lukin, A. (n.d.). costa-rica-caribbean-sea-sky-drone-139487. https://pixabay.com/videos/costa-rica-caribbean-sea-sky-drone-139487/. Retrieved June 16, 2025, from https://pixabay.com/videos/costa-rica-caribbean-sea-sky-drone-139487/. "
    ]

    const btn_citations = [
        "Szeglat, M. (n.d.). photo-of-lava-flowing-on-land-Aduh0KXCI1w. Retrieved 16AD, from https://unsplash.com/photos/photo-of-lava-flowing-on-land-Aduh0KXCI1w.", // lava dripping
        "Popov, A. (n.d.). a-group-of-people-standing-around-in-a-room-9vDdkxSCAD4. https://unsplash.com/photos/a-group-of-people-standing-around-in-a-room-9vDdkxSCAD4. Retrieved June 16, 2025, from https://unsplash.com/photos/a-group-of-people-standing-around-in-a-room-9vDdkxSCAD4. ", // dance club
        "Ganzhyi, N. (n.d.). a-man-riding-a-zip-line-through-a-forest-LGeVDlR8oUk. https://unsplash.com/photos/a-man-riding-a-zip-line-through-a-forest-LGeVDlR8oUk. Retrieved June 16, 2025, from https://unsplash.com/photos/a-man-riding-a-zip-line-through-a-forest-LGeVDlR8oUk.", // zip line
        "Schwarz, D. J. (n.d.). white-concrete-building-under-white-clouds-during-daytime-EhaYSYy3Zdk. https://unsplash.com/photos/white-concrete-building-under-white-clouds-during-daytime-EhaYSYy3Zdk. Retrieved June 16, 2025, from https://unsplash.com/photos/white-concrete-building-under-white-clouds-during-daytime-EhaYSYy3Zdk.", // museum
        "Wennington, J. (n.d.). dish-on-white-ceramic-plate-N_Y88TWmGwA. https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA. Retrieved June 16, 2025, from https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA." // dish
    ]

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
        temp_vid.addEventListener("ended", changeGraphic)
        temp_vid.setAttribute("width", "99%");
        temp_vid.classList.add("h-graphic")
        videos.push(temp_vid);
    }
    // create citation and set event for graphic change
    const citation = document.createElement("p");
    citation.classList.add("citation");
    citation.textContent = graphic_citations[0];
    graphic_div.appendChild(citation);

    window.addEventListener('resize', updatemargin);

    function changeGraphic() {
        videos[index].style.display = "none";
        index += 1;
        if (index == videos.length) {
            index = 0;
        }
        videos[index].style.display = "block";
        videos[index].setAttribute("muted", "muted")
        videos[index].play();
        citation.textContent = graphic_citations[index];
    }

    function updatemargin() {
        console.log(window.outerWidth)
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
        }
    }
}