
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

let sound = document.querySelector('#sound-surfers');
sound.onclick = () => {
    window.open("https://github.com/AlexanderHallCS/Sound-Surfers");
}

/* 
    Toggle Theme
*/
let toggleButton = document.getElementById("toggle");

toggleButton.onclick = () => {
    //Check which color to swap to
    var background, banner;
    if(window.getComputedStyle(document.documentElement).getPropertyValue('--background') == '#49789C'){
        background = '#376384';
        banner = '#49789C';
    }
    else{
        background = '#49789C';
        banner = '#376384';
    }

    //Set the color
    document.documentElement.style.setProperty('--background', background)
    document.documentElement.style.setProperty('--bannerColor', banner)

    //Persist the data
    localStorage.setItem("background", background);
    localStorage.setItem("banner", banner);
}

window.onload = function(){
    let loadedBackground = localStorage.getItem("background");
    let loadedBanner = localStorage.getItem("banner");
    document.documentElement.style.setProperty('--background', loadedBackground);
    document.documentElement.style.setProperty('--bannerColor', loadedBanner);
}


/*
    Project Easy Navigation
    This can also be done inline on the HTML files, but I decided to use JS to get practice integrating JS with HTML.
*/

function currentSlide(n) {
    if(n == 2){
        document.getElementById('cocoapod').scrollIntoView();
    }
    else if(n == 3){
        document.getElementById('allfit').scrollIntoView();
    }
    else if(n == 4){
        document.getElementById('sound-surfers').scrollIntoView();
    }
    else if(n == 5){
        document.getElementById('allplanned').scrollIntoView();
    }
    else if(n == 6){
        document.getElementById('yah').scrollIntoView();
    }
    else if(n == 7){
        document.getElementById('zoom-launch').scrollIntoView();
    }
}
