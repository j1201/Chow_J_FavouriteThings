import {getData} from "./modules/dataMiner.js";

(() => {
    let theTemplate = document.querySelector("#fav-template").content,
        theThing = document.querySelector(".fav-section"),
        btnContainer = document.querySelectorAll(".things"), // list of three items
        arrow = document.querySelectorAll(".arrow"),
        buttonClicked; // get target button
    
    // add green sock library to create ease-in-out animation for text content
    const timeline = gsap.timeline({ default: { duration: 1}});

    timeline
        .from('.title', { opacity: 0, y: "50%", ease: "power1.out" })
        .from('.things', { opacity: 0, y: "50%", ease: "power1.out", stagger: .5 })

    // set arrow direction
    gsap.to(arrow,{rotation: -45, transformOrigin:"center"} )

    // rotate arrow direction with GS library
    function arrowRotate () { gsap.to(this.lastElementChild.childNodes[1],{rotation: 0, transformOrigin:"center"} )}

    // arrow return to starting rotation setting
    function arrowReturn() { gsap.to(arrow,{rotation: -45, transformOrigin:"center"} )}

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

    // animate arrow rotation with mouseover event
    btnContainer.forEach(arrowEl => {
        arrowEl.addEventListener('mouseover', (arrowRotate))
        arrowEl.addEventListener("mouseleave", (arrowReturn))
    })

    // get data with click event
    btnContainer.forEach(addEventListener("click", retrieveThing));// add click event to each button
})();