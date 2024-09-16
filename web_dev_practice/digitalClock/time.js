setInterval(() =>{
    const date = new Date();
    let hour = date.getHours().toString().padStart(2,0);
    const am_pm = hour>=12 ? `pm` : `am`;
    hour = hour % 12 || 12;
    const min = date.getMinutes().toString().padStart(2,0);
    const sec = date.getSeconds().toString().padStart(2,0);
    const time = `${hour}:${min}:${sec} ${am_pm}`
    document.getElementById("clock").innerHTML = time;

    console.log(time);
},1000)
