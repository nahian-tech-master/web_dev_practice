let display = document.getElementById("show");
let startTime = 0;
let elapsTime = 0;
let time = "";
let run = false;

function started(){
    if(!run){
        startTime = Date.now() - elapsTime;
        time = setInterval(update, 10);
        run = true;
    }
}
function ended(){
    if(run){
        clearInterval(time);
        elapsTime = Date.now() - startTime;
        run = false;
    }
}
function reseted(){
    clearInterval(time);
    startTime = 0;
    elapsTime = 0;
    run = false;
    display.textContent = `00:00:00:00`;
}
function update(){
    const finalTime = Date.now();
    elapsTime = finalTime - startTime;
    console.log(elapsTime)
    let hour = Math.floor(elapsTime/(1000 * 60 * 60)).toString().padStart(2,0);
    let min =  Math.floor(elapsTime/(1000 *60) % 60).toString().padStart(2,0);
    let sec =  Math.floor(elapsTime/1000 % 60).toString().padStart(2,0);
    let mic =  Math.floor(elapsTime % 1000/10).toString().padStart(2,0);
    display.textContent = `${hour}:${min}:${sec}:${mic}`


}