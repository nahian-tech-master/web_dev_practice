document.addEventListener("DOMContentLoaded", load);

let numImg = 0;
const img = document.querySelectorAll("img");
let autoChange;

function load() {
    updateDisplay();
    autoChange = setInterval(next, 5000); // Set the interval to change image every 2 seconds
}

function next() {
    numImg++;
    if (numImg >= img.length) {
        numImg = 0; // Loop back to the first image
    }
    updateDisplay();
}

function prev() {
    numImg--;
    if (numImg < 0) {
        numImg = img.length - 1; // Loop back to the last image
    }
    updateDisplay();
}

function updateDisplay() {
    img.forEach((image, index) => {
        image.style.display = (index === numImg) ? "block" : "none";
    });
}

// Optional: Clear interval on manual navigation
function stopAutoChange() {
    clearInterval(autoChange);
}

// Add event listeners for manual controls if you have buttons for next and prev
document.querySelector("#nextButton").addEventListener("click", function() {
    stopAutoChange();
    next();
});

document.querySelector("#prevButton").addEventListener("click", function() {
    stopAutoChange();
    prev();
});
