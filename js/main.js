import {getData} from "./modules/dataMiner.js";

(() => {
    let theTemplate = document.querySelector("#fav-template").content,
        theThing = document.querySelector(".fav-section"),
        btnContainer = document.querySelectorAll(".things"), // list of three items
        buttonClicked; // get target button

    btnContainer.forEach(addEventListener("click", retrieveThing));// add click event to each button

    // retrieve content from different item
    function retrieveThing (event) {
        getData("./data.json", changeCopy);
        
        // get target id name
        console.log("target id:", event.target.parentElement.id); 
        buttonClicked = event.target.parentElement.id;
    }

    function changeCopy(items) {

        let panel = theTemplate.cloneNode(true),
        containers = panel.firstElementChild.children;
            
        containers[0].textContent = items[buttonClicked].name;
        containers[1].querySelector('img').src = `images/${items[buttonClicked].pic}`;    
        containers[2].textContent = items[buttonClicked].desc;
        containers[3].querySelector('a').textContent = items[buttonClicked].linkText;
        containers[3].querySelector('a').href = items[buttonClicked].link;

        theThing.innerHTML = "";
        theThing.appendChild(panel);

    }
    
})();