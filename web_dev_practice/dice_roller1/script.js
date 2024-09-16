function roller(){
    const input = document.getElementById("input");
    const btn = document.getElementById("btn");
    const diceRoller = document.getElementById("diceRoller");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const image = [];
    for(let i = 0; i<input.value; i++){
        let num = Math.floor(Math.random() * 6) +1 ;
        values.push(num);
        diceRoller.textContent = values.join(` `);
        image.push(`<img src=${num}.png>`)
        diceImage.innerHTML = image;
        
    }

}