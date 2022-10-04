import {getData} from "./modules/dataMiner.js";

(() => {
    let theTemplate = document.querySelector("#fav-template").content,
        theShow = document.querySelector(".fav-section");

    function changeCopy(shows) {
        let theShows = Object.keys(shows);

        theShows.forEach(show => {

            let panel = theTemplate.cloneNode(true),
                containers = panel.firstElementChild.children;

            containers[0].querySelector('img').src = `images/${shows[show].pic}`;
            containers[1].textContent = shows[show].name;
            containers[2].textContent = shows[show].creator;
            containers[3].textContent = shows[show].cast;
            containers[4].textContent = shows[show].desc;

            theShow.appendChild(panel);

        })
    }

    getData("./data.json", changeCopy);
})();