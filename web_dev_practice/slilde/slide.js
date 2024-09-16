/*const contain = document.querySelectorAll(".contain");
const img = document.querySelectorAll("img");
let numImg = 0;

document.addEventListener("DOMContentLoaded",load);

function load(){
    img[numImg].style.display = "block";
}
function next() {
    img[numImg].style.display = "none";
    numImg++; 
    if (numImg > img.length-1) { 
        numImg = 0;
    }
    img[numImg].style.display = "block"; 
}
function prev(){
    img[numImg].style.display = "none";
    numImg--; 
    if (numImg < 0) { 
        numImg = img.length-1;
    }
    img[numImg].style.display = "block"; 

}
function inter(){
    setInterval(next, 2000)
}*/

let right = document.querySelector('.right');
let img = document.querySelectorAll('img');
let numImg = 0;
let auto;

document.addEventListener('DOMContentLoaded',load);
function load(){
    updateDisplay();
    auto = setInterval(next,5000);
}
function next(){
    numImg++;
    if(numImg>=img.length) numImg = 0;
    updateDisplay();
}
function prev(){
    numImg--;
    if(numImg<0) numImg = img.length -1;
    updateDisplay();
}
function updateDisplay(){
    img.forEach((image,index) =>{
        image.style.display = (index == numImg) ? 'block' : 'none';

    })
    
}



