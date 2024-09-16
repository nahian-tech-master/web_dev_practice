const number = document.getElementById("numbers");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCalsius = document.getElementById("toCalsius");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let temp;

submit.onclick = function(){
    if(toFahrenheit.checked){
        temp = Number(number.value);
        temp =( temp * 9 / 5 )+ 32;
        result.textContent = temp.toFixed(1) + "°F";
    }else if(toCalsius.checked){
        temp = Number(number.value);
        temp = temp-32 * 5/9;
        result.textContent = temp.toFixed(1) + "°C";
    }else{
        result.textContent = `Select please any option`.toLocaleLowerCase();
    }
}