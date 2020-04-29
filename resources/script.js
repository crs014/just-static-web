/*
* @description : navbar responsive script
*/
const icon = document.getElementById("nav-button");
const navicon = document.getElementById("nav-icon");
const aside = document.getElementsByTagName("aside");

icon.addEventListener("click", (e) => {
    if(navicon.className === "ion-navicon-round") {
        navicon.className="ion-close-round";
        aside[0].className="animated slideInLeft";
        aside[0].style.display ='block';  
    }
    else {
        aside[0].className="animated slideOutLeft";
        navicon.className="ion-navicon-round";
    }  
    });

    window.addEventListener('resize', function () {
    if(window.innerWidth >= 768) {
        aside[0].className = "animated slideInLeft";
    }
    else if (window.innerWidth <= 767) {
        navicon.className = "ion-navicon-round"
        aside[0].className ="animated slideOutLeft";
    }
});


/*
* @description : modal or popup script method
*/
let buttonCollection = Array.prototype.slice.call(document.querySelectorAll("*[target-modal-id]"));   
buttonCollection.forEach(button => {
    let dataTargetId = button.getAttribute("target-modal-id");
    let modal = document.getElementById(dataTargetId);
    let closeButtons = Array.prototype.slice.call(modal.getElementsByClassName("modal-close"));

    button.onclick = function() {
        modal.style.display = "block";
    }
    
    closeButtons.forEach(btnClose => {
        btnClose.onclick = function() {
            modal.style.display = "none";
        }
    });
});
