window.addEventListener('load', (body) => {
    console.log("Page Loaded");
});

// change Nav style on scall

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});

// Contact Buttons (circular text buttons)
const textButtons = document.querySelectorAll('.contact-btn, .about-btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style
    ="transform: rotate(${index * 17}deg)">${character}</span>`).join('')
});

// SWIMPER JS (gallery section)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2800,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 50
        },

        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 4,
            spaceBetween: 30
        }
        
    },  effect: 'coverflow',
  coverflowEffect: {
    rotate: 25,
    slideShadows: false,
  }
    
});


// Hamburger menu btn

// Open Nav bar
window.addEventListener("load", function () {
    const nav = document.querySelector('.btn-links');
    const openNavBtn = document.querySelector('#nav-toggle-open');
    const closeNavBtn = document.querySelector('#nav-toggle-close');



    const openNav = () => {
        nav.style.display = 'flex';
        openNavBtn.style.display = 'none';
        closeNavBtn.style.display = 'inline-block';
    }
    openNavBtn.addEventListener('click', openNav);


    // Close Nav bar

    const closeNav = () => {
        nav.style.display = 'none';
        openNavBtn.style.display = 'inline-block';
        closeNavBtn.style.display = 'none';
    }
    closeNavBtn.addEventListener('click', closeNav);
    
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    });
});




// For Image Zoom and Out

const images = document.querySelectorAll(".exibitions-gallery img");
let imgIndex;
let imgSrc;

// get images src onclick
images.forEach((img, i) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        //run modal function
        imgModal(imgSrc);
        //index of the next image
        imgIndex = i;
    });
});

//creating the modal

let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add modal to the parent element 
    document.querySelector("#gallery").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };

    //next and previous buttons
    const nextBtn = document.createElement("i");
    nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");
    // change the src of current image to the src of next image
    nextBtn.onclick = () => {
        newImage.setAttribute("src", nextImg())
    };
    const prevBtn = document.createElement("i");
    prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");
    // change the src of current image to the src of pevious image
    prevBtn.onclick = () => {
        newImage.setAttribute("src", prevImg())
    }
    modal.append(newImage, closeBtn, nextBtn, prevBtn);
};

//next image function

let nextImg = () => {
    imgIndex++;
    //check if it is the the last image
    if (imgIndex >= images.length) {
        imgIndex = 0
    }
    //return src of the new image
    return images[imgIndex].src;
};

//previous image function

let prevImg = () => {
    imgIndex--;
    console.log(imgIndex);
    //check if it is the first image
    if (imgIndex < 0) {
        imgIndex = images.length - 1
    }
    //return src of previous image
    return images[imgIndex].src
}