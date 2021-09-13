
/* 
    Menu Click
*/
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

//When the menu is clicked, we will toggle the navbar to show via active and change the menu icon
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//When the page is scrolling, hide the navbar and change the menu icon
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let allkeys = document.querySelector('#allpass');
allkeys.onclick = () => {
    window.open("https://apps.apple.com/us/app/all-keys/id1576077213");
}

let allfits = document.querySelector('#allfit');
allfits.onclick = () => {
    window.open("https://apps.apple.com/us/app/all-fit/id1549462820");
}

let cocoapod = document.querySelector('#cocoapod');
cocoapod.onclick = () => {
    window.open("https://cocoapods.org/pods/HalfModalViewController");
}

let allplanned = document.querySelector('#allplanned');
allplanned.onclick = () => {
    window.open("https://github.com/lamnguynn/All-Planned");
}

let yah = document.querySelector('#yah');
yah.onclick = () => {
    window.open("https://github.com/lamnguynn/Python-Yahtzee_Game");
}


let zoom = document.querySelector('#zoom-launch');
zoom.onclick = () => {
    window.open("https://github.com/lamnguynn/HTML-Zoom_Launcher_Chrome_Extension");
}

/* 
    Toggle Theme
*/
let toggleButton = document.getElementById("toggle");
let theme = document.getElementById("theme");

//Error handling. Only load the persistent data whenever it is set
if(localStorage.getItem("portTheme") != null){
    theme.href = localStorage.getItem("portTheme");
}

toggleButton.onclick = () => {
    if (theme.href == "file:///Users/lamnguyen/Desktop/Personal%20Website/css/portfolioAlt.css") {
        theme.href = "file:///Users/lamnguyen/Desktop/Personal%20Website/css/portfolioStyle.css";
    } else {
        theme.href = "file:///Users/lamnguyen/Desktop/Personal%20Website/css/portfolioAlt.css";
    }

    //Persist the data
    localStorage.setItem("portTheme", theme.href);
}


/*
    Project Easy Navigation
    This can also be done inline on the HTML files, but I decided to use JS to get practice integrating JS with HTML.
*/

function currentSlide(n) {
    if(n == 2){
        document.getElementById('allfit').scrollIntoView();
    }
    else if(n == 3){
        document.getElementById('allplanned').scrollIntoView();
    }
    else if(n == 4){
        document.getElementById('cocoapod').scrollIntoView();
    }
    else if(n == 5){
        document.getElementById('yah').scrollIntoView();
    }
    else if(n == 6){
        document.getElementById('zoom-launch').scrollIntoView();
    }
}