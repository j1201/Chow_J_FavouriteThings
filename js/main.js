import {getData} from "./modules/dataMiner.js";

(() => {
    let theTemplate = document.querySelector("#fav-template").content,
        theThing = document.querySelector(".fav-section"),
        btnContainer = document.querySelectorAll(".things"), // list of three items
        buttonClicked; // get target button
    
    // add green sock library to create ease-in-out animation
    const timeline = gsap.timeline({ default: { duration: 1}});

    timeline
    .from('.title', { opacity: 0, y: "50%", ease: "power1.out" })
    .from('.things', { opacity: 0, y: "50%", ease: "power1.out", stagger: .5 })

    // retrieve content from different item
    function retrieveThing (event) {
        getData("./data.json", changeCopy);
        
        // get target id name, to be used to match with the object key in the next function
        console.log("target id:", event.target.parentElement.id); 
        buttonClicked = event.target.parentElement.id;
    }

    function changeCopy(items) {

        let panel = theTemplate.cloneNode(true),
        containers = panel.firstElementChild.children;
        
        // buttonClicked = the section id name = object key
        // it will retrieve the relevant data and put them into the matching container
        containers[0].textContent = items[buttonClicked].name;
        containers[1].querySelector('img').src = `images/${items[buttonClicked].pic}`;    
        containers[2].textContent = items[buttonClicked].desc;
        containers[3].querySelector('a').textContent = items[buttonClicked].linkText;
        containers[3].querySelector('a').href = items[buttonClicked].link;

        theThing.innerHTML = "";
        theThing.appendChild(panel);

        gsap.from('.fade-in', { opacity: 0, x: "-50%", ease: "power1.out", stagger: .4 })

    }

   

    
    btnContainer.forEach(addEventListener("click", retrieveThing));// add click event to each button
})();