var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", function () {
        var sounds = [new Audio("../Aufgabe7/Sounds/kick.mp3"), new Audio("../Aufgabe7/Sounds/hihat.mp3"), new Audio("../Aufgabe7/Sounds/snare.mp3"), new Audio("../Aufgabe7/Sounds/A.mp3"), new Audio("../Aufgabe7/Sounds/C.mp3"), new Audio("../Aufgabe7/Sounds/F.mp3"), new Audio("../Aufgabe7/Sounds/G.mp3"), new Audio("../Aufgabe7/Sounds/laugh-1.mp3"), new Audio("../Aufgabe7/Sounds/laugh-2.mp3")];
        var beats = [new Audio("../Aufgabe7/Sounds/kick.mp3"), new Audio("../Aufgabe7/Sounds/hihat.mp3"), new Audio("../Aufgabe7/Sounds/snare.mp3"), new Audio("../Aufgabe7/Sounds/hihat.mp3")];
        var index = 0;
        document.querySelector(".button1").addEventListener("click", function () { playSample(sounds[0]); });
        document.querySelector(".button2").addEventListener("click", function () { playSample(sounds[1]); });
        document.querySelector(".button3").addEventListener("click", function () { playSample(sounds[2]); });
        document.querySelector(".button4").addEventListener("click", function () { playSample(sounds[4]); });
        document.querySelector(".button5").addEventListener("click", function () { playSample(sounds[5]); });
        document.querySelector(".button6").addEventListener("click", function () { playSample(sounds[6]); });
        document.querySelector(".button7").addEventListener("click", function () { playSample(sounds[7]); });
        document.querySelector(".button8").addEventListener("click", function () { playSample(sounds[8]); });
        document.querySelector(".button9").addEventListener("click", function () { playSample(sounds[9]); });
        function playSample(music) {
            if (music === void 0) { music = new Audio; }
            music.play();
        }
        document.querySelector("#buttonPlay").addEventListener("click", function () {
            var interval = setInterval(function () {
                beats[index].play();
                index += 1;
                if (index > 3)
                    index = 0;
                document.querySelector("#buttonPause").addEventListener("click", function () {
                    clearInterval(interval);
                });
            }, 300);
        });
        document.getElementById("buttonPlay").addEventListener("click", function () {
            document.getElementById("buttonPlay").classList.add("hidden");
            document.getElementById("buttonPause").classList.remove("hidden");
        });
        document.getElementById("buttonPause").addEventListener("click", function () {
            document.getElementById("buttonPause").classList.add("hidden");
            document.getElementById("buttonPlay").classList.remove("hidden");
        });
        document.getElementById("buttonTrash").addEventListener("click", function () {
            beats.length = 0;
        });
        var min = 0;
        var max = 9;
        document.getElementById("buttonRandom").addEventListener("click", function () { remixButton(); });
        function remixButton() {
            for (var i = 0; i <= 9; i++) {
                var zufallsZahl = Math.round((Math.random() * (max - min)) + min);
                sounds[i] = sounds[zufallsZahl];
            }
            setInterval(function () {
                sounds[index].play();
                index += 1;
                if (index > 9)
                    index = 0;
            }, 300);
        }
    });
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=script8.js.map