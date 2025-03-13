function updateClock() {
    var fullDate = document.getElementById("fullDate");
    var clock = document.getElementById("clock");
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[today.getDay()];
    var months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    var date = today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var ampm = hours >= 12 ? 'PM' : 'AM';
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm
    fullDate.innerText = year + " " + day + " " + months[month - 1] + " " + date;

}

setInterval(updateClock, 1000);

