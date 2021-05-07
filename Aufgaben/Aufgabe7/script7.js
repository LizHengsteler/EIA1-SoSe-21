window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("click", function () { beats("Sounds/kick.mp3"); });
    document.querySelector(".button2").addEventListener("click", function () { beats("Sounds/hihat.mp3"); });
    document.querySelector(".button3").addEventListener("click", function () { beats("Sounds/snare.mp3"); });
    document.querySelector(".button4").addEventListener("click", function () { beats("Sounds/A.mp3"); });
    document.querySelector(".button5").addEventListener("click", function () { beats("Sounds/C.mp3"); });
    document.querySelector(".button6").addEventListener("click", function () { beats("Sounds/F.mp3"); });
    document.querySelector(".button7").addEventListener("click", function () { beats("Sounds/G.mp3"); });
    document.querySelector(".button8").addEventListener("click", function () { beats("Sounds/laugh-1.mp3"); });
    document.querySelector(".button9").addEventListener("click", function () { beats("Sounds/laugh-2.mp3"); });
    function beats(music) {
        var sound = new Audio(music);
        sound.play();
    }
    ;
    var sounds = [new Audio("sounds/kick.mp3"), new Audio("sounds/hihat.mp3"), new Audio("sounds/snare.mp3"),];
    function intervall() {
        setInterval(function () {
            sounds[1].play();
        }, 3000);
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
});
//# sourceMappingURL=script7.js.map