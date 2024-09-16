const min = 10;
const max = 50;
const random = Math.floor(Math.random()*(max - min + 1 ) + min)
console.log(random)

let attempt = 0;
let guess;
let run = true;

while(run){
    guess = window.prompt("Enter any number between 10 and 50")
    guess = Number(guess);
    if(guess < 10 || guess> 51){
        window.alert("Please enter a valid number")
    }
    else if(isNaN(guess)){
        window.alert("Please enter a valid number")
    }else{
        attempt++;
        if(guess<random){
            window.alert("Your guess is to low")
        }
        else if (guess>random){
            window.alert("Your guess is to high")
        }
        else{
            window.alert(`Real guess is ${guess}, Total attempt is ${attempt}`); 
        }
    }
}