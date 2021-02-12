var audio = new Audio('beepsss.wav');
var rand = 5
var count = 0

// var beep = function(){
    //     // setInterval("console.log('wtf')", 100)
    //     setInterval("audio.play()", 500)
    //     // 
    //     // let sound = document.getElementById("sound1");
    //     // console.log("wtf")
// }

// var beep = setInterval(function (){
//         // audio.play();
//         rand = Math.round(Math.random()*(10000-5000))+5000; // generate new time (between 3sec and 500"s)
//         console.log(rand)
//     }, rand); 


// function loop() {}

// var beep = function(){
//     var rand = Math.round(Math.random() * (6000 - 1000)) + 1000;
//     setTimeout(function() {
//         audio.play();
//         beep();
//         console.log(rand)
//     }, rand);
// };

function counter() {
    count += 1
    console.log(count)    
}

function main() {
    counter()
    beep()
}

var beep = function() {
    var change = document.getElementById("toggle")
    if (count % 2 == 1) {
        change.innerHTML = "Stop Beeps"
        var rand = Math.round(Math.random() * (6000 - 1000)) + 1000;
        setTimeout(function() {
        audio.play();
        beep();
        console.log(rand)
    }, rand);
}
        
    if (count % 2 == 0) {
        change.innerHTML = "Start Beeps"
    }

}