/* 
    start Navbar
*/

let btnToggler = document.querySelector(".btn-toggler");
let btnClose = document.querySelector(".btn-close");
let sideNav = document.querySelector(".side-nav");
let lis = document.querySelectorAll(".side-nav li");
let navItem = Array.from(document.querySelectorAll(".navbar li a"));

// Function: show Navbar (element)
function showNavbar(ele) {
    ele.classList.add("show");
}

// Function: close Navbar (element)
function closeNavbar(ele) {
    ele.classList.remove("show");
    btnToggler.style.display = "block";
}

// Handle Click: showNavbar
btnToggler.addEventListener("click", () => {
    showNavbar(sideNav);
    btnToggler.style.display = "none";
});

// Handle Click: closeNavbar
btnClose.addEventListener("click", () => closeNavbar(sideNav));

lis.forEach((li) => {
    li.addEventListener("click", () => closeNavbar(sideNav));
});

// Handle KeyDown: closeNavbar
document.addEventListener("keydown", (e) => {
    e.keyCode == 27 && closeNavbar(sideNav);
});

// add active class to navbar
navItem.forEach((item) => {
    // add and remove class Active
    activeClass(item, navItem);
});

/* 
    start tabs
*/

let tabs = document.querySelectorAll(".tabs li");
console.log(tabs);
tabs.forEach((li) => {
    activeClass(li, tabs);
    li.addEventListener("click", (e) => {
        document.querySelectorAll(".col-sm-6").forEach((ele) => {
            ele.classList.add("hide");
        });
        console.log(e.target.dataset);
        if (e.target.dataset.tab !== "all") {
            document
                .querySelectorAll(`.${e.target.dataset.tab}`)
                .forEach((ele) => {
                    ele.classList.remove("hide");
                    ele.classList.add("show");
                });
        } else {
            document.querySelectorAll(`.col-sm-6`).forEach((ele) => {
                ele.classList.remove("hide");
                ele.classList.add("show");
            });
        }
    });
});

// Function: add and remove class Active (element to add class, elements to remove class)
function activeClass(element, elements) {
    element.addEventListener("click", (e) => {
        elements.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.target.classList.add("active");
    });
}

/* slider */

let nextBtn = document.querySelector(".next-btn");
let pervBtn = document.querySelector(".perv-btn");

let sectionSlide = document.querySelectorAll(".client .col-md-6");
let slide = 0;

nextBtn.addEventListener("click", () => {
    if (slide >= sectionSlide.length - 1) {
        slide = 0;
    } else {
        slide++;
    }
    sectionSlide.forEach((ele) => {
        ele.style.transition = "0.8s";
        ele.style.transform = ` translateX(-${ele.clientWidth * slide}px)`;
        console.log(ele.clientWidth);
    });
});
pervBtn.addEventListener("click", () => {
    if (slide == 0) {
        slide = sectionSlide.length - 1;
    } else {
        slide--;
    }
    sectionSlide.forEach((ele) => {
        ele.style.transition = "0.8s";
        ele.style.transform = ` translateX(-${ele.clientWidth * slide}px)`;
        console.log(ele.clientWidth);
    });
});


/* counter */
let counterSection = document.querySelector("#counter");
let nums = document.querySelectorAll(".num");
let speed = 100;

function count() {
        nums.forEach(num => {
            function updateCount() {
                let score = +num.innerHTML;
                let target = parseInt(num.dataset.count);
        
                if (score < target) {
                    num.innerHTML = Math.round(score + (target / speed) )
                    setTimeout(updateCount, 100)
                } else {
                    num.innerHTML = target
                }
            } 
            updateCount()
        });
    
}

let started = false;

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (window.scrollY >= counterSection.offsetTop - 200) {
        console.log("yes");
        if (!started) {
            count();
        }
        started = true
    }
});
