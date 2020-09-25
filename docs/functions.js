
const loadBanner = () => {
    document.getElementById('bannerHeight').style.opacity = '1';
    document.querySelector('nav').style.opacity = '1';
}

let burgerToggle = false;
const burgerAnim = () => {
    burgerToggle = !burgerToggle;
    const burger1 = document.getElementById('burger1');
    const burger2 = document.getElementById('burger2');
    const burger3 = document.getElementById('burger3');
    const menuDropdown = document.getElementById('menu-dropdown');
    
    if(burgerToggle) {
        burger1.style.transform = 'rotateZ(45deg)';
        burger2.style.right = '35px';
        burger3.style.transform = 'rotateZ(-45deg)';
        burger1.style.top = '7px';
        burger3.style.bottom = '7px';

        menuDropdown.style.transform = 'translateY(0%)';

    } else {
        burger1.style.transform = 'rotateZ(0deg)';
        burger2.style.right = '0px';
        burger3.style.transform = 'rotateZ(0deg)';
        burger1.style.top = '0';
        burger3.style.bottom = '0';

        menuDropdown.style.transform = 'translateY(-100%)';
    }
}

let scrollY = window.scrollY;
const navBarTransform = () => {
    if(window.scrollY > scrollY && !burgerToggle)  {
        document.querySelector('nav').style.transform = 'translateY(-45px)';
    
    } else if(window.scrollY <= scrollY) {
        document.querySelector('nav').style.transform = 'translateY(0px)';
    }
    scrollY = window.scrollY;
}

window.addEventListener('scroll', function() {
    navBarTransform();
});

let slideIndex = 0;
const slideClicked = (value) => {
    slideIndex = value;
    clearTimeout(sliderTimer);
    showSlides();
}
let sliderTimer = null;
const sliderArrowRight = () => {
    clearTimeout(sliderTimer);
    showSlides();
}
const sliderArrowLeft = () => {
    slideIndex -= 2;
    clearTimeout(sliderTimer);
    showSlides();
}
const showSlides = () => {
    const slides = document.getElementsByClassName("mySlides");
    const slideDots = document.getElementsByClassName("slideshow-circle");
    if(slideIndex >= slides.length) {
        slideIndex = 0;
    } else if(slideIndex < 0) {
        slideIndex = slides.length -1;
    }
    for(let i = 0; i < slides.length; i++) {
        if(slides[slideIndex] != slides[i]) {
            slides[i].style.opacity = "0";
            slideDots[i].style.backgroundColor = "transparent";
        }
    }
    slides[slideIndex].style.opacity = "1";
    slideDots[slideIndex].style.backgroundColor = "rgb(230, 230, 230)";
    slideIndex++;
    sliderTimer = setTimeout(showSlides, 8000);
}

window.onload = function() {
    loadBanner();
    navBarTransform();
    showSlides();
};