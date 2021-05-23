var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", function () {
        //Variablen deklarieren
        var inputField = document.getElementById("textInput");
        var toDoList = document.querySelector(".toDoList");
        var arrow = document.querySelector(".fa-arrow-circle-right");
        var toDoContainer = document.querySelector(".toDoContainer");
        //Array erstellen
        var aufgabenArray = [];
        //Eventlistener für Pfeil
        arrow.addEventListener("click", function () {
            aufgabenArray.push({
                text: inputField.value,
                checked: false
            });
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
                showToDo();
            }
        });
        //Funktion, die ToDos ausgibt
        function showToDo() {
            toDoList.innerHTML = "";
            for (var index = 0; index < aufgabenArray.length; index++) {
                var toDoInput = aufgabenArray[index];
                //Liste erstellen
                var listElement = document.createElement("li");
                listElement.classList.add("toDo");
                toDoList.appendChild(listElement);
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
            }
        }
    });
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=script9.js.map