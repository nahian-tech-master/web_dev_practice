const display = document.getElementById("display");

function addClick(input){
    display.value += input;
}
function calculate(){
    display.value = eval(display.value);
    
}
function clearBtn(){
    display.value = "";
}
function delateBtn(){
    display.value= display.value.slice(0,-1);
}