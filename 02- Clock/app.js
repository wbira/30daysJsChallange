
function setClockHands() {
    var currentTime = new Date(), seconds, mins;
    
    seconds = updateSecondHand(currentTime);
    mins = updateMinuteHand(currentTime, seconds);
    updateHourHand(currentTime, mins);
}


function updateSecondHand(currentTime) {
    var seconds = currentTime.getSeconds(),
        secondsDegree = (seconds / 60) * 360 + 90,
        secondHand = document.querySelector('.second-hand');
    rotateHand(secondHand, secondsDegree);
    return seconds;
}

function updateMinuteHand(currentTime, seconds) {
    var min = currentTime.getMinutes(),
        minDegree = (min / 60) * 360 + ((seconds / 60) * 6) + 90;
    minHand = document.querySelector('.min-hand');
    rotateHand(minHand, minDegree);
    return min;
}

function updateHourHand(currentTime, mins) {
    var hour = currentTime.getHours(),
        hourDegree = (hour / 12) * 360 + ((mins / 60) * 30) + 90,
        hourHand = document.querySelector('.hour-hand');
    rotateHand(hourHand, hourDegree);
}

function rotateHand(hand, numberOfDegrees) {
    hand.style.transform = `rotate(${numberOfDegrees}deg)`;
}


setInterval(setClockHands, 1000);