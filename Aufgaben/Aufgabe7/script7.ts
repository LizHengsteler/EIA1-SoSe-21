window.addEventListener("load", function () {
    var sounds = [];
                sounds[0] = new Audio("sounds/kick.mp3");
                sounds[1] = new Audio("sounds/hihat.mp3");
                sounds[2] = new Audio("sounds/snare.mp3");
                sounds[3] = new Audio("sounds/A.mp3");
                sounds[4] = new Audio("sounds/C.mp3");
                sounds[5] = new Audio("sounds/F.mp3");
                sounds[6] = new Audio("sounds/G.mp3");
                sounds[7] = new Audio("sounds/laugh-1.mp3");
                sounds[8] = new Audio("sounds/laugh-2.mp3");

                document.querySelector(".button1").addEventListener("click", function () { playSample(sounds [0].play()); });
                document.querySelector(".button2").addEventListener("click", function () { playSample(sounds [1].play()); });
                document.querySelector(".button3").addEventListener("click", function () { playSample(sounds [2].play()); });
                document.querySelector(".button4").addEventListener("click", function () { playSample(sounds [3].play()); });
                document.querySelector(".button5").addEventListener("click", function () { playSample(sounds [4].play()); });
                document.querySelector(".button6").addEventListener("click", function () { playSample(sounds [5].play()); });
                document.querySelector(".button7").addEventListener("click", function () { playSample(sounds [6].play()); });
                document.querySelector(".button8").addEventListener("click", function () { playSample(sounds [7].play()); });
                document.querySelector(".button9").addEventListener("click", function () { playSample(sounds [8].play()); });
                function playSample(music) {
                    var sample = new Audio(music);
                    sample.play();
                }
                ;
                
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
                
               
            
                
            
            
            
            });