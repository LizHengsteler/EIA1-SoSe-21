var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", function () {
        //Variablen deklarieren
        var inputField = document.getElementById("textInput");
        var toDoList = document.querySelector(".toDoList");
        var arrow = document.querySelector(".fa-arrow-circle-right");
        var zaehler = 1;
        //Array erstellen
        var aufgabenArray = [];
        //Eventlistener für Pfeil
        arrow.addEventListener("click", function () {
            aufgabenArray.push({
                text: inputField.value,
                checked: false
            });
            document.querySelector(".taskCount").innerHTML = zaehler.toString();
            showToDo();
        });
        //Eventlistener Enter
        inputField.addEventListener("keydown", function (event) {
            if (event.key == "Enter") {
                event.preventDefault();
                aufgabenArray.push({
                    text: inputField.value,
                    checked: false
                });
                document.querySelector(".taskCount").innerHTML = zaehler.toString();
                showToDo();
            }
        });
        //Funktion, die ToDos ausgibt
        function showToDo() {
            toDoList.innerHTML = "";
            zaehler = zaehler + 1;
            var _loop_1 = function (index) {
                var toDoInput = aufgabenArray[index];
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
                var checkbox = document.createAttribute("class");
                checkbox.value = "far fa-check-circle";
                checkIcon.setAttributeNode(checkbox);
                listElement.appendChild(checkIcon);
                //Löschen per Klick
                trashIcon.addEventListener("click", function () {
                    zaehler = zaehler - 1;
                    document.querySelector(".taskCount").innerHTML = zaehler.toString();
                    div.remove();
                    aufgabenArray = aufgabenArray.filter(function (value) {
                        return value.text != aufgabenArray[index].text;
                    });
                });
            };
            for (var index = 0; index < aufgabenArray.length; index++) {
                _loop_1(index);
            }
        }
    });
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=script9.js.map