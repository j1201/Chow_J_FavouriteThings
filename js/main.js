import {getData} from "./modules/dataMiner.js";

(() => {
    let theTemplate = document.querySelector("#fav-template").content,
        theThing = document.querySelector(".fav-section"),
        btnContainer = document.querySelector("#things");

    const textBtn = document.querySelectorAll("#things");

        function retrieveContent() {
            // get dataset number
            console.log(this.dataset.offset);


        }

    textBtn.forEach(textBtn => textBtn.addEventListener("click", retrieveContent));



    function retrieveThing (things) {
        getData("./data.json", changeCopy);
    }

    btnContainer.addEventListener("click", retrieveThing);

    function changeCopy(things) {
        let theThings = Object.keys(things);

        theThings.forEach(thing => {

        let panel = theTemplate.cloneNode(true),
            containers = panel.firstElementChild.children;
                
            containers[0].textContent = things[thing].name;
            containers[1].querySelector('img').src = `images/${things[thing].pic}`;    
            containers[2].textContent = things[thing].desc;
            containers[3].querySelector('a').textContent = things[thing].linkText;
            containers[3].querySelector('a').href = things[thing].link;

            theThing.appendChild(panel);

        })
    }



    
})();