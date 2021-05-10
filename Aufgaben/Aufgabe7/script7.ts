window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("click", function () { playSample ("sounds/kick.mp3"); });
    document.querySelector(".button2").addEventListener("click", function () { playSample("sounds/hihat.mp3"); });
    document.querySelector(".button3").addEventListener("click", function () { playSample("sounds/snare.mp3"); });
    document.querySelector(".button4").addEventListener("click", function () { playSample("sounds/A.mp3"); });
    document.querySelector(".button5").addEventListener("click", function () { playSample("sounds/C.mp3"); });
    document.querySelector(".button6").addEventListener("click", function () { playSample("sounds/F.mp3"); });
    document.querySelector(".button7").addEventListener("click", function () { playSample("sounds/G.mp3"); });
    document.querySelector(".button8").addEventListener("click", function () { playSample("sounds/laugh-1.mp3"); });
    document.querySelector(".button9").addEventListener("click", function () { playSample("sounds/laugh-2.mp3"); });
    function playSample(music) {
        var sound = new Audio(music);
        sound.play();
    }
    ;
    var sounds = [new Audio("sounds/kick.mp3"), new Audio("sounds/hihat.mp3"), new Audio("sounds/snare.mp3"), new Audio("sounds/A.mp3"), new Audio("sounds/C.mp3"), new Audio("sounds/F.mp3"), new Audio("sounds/G.mp3"), new Audio("sounds/laugh-1.mp3"), new Audio("sounds/laugh-2.mp3")];
    function intervall() {
        
        setTimeout(function () {
            sounds[0].play();
        }, 500);
        setTimeout(function () {
            sounds[1].play();
        }, 1000);
        setTimeout(function () {
            sounds[2].play();
        }, 1500);
        setTimeout(function () {
            sounds[1].play();
        }, 2000);
        setTimeout(function () {
            sounds[0].play();
        }, 2500);
        setTimeout(function () {
            sounds[1].play();
        }, 3000);
        setTimeout(function () {
            sounds[2].play();
        }, 3500);
        setTimeout(function () {
            sounds[1].play();
        }, 4000);
    }
    ;
    document.querySelector(".play").addEventListener("click", function () {
        intervall();
    });
    
    function keyBoard(event) {
        var keys = event.keyBoard;
        if (keys == 49) {  
          beats ("Sounds(kick.mp3") ;
        };  

    };



});