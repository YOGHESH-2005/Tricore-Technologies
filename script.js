/* LOADER */

window.addEventListener("load",function(){

const loader=document.getElementById("loader");

setTimeout(function(){
loader.style.display="none";
},1500);

});

/* AOS */

AOS.init({
duration:1200
});

/* SMOOTH SCROLL */

document.querySelectorAll('nav a').forEach(anchor=>{

anchor.addEventListener('click',function(e){

const target=document.querySelector(this.getAttribute('href'));

if(target){

e.preventDefault();

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

/* TYPING EFFECT */

const text="Powering the Future of AI";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();

/* PARTICLES */

particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3},
move:{speed:2}
}

});
