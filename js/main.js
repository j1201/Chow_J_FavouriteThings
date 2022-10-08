import {getData} from "./modules/dataMiner.js";

(() => {
    let theTemplate = document.querySelector("#fav-template").content,
        theThing = document.querySelector(".fav-section"),
        btnContainer = document.querySelector("#things");

    function retrieveThing (things) {
        getData("./data.json", changeCopy);

        
    }

    btnContainer.addEventListener("click", retrieveThing);

    function changeCopy(things) {
        let theThings = Object.keys(things);

        

        theThings.forEach(thing => {

            function findId(theThings, idToLookFor) {
                var dataArray = theThings[thing];
                for (var i = 0; i < dataArray.length; i++) {
                    if (dataArray[i].id == idToLookFor) {
                        return(dataArray[i].name);
                    }
                }
            }

            findId (theThings, 1)

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