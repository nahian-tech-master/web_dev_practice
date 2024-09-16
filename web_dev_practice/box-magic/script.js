const box = document.getElementById("box");
const input = document.getElementById("input");

input.addEventListener("input", function() {
    box.style.borderRadius = input.value;
    box.style.background = input.value;
});

