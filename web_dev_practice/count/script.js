const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLable = document.getElementById("countLable");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLable.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLable.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLable.textContent = count;
}