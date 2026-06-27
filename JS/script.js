/* ==========================
   MOBILE MENU
========================== */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        navMenu.classList.toggle("active");

    });

}

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        if (hamburger) {

            hamburger.classList.remove("active");

        }

        if (navMenu) {

            navMenu.classList.remove("active");

        }

    });

});

/* ==========================
   NAVBAR SCROLL
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    }

    else {

        navbar.classList.remove("scrolled");

    }

});

/* ==========================
   SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.15

});

document.querySelectorAll(

".project-card,.skill-card,.experience-card,.education-card,.soft-card,.why-card"

).forEach(el=>{

    observer.observe(el);

});

/* ==========================
   ACTIVE NAVIGATION
========================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-menu a").forEach(link=>{

    const href = link.getAttribute("href");

    if(href===currentPage){

        link.classList.add("active");

    }

});

/* ==========================
   TYPING EFFECT
========================== */

const typing = document.querySelector(".subtitle");

if(typing){

const words=[

"Frontend Developer",

"React Developer",

"Next.js Developer",

"Business Development Executive"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function typeEffect(){

const currentWord=words[wordIndex];

if(!deleting){

typing.textContent=currentWord.substring(0,charIndex++);

if(charIndex>currentWord.length){

deleting=true;

setTimeout(typeEffect,1500);

return;

}

}

else{

typing.textContent=currentWord.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typeEffect,deleting?50:100);

}

typeEffect();

}

/* ==========================
   BACK TO TOP
========================== */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.classList.add("show-top");

}

else{

topButton.classList.remove("show-top");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================
   CONTACT FORM
========================== */

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been sent.");

form.reset();

});

}

/* ==========================
   COPYRIGHT YEAR
========================== */

const year=document.querySelector(".copyright-year");

if(year){

year.textContent=new Date().getFullYear();

}