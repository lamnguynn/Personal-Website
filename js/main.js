
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

/*
    Email Click
*/
let sendButton = document.querySelector('.contact-button');
let nameForm = document.getElementById("contact-name").value;
let emailForm = document.getElementById("contact-email").value;
let messageForm = document.getElementById("contact-message").value;

sendButton.onclick = () => {
    if(nameForm && emailForm && messageForm){
        window.open('mailto:lam65nguyen@tamu.edu?cc='+emailForm+'&body='+messageForm);
    }
}

/*
    Toggle Theme
*/

let toggleButton = document.getElementById("toggle");
let theme = document.getElementById("theme");

//Error handling. Only load the persistent data whenever it is set
if(localStorage.getItem("mainTheme") != null){
    theme.href = localStorage.getItem("mainTheme");
}

toggleButton.onclick = () => {
    if (theme.href == "file:///Users/lamnguyen/Desktop/Personal%20Website/css/styleAlt.css") {
        theme.href = "file:///Users/lamnguyen/Desktop/Personal%20Website/css/style.css";
    } else {
        theme.href = "file:///Users/lamnguyen/Desktop/Personal%20Website/css/styleAlt.css";
    }

    //Persist the data
    localStorage.setItem("mainTheme", theme.href);
}


/*
    Project Clicks
*/
let allkeys = document.getElementById('allkeys');                               // All Keys
allkeys.onclick = () => {
    window.open("https://apps.apple.com/us/app/all-keys/id1576077213");
}
let allfit = document.getElementById('allfit');                                 // All Fit
allfit.onclick = () => {
    window.open("https://apps.apple.com/us/app/all-fit/id1549462820");
}
let yahPy = document.getElementById('yahPy');                                   // Yahtzee Python
yahPy.onclick = () => {
    window.open("https://github.com/lamnguynn/Python-Yahtzee_Game");
}
let allplanned = document.querySelector('#allplanned');
allplanned.onclick = () => {
    window.open("https://github.com/lamnguynn/All-Planned");
}

