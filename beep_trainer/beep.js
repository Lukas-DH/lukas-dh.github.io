var audio = new Audio('beepsss.wav');
var rand = 5
var count = 0
var timeoutID

function counter() {
    count += 1
    console.log(count)    
}

function main() {
    counter()
    beep()
}

function playBeep() {
    xmin = document.getElementById("myMin").value*1000
    xmax = document.getElementById("myMax").value*1000
    rand = Math.round(Math.random() * (xmax - xmin)) + xmin
    timeoutID = setTimeout(function() {
        audio.play();
        console.log(rand)
        beep()
    } , rand)
}

function clearAlert() {
    clearTimeout(timeoutID);
  }

var beep = function() {
    var change = document.getElementById("toggle")
    if (count % 2 == 1) {
        change.innerHTML = "Stop Beeps"
        playBeep()}
    if (count % 2 == 0) {
        change.innerHTML = "start Beeps"
        window.clearTimeout(timeoutID)
    }
}