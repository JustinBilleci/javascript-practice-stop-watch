//"let" allows us to change the value later on as opposed to "const"
let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")


function padStart(value) {
    return String(value).padStart(2, "0")
    // converting to a string allows us to use padStart
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}` ;
}

function timer() {
    secondsElapsed++; // ++ means add one
    setTime()
}
function startClock() {
    if (interval) stopClock()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock() 
    secondsElapsed = 0;
    setTime() // sets time back to 00:00
}