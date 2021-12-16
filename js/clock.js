function showTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let clock = `${hours}:${minutes}:${seconds}`
    let day = time.getDay();
    let weekdays = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    document.getElementById("myClock").innerHTML = clock + " " + weekdays[day-1]
    console.log(clock);
}

let dummy = setInterval(showTime, 1000);