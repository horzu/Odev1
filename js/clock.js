function showTime(){
    let time = new Date();
    let hours = time.getHours();
    hours < 10 ? (hours = `0${hours}`) : hours;
    let minutes = time.getMinutes();
    minutes < 10 ? (minutes = `0${minutes}`) : minutes;
    let seconds = time.getSeconds();
    seconds < 10 ? (seconds = `0${seconds}`) : seconds;
    let clock = `${hours}:${minutes}:${seconds}`;
    let day = time.getDay();
    let weekdays = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

    document.getElementById("myClock").innerHTML = clock + " " + weekdays[day - 1];
}

let dummy = setInterval(showTime, 1000);