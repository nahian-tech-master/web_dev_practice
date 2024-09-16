const number = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowwerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "!@#$%^&*";
const passBox = document.getElementById("passbox");
const message = document.getElementById("message");
const hidePic = document.getElementById("hidepic");
const list = document.getElementById("list");
function genPass(){
    let p = "";
    for(let i = 0; i<3; i++){
        p += upperCase[Math.floor(Math.random()*upperCase.length)];
        p += lowwerCase[Math.floor(Math.random()*lowwerCase.length)];
        p += num[Math.floor(Math.random()*num.length)];
        p += symbol[Math.floor(Math.random()*symbol.length)]; 
    }
    message.textContent = ``;
    passBox.value = p;
        const cheracter = document.getElementById('cheracter');
        const lowercase = document.getElementById("lowercase");
        const uppercase = document.getElementById("uppercase");
        const number = document.getElementById("number");
        const specialCheracter = document.getElementById("specialCheracter");
    
            lowercase.classList.add("valid");
            lowercase.classList.remove("invalid");
            
        
            uppercase.classList.add("valid");
            uppercase.classList.remove("invalid");
        
        
            number.classList.add("valid");
            number.classList.remove("invalid");
        
            specialCheracter.classList.add("valid");
            specialCheracter.classList.remove("invalid");
        
            cheracter.classList.add("valid");
            cheracter.classList.remove("invalid");
        
        
    

    /*let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowwerCase[Math.floor(Math.random()*lowwerCase.length)];
    password += num[Math.floor(Math.random()*num.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    for (let i = password.length+1; i < 12; i++) {
        let charSet = upperCase + lowwerCase + num + symbol;
        password += charSet[Math.floor(Math.random() * charSet.length)];
        console.log(password);
    }
    passBox.value = password;
    message.textContent = ``;*/
}
function ok(){
    if(passBox.value.length<8){
        console.log(passBox.length);
        message.textContent = `Your password is less than 8 characters`;
    }else{
        message.textContent = `Your password is strong`
    }
}
function copypassword(){
    passBox.select();
    document.execCommand(`allow pasting`);
}
function hide(){
    passBox.type = passBox.type== "password" ? "text" : "password"; 
    hidePic.src = passBox.type === "password" ? "hide.webp" : "show.png";

    
    /*if(passBox.type == "password"){
        passBox.type = "text";
        hidePic.src = "show.png";
    }else{
        passBox.type = "password";
        hidePic.src = "hide.webp"
    }*/
}
function passInput(){
    const cheracter = document.getElementById('cheracter');
    const lowercase = document.getElementById("lowercase");
    const uppercase = document.getElementById("uppercase");
    const number = document.getElementById("number");
    const specialCheracter = document.getElementById("specialCheracter");

    
    if(passBox.value.length<8 || passBox.value.length>8){
        console.log(passBox.length);
        message.textContent = `Your password is week`;
        let lowerCaseLetter = /[a-z]/g;
        if(passBox.value.match(lowerCaseLetter)){
            lowercase.classList.add("valid");
            lowercase.classList.remove("invalid");
            
        }else{
            lowercase.classList.remove("valid");
            lowercase.classList.add("invalid");

        }
    
        let upperCaseLetter = /[A-Z]/g;
        if(passBox.value.match(upperCaseLetter)){
            uppercase.classList.add("valid");
            uppercase.classList.remove("invalid");
        }else{
            uppercase.classList.remove("valid");
            uppercase.classList.add("invalid");

        }
        let Number = /[0-9]/g;
        if(passBox.value.match(Number)){
            number.classList.add("valid");
            number.classList.remove("invalid");
        }
        else{
            number.classList.remove("valid");
            number.classList.add("invalid");

        }
        let special = /[!@#$%^&*(),.?":{}|<>]/g;
        if(passBox.value.match(special)){
            specialCheracter.classList.add("valid");
            specialCheracter.classList.remove("invalid");
        }
        else{
            specialCheracter.classList.remove("valid");
            specialCheracter.classList.add("invalid");

        }
        
        if(passBox.value.length>=8){
            cheracter.classList.add("valid");
            cheracter.classList.remove("invalid");
        }
        else{
            cheracter.classList.remove("valid");
            cheracter.classList.add("invalid");

        }
    }
    else{
        message.textContent = `Your password is strong`
         
        let upperCaseLetter = /[A-Z]/g;
        if(passBox.value.match(upperCaseLetter)){
            uppercase.classList.add("valid");
            uppercase.classList.remove("invalid");
        }else{
            uppercase.classList.remove("valid");
            uppercase.classList.add("invalid");

        }
        let Number = /[0-9]/g;
        if(passBox.value.match(Number)){
            number.classList.add("valid");
            number.classList.remove("invalid");
        }
        else{
            number.classList.remove("valid");
            number.classList.add("invalid");

        }
        let special = /[!@#$%^&*(),.?":{}|<>]/g;
        if(passBox.value.match(special)){
            specialCheracter.classList.add("valid");
            specialCheracter.classList.remove("invalid");
        }
        else{
            specialCheracter.classList.remove("valid");
            specialCheracter.classList.add("invalid");

        }
        
        if(passBox.value.length>=8){
            cheracter.classList.add("valid");
            cheracter.classList.remove("invalid");
        }
        else{
            cheracter.classList.remove("valid");
            cheracter.classList.add("invalid");

        }
    }
    
}