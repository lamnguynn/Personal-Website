 
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
    Toggle Theme
*/
let toggleButton = document.getElementById("toggle");
let theme = document.getElementById("theme");

//Error handling. Only load the persistent data whenever it is set
if(localStorage.getItem("profTheme") != null){
    theme.href = localStorage.getItem("profTheme");
}

toggleButton.onclick = () => {
    if (theme.href == "file:///Users/lamnguyen/Desktop/Personal%20Website/css/professionalAlt.css") {
        theme.href = "file:///Users/lamnguyen/Desktop/Personal%20Website/css/professional.css";
    } else {
        theme.href = "file:///Users/lamnguyen/Desktop/Personal%20Website/css/professionalAlt.css";
    }

    //Persist the data
    localStorage.setItem("profTheme", theme.href);
}
