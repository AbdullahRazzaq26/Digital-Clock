var hours = document.getElementById("hours");
var mins = document.getElementById("mins");
var secs = document.getElementById("secs");
var fullDate = document.getElementById("fullDate");

var hoursCounter = 0;
var minsCounter = 0;
var secsCounter = 0;

var secsInterval = setInterval(() => {

    secsCounter += 1;

    if (secsCounter == 60) {
        secsCounter = 0;
        minsCounter += 1;

        if (minsCounter == 60) {
            minsCounter = 0;
            hoursCounter += 1;

            if (hoursCounter == 24) {
                hoursCounter = 0;
            }
        }
    }

    if (secsCounter < 10) {
        secs.innerText = "0" + secsCounter;
    } else {
        secs.innerText = secsCounter;
    }

    if (minsCounter < 10) {
        mins.innerText = "0" + minsCounter + ":";
    } else {
        mins.innerText = minsCounter + ":";
    }

    if (hoursCounter < 10) {
        hours.innerText = "0" + hoursCounter + ":";
    } else {
        hours.innerText = hoursCounter + ":";
    }

}, 1000);


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


fullDate.innerText = year + " " + day + " " + months[month - 1] + " " + date;