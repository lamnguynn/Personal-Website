
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
    Image Slideshow
*/

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.slideshow').children;
const totalImages = images.length;
console.log(totalImages);
let imageIndex = 0;

prev.onclick = () => { 
    nextImage('prev');
}
next.onclick = () => {
    nextImage('next');
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

function nextImage(direction){

    //Check which direction it is and proceed approprtiately
    if(direction == 'next') {
        imageIndex++;
        if(imageIndex == totalImages) {
            imageIndex = 0;
        }
    } else {
        if(imageIndex == 0) {
            imageIndex = totalImages - 1;
        } else {
            imageIndex--;
        }
    }

    //Pop off and add
    for(let i = 0; i < images.length; i++) {
        images[i].classList.remove('main');
    }
    images[imageIndex].classList.add('main');
}