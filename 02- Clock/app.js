
function setClockHands() {
    var currentTime = new Date();
    updateSecondHand(currentTime);
    updateMinuteHand(currentTime);
    updateHourHand(currentTime);
}


function updateSecondHand(currentTime) {
    var seconds = currentTime.getSeconds(),
        secondsDegree = (seconds / 60) * 360 + 90,
        secondHand = document.querySelector('.second-hand');
    rotateHand(secondHand, secondsDegree);
}

function updateMinuteHand(currentTime) {
    var min = currentTime.getMinutes(),
        minDegree = (min / 60) * 360 + 90;
    minHand = document.querySelector('.min-hand');
    rotateHand(minHand, minDegree);
}

function updateHourHand(currentTime) {
    var hour = currentTime.getHours(),
        hourDegree = (hour / 12) * 360 + 90,
        hourHand = document.querySelector('.hour-hand');
    rotateHand(hourHand, hourDegree);
}

function rotateHand(hand, numberOfDegrees) {
    hand.style.transform = `rotate(${numberOfDegrees}deg)`;
}


setInterval(setClockHands, 1000);