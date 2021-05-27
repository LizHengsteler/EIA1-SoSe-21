var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", function () {
        //Variablen deklarieren
        var inputField = document.getElementById("textInput");
        var toDoList = document.querySelector(".toDoList");
        var arrow = document.querySelector(".fa-arrow-circle-right");
        var zaehler = 0;
        var counter = document.querySelector(".taskCount");
        //Array erstellen
        var aufgabenArray = [];
        //Eventlistener für Pfeil
        arrow.addEventListener("click", function () {
            aufgabenArray.push({
                text: inputField.value,
                checked: true
            });
            showToDo();
            emtpyInput();
            zaehler = zaehler + 1;
            counter.innerHTML = zaehler.toString();
        });
        //Eventlistener Enter
        inputField.addEventListener("keydown", function (event) {
            if (event.key == "Enter") {
                event.preventDefault();
                aufgabenArray.push({
                    text: inputField.value,
                    checked: true
                });
                document.querySelector(".taskCount").innerHTML = zaehler.toString();
                showToDo();
                emtpyInput();
                zaehler = zaehler + 1;
                counter.innerHTML = zaehler.toString();
            }
        });
        //Funktion, die ToDos ausgibt
        function showToDo() {
            toDoList.innerHTML = "";
            var _loop_1 = function (index) {
                var arrayPosition = aufgabenArray[index];
                // Div erstellen
                var div = document.createElement("div");
                div.classList.add("toDoContainer");
                toDoList.appendChild(div);
                //Liste erstellen
                var listElement = document.createElement("li");
                listElement.classList.add("toDo");
                div.appendChild(listElement);
                listElement.textContent = aufgabenArray[index].text;
                //Icons
                var trashIcon = document.createElement("i");
                var trash = document.createAttribute("class");
                trash.value = "far fa-trash-alt";
                trashIcon.setAttributeNode(trash);
                listElement.appendChild(trashIcon);
                var circleIcon = document.createElement("i");
                var circle = document.createAttribute("class");
                circle.value = "far fa-circle";
                circleIcon.setAttributeNode(circle);
                listElement.appendChild(circleIcon);
                var checkIcon = document.createElement("i");
                var check = document.createAttribute("class");
                check.value = "far fa-check-circle hidden";
                checkIcon.setAttributeNode(check);
                listElement.appendChild(checkIcon);
                document.querySelector(".fa-circle").addEventListener("click", function () {
                    document.querySelector(".fa-circle").classList.add("hidden");
                    document.querySelector(".fa-check-circle").classList.remove("hidden");
                });
                //Löschen per Klick
                trashIcon.addEventListener("click", function () {
                    zaehler = zaehler - 1;
                    counter.innerHTML = zaehler.toString();
                    aufgabenArray = aufgabenArray.filter(function (elem) {
                        return elem != arrayPosition;
                    });
                    div.removeChild(listElement);
                    div.remove();
                });
            };
            for (var index = 0; index < aufgabenArray.length; index++) {
                _loop_1(index);
            }
        }
        //Funktion input leeren 
        function emtpyInput() {
            inputField.value = "";
        }
    });
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=script9.js.map