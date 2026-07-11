/* ==========================================
        SMYM POONJAR WEBSITE
              script.js
========================================== */

// Mobile Menu

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

// Close menu after clicking a link

const links = document.querySelectorAll("#menu a");

links.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

// Navbar background on scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#0D47A1";

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.25)";

    }

    else{

        header.style.background="rgba(13,71,161,.95)";

        header.style.boxShadow="none";

    }

});

// Smooth Button Hover

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

// Scroll Reveal

const revealElements=document.querySelectorAll(

".card,.activity,.glass-card,.stat,.media-card"

);

const reveal=()=>{

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

const visible=window.innerHeight-120;

if(top<visible){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

};

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();


// Active Navigation

const current=window.location.pathname.split("/").pop();

document.querySelectorAll("#menu a").forEach(link=>{

if(link.getAttribute("href")==current){

link.style.color="#FFD54F";

}

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.bottom="30px";

topBtn.style.right="30px";

topBtn.style.width="50px";

topBtn.style.height="50px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#FFD54F";

topBtn.style.color="#000";

topBtn.style.fontSize="22px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Gallery Image Popup

const galleryImages=document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";

popup.style.top="0";

popup.style.left="0";

popup.style.width="100%";

popup.style.height="100%";

popup.style.background="rgba(0,0,0,.9)";

popup.style.display="flex";

popup.style.justifyContent="center";

popup.style.alignItems="center";

popup.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

popup.appendChild(image);

document.body.appendChild(popup);

popup.onclick=()=>{

popup.remove();

};

});

});

console.log("SMYM POONJAR Website Loaded Successfully");